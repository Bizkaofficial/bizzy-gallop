import "../index.css";
import UserProfileImg1 from "../assets/userprofile1.png";
import UserProfileImg2 from "../assets/userprofile2.png"
import UserProfileImg3 from "../assets/userprofile3.png"
import UserProfileImg4 from "../assets/userprofile4.png"
import UserProfileImg5 from "../assets/userprofile5.png"
const UserProfile = () => {
  return (
    <div className="container-fluid">
      <div className="top"></div>
      <div className="user_profile">
        <div className=" aside text-center">
          <img className="userprofileimg1" src={UserProfileImg1} alt=""></img>
          <h4>Name</h4>
          <h4>Headlines</h4>
          <a className="row" href="#" alt="">
            Personal Details
          </a>
          <a className="row" href="#" alt="">
            Professional Summary
          </a>
          <a className="row" href="#" alt="">
            Service Tools{" "}
          </a>
          <a className="row" href="#" alt="">
            {" "}
            Work Experience
          </a>
          <a className="row" href="#" alt="">
            Education
          </a>
          <a className="row" href="#" alt="">
            Course Certificate
          </a>
          <a className="row" href="#" alt="">
            Contact Info
          </a>
        </div>
        <div className="r_side">
          <div className="article">
            <h1>About ME</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Aliquet viverra etiam diam interdum suscipit velit integer. <br />{" "}
              Imperdiet leo nunc nulla volutpat phasellus. Nunc <br />{" "}
              suspendisse ac facilisi eget quis at porta. Iaculis facilisi et{" "}
              <br /> vel, ut. Id volutpat, aliquet convallis elementum ornare{" "}
              <br /> turpis. Eu maecenas cras euismod nisi, dictum. Pretium.
            </p>
            <button className="article_btn">Add Project</button>
          </div>
          <div className="p-4">
            <h4>My Projects</h4>
            <div className="card-group">
              <div className="card col-4 m-4">
                <img src={UserProfileImg2} alt="" className="card-img-top" />
              </div>
              <div className="card col-6 m-6">
                <img src={UserProfileImg3} className="card-img-top" />
              </div>{" "}
              <br />
              <div className="card col-6 m-6">
                <img src={UserProfileImg4} className="card-img-top" />
              </div>
              <div className="card col-6 m-6">
                <img src={UserProfileImg5} className="card-img-top" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-primary bottom"></div>
    </div>
  );
};

export default UserProfile;
