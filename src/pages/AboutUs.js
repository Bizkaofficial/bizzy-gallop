import Aboutus from "../assets/Aboutus.png";

const AboutUS = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src={Aboutus} width={594} height={475} alt="" />
        </div>
        <div className="col">
          <h2>Get in touch</h2>
          <p>
            Have an enquiry or some feedback for us? Fill out the form below to
            contact our team
          </p>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="firstname"
          />
          <input
            type="text"
            className="form-control"
            placeholder="lastname"
            id="lastname"
          />
          <input
            type="text"
            classsName="form-control"
            id="email"
            placeholder="Email Address"
          />
          <textarea
            className="form-control textarea-input"
            rows="5"
            id="description"
            name="text"
          />
          <button type="text" className="btn btn-primary">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
