import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prog5.jpg";
import projImg2 from "../assets/img/prog4.jpg";
import projImg3 from "../assets/img/prog3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Data Structure and Algorithm",
      description: "Mastering the Backbone of Code",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: "Building Tomorrow's Digital Landscape",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                <h2>Ace Your Placements</h2>
                <p>Experience the Byte Buddy advantage: a holistic approach to personalized growth that goes beyond traditional learning platforms.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">DS & Algo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard key={0} {...projects[0]}/>
                        <Col>
                          <h3 style={{textAlign: 'center', margin: '15px 0'}}>Unlocking the Code to Efficient Problem-Solving!</h3>
                          <p className="dsa">Embark on a journey of mastery with Byte Buddy's comprehensive Data Structures and Algorithms (DSA) curriculum. Our expert-led courses and hands-on projects empower you to delve deep into the core concepts of DSA, equipping you with the skills needed to tackle complex coding challenges with confidence.</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        <ProjectCard key={1} {...projects[1]}/>
                        <Col>
                          <h3 style={{textAlign: 'center', margin: '15px 0'}}>Creating Stunning, Functional Websites!</h3>
                          <p className="dsa">Experience the art and science of web development like never before with Byte Buddy. Our immersive web development courses combine cutting-edge technologies with industry best practices to help you create stunning, functional websites that stand out in today's digital landscape. From front-end design to back-end functionality, Byte Buddy covers it all.</p>
                        </Col>
                      </Row>
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
}
