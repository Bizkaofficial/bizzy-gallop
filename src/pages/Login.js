import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import sideImg from "../assets/registerbg.jfif";
import bizkaLogo from "../assets/logo.PNG";
import { useDispatch } from "react-redux";
import { login } from "../actions";

const Login = () => {

  useEffect(() => {
    document.title = "Bizka || Login";
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPwd, setShowPwd] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Errorss, setErrorss] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      const bizka = {};
      bizka.email = values.username;
      bizka.password = values.password;
      // console.log(bizka);
      setErrorss(false);
      axios
        .post(
          "https://bizka.herokuapp.com/auth/login/",
          bizka
          // {"email": bizka.email, "password": bizka.password}
          // { proxy: { port: 8001 } }
        )
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
          setErrorss(err.message);
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
    <article className="d-flex flex-column flex-lg-row">
      <section className="col-lg-6 col-12 d-flex justify-content-center align-items-center" style={addStyle}>
        <div className="text-center d-flex justify-content-center align-items-center w-50">
          <p className="text-white text-center h3">
            <Link className="text-white text-decoration-none" to="/login">
              Sign in
            </Link>
            <span> or </span>
            <Link
              to="/register"
              className="text-white text-decoration-none"
            >
              Sign up
            </Link>
            <span> to begin sharing your works</span>
          </p>
        </div>
      </section>

      <section className="col-md-6 d-flex justify-content-center align-items-center">
        <form onSubmit={formik.handleSubmit} className="p-3" style={{ width: "90%" }}>
          <div className="d-flex flex-column gap-3 justify-content-center text-center mt-3">
            <img src={bizkaLogo} alt="bizka logo" className="mx-auto" style={{ width: "150px" }}/>
            <h3 className="h3">Log in</h3>
          </div>

          <div className="row justify-content-center gap-3 my-5">
            <a href="https://" className="btn btn-secondary col-md-5">
              <span className="row align-items-center justify-content-center gap-1">
                <FontAwesomeIcon icon={faGoogle} className="col-md-1" />
                Sign in with Google
              </span>
            </a>
            <a href="https://" className="btn btn-secondary col-md-5">
              <span className="row align-items-center justify-content-center gap-1">
                <FontAwesomeIcon icon={faFacebook} className="col-md-1" />Sign in with Facebook
              </span>
            </a>
          </div>

          {Errorss ? <div className="alert alert-danger text-danger">{Errorss}</div> : null}
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <input
            type="text"
            placeholder="Email/Username"
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

          <div className="d-flex justify-content-between align-items-center my-3">
            <label><input type="checkbox" onClick={() => setShowPwd(!showPwd)} /> Show
            Password</label>
            <Link
              to="/accounts/forgot-password"
              className="text-warning text-decoration-none"
            >
              Forgot Password?
            </Link>
          </div>
          
          <div className="text-center mx-3">
            <button className="btn btn-bizka w-100 p-3 my-3" type="submit">
              {isLoading ? <span className="spinner-border"></span> : "Log in"}
            </button>{" "}
          </div>
          <p className="text-center">
            <span>Don't have an account? </span>
            <Link className="text-warning text-decoration-none" to="/accounts/register">Register</Link>
          </p>
        </form>
      </section>
    </article>
  );
};

export default Login;
