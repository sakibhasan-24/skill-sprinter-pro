import React from "react";

export default function SubmitAssignment() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <form>
        <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center justify-center p-6">
          <input
            type="text"
            id="submitLink"
            name="submitLink"
            placeholder="submit link..."
            className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
          />
          <textarea
            type="text"
            id="shortNote"
            name="shortNote"
            placeholder="short Note"
            className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
          />
        </div>
        <div className="  my-2 p-2 flex items-center justify-center">
          <button className="w-1/2   rounded-md  md:w-1/3 md:mx-auto bg-slate-800 text-white font-bold hover:bg-slate-600 px-4 py-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
