import flexImg from "../assets/About_img_1.jpeg";
import flexImg2 from "../assets/About_img_2.jpeg";
import flexImg3 from "../assets/About_img_3.jpeg";
import Header1 from "../pages/Header1";
const About = () => {
  return (
    <>
      <Header1 />
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 mx-auto my-5">
          <div className="col">
            <h1 className="pb-4">
              We want to help Data Analysts build their career
            </h1>
            <p className="fs-5">
              We want to help Data Analysts increase their chances of getting
              hired by making it easier and faster to share their works on a
              public platform where anyone could see and <br /> understand it at
              a glance.
            </p>
          </div>
          <div className="col">
            <img
              src={flexImg}
              className="about-img"
              width={470}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="row ">
          <div className="col p-4 ">
            <img
              src={flexImg2}
              className=" round "
              width={500}
              height={330}
              alt=""
            />
          </div>
          <div className="col">
            <h1>Our Story</h1>
            <p className="fs-5">
              Bizka started with a team of 7 persons who wanted to help
              creatives brand themselves online. On the search to focus on one
              creative category, we found out that Data Analysts were finding it
              difficult to share their works online. This affected them during
              their job hunt because many could not show a comprehensive
              breakdown of their works.
              <br />
              <div className="mt-4">
                The initiative to help Data Analysts solve this <br /> problem
                was what birthed Bizka.
              </div>
            </p>
          </div>
        </div>
        <div className="mt-1">
          <h1 className="text-center">Leadership Team</h1>
          <div className="d-flex justify-content-center p-4">
            <div className="p-2 ">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex justify-content-center p-4">
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
            <div className="p-2">
              <img
                src={flexImg3}
                className="item"
                width={170}
                height={160}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
