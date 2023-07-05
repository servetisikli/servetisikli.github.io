import Carousel from "react-bootstrap/Carousel";
import software from "../assets/images/software.svg";
import react from "../assets/images/react.svg";
import django from "../assets/images/django.svg";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={software} alt="First slide" /> */}
        <div
          style={{
            backgroundColor: "#001C30",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: "orange",
            fontSize: "64px",
          }}
        >
          Software Development
        </div>
        <Carousel.Caption>
          <h3>Digital Solutions</h3>
          <p>
            Technology-based innovation solving problems with digital tools.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={react} alt="Second slide" /> */}
        <div
          style={{
            backgroundColor: "#001C30",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: "orange",
            fontSize: "64px",
          }}
        >
          React Development
        </div>
        <Carousel.Caption>
          <h3>Project Management</h3>
          <p>
            An application designed to plan, track, and efficiently manage
            projects.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={django} alt="Third slide" /> */}
        <div
          style={{
            backgroundColor: "#001C30",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: "orange",
            fontSize: "64px",
          }}
        >
          Django Development
        </div>
        <Carousel.Caption>
          <h3>E-commerce Platform</h3>
          <p>
            A secure, scalable online trading solution that simplifies
            e-commerce.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
