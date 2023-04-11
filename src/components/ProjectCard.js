import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  const overlayClass = websiteUrl ? " " : "no-url";

  return (
    <Col size={12} sm={6} md={4}>
      <a href={websiteUrl} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className={`proj-txtx ${overlayClass}`}>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
