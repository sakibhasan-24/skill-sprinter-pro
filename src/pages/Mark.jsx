import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Mark() {
  // http://localhost:5000/assignment/65851cf79037fb8d6c5d1889
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { id } = useParams();
  const navigate = useNavigate();
  const updateSubmitForm = (e) => {
    e.preventDefault();
    const mark = e.target.mark.value;
    const status = "completed";
    fetch(`http://localhost:5000/update/assignment/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mark, status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          toast.error("you can not updated successfully!!");
        }
        toast.success("marks updated successfully");
        navigate("/all-assignment");
      });
  };
  return (
    <div className="max-w-5xl mx-auto ">
      <form
        onSubmit={updateSubmitForm}
        className="flex flex-col items-center justify-center my-28 gap-4"
      >
        <input
          type="text"
          name="mark"
          id="mark"
          className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
        />
        <input
          className="w-1/2  cursor-pointer  rounded-md  md:w-1/3 md:mx-auto bg-slate-800 text-white font-bold hover:bg-slate-600 px-4 py-3"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
}
