import React, { useEffect, useState } from "react";
import PendingAssignmentItem from "./PendingAssignmentItem";
import AllSubmittedAssignmentItems from "./AllSubmittedAssignmentItems";

export default function AllSubmittedAssignment() {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/submitted/assignments", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setAssignments(data?.result));
  }, []);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-slate-700 text-center font-semibold text-2xl">
        all submitted assignment {assignments.length}
      </h1>
      <div className="grid grid-cols-5 items-center gap-6">
        {assignments.map((assignment) => (
          <AllSubmittedAssignmentItems
            key={assignment._id}
            assignment={assignment}
          />
        ))}
      </div>
    </div>
  );
}
