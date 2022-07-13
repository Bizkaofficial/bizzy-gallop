const profilePageCourse = () => {
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
          <form className="my-4">
            <input
              type="text"
              className="form-control text-input mb-3"
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
                This certifcate doesnt expire
              </label>
            </div>
            <div id="" class="form-text">Issue Date</div>
            <div className="row g-3">
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
          </form>
        </div>
      </div>
    </section>
  );
};
export default profilePageCourse;
