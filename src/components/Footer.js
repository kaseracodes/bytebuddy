import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

    const brochureLink = "https://drive.google.com/file/d/1w4o_fYLo9sm3rY0SvN5T8VqM_VOnRMB4/view?usp=sharing";
    const webBootcampBrochureLink = "https://drive.google.com/file/d/1fLCuBn2MtheVrWvFXAb-Tk4L1dqaDADs/view?usp=sharing";
    const dsaBootcampBrochureLink = "https://drive.google.com/file/d/1Eif1vTVuJb_y_4WAcmNfXA1bQmtRF4Kd/view?usp=sharing";

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm />  */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h3>Byte <span id = "buddy">Buddy</span></h3>
            {/* <a href="#"> Brochure</a> <br/>
            <a href="#"> Data Structures & Algo Bootcamp Schedule</a> <br/>
            <a href="#"> Web Development Bootcamp Schedule</a> */}
            <button className="footlinks" onClick={() => window.open(`${brochureLink}`, '_blank')}>Brochure</button> <br/>
            <button className="footlinks" onClick={() => window.open(`${webBootcampBrochureLink}`, '_blank')}>Web Dev Bootcamp</button> <br/>
            <button className="footlinks" onClick={() => window.open(`${dsaBootcampBrochureLink}`, '_blank')}>Data Structures & Algorithms Bootcamp</button>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
