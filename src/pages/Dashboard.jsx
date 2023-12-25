import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Info from "./Info";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(
      `https://skill-sprinter-pro-server.vercel.app/user/submitted/assignments?email=${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [user?.email]);
  //   console.log(info);
  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1 className="font-bold text-center text-slate-700 text-4xl ">
        Profile : {user.displayName}
      </h1>
      <div>
        <div className="flex items-center justify-center my-6">
          <img
            src={user?.photoURL}
            className="w-16 h-16 object-contain rounded-full"
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 items-center justify-center gap-6">
          {info?.map((information, idx) => (
            <Info key={idx} userInfo={information} />
          ))}
        </div>
      </div>
    </div>
  );
}
