import flexImg from "../assets/About_img_1.jpeg";
import flexImg2 from "../assets/About_img_2.jpeg";
import flexImg3 from "../assets/About_img_3.jpeg";
const About = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-md-content-between border border-success p-4">
        <div className="col p-4">
          <h1 className="pb-4">
            We want to help Data <br /> Analysts build their career
          </h1>
          <p>
            We want to help Data Analysts increase their <br /> chances of
            getting hired by making it easier <br /> and faster to share their
            works on a public <br /> platform where anyone could see and <br />{" "}
            understand it at a glance.
          </p>
        </div>
        <div className="col p-4 ml-auto" width={"50%"}>
          <img
            src={flexImg}
            className="fluid"
            width={450}
            height={300}
            alt=""
          />
        </div>
      </div>
      <div className="row p-4">
        <div className="col">
          <img src={flexImg2} width={450} height={300} alt="" />
        </div>
        <div className="col">
          <h1>Our Story</h1>
          <p className="font-weight-bold">
            Bizka started with a team of 7 persons who <br /> wanted to help
            creatives brand themselves <br /> online. On the search to focus on
            one creative <br />
            category, we found out that Data Analysts <br /> were finding it
            difficult to share their works <br /> online. This affected them
            during their job <br />
            hunt because many could not show a <br /> comprehensive breakdown of
            their works.
            <br /> The initiative to help Data Analysts solve this <br />{" "}
            problem was what birthed Bizka.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center">Leadership Team</h1>
        <div className="d-flex p-4">
          <div className="p-2 ">
            <img
              src={flexImg3}
              className="rounded border border-primary"
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
        </div>
        <div className="d-flex p-4">
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded"
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
          <div className="p-2">
            <img
              src={flexImg3}
              className="rounded "
              width={170}
              height={140}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
