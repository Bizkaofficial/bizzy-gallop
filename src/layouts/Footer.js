import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const logoUrl =
    "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/240584989_173622064794381_4485450073447507273_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-5&_nc_sid=dd9801&_nc_ohc=GAuAYNnQhUYAX_dVVj1&_nc_ht=scontent-los2-1.xx&oh=00_AT-21u1XYljMTSNYE4nC9Pj-TwfGBhBzs9mopxmiIf69lw&oe=624D2B6C";

  return (
    <div className="container ">
      <footer className="d-flex justify-content-around page-footer row row-cols mt-10 bg-light">
        <div className="col">
          <div className="nav flex-column mb-3 link-dark">
            <div className="">
              <img
                src={logoUrl}
                alt="bizka logo"
                style={{ height: "13rem" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="col text-bizka">
          <h6 className="text-uppercase mt-5 mb-2 nav flex-column font-weight-bold text-important">
            Contact US
          </h6>
          <ul className="list-unstyled">
            <li className="nav-item mb-2">Phone No</li>
            <li className="nav-item mb-2">bizak@gmail.com</li>
            <li className="nav-item mb-2">Find a Client</li>
          </ul>
        </div>
        <div className="col text-bizka">
          <h6 className="col text-uppercase mt-5 nav flex-column font-weight-bold">
            Services
          </h6>
        </div>

        <div className="col-sm-3 text-bizka">
          <h6 className="text-uppercase mt-5 mb-2 nav flex-column font-weight-bold text-important">
            Products
          </h6>
          <ul className="list-unstyled nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link p-0" to="/">
                Contact US
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              <Link className="nav-link p-0" to="#">
                {" "}
                Discover
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              <Link className="nav-link p-0" to="#">
                Porfolios
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <Link className="nav-link p-0" to="#">
                FAQ
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <Link className="nav-link p-0" to="#">
                Site Guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-sm-3 ">
          <h6 className=" text-uppercase mt-5 font-weight-bold text-bizka">
            Information
          </h6>

          <ul className="list-unstyled nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link p-0" to="#">
                About US
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              <Link className="nav-link p-0" to="#">
                {" "}
                Blog
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              <Link className="nav-link p-0" to="#">
                Privacy Policy
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <Link className="nav-link p-0" to="#">
                Terms &amp;
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <Link className="nav-link p-0" to="#">
                Condition
              </Link>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <Link className="nav-link p-0" to="#">
                Press Release
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div>
        <div className="col col-lg-3 mt-2">
          <ul className="nav justify-space-between gap-4 list-unstyled list-inline d-flex">
            <li className="list-inline-item">
              <Link className="btn-floating btn-md text-bizka" to="#">
                <p className="fs-2 pr-15">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </p>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn-floating btn-md text-bizka " to="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn-floating btn-md text-bizka" to="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </p>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn-floating btn-md text-bizka" to="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr
        className="bg-dark mt-4  d-inline-block "
        style={{ width: "100%", height: "2px" }}
      />
      <div className="row-md-2 col-lg-12 d-flex justify-content-end list-inline py-3">
        <li className="list-inline-item">
          <Link className="col text-decoration-none text-black" to="#">
            Privacy and Security
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="col text-decoration-none text-black">
            Terms and Condition
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Footer;
