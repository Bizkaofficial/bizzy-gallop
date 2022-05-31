import "../index.css";

const UserProfile = () => {
  return (
    <div className="container-lg">
      <div className="top"></div>
      <div className="row user_profile">
        <div className="col aside text-center" height={100}>
          <img src=" " alt=""></img>
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
        <div className="r_side col">
          <h1>About ME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Aliquet viverra etiam diam interdum suscipit velit integer. <br />{" "}
            Imperdiet leo nunc nulla volutpat phasellus. Nunc <br /> suspendisse
            ac facilisi eget quis at porta. Iaculis facilisi et <br /> vel, ut.
            Id volutpat, aliquet convallis elementum ornare <br /> turpis. Eu
            maecenas cras euismod nisi, dictum. Pretium.
          </p>
          <button>Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
