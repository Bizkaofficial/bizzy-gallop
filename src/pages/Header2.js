import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import Vector from "../assets/Vector.png";

const Header2 = () => {
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
          data-bs-target="#navbarToggleContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end gap-3"
          id="navbarToggleContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <Link className="nav-link text-primary" to="/discover">
                Disovers
              </Link>
            </li>
            <li className="nav-item">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                img src={Vector} alt=""
              />
              
            </li>

            <li className="nav-item active ">
              <Link className="nav-link text-primary" to="/discover">
                Add a project
              </Link>
            </li>
          </ul>
          <button type="text" className="btn btn-primary px-4">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
