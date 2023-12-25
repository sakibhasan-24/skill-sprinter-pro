import React, { useEffect, useState } from "react";
import PendingAssignmentItem from "./PendingAssignmentItem";

export default function PendingAssignment() {
  const [assignments, setAssignments] = useState([]);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  useEffect(() => {
    fetch(
      "https://skill-sprinter-pro-server.vercel.app/pending/submitted/assignments",
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setPendingAssignments(data?.result));
  }, []);

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-slate-700">
          Assignments...
        </h1>
        <div className="w-full  flex flex-nowrap gap-4 whitespace-nowrap">
          {pendingAssignments.length === 0
            ? "no assignment"
            : pendingAssignments.map((assignment) => (
                <PendingAssignmentItem
                  key={assignment._id}
                  assignment={assignment}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
