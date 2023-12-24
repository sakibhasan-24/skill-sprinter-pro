import React from "react";

export default function Info({ userInfo }) {
  console.log(userInfo);
  return (
    <div className="shadow-lg p-4 rounded-lg bg-slate-100 text-center space-y-3">
      <h1 className="text-centet font-semibold ">title:{userInfo.title}</h1>
      <p className="text-slate-500 text-center font-bold">{userInfo.email}</p>

      <p className="bg-blue-400 text-center font-bold rounded-lg">
        {userInfo.status === "pending" ? "wait some days" : "completed"}
      </p>
    </div>
  );
}
