import { Link } from "react-router-dom";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bizkaLogo from "../assets/logo.PNG"

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container mt-4 pt-5 text-center col-lg-6 col-md-12 col-sm-12">
          <img
            src={bizkaLogo}
            alt="bizka logo"
            className="text-center"
            style={{ width: "150px" }}
          />
          <p className="mt-3 display-5 text-warning">Forgot Password?</p>
          <p className="mt-2">
            No worries, we would send you reset instructions
          </p>
          <form>
            <input
              type="text"
              className="form-control my-2 p-2"
              placeholder="Email Address"
            />
            <button className="btn btn-bizka my-4 w-100">Confirm Email</button>
          </form>
          <Link to="/accounts/login" className="text-decoration-none">
            <FontAwesomeIcon className="text-dark" icon={faLongArrowAltLeft} />
            <span className="text-warning"> Back to login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;