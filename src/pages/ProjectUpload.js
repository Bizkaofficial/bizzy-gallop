const ProjectUpload = () => {
 return (
    <div className="projectUpload">
    <button type="button" className="btn btn-outline-secondary float-end">Upload</button> <br />
    <div className="mx-3 my-3">
    <form className="projectForm">
        <label className="form-label" for="ProjectTitle">ProjectTitle</label>
        <input className="form-control" type="text" /> <br />

        <label className="form-label" for="ProjectBackground" >Project Background</label> <br />
        <textarea class="form-control" rows="5" id="project background" name="text"></textarea> <br />

        <label className="form-label" for="Goal">Goal</label> <br />
        <input className="form-control" type="text" /> <br />

        <label className="form-label" for="Result">Result</label> <br />
        <input className="form-control" type="text" /> <br />

        <label className="form-label" for="Duration">Duration</label> <br />
        <input className="form-control" type="text" /> <br />

        <label className="form-label" for="Interpretation">Interpretation</label> <br />
        <textarea class="form-control" rows="5" id="comment" name="text"></textarea> <br />

        <label className="form-label" for="ToolsUsed" >Tools Used</label> <br />
        <textarea class="form-control" rows="5" id="comment" name="text"></textarea> <br />

        <label className="form-label" for="Video" >Add Video Format</label>
        <p>Please kindly ensure the video is not more than 10 mb in size 3gp, <br /> Mp4 supported format.</p>
        <input className="form-control" type="text" /> <br />

    </form>
    </div>
    <button type="button" class="btn btn-primary float-end ml-4">preview</button> 
    </div>
 )   
}

export default ProjectUpload;