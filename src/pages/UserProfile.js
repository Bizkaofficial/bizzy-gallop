import "../index.css";
import UserProfileImg1 from "../assets/userprofile1.png";
import UserProfileImg2 from "../assets/userprofile2.png";
import UserProfileImg3 from "../assets/userprofile3.png";
import UserProfileImg4 from "../assets/userprofile4.png";
import UserProfileImg5 from "../assets/userprofile5.png";

const UserProfile = () => {
  return (
    <div className="container-fluid">
      <div className="top"></div>
      <div className="user_profile row">
        <div className="col-md-4 aside text-center">
          <img className="userprofileimg1 mt-5" src={UserProfileImg1} alt="" />
          <h4 className="opacity-50">Name</h4>
          <h4 className="opacity-50">Headlines</h4>
          <div className="fs-5 fw-4 ">
            <a className="link-dark text-decoration-none" href="#" alt="">
              Personal Details
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Professional Summary
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Service Tools
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Work Experience
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Education
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Course Certificate
            </a>
            <br />
            <a className="link-dark text-decoration-none" href="#" alt="">
              Contact Info
            </a>
            <br />
          </div>
        </div>
        <div className="col-md-4 offset-md-1 r_side">
          <div className="article">
            <h1>About ME</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Aliquet viverra etiam diam interdum suscipit velit integer. <br />
              Imperdiet leo nunc nulla volutpat phasellus. Nunc <br />
              suspendisse ac facilisi eget quis at porta. Iaculis facilisi et
              <br /> vel, ut. Id volutpat, aliquet convallis elementum ornare
              <br /> turpis. Eu maecenas cras euismod nisi, dictum. Pretium.
            </p>
            <button className="btn btn-outline-dark rounded">Add Project</button>
            <img src="" alt="" width={37} heigth={37}/>
          </div>
          <div className="project-banner">
            <h4 className="mt-5">My Projects</h4>
            <div className="card-deck row">
              <div className="col-lg-5 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg2}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-lg-5 mt-3 mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg3}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-lg-5 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg4}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-lg-5 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={UserProfileImg5}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-lg-5 my-3 bg-success">
                <div className="card" width={326} heigth={285}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-primary bottom"></div>
      </div>
      <div
        className="project--footer bg-primary"
        width={1430}
        heigth={446}
      ></div>
    </div>
  );
};

export default UserProfile;
