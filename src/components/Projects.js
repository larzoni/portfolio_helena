import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import underconstruction from "../assets/img/underconstruction.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Six Feet Creative Music Player",
      description: "React Music Player with some songs I've made",
      imgUrl: projImg1,
      websiteUrl: "https://shimmering-jalebi-d501b6.netlify.app/",
    },
    {
      title: "Photographer's Portfolio",
      description: "Soon to be deployed",
      imgUrl: underconstruction,
    },
    {
      title: "React Todo-List",
      description: "Soon to be deployed",
      imgUrl: underconstruction,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__pulse" : ""}
            >
              <Row>
                <Col>
                  <h2>Most Recent Projects</h2>

                  <p>
                    Below I've displayed some of my current and most recent
                    projects.<br></br>
                    If you're curious to see more, don't forget to download my
                    resume on top of this page!
                  </p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
