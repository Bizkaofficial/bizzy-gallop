import Footer from "../layouts/Footer";
import Header1 from "../pages/Header1";
import Unsplash_A from "../assets/unsplash_A.png";
const Discover = () => {
  return (
    <>
      <Header1 />
      <div className="container-fluid my-5">
        <div className="d-grid d-md-flex my-4 gap-4 justify-content-center">
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
        <h3 className="text-center my-5">
          Projects featured today by our curators
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay">
                <div className="margin-top">
                  <h5 className="card-text ">Arivest Data Analysis for 2010</h5>
                  <p className="card-text">Francis Aderogbin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay">
                <div className="margin-top">
                  <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                  <p className="card-text">Francis Aderogbin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-1">
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-1">
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white">
              <img
                className="card-img"
                src={Unsplash_A}
                width={424}
                height={464}
                alt="Card image"
              />
              <div className="card-img-overlay margin-top">
                <h5 className="card-text">Arivest Data Analysis for 2010</h5>
                <p className="card-text">Francis Aderogbin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
