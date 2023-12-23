import React from "react";

export default function PendingAssignmentItem({ assignment }) {
  return (
    <div>
      <h1>{assignment.status}</h1>
    </div>
  );
}
