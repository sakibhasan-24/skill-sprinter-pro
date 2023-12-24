import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PendingAssignmentItem({ assignment }) {
  console.log(assignment);
  const { title, marks, _id, examineeName, status } = assignment;

  return (
    <div className="bg-slate-100 p-6 my-12  rounded-lg shadow-lg  text-gray-600 font-semibold flex flex-col flex-1 ">
      <h1 className="">{title}</h1>
      <p>marks:{marks}</p>
      <p>student name:{examineeName}</p>
      <p>{status}</p>
      <div className="">
        <button className="w-full bg-slate-600 px-2 py-1 rounded-lg text-white">
          <Link to={`/mark/${_id}`}>Marks given</Link>
        </button>
      </div>
    </div>
  );
}
