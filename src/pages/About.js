import flexImg from "../assets/About_img_1.jpeg";
import flexImg2 from "../assets/About_img_2.jpeg";
import flexImg3 from "../assets/About_img_3.jpeg";
import "../index.css";
const About = () => {
  return (
    <div className="container-lg about">
      <div className="d-flex justify-content-around p-4 mt-4">
        <div>
          <h1 className="pb-5">
            We want to help Data <br /> Analysts build their career
          </h1>
          <p className="body-text">
            We want to help Data Analysts increase their <br /> chances of
            getting hired by making it easier <br /> and faster to share their
            works on a public <br /> platform where anyone could see and <br />{" "}
            understand it at a glance.
          </p>
        </div>
        <div className="p-2">
          <img
            src={flexImg}
            className="about-img"
            width={470}
            height={300}
            alt=""
          />
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center p-2">
        <div className="p-4 ">
          <img
            src={flexImg2}
            className=" round "
            width={500}
            height={330}
            alt=""
          />
        </div>
        <div className="p-4">
          <h1>Our Story</h1>
          <p className="body-text">
            Bizka started with a team of 7 persons who <br /> wanted to help
            creatives brand themselves <br /> online. On the search to focus on
            one creative <br />
            category, we found out that Data Analysts <br /> were finding it
            difficult to share their works <br /> online. This affected them
            during their job <br />
            hunt because many could not show a <br /> comprehensive breakdown of
            their works.
            <br />{" "}
            <span className="down">
              The initiative to help Data Analysts solve this <br /> problem was
              what birthed Bizka.
            </span>
          </p>
        </div>
      </div>
      <div className="mt-1">
        <h1 className="text-center">Leadership Team</h1>
        <div className="flex-class p-4">
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
        <div className="flex-class p-2">
          <div className="p-2 item">
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
  );
};

export default About;
