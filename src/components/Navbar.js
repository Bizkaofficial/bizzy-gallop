import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container ">
        <Link to="/" className="navbar-brand mt-0 h1">
          <img
            className="d-flex align-top"
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/240584989_173622064794381_4485450073447507273_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-5&_nc_sid=dd9801&_nc_ohc=GAuAYNnQhUYAX_dVVj1&_nc_ht=scontent-los2-1.xx&oh=00_AT-21u1XYljMTSNYE4nC9Pj-TwfGBhBzs9mopxmiIf69lw&oe=624D2B6C"
            height={"90rem"}
            alt="bizkalogo"
          />
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active ">
              <Link className="nav-link " to="/">
                <strong> Home </strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <strong> Discover </strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <strong> About </strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <strong> Blog </strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <strong> Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="d-flex mr-3 gap-4">
            <li className="list-inline-item">
              <Link
                to="/accounts/login"
                className="btn rounded-pill btn-outline-bizka btn-lg"
              >
                Login
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
              to="/accounts/register"
                className="btn rounded-pill btn-lg btn-bizka"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
