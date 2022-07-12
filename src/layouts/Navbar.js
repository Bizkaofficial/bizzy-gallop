import React from "react";
import { Link } from "react-router-dom";
import bizkaLogo from "../assets/Bizka_bizka_bg.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/" className="navbar-brand h1">
        <img
          className="d-flex align-top"
          src={bizkaLogo}
          height={"90rem"}
          alt="bizka logo"
        />
      </Link>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mx-auto">
          <li className="navbar-item">
            <Link className="nav-link " to="/">
              <strong> Home </strong>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              <strong> Discover </strong>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/about">
              <strong> About </strong>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              <strong> Blog </strong>
            </Link>
          </li>
          <li className="navbar-item">
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
    </nav>
  );
};

export default Navbar;
