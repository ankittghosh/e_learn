import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Show the login page at the root path
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app", // Use a different path for the main layout
    element: <MainLayout />, // Use the layout for protected routes
    children: [
      {
        path: "dashboard", // Full path: /app/dashboard
        element: <Dashboard />,
      },
      {
        path: "courses", // Full path: /app/courses
        element: <Courses />,
      },
      {
        path: "profile", // Full path: /app/profile
        element: <Profile />,
      },
    ],
  },
]);

export default router;