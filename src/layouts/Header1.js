import Logo from "../assets/logo.PNG";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand h1">
          <img src={Logo} alt="" height={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <Link className="nav-link" to="/">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/discover">
                <strong>Disover</strong>
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/about">
                <strong>About</strong>
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/blog">
                <strong>Blog</strong>
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/contact">
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="d-flex gap-3 my-auto">
            <li className="list-inline-item">
              <Link to="/accounts/login">
                <button
                  type="text"
                  style={{ borderRadius: "15px" }}
                  className="btn btn-outline-primary px-4"
                >
                  Login
                </button>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/accounts/register"
                style={{ borderRadius: "15px" }}
                className="btn btn-primary px-4"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
