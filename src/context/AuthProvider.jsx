import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authValue = { user, loading };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
