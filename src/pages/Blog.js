import Frame47 from "../assets/Frame47.png";
import Frame48 from "../assets/Frame48.png";
import Frame49 from "../assets/Frame49.png";
import Frame50 from "../assets/Frame50.png";

const Blog = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div>
          <h1 className="mb-4">Data is Life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, dis
            pulvinar purus ultricies posuere nisi justo, placerat cum
            pellentesque primis tempus accumsan aenean. Cras mattis sociosqu
            accumsan lobortis penatibus et odio tempus, suscipit
          </p>
        </div>
        <div>
          <img src={Frame47} alt="" width={575} height={250} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <div className="d-flex">
        <img src={Frame48} alt="" width={655} height={405} />
        <div className="pt-4">
          <img src={Frame49} alt=" " width={575} height={245} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          </p>
        </div>
      </div>
      <h4>Latest Posts</h4>
      <hr />
      <div className="d-flex">
        <img src={Frame50} width={575} height={250} alt="" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
        </h4>
      </div>
    </div>
  );
};
export default Blog;
