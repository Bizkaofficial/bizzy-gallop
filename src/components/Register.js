import { useFormik } from "formik";
import axios from 'axios';
// import logo from "../assets/logo.PNG";
// import bgRegister from '../assets/sign-up.jfif';
import * as Yup from "yup";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPwd, setShowPwd] = useState(false);

    const formik = useFormik({
        initialValues : {
            fullname: "",
            username: "",
            email: "",
            phone : "",
            password: "",
            confirmPassword: ""
        },
        validate: (values) => {
            let errors = {};
            let regexForPassword = /^([a-zA-z]{1,}[0-9]{1,}[!@#$%^&*()_+?><]{1,})$/
            if(values.password !== values.confirmPassword) {
                errors.confirmPassword = "Must be the same with password";
            }
            if (!regexForPassword.test(values.password)) {
                errors.password = "Password must contain the following in this order: an alphabet, a number and a special character";
            }
            return errors;
        },
        validationSchema : Yup.object({
            fullname: Yup.string().required("Required"),
            username: Yup.string().required("Required"),
            email: Yup.string().required("Required").email("Not an email"),
            phone: Yup.number().required("Required")
        }),
        onSubmit: (values) => {
            // axios.post("https://bizka.herokuapp.com/accounts/register/", {
            //     full_name: values.fullname,
            //     username: values.username,
            //     email: values.email,
            //     phone_number: values.phone,
            //     password: values.password
            // })
            // .then(res => {
            //     console.log(res);
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            console.log(values);
            formik.resetForm({values: ""});
        }
    })

    // console.log(formik)

    const addStyle = {
        backgroundImage: `url('/assets/registerbg.jfif')`,
        // backgroundColor: `rgba(70, 100, 190, 0.6)`,
        width: '50vw',
        height: '100vh',
        backgroundSize: "cover"
    }

  return (
    <>
        <section className="">
            <div className="d-flex flex-sm-column flex-md-row flex-lg-row">
                <div className="col-6" style={addStyle} >
                    <div className="text-center mt-5 py-5 col-6 container">
                        <div className="mt-5 p-5"></div>
                        <div className="text-center container">
                            <p className="text-white text-center h3"> <Link className="text-white text-decoration-none" to="/login">Sign in</Link> or <Link to="/register" className="text-white text-decoration-none">Sign up</Link> to begin sharing your works </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 container mt-sm-4 px-sm-4">
                    <form onSubmit={formik.handleSubmit} className="p-3 mx-5" >
                        <div className="text-center mt-3">
                            <img src="/assets/logo.PNG" alt="logo" className="text-center" style={{width: "150px"}} />
                            <h3 className="h3">Create an account</h3>
                        </div>
                        {/* {!formik.isValid ? <div className="alert alert-danger"> Please fill all the fields</div> : null} */}
                        <input 
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        className={(formik.touched.fullname && formik.errors.fullname) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.fullname ? <div className="text-danger" >{formik.errors.fullname}</div> : null}

                        <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        className={(formik.touched.username && formik.errors.username) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.username ? <div className="text-danger" >{formik.errors.username}</div> : null}

                        <input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        className={(formik.touched.email && formik.errors.email) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email ? <div className="text-danger" >{formik.errors.email}</div> : null}

                        <input 
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        className={(formik.touched.phone && formik.errors.phone) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone ? <div className="text-danger" >{formik.errors.phone}</div> : null}

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

                        <input 
                        type={showPwd ? `text` : `password`}
                        placeholder="Password"
                        name="confirmPassword"
                        className={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? "my-2 bizka-form bizka-invalid" : "my-2 bizka-form"}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmPassword ? <div className="text-danger" >{formik.errors.confirmPassword}</div> : null}

                        <input type="checkbox" onClick={()=> setShowPwd(!showPwd)} /> Show Password

                        <div className="text-center mx-3"><button className="btn btn-bizka w-100 p-3 my-3" type="submit">Get Started</button> </div>
                        <p className="text-center">Already have an account? <Link className="text-warning" to="/accounts/login">Login</Link></p>
                    </form>                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Register;