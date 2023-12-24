import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Assignments() {
  const loadAssignments = useLoaderData();

  const [assignments, setAssignments] = useState(loadAssignments);

  const deleteAssignment = (id) => {
    Swal.fire({
      title: "Are you sure Want to Delete?",
      text: "Once deleted, you will not be able to recover this Assignment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/assignment/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);

            const remaining = assignments.filter(
              (assignment) => assignment._id !== id
            );
            setAssignments(remaining);
          });
      }
    });
  };
  console.log(assignments);
  //   console.log(level.get("level"));
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-slate-500">
        Assignments
      </h1>
      <form>
        <div className="flex flex-col my-2 p-2">
          <h1 className="text-center font-bold text-xl my-2 text-slate-600">
            Level
          </h1>
          <select
            className="w-full rounded-md  md:w-1/2 md:mx-auto text-white focus:outline-none px-4 py-3 bg-slate-700"
            name="level"
            id="level"
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </form>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {assignments.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            deleteAssignment={deleteAssignment}
          />
        ))}
      </div>
    </main>
  );
}
