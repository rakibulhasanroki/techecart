import { Outlet } from "react-router";
import Navbar from "../navbar/Navabr";
import Footer from "../footer/Footer";
function Root() {
  return (
    <section className="w-11/12 mx-auto">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </section>
  );
}

export default Root;
