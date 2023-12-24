import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeItems from "../pages/HomeItems";
import Protected from "./Protected";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import EditAssignment from "../pages/EditAssignment";
import DetailsAssignment from "../pages/DetailsAssignment";
import SubmitAssignment from "../pages/SubmitAssignment";
import PendingAssignment from "../pages/PendingAssignment";
import Mark from "../pages/Mark";
import AllSubmittedAssignment from "../pages/AllSubmittedAssignment";
import Dashboard from "../pages/Dashboard";

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
        path: "/assignments",
        element: <Assignments />,
        loader: () => {
          return fetch(`http://localhost:5000/get/assignments/`);
        },
      },
      {
        path: "/create/assignment",
        element: (
          <Protected>
            <CreateAssignment />
          </Protected>
        ),
      },
      {
        path: "/assignment/:id",
        element: (
          <Protected>
            <DetailsAssignment />
          </Protected>
        ),
      },
      {
        path: "/edit/assignment/:id",
        element: (
          <Protected>
            <EditAssignment />
          </Protected>
        ),
      },
      {
        path: "/submit/assignment/:id",
        element: (
          <Protected>
            <SubmitAssignment />
          </Protected>
        ),
      },
      {
        path: "/pending/assignments",
        element: (
          <Protected>
            <PendingAssignment />
          </Protected>
        ),
      },
      {
        path: "/mark/:id",
        element: (
          <Protected>
            <Mark />
          </Protected>
        ),
      },
      {
        path: "/all-assignment/",
        element: (
          <Protected>
            <AllSubmittedAssignment />
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
]);

export default router;
