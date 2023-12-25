import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged Out Successfully");
      navigate("/login");
      return;
    });
  };
  const handleNavRoutes = (route) => {
    // console.log(location.pathname, route);
    if (location.pathname === route) return true;
  };
  return (
    <header className="bg-slate-100 p-4 ">
      <nav className="w-full md:max-w-5xl  mx-auto flex flex-col md:flex-col lg: md:justify-between lg:flex-row  gap-6 items-center">
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
        <div className="f font-bold  space-x-4 text-xs md:text-xl text-slate-700">
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/pending/assignments") && "text-red-700"
            }`}
            to="/pending/assignments"
          >
            pending Assignment
          </Link>
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/assignments") && "text-red-700"
            }`}
            to="/assignments"
          >
            Assignment
          </Link>
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/profile") && "text-red-700"
            }`}
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className={`w-14 h-14 rounded-md ${
              handleNavRoutes("/create/assignment") && "text-red-700"
            }`}
            to="create/assignment"
          >
            create Assignment
          </Link>
          {user ? (
            <>
              <Link
                onClick={handleLogOut}
                className={`w-14 h-14 rounded-md ${
                  handleNavRoutes("/login") && "text-red-700"
                }`}
                to="/login"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`w-14 h-14 rounded-md ${
                  handleNavRoutes("/login") && "text-red-700"
                }`}
                to="/login"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
