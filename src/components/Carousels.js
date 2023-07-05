import Carousel from "react-bootstrap/Carousel";
import reactbanner from "../assets/images/reactbanner.png";
import djangobanner from "../assets/images/djangobanner.png";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={reactbanner} alt="First slide" /> */}
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={djangobanner} alt="Second slide" /> */}
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={reactbanner} alt="Third slide" /> */}
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
