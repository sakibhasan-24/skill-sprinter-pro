import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userName = formData.get("userName");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("photoURL");
    // console.log(userName, email, password, photoURL);
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return toast.error("One Special Character Needed");
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      return toast.error("must need one capital letter");
    }
    createUser(email, password).then((res) => {
      const user = res.user;
      user.displayName = userName;
      user.photoURL = photoURL;
      // console.log(user);
      Swal.fire({
        title: "Successfully Registered",
        icon: "success",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    });
  };
  // console.log(formData);
  return (
    <div className="max-w-6xl mx-auto p-4 ">
      <h1 className="text-5xl font-semibold text-slate-700 text-center">
        Register
      </h1>
      <div className="max-w-5xl mx-auto p-6">
        <form
          onSubmit={handleSubmitForm}
          className="bg-slate-700 p-6 rounded-lg flex flex-col space-y-4"
        >
          <input
            className="w-3/4 mx-auto rounded-lg border-2 border-slate-400 px-2 py-4 focus:outline-none "
            type="text"
            name="userName"
            id="userName"
            placeholder="username...."
          />
          <input
            className="w-3/4 mx-auto rounded-lg border-2 border-slate-400 px-2 py-4 focus:outline-none "
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="photoURL...."
            defaultValue={
              "https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
            }
          />
          <input
            className="w-3/4 mx-auto rounded-lg border-2 border-slate-400 px-2 py-4 focus:outline-none "
            type="email"
            name="email"
            id="email"
            placeholder="email...."
          />
          <input
            className="w-3/4 mx-auto rounded-lg border-2 border-slate-400 px-2 py-4 focus:outline-none "
            type="password"
            name="password"
            id="password"
            placeholder="password...."
          />
          <input
            className="w-3/4 mx-auto px-4 py-3 rounded-lg font-bold uppercase text-2xl cursor-pointer bg-slate-900 text-white"
            type="submit"
            value="Register"
          />
          <GoogleSignIn />
        </form>
        <div>
          <p className="text-slate-800 font-semibold  text-xl text-center">
            already register?{" "}
            <Link to="/login">
              <span className="ml-2 text-blue-800">login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
