import Aboutus from "../assets/Aboutus.png";

const AboutUS = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col">
          <img src={Aboutus} width={594} height={425} alt="" />
        </div>
        <div className="col py-2">
          <h2 className="mb-4">Get in touch</h2>
          <p className="mb-5 py-3 lh-lg my-3">
            Have an enquiry or some feedback for us? Fill <br /> out the form
            below to contact our team
          </p>
          <input
            type="text"
            className="form-control my-5 py-3"
            id="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-control my-5 py-3"
            placeholder="Last Name"
            id="lastname"
          />
          <input
            type="email"
            className="form-control my-5 py-3"
            id="email"
            placeholder="Email Address"
          />
          <textarea
            className="form-control textarea-input my-4 bg-white p-4"
            rows="5"
            id="description"
            placeholder="Description"
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
