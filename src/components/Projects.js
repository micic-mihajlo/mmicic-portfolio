import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import proimg from "../assets/img/proj-img.png";
import unityProject1 from "../assets/img/unityProject1.png";
import 'animate.css';

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "Heroic Showdown",
      description:
        "2D Turn-Based Role-Playing Game for 2 players that emulates the battle between “heroes” that are inspired by World of Warcraft classes. Built in Unity Game Engine using C#. This project made me further expand my knowledge about Object-Oriented Design as it was crucial for the development of the game. Character models and assets were constructed in Adobe Photoshop",
      imgUrl: unityProject1,
    },
    {
      title: "FIFA Ultimate Team Builder",
      description:
        "Program that generates the best FIFA 23 Ultimate Team squad within the proposed budget. Utilizing the genetic algorithm that is applied to the extensive dataset about player performances, I am able to find the best squads for my Ultimate Team",
      imgUrl: proimg,
    },
  
    {
      title: "Project 3",
      description:
        "Coming Soon.",
      imgUrl: proimg,
    },
  ];
  const projectsTab2 = [
    {
      title: "Project 4",
      description:
        "Coming Soon.",
      imgUrl: proimg,
    },
    {
      title: "Project 5",
      description:
        "Coming Soon.",
      imgUrl: proimg,
    },
    {
      title: "Project 6",
      description:
        "Coming Soon.",
      imgUrl: proimg,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here you can see the list of some of the projects I have been working on. This tab is in progress and will be updated with more projects soon.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
};
