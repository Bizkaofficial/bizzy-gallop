import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import "../index.css";
import sideImg from "../assets/registerbg.jfif";
import bizkaLogo from "../assets/logo.PNG";
import { useDispatch } from "react-redux";
import { login } from "../actions";

const Login = () => {
  useEffect(() => {
    document.title = "Bizka || Login";
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPwd, setShowPwd] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Errorss, setErrorss] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      const bizka = {};
      bizka.email = values.email;
      bizka.password = values.password;
      setErrorss(false);
      axios
        .post("https://bizka.onrender.com/auth/login/", bizka)
        .then((res) => {
          setIsLoading(false);
          setErrorss(false);
          console.log(res);
          if (res.status === 200) {
            const resp = res.data.success;
            setSuccess(resp);
            dispatch(login(resp));
            navigate("/user");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorss("Invalid credentials, try again");
        });
    },
  });

  const addStyle = {
    backgroundImage: `url(${sideImg})`,
    // backgroundColor: `rgba(70, 100, 190, 0.6)`,
    // width: "50vw",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-lg-6 col-12" style={addStyle}>
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
        <div className="col-lg-6 col-12 container mt-4 px-4">
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
            {Errorss ? (
              <div className="alert alert-danger text-danger">{Errorss}</div>
            ) : null}
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
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
                {isLoading ? (
                  <span className="spinner-border"></span>
                ) : (
                  "Log in"
                )}
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
