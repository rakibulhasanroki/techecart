import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Conatct";
import ProductDetails from "./components/productDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/products.json"),
      },
      {
        path: "statistics",
        Component: Statistics,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "productDetails/:userId",
        Component: ProductDetails,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
