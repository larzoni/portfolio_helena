import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import underconstruction from "../assets/img/underconstruction.png";

export const Projects = () => {
  const projects = [
    {
      title: "Six Feet Creative Music Player",
      description: "React Music Player with some songs I've made",
      imgUrl: projImg1,
      websiteUrl: "https://sixfeetcreative-songs.netlify.app/",
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
        <Row>
          <Col>
            <h2>Most Recent Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              aliquam amet dolorum eligendi adipisci, modi fuga rerum, deserunt
              alias ex neque veritatis similique natus, temporibus dolor a harum
              vero reprehenderit.
            </p>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
