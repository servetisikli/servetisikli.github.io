import Carousel from "react-bootstrap/Carousel";
// import software from "../assets/images/software.svg";
// import react from "../assets/images/react.svg";
// import django from "../assets/images/django.svg";

const sliderStyles = {
  backgroundColor: "#001C30",
  height: "50vh",
  width: "100vw",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  color: "orange",
  fontSize: "34px",
};

const sliderInfos = {
  sliderOne: "Software Development",
  sliderOneTitle: "Digital Solutions",
  sliderOneInfo:
    "Technology-based innovation solving problems with digital tools.",
  sliderTwo: "React Development",
  sliderTwoTitle: "Project Management",
  sliderTwoInfo:
    "An application designed to plan, track, and efficiently manage projects.",
  sliderTree: "Django Development",
  sliderTreeTitle: "E-commerce Platform",
  sliderTreeInfo:
    "A secure, scalable online trading solution that simplifies e-commerce.",
};

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={software} alt="First slide" /> */}
        <slider style={sliderStyles}>{sliderInfos.sliderOne}</slider>
        <Carousel.Caption>
          <h3>{sliderInfos.sliderOneTitle}</h3>
          <p>{sliderInfos.sliderOneInfo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={react} alt="Second slide" /> */}
        <slider style={sliderStyles}>{sliderInfos.sliderTwo}</slider>
        <Carousel.Caption>
          <h3>{sliderInfos.sliderTwoTitle}</h3>
          <p>{sliderInfos.sliderTwoInfo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={django} alt="Third slide" /> */}
        <slider style={sliderStyles}>{sliderInfos.sliderTree}</slider>
        <Carousel.Caption>
          <h3>{sliderInfos.sliderTreeTitle}</h3>
          <p>{sliderInfos.sliderTreeInfo}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
