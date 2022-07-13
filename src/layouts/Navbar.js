import React from "react";
import { Link } from "react-router-dom";
import bizkaLogo from "../assets/Bizka_bizka_bg.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container ">
        <Link to="/" className="navbar-brand h1">
          <img
            className="d-flex align-top"
            src={bizkaLogo}
            height={"90rem"}
            alt="bizka logo"
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
              <Link className="nav-link" to="/discover">
                <strong> Discover </strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
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
