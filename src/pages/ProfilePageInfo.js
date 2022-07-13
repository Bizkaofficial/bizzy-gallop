const ProfilePageInfo = () => {
  return (
    <div className="container my-5">
      <h3 >Online Presence</h3>
      <div className="row row-cols-4 my-5">
        <div className="col">
        <ul class="d-grid gap-5 fs-5 col-2 text-center">
          <li className="list-group">Linked in</li>
          <li className="list-group">Twitter</li>
          <li className="list-group">Facebook</li>
          <li className="list-group">Youtube</li>
          <li className="list-group">Pinterest</li>
          <li className="list-group">Instagram</li>
          <li className="list-group">Medium</li>
          <li className="list-group">Github</li>
          <li className="list-group">wordpress</li>
          <li className="list-group">Telegram</li>
          </ul>
        </div>
        <div className="col d-grid gap-1 col-2">
          <button type="button" className=" btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
          <button type="button" className="btn btn-secondary text-dark rounded-pill">
            add link
          </button> <br />
        </div>
        <div className="col offset-md-4 lh-lg text-center">
         <p className="fs-5">Custom URL</p>
         <p className="fs-5">Link title</p>
         <p className="fs-5">Enter URL</p>
         <p className="fs-5 mt-5">ADD</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageInfo;
