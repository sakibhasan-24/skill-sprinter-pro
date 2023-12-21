import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
}
