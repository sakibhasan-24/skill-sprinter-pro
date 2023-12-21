import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeItems from "../pages/HomeItems";
import Protected from "./Protected";
import CreateAssignment from "../pages/CreateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeItems />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/create/assignment",
        element: (
          <Protected>
            <CreateAssignment />
          </Protected>
        ),
      },
    ],
  },
]);

export default router;
