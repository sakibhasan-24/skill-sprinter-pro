import React, { useContext } from "react";
import { pdfjs } from "react-pdf";
import { AuthContext } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
export default function SubmitAssignment() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    // alert("Submitted");
    const form = e.target;
    const formData = new FormData(form);

    const submitLink = formData.get("submitLink");
    const shortNote = formData.get("shortNote");
    const submitAssignment = {
      email: user.email,
      status: "pending",
      submitLink,
      shortNote,
      _id: id,
    };
    fetch(`http://localhost:5000/submit/assignment`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="max-w-5xl mx-auto p-6">
      <form onSubmit={handleSubmitAssignment}>
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
