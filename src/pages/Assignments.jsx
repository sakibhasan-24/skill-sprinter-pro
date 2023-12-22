import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";
import { useState } from "react";

export default function Assignments() {
  const assignments = useLoaderData();

  const level = new URLSearchParams(location.level);
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
          <Assignment key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </main>
  );
}
