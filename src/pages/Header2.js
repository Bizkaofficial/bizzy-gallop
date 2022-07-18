import Logo from "../assets/logo.PNG";

const Header2 = () => {
  return (
    <section className="d-flex justify-content-between align-items-center">
      <img src={Logo} alt="" width={181} height={42} />
      <div>
        <a href="">Disover</a>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <a href="">Add a project</a>
        <button type="text" className="btn btn-primary">
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default Header2;
