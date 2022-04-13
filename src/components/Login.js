import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import '../index.css'

const Login = () => {

  const [showPwd, setShowPwd] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm({Values: ""});
    }
  });

  const addStyle = {
    backgroundImage: `url('/assets/registerbg.jfif')`,
    // backgroundColor: `rgba(70, 100, 190, 0.6)`,
    width: '50vw',
    height: '100vh',
    backgroundSize: "cover"
  }

  return (
    <div>
      <div className="d-flex flex-sm-column flex-md-row flex-lg-row">
                <div className="col-lg-6 col-md-12 col-sm-12" style={addStyle} >
                    <div className="text-center mt-5 py-5 col-6 container">
                        <div className="mt-5 p-5"></div>
                        <div className="text-center container">
                            <p className="text-white text-center h3"> <Link className="text-white text-decoration-none" to="/login">Sign in</Link> or <Link to="/register" className="text-white text-decoration-none">Sign up</Link> to begin sharing your works </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 container mt-4 px-4">
                    <form onSubmit={formik.handleSubmit} className="p-3 mx-5" >
                        <div className="text-center mt-3">
                            <img src="/assets/logo.PNG" alt="logo" className="text-center" style={{width: "150px"}} />
                            <h3 className="h3">Log in</h3>
                        </div>

                        <div className="g-signin2" data-onsuccess="onSignIn"></div>

                        <input 
                        type="text"
                        placeholder="Email/Username"
                        name="username"
                        className={(formik.touched.username && formik.errors.username) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.username ? <div className="text-danger" >{formik.errors.username}</div> : null}

                        <input 
                        type={showPwd ? `text` : `password`}
                        placeholder="Password"
                        name="password"
                        className={(formik.touched.password && formik.errors.password) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password ? <div className="text-danger" >{formik.errors.password}</div> : null}

                        <input type="checkbox" onClick={()=> setShowPwd(!showPwd)} /> Show Password

                        <div className="container text-center">
                          <Link to="/forgot-password" className="text-warning text-decoration-none" >Forgot Password?</Link>
                        </div>

                        <div className="text-center mx-3"><button className="btn btn-bizka w-100 p-3 my-3" type="submit">Log in</button> </div>
                        <p className="text-center">Don't have an account? <Link className="text-warning" to="/accounts/register">Register</Link></p>
                    </form>                    
                </div>
            </div>
    </div>
  )
}

export default Login;