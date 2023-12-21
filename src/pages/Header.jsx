import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const handleNavRoutes = (route) => {
    // console.log(location.pathname, route);
    if (location.pathname === route) return true;
  };
  return (
    <header className="bg-slate-100 p-4 ">
      <nav className="max-w-5xl mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center">
        <div>
          <Link to="">
            <img
              src="https://static.thenounproject.com/png/2398401-200.png"
              alt="logo"
              className={`w-14 h-14 rounded-md ${() =>
                handleNavRoutes("/") && ""}`}
            />
          </Link>
        </div>
        <div className="font-bold items-center space-x-4 text-xl text-slate-700">
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/assignment") && "text-red-700"
            }`}
            to=""
          >
            Assignment
          </Link>
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/login") && "text-red-700"
            }`}
            to="/login"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
