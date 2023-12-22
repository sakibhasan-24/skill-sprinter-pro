import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Assignment({ assignment }) {
  const { _id, title, description, date, category, image, owner } = assignment;
  const { user } = useContext(AuthContext);
  return (
    <div className="p-4 shadow-2xl my-6  flex flex-col rounded-md hover:bg-slate-100">
      <div className="flex-grow">
        <img className=" rounded-md object-cover" src={image} alt="image" />
      </div>
      <div className="my-4 space-y-4">
        <h1 className="text-center font-semibold text-slate-900 text-xl">
          {title}
        </h1>
        <p className="font-semibold text-[14px] text-center text-slate-600">
          {description}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-xs  text-center font-extrabold  bg-green-900 text-white rounded-md px-4 py-2">
          category:{category}
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <button
          className={`bg-green-400 px-2 py-1 rounded-md  text-xs font-bold ${
            user && user?.email !== owner ? "hidden" : "inline-block"
          }`}
        >
          Edit
        </button>
        <button
          className={`bg-red-400 px-2 py-1 rounded-md  text-xs font-bold  ${
            user && user?.email !== owner ? "hidden" : "inline-block"
          }`}
        >
          Delete
        </button>
        <button
          className={`bg-indigo-400 px-2 py-1 rounded-md text-xs font-bold flex items-center justify-center ${
            user && user?.email === owner ? "hidden" : "inline-block"
          }`}
        >
          take assignment
        </button>
      </div>
    </div>
  );
}
