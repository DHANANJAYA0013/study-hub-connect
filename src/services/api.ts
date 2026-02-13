import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, getDocs, collection, deleteDoc, query, where } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';

export type AppRole = "admin" | "teacher" | "student";

export interface User {
  id: string;
  email?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
}

export interface Session {
  access_token: string | null;
  user?: User | null;
}

// Convert Firebase User to our User interface
function firebaseUserToUser(firebaseUser: FirebaseUser): User {
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email,
    full_name: firebaseUser.displayName,
    avatar_url: firebaseUser.photoURL,
  };
}

// Get current Firebase user session
export async function getSession(): Promise<Session | null> {
  const user = auth.currentUser;
  if (!user) return null;
  
  const token = await user.getIdToken();
  return {
    access_token: token,
    user: firebaseUserToUser(user),
  };
}

// Sign up new user - stores request for admin approval
export async function signUp(payload: { 
  email: string; 
  password: string; 
  full_name?: string; 
  role: AppRole 
}): Promise<{ session?: Session; error?: string }> {
  try {
    // Check if user already exists in 'users' collection with the same email and role
    const usersQuery = query(
      collection(db, 'users'),
      where('email', '==', payload.email),
      where('role', '==', payload.role)
    );
    const usersSnapshot = await getDocs(usersQuery);
    
    if (!usersSnapshot.empty) {
      return { error: `A ${payload.role} account with this email already exists.` };
    }

    // Check if signup request already exists with the same email and role
    const signupRequestsQuery = query(
      collection(db, 'signup_requests'),
      where('email', '==', payload.email),
      where('role', '==', payload.role)
    );
    const requestsSnapshot = await getDocs(signupRequestsQuery);
    
    if (!requestsSnapshot.empty) {
      return { error: `A signup request for ${payload.role} with this email is already pending approval.` };
    }

    // Store signup request in Firestore (not creating Firebase Auth user yet)
    const requestId = `${Date.now()}_${payload.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    await setDoc(doc(db, 'signup_requests', requestId), {
      email: payload.email,
      password: payload.password, // Store temporarily for admin approval
      full_name: payload.full_name || '',
      role: payload.role,
      status: 'pending',
      created_at: new Date().toISOString(),
    });

    return { session: undefined }; // No session until admin approves
  } catch (err: any) {
    return { error: err?.message ?? String(err) };
  }
}

// Sign in existing user - verify user is in users collection
export async function signIn(payload: { 
  email: string; 
  password: string 
}): Promise<{ session?: Session; error?: string }> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );

    // Verify user exists in users collection (admin-approved users only)
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    if (!userDoc.exists()) {
      // User authenticated but not approved by admin
      await firebaseSignOut(auth);
      return { error: "Your account is pending admin approval. Please wait for approval before signing in." };
    }

    const token = await userCredential.user.getIdToken();
    const session: Session = {
      access_token: token,
      user: firebaseUserToUser(userCredential.user),
    };

    return { session };
  } catch (err: any) {
    // Provide more user-friendly error messages
    let errorMessage = err?.message ?? String(err);
    
    if (err.code === 'auth/user-not-found') {
      errorMessage = "No account found with this email address. Please sign up or contact your administrator.";
    } else if (err.code === 'auth/wrong-password') {
      errorMessage = "Incorrect password. Please try again.";
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = "Invalid email address format.";
    } else if (err.code === 'auth/user-disabled') {
      errorMessage = "This account has been disabled.";
    } else if (err.code === 'auth/too-many-requests') {
      errorMessage = "Too many failed attempts. Please try again later.";
    } else if (err.code === 'auth/network-request-failed') {
      errorMessage = "Network error. Please check your internet connection.";
    } else if (err.code === 'auth/invalid-credential') {
      // Check if user exists in Firestore but not in Firebase Auth
      try {
        const usersQuery = query(collection(db, 'users'), where('email', '==', payload.email));
        const userSnapshot = await getDocs(usersQuery);
        if (!userSnapshot.empty) {
          errorMessage = "Your account needs to be recreated. Please contact your administrator or sign up again.";
        } else {
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
        }
      } catch {
        errorMessage = "Invalid email or password. Please check your credentials and try again.";
      }
    }
    
    return { error: errorMessage };
  }
}

// Sign out current user
export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}

// Get user role from Firestore
export async function getUserRole(userId: string): Promise<AppRole | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) return null;
    
    const data = userDoc.data();
    return (data?.role as AppRole) ?? null;
  } catch (err) {
    console.warn("getUserRole failed", err);
    return null;
  }
}

// Listen to auth state changes
export function onAuthStateChange(callback: (user: FirebaseUser | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Get all pending signup requests
export async function getSignupRequests() {
  try {
    const requestsSnapshot = await getDocs(collection(db, 'signup_requests'));
    return requestsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (err) {
    console.error("Error fetching signup requests:", err);
    return [];
  }
}

// Approve signup request - create Firebase Auth account and move to users collection
export async function approveSignupRequest(requestId: string, requestData: any, adminEmail: string, adminPassword: string) {
  try {
    // Store user in users collection FIRST before creating auth account
    // This ensures the document exists when auth state listener checks it
    const tempUserId = `temp_${Date.now()}_${requestData.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    
    // Create user in Firebase Auth (this will auto-sign them in)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      requestData.email,
      requestData.password
    );

    const userId = userCredential.user.uid;

    // Set the display name on the Firebase Auth user
    await updateProfile(userCredential.user, {
      displayName: requestData.full_name || ''
    });

    // Store user in users collection with actual UID
    await setDoc(doc(db, 'users', userId), {
      email: requestData.email,
      full_name: requestData.full_name || '',
      role: requestData.role,
      created_at: new Date().toISOString(),
      approved_at: new Date().toISOString(),
    });

    // Wait a moment to ensure Firestore write completes
    await new Promise(resolve => setTimeout(resolve, 500));

    // Delete the signup request
    await deleteDoc(doc(db, 'signup_requests', requestId));

    // Sign out the newly created user immediately
    await firebaseSignOut(auth);

    // Wait for sign out to complete
    await new Promise(resolve => setTimeout(resolve, 300));

    // Re-authenticate the admin
    await signInWithEmailAndPassword(auth, adminEmail, adminPassword);

    return { success: true, message: "User approved successfully" };
  } catch (err: any) {
    console.error("Error approving signup:", err);
    return { success: false, error: err?.message ?? String(err) };
  }
}

