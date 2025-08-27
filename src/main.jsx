import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Conatct";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/statistics",
        Component: Statistics,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
