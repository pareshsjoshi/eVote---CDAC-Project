


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
              <Col lg={4} md={6} sm={12}>
                <h6>About</h6>
                <a href="/about">About eVote</a><br />
                <a href="/contact">Contact Us</a><br />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <h6>Quick Links</h6>
                <a href="/user-registration">User Registration</a><br />
                <a href="/candidate-registration">Candidate Registration</a><br />
                <a href="/polls">Current Polls</a><br />
                <a href="/results">Poll Results</a><br />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <h6>Support</h6>
                <a href="/help">Help Center</a><br />
                <a href="/privacy-policy">Privacy Policy</a><br />
                <a href="/terms">Terms of Service</a><br />
              </Col>
            </Row>
          </Col>

          {/* Section 2 */}
          <Col lg={3} md={12} sm={12}>
            <Row>
              <Col className="copy-info">
                <h6>© 2025 eVote</h6>
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

export default Footer;


