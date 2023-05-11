import { Container, Row, Col } from "react-bootstrap";
import dividertwo from "../assets/img/project-testimonial-div.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import dividerthree from "../assets/img/testimonial-contact-div.svg";

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonial">
      <div>
        <img
          src={dividertwo}
          className="project-testimonials-devider"
          alt="divider"
        ></img>
      </div>
      <Container>
        <Col>
          <div>
            <h1>Testimonials</h1>

            <h5 className="d-flex text-center">
              If you're curious to learn more about me feel free to ask for
              references from previous employers or collegues. Below I've also
              displayed some of my recently recieved Linkedin Recommendations.
            </h5>
          </div>
        </Col>
        <div className="testimonials-wrapper">
          <Row className="align-items-center justify-content-center noGutters">
            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                "I had the pleasure of working with Helena when she was in the
                Frontend Developer Program at Hyper Island. Not only did she
                deliver great work but she was very receptive to feedback, could
                defend the decisions she and her group made and naturally
                stepped up as a team representative."
              </p>
              <div className="testimonial-name">Erik Brandberg</div>
              <div className="testimonial-relation">
                Senior Business Development Manager at Spotify
              </div>
            </Col>

            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                "My team and I were impressed by the autonomy and
                problem-solving mindset Helena and her team brought to the
                table. <br></br>If you are looking for a product-minded Frontend
                Engineer, I can recommend Helena for her drive, professionalism,
                and technical skills."
              </p>
              <div className="testimonial-name">Caique Peixoto</div>
              <div className="testimonial-relation">
                Engineering Leader, Agile Expert and Tech Advisor
              </div>
            </Col>
            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                ".. She have demonstrated great leadership and have taken on the
                role as class rep so successfully during her term. <br></br>I
                would recommend her to the future employers as I have witness
                her positive mindset, adaptibity and the drive to learn which I
                believe is a great recipe for a any team to have."
              </p>
              <div className="testimonial-name">May Rada Jutrakul</div>
              <div className="testimonial-relation">
                Program Manager, Hyper Island
              </div>
            </Col>

            <Col className="testimonial" xs={12} md={5} xl={5}>
              <p className="d-flex text-center">
                "Helena is a true creative with a bubbly and positive
                personality and has an exporatory mindset generating lots of
                ideas. She lead a group of designers for a Hyper Island-project
                together with Haystack and was a pleasure to work with. The
                result of the project was very impressive and we would gladly
                work together again! All the best!"
              </p>
              <div className="testimonial-name">Björn Hortell</div>
              <div className="testimonial-relation">
                Founder & CEO at HAYSTACK
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <img
        src={dividerthree}
        className="project-testimonials-devider"
        alt="divider"
      ></img>
    </section>
  );
};
