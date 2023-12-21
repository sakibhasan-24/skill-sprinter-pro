import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  const { signInUsingGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((res) => {
        const user = res.user;

        // Swal.fire("Good job!", "You clicked the button!", "success");
        Swal.fire({
          title: "Success",
          text: "Do you want to continue?",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-3/4 mx-auto bg-green-800 text-white rounded-lg px-4 py-3 font-bold"
      type="button"
    >
      sign In With Google
    </button>
  );
}
