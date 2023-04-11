import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import ComputersCanvas from "./Computer";
import headerImg from "../assets/img/headerinternship.svg";
import bgvideo from "../assets/videos/bgvideo.mp4";
import myResume from "../assets/documents/helena_resume.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Frontend Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
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
          <Col xs={12} md={6} xl={5}>
            <h1>
              {`Hi! I'm Helena, a `}
              <br></br>{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Frontend Developer", "Music Producer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <span className="tagline">
              I'm looking for my intern<span className="highlight">SHIP</span>,
              <br></br>
              Have you seen it?
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = myResume;
                  link.download = "helena_resume.pdf";
                  link.click();
                }}
              >
                Download my Resume <AiOutlineDownload size={35} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            {/* <img src={headerImg} alt="Header Img" /> */}
            <div className="computerCanvas">
              <ComputersCanvas />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
