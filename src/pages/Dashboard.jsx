import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1 className="font-bold text-center text-slate-700 text-4xl ">
        Profile : {user.displayName}
      </h1>
    </div>
  );
}
