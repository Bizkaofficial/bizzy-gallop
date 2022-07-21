const ProjectUpload = () => {
  return (
    <div className="projectUpload ">
      <div className="text-center offset-sm-5 align-item-end">
        <button
          type="button"
          style={{ background: "#CBE6FF" }}
          className="btn"
        >
          Upload
        </button>
        <p className="fs-5 d-inline ms-3">PNG/JPG/xlsx</p>
      </div>

      <br />
      <div className="mx-3">
        <form className="projectForm">
          <label className="form-label fs-3 fw-bold" for="ProjectTitle">
            Project Title
          </label>
          <input className="form-control text-input" type="text" /> <br />
          <label className="form-label fs-3 fw-bold" for="ProjectBackground">
            Project Background
          </label>
          <br />
          <textarea
            className="form-control textarea-input"
            rows="5"
            id="project background"
            name="text"
          ></textarea>
          <br />
          <label className="form-label fs-3 fw-bold" for="Goal">
            Goal
          </label>
          <br />
          <input className="form-control text-input" type="text" /> <br />
          <label className="form-label fs-3 fw-bold" for="Result">
            Result
          </label>
          <br />
          <input className="form-control text-input" type="text" /> <br />
          <label className="form-label fs-3 fw-bold" for="Duration">
            Duration
          </label>
          <br />
          <input className="form-control text-input" type="text" /> <br />
          <label className="form-label fs-3 fw-bold" for="Interpretation">
            Interpretation
          </label>
          <br />
          <textarea
            class="form-control textarea-input"
            rows="5"
            id="comment"
            name="text"
          ></textarea>
          <br />
          <label className="form-label fs-3 fw-bold" for="ToolsUsed">
            Tools Used
          </label>
          <br />
          <textarea
            class="form-control textarea-input"
            rows="5"
            id="comment"
            name="text"
          ></textarea>
          <br />
          <label className="form-label fs-3 fw-bold" for="Video">
            Add Video Format
          </label>
          <p className="fw-bold fs-5">
            Please kindly ensure the video is not more than 10 mb in size 3gp,{" "}
            <br /> Mp4 supported format.
          </p>
          <input className="form-control text-input mb-5" type="text" />
          <div className="text-end">
            <button type="button" class="btn btn-primary my-3 px-4 ">
              preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpload;
