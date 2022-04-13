import { Link, useNavigate } from "react-router-dom";
import "../index.css"
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {

    const navigate = useNavigate();

  return (
    <>
    <Navbar/>
        <section className="container h-50">
            <div className="row">
                <div className="col-6">
                    <h2>A portfolio Hosting Platform for Data Analysts</h2>
                    <p>No more stress. Upload your works. Share them to anyone. Increase your competence.</p>
                    <button className="text-white btn bg-bizka" onClick={() => navigate("/register")}>Get Started for free</button>
                </div>
                <div className="shadow col-6">
                    <img src="graphs" alt="graph" />
                </div>
            </div>    
        </section>
        <section className="m-3">
            <h2>Features</h2>
            <div className="card-group">
                <div className="card col-3 m-2">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
                <div className="card col-3 m-2">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
                <div className="card col-3 m-2">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
                <div className="card col-3 m-2">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
            </div>
        </section>
        <section className="container-fluid h-50 bg-bizka">
            <div className="text-center container">
                <p className="text-white h3">What is Bizka?</p>
                <p className="text-white mb-4">Bizka is a platform specifically made for data analysts to share  their works to the public without using any forom of code.</p>
            </div>
            <div className="text-center text-white">
                <img src="youtube" alt="youtube" />
                <span className="text-white">Watch video</span>
            </div>
        </section>

        <section className="container-fluid text-center">
            <p className="h3">From the Bizka Blog</p>
            <div className="card-group">
                <div className="card col-4 m-4">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
                <div className="card col-4 m-4">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
                <div className="card col-4 m-4">
                    <img src="cardImg" alt="cardImg" className="card-img-top" />
                    <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis dolorem quis nisi. Error minima vel excepturi molestias quo laboriosam dolor cumque, vero incidunt illum deleniti. Aperiam odio provident nesciunt.</p>
                </div>
            </div>
            <Link to="" className="link-black">Read more Blog Posts</Link>
        </section>
        <Footer/>
    </>
  )
}

export default Home;