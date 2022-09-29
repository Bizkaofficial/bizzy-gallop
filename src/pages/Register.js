import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
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
      axios.post('https://bizka.onrender.com/auth/register', values).then((res)=>{
        console.log(res);
        navigate("/accounts/login")
      }).catch((err)=>{
        console.log(err)
      })
      setErrorss("");
      // try {
      //   let bizka = {};
      //   bizka.first_name = values.first_name;
      //   bizka.last_name = values.last_name;
      //   bizka.email = values.email;
      //   bizka.username = values.username;
      //   bizka.phone_number = values.phone_number;
      //   bizka.password = values.password;
      //   dispatch(registerUser(bizka));
      // } catch (err) {
      //   console.log(err);
      // }
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
        <form onSubmit={formik.handleSubmit} className="p-3" style={{ width: "80%" }}>
          <div className="d-flex flex-column gap-3 justify-content-center text-center mt-3">
            <img src={bizkaLogo} alt="bizka logo" className="mx-auto" style={{ width: "150px" }}/>
            <h3 className="h3">Create an account</h3>
          </div>

          <div className="row justify-content-center gap-3 my-3">
            <a href="https://" className="btn btn-secondary col-md-5">
              <span className="row align-items-center justify-content-center gap-1">
                <FontAwesomeIcon icon={faGoogle} className="col-md-1" />
                Sign up with Google
              </span>
            </a>
            <a href="https://" className="btn btn-secondary col-md-5">
              <span className="row align-items-center justify-content-center gap-1">
                <FontAwesomeIcon icon={faFacebook} className="col-md-1" />Sign up with Facebook
              </span>
            </a>
          </div>

          {errorss ? (
            <div className="alert alert-danger"> {errorss}</div>
          ) : null}
          <input 
            type="text" 
            placeholder="First Name" 
            name="first_name" 
            className={formik.touched.first_name && formik.errors.first_name ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
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
          <label className="my-3"><input type="checkbox" onClick={() => setShowPwd(!showPwd)} /> Show Password</label>
          <div className="text-center mx-3">
            <button className="btn btn-bizka w-100 p-3 my-3" type="submit">
              Get Started
            </button>{" "}
          </div>
          <p className="text-center">
            <span>Already have an account? </span>
            <Link className="text-warning" to="/accounts/login">Login</Link>
          </p>
        </form>
      </section>
    </article>
  );
};

export default Register;
