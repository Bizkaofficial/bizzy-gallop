import Aboutus from "../assets/Aboutus.png";
import Footer from "../layouts/Footer";
import Header1 from "../layouts/Header1";

const Contact = () => {
  return (
    <>
      <Header1 />
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <img src={Aboutus} className="w-100" height={425} alt="" />
          </div>
          <div className="col-md-6 py-2">
            <h2 className="mb-2">Get in touch</h2>
            <p className="mb-2 lh-lg">
              Have an enquiry or some feedback for us? Fill out the form
              below to contact our team
            </p>
            <input
              type="text"
              className="form-control mb-3"
              id="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Last Name"
              id="lastname"
            />
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              placeholder="Email Address"
            />
            <textarea
              className="form-control textarea-input mb-3 bg-white"
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
      <Footer />
    </>
  );
};

export default Contact;
