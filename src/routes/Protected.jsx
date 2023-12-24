import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Protected({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
}
