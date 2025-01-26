import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./screens/HomePage.jsx";
import Login from "./screens/login.jsx";
import Register from "./screens/register.jsx";
import Calculator from "./screens/calculator.jsx";
import Logout from "./screens/Logout.jsx";

// Route Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "logout",
        element: <Logout />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);