import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import * as api from "@/services/api";
import type { AppRole, User, Session } from "@/services/api";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  role: AppRole | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, role: AppRole) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = api.onAuthStateChange(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Verify user exists in users collection (admin-approved only)
          const userRole = await api.getUserRole(firebaseUser.uid);
          
          if (!userRole) {
            // User authenticated but not in users collection (not approved by admin)
            await api.signOut();
            setUser(null);
            setSession(null);
            setRole(null);
            setLoading(false);
            
            toast({
              variant: "destructive",
              title: "Account Not Approved",
              description: "Your account is pending admin approval. Please wait for approval before signing in.",
            });
            return;
          }
          
          const token = await firebaseUser.getIdToken();
          const userData: User = {
            id: firebaseUser.uid,
            email: firebaseUser.email,
            full_name: firebaseUser.displayName,
            avatar_url: firebaseUser.photoURL,
          };
          
          setUser(userData);
          setSession({ access_token: token, user: userData });
          setRole(userRole);
        } catch (error) {
          console.error("Auth state change error:", error);
          await api.signOut();
          setUser(null);
          setSession(null);
          setRole(null);
        }
      } else {
        setUser(null);
        setSession(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [toast]);

  const signUp = async (email: string, password: string, fullName: string, selectedRole: AppRole) => {
    try {
      const res = await api.signUp({ email, password, full_name: fullName, role: selectedRole });
      if (res.error) {
        toast({ 
          title: "Sign up failed", 
          description: res.error, 
          variant: "destructive" 
        });
        return { error: new Error(res.error) };
      }
      
      toast({ 
        title: "Success", 
        description: "Account created successfully!" 
      });
      
      return { error: null };
    } catch (err: any) {
      toast({ 
        title: "Sign up failed", 
        description: err?.message ?? String(err), 
        variant: "destructive" 
      });
      return { error: err };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const res = await api.signIn({ email, password });
      if (res.error) {
        toast({ 
          title: "Sign in failed", 
          description: res.error, 
          variant: "destructive" 
        });
        return { error: new Error(res.error) };
      }
      
      return { error: null };
    } catch (err: any) {
      toast({ 
        title: "Sign in failed", 
        description: err?.message ?? String(err), 
        variant: "destructive" 
      });
      return { error: err };
    }
  };

  const signOut = async () => {
    await api.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, role, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
