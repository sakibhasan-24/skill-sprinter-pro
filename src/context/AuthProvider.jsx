import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const signInUsingGoogle = () => {
    setLoading(true);
    const googleAuth = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuth);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setLoading(true);
        setUser(currentUser);
      } else {
        setLoading(false);
        console.log("no current user");
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  const authValue = { user, loading, signInUsingGoogle, logOut };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
