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
        <div className="col">
          <p className="text-warning">Personal details</p>
        </div>
        <div className="col mx-5 bg-light border rounded-start rounded-end">
          <form className="my-5 mx-3">
            <div className="text-center mb-5">
              <img
                src={Ellipse4}
                width={178}
                height={191}
                className="rounded-circle"
                alt=""
              />
              <img src={Ellipse5} alt="" />
            </div>

            <div className="mb-2">
              <input
                type="text"
                className="form-control p-3"
                placeholder="First Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Location"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Headline"
              />
            </div>
            <div>
              <textarea
                rows="5"
                className="form-control textarea-input p-3 bg-white"
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
