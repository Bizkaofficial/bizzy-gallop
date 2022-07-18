import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";

const ProjectDetails = () => {
  return (
    <div className="container-fluid-lg mx-5 my-4">
      <h3>Project Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <h3 className="mt-3">Background</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu arcu dictum
        elementum at. Orci at nunc ut a id gravida id quis nunc. Aliquet massa
        egestas a quisque sed lobortis vitae risus. Tortor imperdiet scelerisque
        integer venenatis. Vestibulum, nibh morbi suspendisse eget mauris
        tempus. Ultrices morbi mattis dolor faucibus morbi odio. Eros, molestie
        in semper sapien. Blandit semper consequat rutrum nullam iaculis
        placerat sollicitudin nunc. Mus aenean eu adipiscing curabitur maecenas.
        Nisi vulputate lacinia arcu, est. Viverra nisl, ut accumsan, urna leo
        tempor orci. Adipiscing erat et egestas pellentesque id vitae luctus
        est. Viverra ut vel, massa nisi. Blandit phasellus ac urna suspendisse.
        Dictum tortor nunc libero feugiat scelerisque..
      </p>
      <h3 className="mt-5">Goal</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
        pellentesque hac turpis egestas. Nibh consectetur et vitae congue lacus.
        At nec arcu dolor mattis massa. Sem ornare tempor eget ipsum quam.
        Volutpat, nisl fermentum vitae est curabitur lectus sit. Porta donec et
        tellus rhoncus quis ut. Tellus viverra sit imperdiet dictumst leo duis
        nunc, auctor auctor. Sed dui id facilisi id urna, et nibh. Neque id
        viverra massa vitae. Nisl tincidunt orci aliquet diam tellus.
      </p>
      <h3 className="mt-5">Tools</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
        pellentesque hac turpis egestas. Nibh consectetur et vitae congue lacus.
        At nec arcu dolor mattis massa. Sem ornare tempor eget ipsum quam.
        Volutpat, nisl fermentum vitae est curabitur lectus sit. Porta donec et
        tellus rhoncus quis ut. Tellus viverra sit imperdiet dictumst leo duis
        nunc, auctor auctor. Sed dui id facilisi id urna, et nibh. Neque id
        viverra massa vitae. Nisl tincidunt orci aliquet diam tellus.
      </p>
      <h3 className="mt-5">Duration</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
        pellentesque hac turpis egestas. Nibh consectetur et vitae congue lacus.
        At nec arcu dolor mattis massa. Sem ornare tempor eget ipsum quam.
        Volutpat, nisl fermentum vitae est curabitur lectus sit. Porta donec et
        tellus rhoncus quis ut. Tellus viverra sit imperdiet dictumst leo duis
        nunc, auctor auctor. Sed dui id facilisi id urna, et nibh. Neque id
        viverra massa vitae. Nisl tincidunt orci aliquet diam tellus.
      </p>
      <div className="container-fluid-lg d-flex justify-content-around">
        <div className="col">
          <img src={image4} width={365} height={286} />
        </div>
        <div className="col">
          <img src={image8} width={365} height={286} />
        </div>
        <div className="col">
          <img src={image7} width={365} height={286} />
        </div>
      </div>

      <h3 className="mt-3">Interpretation</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
        pellentesque hac turpis egestas. Nibh consectetur et vitae congue lacus.
        At nec arcu dolor mattis massa. Sem ornare tempor eget ipsum quam.
        Volutpat, nisl fermentum vitae est curabitur lectus sit. Porta donec et
        tellus rhoncus quis ut. Tellus viverra sit imperdiet dictumst leo duis
        nunc, auctor auctor. Sed dui id facilisi id urna, et nibh. Neque id
        viverra massa vitae. Nisl tincidunt orci aliquet diam tellus.
      </p>
      <h3>Result</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
        pellentesque hac turpis egestas. Nibh consectetur et vitae congue lacus.
        At nec arcu dolor mattis massa. Sem ornare tempor eget ipsum quam.
        Volutpat, nisl fermentum vitae est curabitur lectus sit. Porta donec et
        tellus rhoncus quis ut. Tellus viverra sit imperdiet dictumst leo duis
        nunc, auctor auctor. Sed dui id facilisi id urna, et nibh. Neque id
        viverra massa vitae. Nisl tincidunt orci aliquet diam tellus.
      </p>
      <div className="container-fluid-lg d-flex justify-content-around">
        <div className="col">
          <img src={image9} width={365} height={286} />
        </div>
        <div className="col">
          <img src={image6} width={365} height={286} />
        </div>
        <div className="col">
          <img src={image5} width={365} height={286} />
        </div>
      </div>
      <div className="d-grid d-md-flex my-4">
        <button type="button" className="btn btn-primary me-md-4 px-4">
          Submit
        </button>
        <button type="submit" className="btn btn-outline-dark px-4">
          back
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
