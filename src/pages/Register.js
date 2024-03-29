import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import sideImg from "../assets/registerbg.jfif";
import bizkaLogo from "../assets/logo.PNG";
// import { registerUser } from "../actions"

const Register = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [errorss, setErrorss] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_number: "+234",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};
      let regexForPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Must be the same with password";
      }
      if (!regexForPassword.test(values.password)) {
        errors.password =
          "Password must contain the following in this order: an alphabet, a number and a special character";
      }
      return errors;
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Not an email"),
      phone_number: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post('https://bizka.herokuapp.com/auth/register', values).then((res)=>{
        console.log(res);
        navigate("/accounts/login");
      }).catch((err)=>{
        console.log(err)
      })
      setErrorss("");
    },
  });

  const addStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.4)), url(${sideImg})`,
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="">
        <div className="d-flex flex-column flex-lg-row">
          <div className="d-none d-lg-block col-lg-6 col-12" style={addStyle}>
            <div className="text-center mt-5 py-5 col-6 container">
              <div className="mt-5 p-5"></div>
              <div className="text-center container">
                <p className="text-white text-center h3">
                  {" "}
                  <Link className="text-white text-decoration-none" to="/login">
                    Sign in
                  </Link>{" "}
                  or{" "}
                  <Link
                    to="/register"
                    className="text-white text-decoration-none"
                  >
                    Sign up
                  </Link>{" "}
                  to begin sharing your works{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 container mt-sm-4 px-sm-4">
            <form onSubmit={formik.handleSubmit} className="p-3 mx-5">
              <div className="text-center mt-1">
                <img
                  src={bizkaLogo}
                  alt="bizka logo"
                  className="text-center"
                  style={{ width: "150px" }}
                />
                <h3 className="h3">Create an account</h3>
              </div>
              {errorss ? (
                <div className="alert alert-danger"> {errorss}</div>
              ) : null}
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                className={
                  formik.touched.first_name && formik.errors.first_name
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.first_name ? (
                <div className="text-danger">{formik.errors.first_name}</div>
              ) : null}
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                className={
                  formik.touched.last_name && formik.errors.last_name
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.last_name ? (
                <div className="text-danger">{formik.errors.last_name}</div>
              ) : null}
              <input
                type="text"
                placeholder="Username"
                name="username"
                className={
                  formik.touched.username && formik.errors.username
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username ? (
                <div className="text-danger">{formik.errors.username}</div>
              ) : null}
              <input
                type="text"
                placeholder="Email"
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <input
                type="text"
                placeholder="Phone Number"
                name="phone_number"
                className={
                  formik.touched.phone_number && formik.errors.phone_number
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone_number ? (
                <div className="text-danger">{formik.errors.phone_number}</div>
              ) : null}
              <input
                type={showPwd ? `text` : `password`}
                placeholder="Password"
                name="password"
                className={
                  formik.touched.password && formik.errors.password
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
              <input
                type={showPwd ? `text` : `password`}
                placeholder="Password"
                name="confirmPassword"
                className={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "my-2 bizka-form bizka-invalid"
                    : "my-2 bizka-form"
                }
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword ? (
                <div className="text-danger">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
              <input type="checkbox" onClick={() => setShowPwd(!showPwd)} />{" "}
              Show Password
              <div className="text-center mx-3">
                <button className="btn btn-bizka w-100 p-3 my-3" type="submit">
                  Get Started
                </button>{" "}
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-warning" to="/accounts/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
