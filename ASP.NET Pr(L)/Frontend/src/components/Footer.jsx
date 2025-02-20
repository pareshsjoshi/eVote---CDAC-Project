


/*
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/footer.css"; // Ensure the background styling from Code 1 is preserved here.

const Footer = () => {
  return (
    <footer className="r2v-footer px-5 py-4">
      <Container fluid>
        <Row>
         
          <Col lg={9} md={12} sm={12}>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <h6>About</h6>
                <a href="#">About Us</a><br />
                <a href="#">Contact</a><br />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <h6>Support</h6>
                <a href="#">Help Center</a><br />
                <a href="#">Terms of Service</a><br />
                <a href="#">Privacy Policy</a><br />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <h6>Resources</h6>
                <a href="#">Blog</a><br />
                <a href="#">Documentation</a><br />
                <a href="#">Case Studies</a><br />
                <a href="#">Community</a><br />
              </Col>
            </Row>
          </Col>

         
          <Col lg={3} md={12} sm={12}>
            <Row>
              <Col className="copy-info">
                <h6>© 2025 Your Company Name</h6>
                <h6>Version: 1.0.0</h6>
                <h6>Last Updated: 05-01-2025</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;*/




import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/footer.css"; // Ensure the background styling from Code 1 is preserved here.

const Footer = () => {
  return (
    <footer className="r2v-footer px-5 py-4">
      <Container fluid>
        <Row>
          {/* Section 1 */}
          <Col lg={9} md={12} sm={12}>
            <Row>
            <Col lg={4} md={6} sm={12} className="mb-3">
                <h6>About</h6>
                <Link to="/about" className="text-light text-decoration-none d-block">About eVote</Link>
                <Link to="/contact" className="text-light text-decoration-none d-block">Contact Us</Link>
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-3">
                <h6>Quick Links</h6>
                <Link to="/register" className="text-light text-decoration-none d-block">User Registration</Link>
                {/* <Link to="/candidate-registration" className="text-light text-decoration-none d-block">Candidate Registration</Link> */}
                <Link to="/polls" className="text-light text-decoration-none d-block">Current Polls</Link>
                {/* <Link to="/results" className="text-light text-decoration-none d-block">Poll Results</Link> */}
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-3">
                <h6>Support</h6>
                <Link to="/payment" className="text-light text-decoration-none d-block">Buy us a coffee!!</Link>
              </Col>
            </Row>
          </Col>

          {/* Section 2 */}
          <Col lg={3} md={12} sm={12}>
            <Row>
              <Col className="copy-info">
                <h6>© 2025 eVote</h6>
                <h6>Version: 1.0.0</h6>
                <h6>Last Updated: 07-02-2025</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


