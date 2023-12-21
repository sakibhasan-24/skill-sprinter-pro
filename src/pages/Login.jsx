import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Login() {
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    userSignIn(email, password)
      .then((res) => {
        toast.success("Logged in successfully", res.user.displayName);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-5xl font-semibold text-slate-800 text-center">
        Login
      </h1>
      <form
        onSubmit={handleLogIn}
        className="flex flex-col gap-6 bg-slate-700 p-12 rounded-lg mt-12"
      >
        <input
          className="w-3/4 mx-auto px-4 py-3 focus:outline-none rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Email.."
        />
        <input
          className="w-3/4 mx-auto px-4 py-3 focus:outline-none rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Password.."
        />
        <input
          type="submit"
          value="Login"
          className="w-3/4 mx-auto px-4 py-3 rounded-lg font-bold uppercase text-2xl cursor-pointer bg-slate-900 text-white"
        />
        <GoogleSignIn />
      </form>
      <div className="mt-2">
        <p className="text-slate-800 font-semibold  text-xl text-center">
          not register yet?
          <Link to="/register">
            <span className="ml-2 text-blue-800">register</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
