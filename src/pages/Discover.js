import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Discover = () => {
  return (
    <>
      <Navbar />
        <div className='container'>
          <div className='d-flex flex-sm-row flex-column justify-content-around my-3'>
            <div className="p-2 border rounded-pill mb-2">
              <p className="text-center h6 px-2">Descriptive</p>
            </div>
            <div className="p-2 border rounded-pill mb-2">
              <p className="text-center h6 px-2">Diagonostic</p>
            </div>
            <div className="p-2 border rounded-pill mb-2">
              <p className="text-center h6 px-2">Inferential</p>
            </div>
            <div className="p-2 border rounded-pill mb-2">
              <p className="text-center h6 px-2">Prescriptive</p>
            </div>
            <div className="p-2 border rounded-pill mb-2">
              <p className="text-center h6 px-2">Predictive</p>
            </div>
          </div>

          <p className="text-center h4 py-3">Project featured today by our curators</p>
          <div className='row my-4'>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row my-4'>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row bizka-discover mb-5 mt-4'>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column bizka-bottom-align-text">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-fluid">
                <img src={require("../assets/unsplash_A.png" )} className='card-img' alt="cardImg"/>
                <div className="card-img-overlay d-flex flex-column">
                  <h6 className="text-white mt-auto">Arivest Data Analysis for 2010</h6>
                  <p className="text-white">Francis Aderogbin</p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
    </>
  )
}

export default Discover;