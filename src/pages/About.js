import flexImg from "../assets/About_img_1.jpeg";
import flexImg2 from "../assets/About_img_2.jpeg";
import flexImg3 from "../assets/About_img_3.jpeg";
import Footer from "../layouts/Footer";
import Header1 from "../layouts/Header1";
const About = () => {
  return (
    <>
      <Header1 />
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <h1 className="pb-2">
              We want to help Data Analysts build their career
            </h1>
            <p className="fs-5">
              We want to help Data Analysts increase their chances of getting
              hired by making it easier and faster to share their works on a
              public platform where anyone could see and <br /> understand it at
              a glance.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={flexImg}
              className="about-img w-100 w-75"
              alt=""
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6">
            <img
              src={flexImg2}
              className="round w-100 w-75"
              alt=""
            />
          </div>
          <div className="col-md-6">
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
        
        <div className="my-5">
          <h1 className="text-center">Leadership Team</h1>
          <div className="d-flex flex-wrap justify-content-center">
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
          <div className="d-flex flex-wrap justify-content-center p-4">
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
      <Footer/>
    </>
  );
};

export default About;
