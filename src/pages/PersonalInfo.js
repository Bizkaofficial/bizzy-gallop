import Ellipse4 from "../assets/Ellipse4.png";
import Ellipse5 from "../assets/Ellipse5.png";

const PersonalInfo = () => {
  return (
    <section className="my-4">
      <div className="text-center">
        <button type="button" className="btn btn-primary">
          Back to Profile
        </button>
      </div>
      <div className="row mx-auto my-5">
        <div className="col position-relative">
          <p className="text-warning fw-semibold fs-4 mx-4">Personal details</p>
        </div>
        <div className="info--form col mx-5 bg-light shadow-lg ">
          <form className=" my-5 mx-3">
            <div className="text-center mb-5">
              <img
                src={Ellipse4}
                width={178}
                height={191}
                className=""
                alt=""
              />
              <img
                className="position-absolute top-50 start-60"
                src={Ellipse5}
                alt=""
              />
            </div>

            <div className="mb-2 ">
              <input
                type="text"
                className="form-control form-item p-3"
                placeholder="First Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-item p-3"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-item p-3"
                placeholder="Location"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-item p-3"
                placeholder="Headline"
              />
            </div>
            <div className="">
              <textarea
                rows="5"
                className="form-control form-item textarea-input p-3 bg-white"
                placeholder="Description"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
