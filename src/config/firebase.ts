import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9pgo25D0RJyeGNmxei9fmLVOBjdXMyyg",
  authDomain: "lms-new-9628b.firebaseapp.com",
  projectId: "lms-new-9628b",
  storageBucket: "lms-new-9628b.firebasestorage.app",
  messagingSenderId: "384234036534",
  appId: "1:384234036534:web:85a7e0b193381bbab2a797"
};

// Primary app instance
const app = initializeApp(firebaseConfig);

// Secondary app instance for creating users without affecting admin session
const secondaryApp = initializeApp(firebaseConfig, "Secondary");

export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
export const db = getFirestore(app);