// Reject signup request - delete from signup_requests
export async function rejectSignupRequest(requestId: string) {
  try {
    await deleteDoc(doc(db, 'signup_requests', requestId));
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message ?? String(err) };
  }
}

// Delete user - remove from Firestore (Note: Cannot delete from Firebase Auth with client SDK)
export async function deleteUser(userId: string, userEmail: string) {
  try {
    // Delete user document from Firestore
    await deleteDoc(doc(db, 'users', userId));
    
    // Note: We cannot delete the user from Firebase Authentication using the client SDK
    // This would require Firebase Admin SDK or a Cloud Function
    // For now, we only remove from Firestore which will prevent login
    
    return { success: true };
  } catch (err: any) {
    console.error("Error deleting user:", err);
    return { success: false, error: err?.message ?? String(err) };
  }
}

// Save video progress for a user
export async function saveVideoProgress(userId: string, videoId: string, currentTime: number, duration: number) {
  try {
    const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;
    const completed = percentage >= 90;

    await setDoc(doc(db, 'video_progress', `${userId}_${videoId}`), {
      userId,
      videoId,
      currentTime,
      duration,
      percentage,
      completed,
      updated_at: new Date().toISOString(),
    }, { merge: true });

    return { success: true };
  } catch (err: any) {
    console.error("Error saving video progress:", err);
    return { success: false, error: err?.message ?? String(err) };
  }
}

// Get video progress for a user
export async function getVideoProgress(userId: string, videoId: string) {
  try {
    const progressDoc = await getDoc(doc(db, 'video_progress', `${userId}_${videoId}`));
    if (!progressDoc.exists()) {
      return { currentTime: 0, duration: 0, percentage: 0, completed: false };
    }
    return progressDoc.data();
  } catch (err: any) {
    console.error("Error getting video progress:", err);
    return { currentTime: 0, duration: 0, percentage: 0, completed: false };
  }
}

// Get all video progress for a user
export async function getAllVideoProgress(userId: string) {
  try {
    const progressQuery = query(
      collection(db, 'video_progress'),
      where('userId', '==', userId)
    );
    const progressSnapshot = await getDocs(progressQuery);
    
    const progressMap: Record<string, any> = {};
    progressSnapshot.docs.forEach(doc => {
      const data = doc.data();
      progressMap[data.videoId] = {
        currentTime: data.currentTime,
        duration: data.duration,
        percentage: data.percentage,
        completed: data.completed,
      };
    });
    
    return progressMap;
  } catch (err: any) {
    console.error("Error getting all video progress:", err);
    return {};
  }
}

export default {
  getSession,
  signUp,
  signIn,
  signOut,
  getUserRole,
  onAuthStateChange,
  getSignupRequests,
  approveSignupRequest,
  rejectSignupRequest,
  deleteUser,
  saveVideoProgress,
  getVideoProgress,
  getAllVideoProgress,
};
