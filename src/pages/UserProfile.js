import "../index.css";
import UserProfileImg1 from "../assets/userprofile1.png";
import UserProfileImg2 from "../assets/userprofile2.png";
import UserProfileImg3 from "../assets/userprofile3.png";
import UserProfileImg4 from "../assets/userprofile4.png";
import UserProfileImg5 from "../assets/userprofile5.png";
import carbon_copy from "../assets/carbon_copy-link.png";
import Group from "../assets/Group.png";

const UserProfile = () => {
  return (
    <div className="">
      <section className="top">
      </section>
      <section className="container-fluid row">
        <div className="col-md-4 aside rounded-top rounded-bottom text-center">
          <img className="userprofileimg1 mt-5" src={UserProfileImg1} alt="" />
          <h4 className="opacity-50">Name</h4>
          <h4 className="opacity-50">Headlines</h4>
          <div className="fs-4 fw-4 lh-lg my-5">
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Personal Details
            </a>
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Professional Summary
            </a>
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Service &amp; Tools
            </a>
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Work Experience
            </a>
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Education
            </a>
            <a
              className="link-dark list-group text-decoration-none mb-3"
              href="#"
              alt=""
            >
              Course &amp; Certificates
            </a>
            <a className="link-dark text-decoration-none" href="#" alt="">
              Contact Info
            </a>
          </div>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="mb-5">
            <h1>About ME</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              viverra etiam diam interdum suscipit velit integer. Imperdiet leo
              nunc nulla volutpat phasellus. Nunc suspendisse ac facilisi eget
              quis at porta. Iaculis facilisi et vel, ut. Id volutpat, aliquet
              convallis elementum ornare turpis. Eu maecenas cras euismod nisi,
              dictum. Pretium.
            </p>
            <div className="float-end d-flex">
              <button className="btn btn-outline-dark fs-5">Add Project</button>
              <div className="">
                <img src={carbon_copy} alt="" width={37} heigth={37} />
              </div>
            </div>
          </div>
          <div className="project-banner">
            <h4 className="mt-5">My Projects</h4>
            <div className="row row-cols-2 my-4 gy-4">
              <div className="col">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg2}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg3}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg4}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg5}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col my-3">
                <div className=" py-4 cardboard">
                  <div className="card-text text-center">
                    <img src={Group} alt="" width={50} height={50} />
                    <p className="small text-primary">Add New Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </section>
      <div className="h-100 p-5 my-5 text-white text-center bg-primary">
        <h2>In nulla viverra.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Faucibus vivamus egestas dui, velit cursus ut. At.
        </p>
        <button type="button" className="px-4 btn btn-light text-primary">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
