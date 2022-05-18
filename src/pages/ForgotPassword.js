import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bizkaLogo from "../assets/logo.PNG"

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container text-center col-lg-6 col-md-12 col-sm-12">
          <img
            src={bizkaLogo}
            alt="bizka logo"
            className="text-center"
            style={{ width: "150px" }}
          />
          <p className="mt-3 display-5">Forgot Password?</p>
          <p className="mt-2">
            No worries, we would send you reset instructions
          </p>
          <form>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Email Address"
            />
          </form>
          <div>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
            <span> Back to login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;