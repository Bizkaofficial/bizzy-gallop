import { Link, useNavigate } from "react-router-dom";
import "../index.css"
import Footer from "../layouts/Footer";
// import Navbar from "../layouts/Navbar";
import cardImg from "../assets/cards.jpg";
import Header1 from "../layouts/Header1";

const Home = () => {

    const navigate = useNavigate();

  return (
    <>
      <Header1 />
      <section className="container h-50">
        <div className="row pt-3">
          <div className="col-md-6 align-self-center">
            <h2>A Portfolio Hosting Platform for Data Analysts</h2>
            <p>
              No more stress. Upload your works. Share them to anyone. Increase
              your competence.
            </p>
            <button
              className="text-white btn bg-bizka mb-3"
              onClick={() => navigate("/accounts/register")}
            >
              Get Started for free
            </button>
          </div>
          <div className="shadow col-md-6 px-0">
            <img src={cardImg} className="w-100 w-75" alt="bizka graph" />
          </div>
        </div>
      </section>
      <section className="py-5">
        <h2 className="text-center">Features</h2>
        <div className="container">
          <div className="row card-group gap-3">
            <div className="card col-md-3 px-0">
              <img src={cardImg} alt="cardImg" className="card-img-top" />
              <p className="card-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolorem quis nisi. Error minima vel excepturi
                molestias quo laboriosam dolor cumque, vero incidunt illum
                deleniti. Aperiam odio provident nesciunt.
              </p>
            </div>
            <div className="card col-md-3 px-0">
              <img src={cardImg} alt="cardImg" className="card-img-top" />
              <p className="card-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolorem quis nisi. Error minima vel excepturi
                molestias quo laboriosam dolor cumque, vero incidunt illum
                deleniti. Aperiam odio provident nesciunt.
              </p>
            </div>
            <div className="card col-md-3 px-0">
              <img src={cardImg} alt="cardImg" className="card-img-top" />
              <p className="card-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolorem quis nisi. Error minima vel excepturi
                molestias quo laboriosam dolor cumque, vero incidunt illum
                deleniti. Aperiam odio provident nesciunt.
              </p>
            </div>
            <div className="card col-md-3 px-0">
              <img src={cardImg} alt="cardImg" className="card-img-top" />
              <p className="card-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis dolorem quis nisi. Error minima vel excepturi
                molestias quo laboriosam dolor cumque, vero incidunt illum
                deleniti. Aperiam odio provident nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid h-50 bg-bizka">
        <div className="text-center container p-5">
          <p className="text-white h3">What is Bizka?</p>
          <p className="text-white mb-4">
            Bizka is a platform specifically made for data analysts to share
            their works to the public without using any forom of code.
          </p>
        </div>
        <div className="text-center text-white pt-0 pb-5">
          <img src="youtube" alt="youtube" />
          <span className="text-white">Watch video</span>
        </div>
      </section>

      <section className="container text-center py-5">
        <p className="h3 pt-3">From the Bizka Blog</p>
        <div className="row card-group gap-3 py-3">
          <div className="card col-md-4 px-0">
            <img src={cardImg} alt="bizka card" className="card-img-top" />
            <p className="card-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              perspiciatis dolorem quis nisi. Error minima vel excepturi
              molestias quo laboriosam dolor cumque, vero incidunt illum
              deleniti. Aperiam odio provident nesciunt.
            </p>
          </div>
          <div className="card col-md-4 px-0">
            <img src={cardImg} alt="bizka card" className="card-img-top" />
            <p className="card-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              perspiciatis dolorem quis nisi. Error minima vel excepturi
              molestias quo laboriosam dolor cumque, vero incidunt illum
              deleniti. Aperiam odio provident nesciunt.
            </p>
          </div>
          <div className="card col-md-4 px-0">
            <img src={cardImg} alt="bizka card" className="card-img-top" />
            <p className="card-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              perspiciatis dolorem quis nisi. Error minima vel excepturi
              molestias quo laboriosam dolor cumque, vero incidunt illum
              deleniti. Aperiam odio provident nesciunt.
            </p>
          </div>
        </div>
        <Link to="" className="link-black">
          Read more Blog Posts
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home;