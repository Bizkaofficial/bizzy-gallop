const ProfilePageWorkExp = () => {
  return (
    <section className="container my-4">
      <button type="button" className="btn btn-primary d-block mx-auto my-5">
        Back to Profile
      </button>
      <div className="row">
        <div className="col">
          <p className="text-warning">Work Experience</p>
        </div>
        <div className="col bg-light border rounded-start rounded-end">
          <form className="my-5 mx-3">
            <input
              type="text"
              className="form-control text-input mb-3"
              placeholder="Company/Organisation"
            />
            <input
              type="text"
              className="form-control text-input mb-3"
              placeholder="Position"
            />
            <input
              type="text"
              className="form-control text-input mb-3"
              placeholder="Location"
            />
            <div class="row g-3">
              <div class="col">
                <input
                  type="text"
                  className="form-control text-input mb-3"
                  placeholder="starting from"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  className="form-control text-input mb-3"
                  placeholder="Ending in"
                />
              </div>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Currently working here
              </label>
            </div>
            <div className="mt-5">
              <h3>Details</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Quis porttitor non viverra sed <br /> porttitor nulla nunc cras
                eget.
              </p>
              <button type="button" className="btn btn-primary">Add</button>
              <button type="button" className="offset-sm-3 btn btn-primary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePageWorkExp;
