import Ellipse4 from "../assets/Ellipse4.png";
import Ellipse5 from "../assets/Ellipse5.png";

const PersonalInfo = () => {
  return (
    <section>
      <button type="button" className="btn btn-primary">
        Back to Profile
      </button>
      <div className="row">
        <div className="col">
          <p className="text-warning">Personal details</p>
        </div>
        <div className="col bg-light rounded-start rounded-end">
          <form>
            <img
              src={Ellipse4}
              width={178}
              height={191}
              className="rounded-circle"
              alt=""
            />
            <img src={Ellipse5} alt="" />
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Headline"
              />
            </div>
            <div>
              <textarea
                rows="5"
                className="form-control textarea-input"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
