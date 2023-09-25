import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import movies from "../../Assets/Projects/show.jpeg";
import yowl from "../../Assets/Projects/yowl.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, mainly academic projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="My_Rotten_Tomatoes"
              description="A film presentaion and review website using The Movie Database API and NextJs Frameworka film presentaion and review website using The Movie Database API and NextJs Framework."
              ghLink="https://github.com/EpitechCodingAcademyPromo2023/C-COD-290-COT-2-2-epicture-jean.metohou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My_Show_Time"
              description="A booking site for concert/festival tickets using NestJs and MongoDB."
              ghLink="https://github.com/EpitechCodingAcademyPromo2023/C-COD-250-COT-2-2-showtime-jean.metohou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dashboard"
              description="A micro service application that works like NetVibes using various API."
              ghLink="https://github.com/EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-jean.metohou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Redditech"
              description="Used the Reddit API to develop a mobile application that authenticate an user and enable him to see his posts and subreddit he is subbed to directly in the app."
              ghLink="https://github.com/EpitechCodingAcademyPromo2023/C-COD-290-COT-2-2-epicture-jean.metohou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yowl}
              isBlog={false}
              title="YOWL"
              description="YOWL is a web application that will allow users to comment on all of the content found on the
              Internet. Each comment will be shared by the entire YOWL user community"
              ghLink="https://github.com/EpitechCodingAcademyPromo2023/C-DEV-160-COT-1-2-yowl-jean.metohou"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
