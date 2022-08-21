const ProfilePageCourse = () => {
  return (
    <section className="container my-4">
      <button type="button" className="btn btn-primary d-block mx-auto my-5 ">
        Back to Profile
      </button>
      <div className="row">
        <div className="col">
          <p className="text-warning">Courses &amp; Certificates</p>
        </div>
        <div className="col bg-light border rounded-start rounded-end">
          <form className="my-5 mx-3">
            <input
              type="text"
              className="form-control text-input mb-3 border border-light"
              placeholder="Name of Certificates"
            />
            <input
              type="text"
              className="form-control text-input mb-3"
              placeholder="Host organisation"
            />
            <div className="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                This certificate doesnt expire
              </label>
            </div>
            <div id="" class="form-text mt-2">
              Issue Date
            </div>
            <div className="row row-cols-2 my-1 g-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control text-input mb-3"
                  placeholder="Starting From"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control text-input mb-3"
                  placeholder="Ending In"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control text-input mb-3"
                  placeholder="Expiry Date"
                />
              </div>
            </div>
            <div className="mt-2">
            <h3>Details</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quis
              porttitor non viverra sed <br /> porttitor nulla nunc cras eget.
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
export default ProfilePageCourse;
