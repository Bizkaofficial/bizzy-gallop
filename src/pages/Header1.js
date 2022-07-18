import Logo from "../assets/logo.PNG";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand h1">
          <img src={Logo} alt="" width={181} height={42} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
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
              <Link className="nav-link" to="/discover">
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="d-flex mr-3 gap-4 my-auto">
            <li className="list-inline-item">
              <Link to="/accounts/login">
                <button type="text" className="btn btn-outline-primary px-4">
                  Logout
                </button>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/accounts/register" className="btn btn-primary px-4">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
