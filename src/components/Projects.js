import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget
              aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt
              lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
