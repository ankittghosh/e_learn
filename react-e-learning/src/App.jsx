import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

export default function App() {
  return <RouterProvider router={router} />;
}
