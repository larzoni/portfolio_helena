import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ComputersCanvas from "./Computer";
import bgvideo from "../assets/videos/bgvideo.mp4";
import myResume from "../assets/documents/resume.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <Router>
      <section className="banner" id="home">
        <video
          className="background-video"
          src={bgvideo}
          autoPlay
          loop
          muted
        ></video>

        <Container>
          <Row className="align-items-center noGutters">
            <Col className="introduction">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__backInLeft" : ""
                    }
                  >
                    <h1>Hi, I'm Helena!</h1>
                    <p>
                      I'm a Six Feet tall and Creative Frontend Developer
                      looking for my Intern<span>SHIP</span>, have you seen it?
                      <br></br>
                      <br></br>I have experience working with React, Next.js,
                      Javascript, CSS, HTML and Node.js
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = myResume;
                          link.download = "resume.pdf";
                          link.click();
                        }}
                      >
                        Download my Resume <AiOutlineDownload size={35} />
                      </button>
                    </div>
                    <span className="navbar-text d-flex justify-content-center">
                      <HashLink to="#connect">
                        <button className="vvd">
                          <span>Let’s Connect</span>
                        </button>
                      </HashLink>
                    </span>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={6}>
              {/* <img src={headerImg} alt="Header Img" /> */}
              <div className="computerCanvas">
                <ComputersCanvas />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
