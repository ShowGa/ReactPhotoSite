import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Components/Footer";

const layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default layout;
