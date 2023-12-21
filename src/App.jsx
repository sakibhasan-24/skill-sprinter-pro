import React, { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const { user } = useContext(AuthContext);
  return <div>App {user}</div>;
}
