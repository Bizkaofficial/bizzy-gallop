import Frame47 from "../assets/Frame47.png";
import Frame48 from "../assets/Frame48.png";
import Frame49 from "../assets/Frame49.png";
import Frame50 from "../assets/Frame50.png";
import Frame51 from "../assets/Frame51.png";

const Blog = () => {
  return (
    <div className="container-fluid ml-2">
      <div className="row mx-3">
        <div className="col-md-5">
          <h1 className="mb-4">Data is Life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-5 mx-3">
          <img src={Frame47} alt="" width={575} height={250} />
          <p className="h5 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
        <img src={Frame48} alt="" width={655} height={405} />
        </div>
        <div className="col-md-5 mx-3">
          <img src={Frame49} alt=" " width={575} height={245} />
          <p className="h5 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <h4 className="mx-3">Latest Posts</h4>
      <hr />
      <div className="row">
        <div className="col-md-5 mx-3">
          <img src={Frame50} width={575} height={250} alt="" />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
          <img src={Frame51} width={575} height={245} />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div className="col-md-4 mx-3">
          <div className="input-group offset-md-4">
            <input
              type="text"
              className="form-control-lg border round"
              placeholder="Search bar"
              aria-label="Search bar"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-primary" id="basic-addon2">
              @
            </span>
          </div>
          <div className="post--text align-self-center bg-primary my-5 lh-lg text-light px-5 py-5">
            <p className="fs-4">
              Register for free to receive relevant updates on latest Data
              Analysis
            </p>
            <p>Create an account to receive our newsletter and promotions.</p>
            <button
              type="button"
              class="btn btn-light text-primary offset-md-5"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
