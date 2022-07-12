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
    <div className="container-fluid">
      <section className="container-fluid bg-bizka h-50">
      <div className="text-center container p-5">
          <p className="text-white h3">What is Bizka?</p>
          <p className="text-white mb-4">
            Bizka is a platform specifically made for data analysts to share
            their works to the public without using any forom of code.
          </p>
        </div>
      </section>
      <section className="user_profile row">
        <div className="col-md-4 aside text-center">
          <img className="userprofileimg1 mt-5" src={UserProfileImg1} alt="" />
          <h4 className="opacity-50">Name</h4>
          <h4 className="opacity-50">Headlines</h4>
          <div className="fs-5 fw-4 ">
            <a
              className="link-dark list-group text-decoration-none"
              href="#"
              alt=""
            >
              Personal Details
            </a>
            <a
              className="link-dark list-group text-decoration-none"
              href="#"
              alt=""
            >
              Professional Summary
            </a>
            <a
              className="link-dark list-group text-decoration-none"
              href="#"
              alt=""
            >
              Service Tools
            </a>
            <a className="link-dark text-decoration-none" href="#" alt="">
              Work Experience
            </a>
            <a
              className="link-dark list-group text-decoration-none"
              href="#"
              alt=""
            >
              Education
            </a>
            <a
              className="link-dark list-group text-decoration-none"
              href="#"
              alt=""
            >
              Course Certificate
            </a>
            <a className="link-dark text-decoration-none" href="#" alt="">
              Contact Info
            </a>
          </div>
        </div>
        <div className="col-md-4 offset-md-1 r_side">
          <div className="mb-5">
            <h1>About ME</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Aliquet viverra etiam diam interdum suscipit velit integer. <br />
              Imperdiet leo nunc nulla volutpat phasellus. Nunc <br />
              suspendisse ac facilisi eget quis at porta. Iaculis facilisi et
              <br /> vel, ut. Id volutpat, aliquet convallis elementum ornare
              <br /> turpis. Eu maecenas cras euismod nisi, dictum. Pretium.
            </p>
            <div className="float-end">
              <button className="btn btn-outline-dark">Add Project</button>
              <img src={carbon_copy} alt="" width={37} heigth={37} />
            </div>
          </div>
          <div className="project-banner">
            <h4 className="mt-5">My Projects</h4>
            <div className="row row-cols-1 row-cols-md-2 my-5 g-4">
              <div className="col my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg2}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg3}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg4}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg5}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col my-3">
                <div className="card py-3 border-5">
                  <div className="card-text text-center">
                    <img src={Group} alt="" width={50} height={50} />
                    <p className="small text-primary">Add New Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-primary bottom"></div>
      </section>
      <div
        className="project--footer bg-primary"
        width={1430}
        heigth={446}
      ></div>
    </div>
  );
};

export default UserProfile;
