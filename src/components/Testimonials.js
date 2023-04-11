import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComputersCanvas from "./Computer";
import "bootstrap/dist/css/bootstrap.min.css";

export const Testimonials = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Testimonials"];
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
    <section className="testimonials">
      <Container>
        <Col>
          <h1>
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Skills" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <h5 className="d-flex text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            quia placeat quae magnam cupiditate voluptatem consequatur sequi
            aliquam id animi, unde quo excepturi explicabo minima nobis iste
            tempora nesciunt? Sint.
          </h5>
        </Col>
        <div className="testimonials-wrapper">
          <Row className="align-items-center justify-content-center noGutters">
            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quia placeat quae magnam cupiditate voluptatem
                consequatur sequi aliquam id animi, unde quo excepturi explicabo
                minima nobis iste tempora nesciunt? Sint.
              </p>
            </Col>

            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quia placeat quae magnam cupiditate voluptatem
                consequatur sequi aliquam id animi, unde quo excepturi explicabo
                minima nobis iste tempora nesciunt? Sint.
              </p>
            </Col>
            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quia placeat quae magnam cupiditate voluptatem
                consequatur sequi aliquam id animi, unde quo excepturi explicabo
                minima nobis iste tempora nesciunt? Sint.
              </p>
            </Col>

            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quia placeat quae magnam cupiditate voluptatem
                consequatur sequi aliquam id animi, unde quo excepturi explicabo
                minima nobis iste tempora nesciunt? Sint.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
