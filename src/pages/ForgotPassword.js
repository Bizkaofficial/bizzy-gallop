import { Link } from "react-router-dom";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bizkaLogo from "../assets/logo.PNG"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../actions"

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Not an Email"),
    }),
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    }
  })

  return (
    <article className="container">
      <div className="row">
        <div className="text-center col-lg-6 col-md-12 col-sm-12 pt-5 mt-5 mx-auto">
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
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="email"
              value={formik.values.email}         
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? "form-control my-2 p-2 is-invalid"
                  : "form-control p-2 my-2"
              }
              placeholder="Email Address"
            />
            {formik.touched.email ? <div className="text-danger">{formik.errors.email}</div>: null}
            <button type="submit" className="btn btn-bizka my-4 w-100">Confirm Email</button>
          </form>
          <Link to="/accounts/login" className="text-decoration-none">
            <FontAwesomeIcon className="text-dark" icon={faLongArrowAltLeft} />
            <span className="text-warning"> Back to login</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ForgotPassword;