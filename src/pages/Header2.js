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
            <li className="nav-item active">
              <Link className="nav-link text-primary" to="/discover">
                Discovers
              </Link>
            </li>
            <li className=" me-5 fs-6" >
              <div className="input-group input-group-sm">
                <input
                placeholder="Search"
                aria-label="Search bar"
                aria-describedby="basic-addon2"
                className="form-control-sm border-0"
              />
              <div className='input-group-append'>
              <span className="" id="basic-addon2">
                <img
                src={Vector}
                className="bg-dark"
                alt=""
                width={18}
                height={18}
              />
              </span>
              </div>
              </div>
              
            </li>

            <li className="nav-item active ">
              <Link className="nav-link text-primary" to="/discover">
                Add a project
              </Link>
            </li>
          </ul>
          <button type="text" className="btn btn-primary px-5">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
