import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import "../index.css";
import sideImg from "../assets/registerbg.jfif";
import bizkaLogo from "../assets/logo.PNG";

const Login = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Errorss, setErrorss] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      console.log(values);
      setErrorss(false);
      axios.post("https://bizka.onrender.com/auth/login/", values, {headers: {
            'Content-Type': 'application/json'
          }}
        ).then((res) => {
          console.log(res);
        }).catch((err) => {
          setErrorss(err.message);
          console.log(err)
        });
    },
  });

  const addStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.4)), url(${sideImg})`,
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="row w-100 mx-0">
        <div className="col-lg-6" style={addStyle}>
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
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit} className="p-3 mx-5">
            <div className="text-center mt-3">
              <img
                src={bizkaLogo}
                alt="bizka logo"
                className="text-center"
                style={{ width: "150px" }}
              />
              <h3 className="h3">Log in</h3>
            </div>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <input
              type="text"
              placeholder="Email/Username"
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
            <input type="checkbox" onClick={() => setShowPwd(!showPwd)} /> Show
            Password
            <div className="container text-center">
              <Link
                to="/accounts/forgot-password"
                className="text-warning text-decoration-none"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center mx-3">
              <button className="btn btn-bizka w-100 p-3 my-3" type="submit">
                Log in
              </button>{" "}
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="text-warning" to="/accounts/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
