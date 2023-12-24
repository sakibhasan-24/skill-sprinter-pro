import React from "react";
import { Link } from "react-router-dom";

export default function AllSubmittedAssignmentItems({ assignment }) {
  const { _id, status, examineeName } = assignment;
  return (
    <div>
      <div className="bg-slate-100 w-full px-2 py-6 space-y-4 my-12  rounded-lg shadow-lg  text-gray-600 font-semibold flex flex-col flex-1 ">
        <p className="text-center text-slate-800 font-semibold">
          student name:{examineeName}
        </p>
        <p
          className={` ${
            status === "pending" ? "bg-red-600" : "bg-green-700"
          } text-white rounded-md text-center font-bold`}
        >
          {status}
        </p>
        <div className="flex items-center justify-center">
          <button className="w-full bg-slate-600 px-2 py-1 rounded-lg text-white">
            <Link to={`/pending/assignments`}>only Pending assignment?</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
