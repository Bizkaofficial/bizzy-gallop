import Unsplash_A from "../assets/Unsplash_A.png";
const Discover = () => {
  return (
    <div className="container-fluid">
      <div className="d-grid d-md-flex gap-3">
        <button type="text" className="btn btn-outline-dark  rounded-pill">
          Descriptive
        </button>
        <button type="text" className="btn btn-outline-dark  rounded-pill">
          Diagonistic
        </button>
        <button type="text" className="btn btn-outline-dark  rounded-pill">
          Inferential
        </button>
        <button type="text" className="btn btn-outline-dark  rounded-pill">
          Prescriptive
        </button>
        <button type="text" className="btn btn-outline-dark  rounded-pill">
          Predictive
        </button>
      </div>
      <h3>Projects featured today by our curators</h3>
    </div>
  );
};

export default Discover;
