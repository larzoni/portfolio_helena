import { Container, Row, Col, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import skill1 from "../assets/img/html.svg";
import skill2 from "../assets/img/css.svg";
import skill3 from "../assets/img/react.svg";
import skill4 from "../assets/img/javascript.svg";
import skill5 from "../assets/img/next.svg";
import skill6 from "../assets/img/node.svg";

export const Toolbox = () => {
  return (
    <section className="toolbox-wrapper">
      <Container fluid>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__pulse" : ""}
            >
              <h2>Favorite Tools</h2>
              <Row>
                <Col sm={12} md={12}>
                  <section className="toolbox">
                    <Row xs={2} md={3}>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill1}
                              alt="Skill 1"
                              className="skill-icon"
                            />
                            <p>HTML</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill2}
                              alt="Skill 2"
                              className="skill-icon"
                            />
                            <p>CSS</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill3}
                              alt="Skill 3"
                              className="skill-icon"
                            />
                            <p>React</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill4}
                              alt="Skill 4"
                              className="skill-icon"
                            />
                            <p>Javascript</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill5}
                              alt="Skill 5"
                              className="skill-icon"
                            />
                            <p>Next.js</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="skill-card">
                          <Card.Body className="text-center">
                            <img
                              src={skill6}
                              alt="Skill 6"
                              className="skill-icon"
                            />
                            <p>Node.js</p>
                          </Card.Body>
                        </Card>

                        <Card className="skill-card"></Card>
                      </Col>
                    </Row>
                  </section>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
