import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame47 from "../assets/Frame47.png";
import Frame48 from "../assets/Frame48.png";
import Frame49 from "../assets/Frame49.png";
import Frame50 from "../assets/Frame50.png";
import Frame51 from "../assets/Frame51.png";
import Frame52 from "../assets/Frame52.png";
import Frame53 from "../assets/Frame53.png";
import Frame54 from "../assets/Frame54.png";
import Frame55 from "../assets/Frame55.png";
import Frame56 from "../assets/Frame56.png";
import Frame57 from "../assets/Frame57.png";
import Frame58 from "../assets/Frame58.png";
import Frame59 from "../assets/Frame59.png";
import Vector from "../assets/Vector.png";
import Footer from "../layouts/Footer";
import Header1 from "./Header1";

const Blog = () => {
  return (
    <>
    <Header1 />
    <div className="container">
      <div className="row mx-3">
        <div className="col-md-6 align-self-end">
          <h1 className="mb-5">Data is Life</h1>
          <p className="mt-4 lh-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-6">
          <img src={Frame47} className='w-100' height={250} />
          <p className="h5 mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={Frame48} className='w-100' height={405} />
        </div>
        <div className="col-md-6 align-self-end">
          <img src={Frame49} className='w-100' height={250} />
          <p className="h5 mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <h4 className="mx-3">Latest Posts</h4>
      <hr />
      <div className="row mt-5">
        <div className="col-md-7">
          <div className='firstCard'>
            <img alt='' src={Frame50} className='w-100' height={250} />
            <h4 className='px-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            </h4>
            <p className='px-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
              pulvinar purus ultricies posuere nisi justo, placerat cum
              pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
              accumsan lobortis penatibus et odio tempus, suscipit
            </p>
          </div>
          <div className='secondCard'>
            <img alt='' src={Frame51} className='w-100' height={245} />
            <h3 className='px-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            </h3>
            <p className='px-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
              pulvinar purus ultricies posuere nisi justo, placerat cum
              pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
              accumsan lobortis penatibus et odio tempus, suscipit
            </p>
          </div>
        </div>
        <div className="col-md-5 p-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control-lg w-75 border round"
              placeholder="Search bar"
              aria-label="Search bar"
              aria-describedby="basic-addon2"
            />
            <div className='input-group-append'>
              <span className="input-group-text bg-primary" id="basic-addon2">
                <img alt='' src={Vector} className='w-100'height={32}/>
              </span>
            </div>
          </div>
          <div className="bg-bizka-primary my-5 lh-lg text-light px-5 py-5">
            <p className="pb-5 font-weight-bold fs-5" >
              Register for free to receive relevant updates on latest Data
              Analysis
            </p>
            <p className="fs-4 pb-5">
              Create an account to receive our newsletter and promotions.
            </p>
            <div className='d-flex justify-content-center py-4'>
              <button type="button" className="btn btn-lg btn-light text-primary mb-5 rounded-pill px-4">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src={Frame52} className='w-100' height={245} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-6">
          <img src={Frame53} className='w-100' height={248} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col-md-6">
          <img src={Frame54} className='w-100' height={248} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-6">
          <img src={Frame55} className='w-100' height={245} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
      </div>
      <h4 className="pt-5 mt-5 mx-3">Read More Helpful Hints</h4>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <img src={Frame56} className='w-100' height={245} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-6">
          <img src={Frame57} className='w-100' height={248} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={Frame58} className='w-100' height={248} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-6">
          <img alt="" src={Frame59} className='w-100' height={245} />
          <h5 className='px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h5>
          <p className='px-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <button className="btn btn-bizka btn-lg rounded-pill">
          Load More
        </button>
      </div>
      <div className='row bg-bizka-primary p-5 mb-5'>
        <div className='col-md-6 p-3'>
          <p className='text-white fs-1' style={{fontWeight: 'bolder'}}>Ready to share your projects?</p>
        </div>
        <div className='col-md-6 p-3'>
          <div className='d-flex flex-column flex-md-row mt-4 px-2'>
            <button className='btn btn-lg btn-light text-primary mx-2 py-3 my-1 rounded-pill' style={{fontWeight: 'bold'}}>Let's get started</button>
            <button className='btn btn-lg border text-white mx-2 px-5 my-1 rounded-pill' style={{fontWeight: 'bold'}}>Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};
export default Blog;
