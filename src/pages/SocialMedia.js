const SocialMedia = () => {
  return (
    <>
      <section className="container">
        <h2 className="display-5 m-5">Online Presence</h2>
        <div className="row my-2 g-4">
          <div className="col-6 col-sm-12 bg-success d-flex flex-row">
            <p className="">Linked In</p>
            <button type="button" className="d-inline-block btn btn-light rounded-pill">
              add link
            </button>
            <p className="align-self-end">Custom URL</p>
          </div>
        </div>
        <div className="row my-2 g-4">
          <div className="col-4 d-flex">
            <p className="mx-auto">Twitter</p>
            <button type="button" className="btn btn-light rounded-pill">
              add link
            </button>
            <p className="">Link title</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-row">
            <p className="my-2 px-5">Facebook</p>
            <button className="btn btn-light rounded-pill">add link</button>
            <p className="">Enter URL</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-row">
            <p className="my-2 px-5">Pinterest</p>
            <button className="btn btn-light rounded-pill">add link</button>
            <p className=" mt-5">ADD</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
