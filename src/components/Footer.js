import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/sixfeetlogo.svg";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/insta.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} size={20} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/helena-larsson-b29323250/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/larzoni/?hl=en">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/larzoni">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
