import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import musicproduction from "../assets/img/musicproduction.svg";
import processfacilitation from "../assets/img/processfacilitation.svg";
import projectmanagement from "../assets/img/projectmanagement.svg";
import uxui from "../assets/img/UI.svg";
import webdesign from "../assets/img/webdesign.svg";
import webdevelopment from "../assets/img/webdevelopment.svg";
import divider from "../assets/img/skills-project-div.svg";
import topdivider from "../assets/img/banner-skills-div.svg";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <div>
        <img
          src={topdivider}
          className="banner-skills-divider"
          alt="divider"
        ></img>
      </div>
      <Container>
        <div>
          <Row>
            <Col>
              <div className="skill-bx " id="skills">
                <h2>Skills </h2>
                <p>
                  Currently I'm studying to become a Frontend Developer at Hyper
                  Island and I also have a lot of previous experience from
                  running my sole proprietorship. These are some skills I've
                  obtained over the years through working with various projects
                  and teams!
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img
                      src={webdevelopment}
                      width={300}
                      alt="webdevelopment"
                    ></img>
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={webdesign} width={300} alt="webdesign"></img>
                    <h5>Web Design</h5>
                  </div>
                  <div className="item">
                    <img src={uxui} width={300} alt="uxui"></img>
                    <h5>UX/UI</h5>
                  </div>
                  <div className="item">
                    <img
                      src={processfacilitation}
                      width={300}
                      alt="processfacilitation"
                    ></img>
                    <h5>Process design and Facilitation</h5>
                  </div>
                  <div className="item">
                    <img
                      src={projectmanagement}
                      width={300}
                      alt="projectmanagement"
                    ></img>
                    <h5>Project Management & Working Agile</h5>
                  </div>
                  <div className="item">
                    <img
                      width={300}
                      src={musicproduction}
                      alt="musicproduction"
                    ></img>
                    <h5>Music Production</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <img
          src={divider}
          className="skills-project-divider"
          width={300}
          alt="divider"
        ></img>
      </div>
    </section>
  );
};
