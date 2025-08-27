import { NavLink } from "react-router";
import { useLocation } from "react-router";
import cart from "../../assets/cart.png";
import wishlist from "../../assets/wishlist.png";
import "../../index.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isbgACtive, setBgActive] = useState({
    backgroundColor: "#8200db",
    color: "white",
  });
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname == "/statistics" ||
      location.pathname == "/dashboard" ||
      location.pathname == "/contact"
    ) {
      setBgActive({
        backgroundColor: "transparent",
        color: "black",
      });
    } else {
      setBgActive({
        backgroundColor: "#8200db",
        color: "white",
      });
    }
  }, [location]);

  return (
    <div className="pt-10">
      <div className="flex rounded-t-3xl md:px-20 py-4" style={isbgACtive}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn active:bg-transparent btn-outline lg:hidden text-purple-100 border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-purple-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">
                {({ isActive }) => (
                  <span className={isActive ? "active" : ""}>Home</span>
                )}
              </NavLink>
              <NavLink to="/statistics">
                {({ isActive }) => (
                  <span className={isActive ? "active " : ""}>Statistics</span>
                )}
              </NavLink>
              <NavLink to="/dashboard">
                {({ isActive }) => (
                  <span className={isActive ? "active " : ""}>Dashboard</span>
                )}
              </NavLink>
              <NavLink to="/contact">
                {({ isActive }) => (
                  <span className={isActive ? "active" : ""}>Contact Us</span>
                )}
              </NavLink>
            </ul>
          </div>
          <a className="text-xl font-bold">Techecart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Home</span>
              )}
            </NavLink>
            <NavLink to="/statistics">
              {({ isActive }) => (
                <span className={isActive ? "active " : ""}>Statistics</span>
              )}
            </NavLink>
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Dashboard</span>
              )}
            </NavLink>
            <NavLink to="/contact">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Contact Us</span>
              )}
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4 pr-4">
          <img src={cart} alt="image loading" className="w-8" />
          <img src={wishlist} alt="image loading" className="w-8" />
        </div>
      </div>
    </div>
  );
}
