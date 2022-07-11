const ProjectUpload = () => {
 return (
    <div className="projectUpload">
    <button type="button" className="btn btn-outline-secondary mx-3 my-3 float-end">Upload</button> <br />
    <div className="mx-3 my-3">
    <form className="projectForm">
        <label className="form-label h5" for="ProjectTitle">ProjectTitle</label>
        <input className="form-control text-input" type="text" /> <br />

        <label className="form-label h5" for="ProjectBackground" >Project Background</label> <br />
        <textarea className="form-control textarea-input" rows="5" id="project background" name="text"></textarea> <br />

        <label className="form-label h5" for="Goal">Goal</label> <br />
        <input className="form-control text-input" type="text" /> <br />

        <label className="form-label h5" for="Result">Result</label> <br />
        <input className="form-control text-input" type="text" /> <br />

        <label className="form-label h5" for="Duration">Duration</label> <br />
        <input className="form-control text-input" type="text" /> <br />

        <label className="form-label h5" for="Interpretation">Interpretation</label> <br />
        <textarea class="form-control textarea-input" rows="5" id="comment" name="text"></textarea> <br />

        <label className="form-label h5" for="ToolsUsed" >Tools Used</label> <br />
        <textarea class="form-control txtarea-input" rows="5" id="comment" name="text"></textarea> <br />

        <label className="form-label h5" for="Video" >Add Video Format</label>
        <p>Please kindly ensure the video is not more than 10 mb in size 3gp, <br /> Mp4 supported format.</p>
        <input className="form-control text-input" type="text" /> <br />

    </form>
    </div>
    <button type="button" class="btn btn-primary mx-3 my-3 float-end ml-4">preview</button> 
    </div>
 )   
}

export default ProjectUpload;