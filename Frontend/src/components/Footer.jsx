import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import '../stylesheets/footer.css';

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="r2v-footer px-5 py-5">
      <Container fluid>
        <Row>
          {/* Section 1 */}
          <Col lg={9} md={12} sm={12} className="section1">
            <Row className="footermenu">
              <Col lg={3} md={6} sm={12}>
                <h6>About us</h6>
                <a href="https://right2vote.in/about-right2vote">About Us</a><br />
                <a href="https://right2vote.in/right-to-vote">Right to Vote</a><br />
                <a href="https://right2vote.in/in-the-media">In The Media</a><br />
                <a href="https://right2vote.in/awards-and-recognition">Award & Recognition</a><br />
                <a href="https://right2vote.in/about-right2vote/#meet_the_team">Management Team</a><br />
                <a href="https://right2vote.in/incubation/">Incubation</a><br />
                <a href="https://right2vote.in/indian-national-election/">Indian National Elections</a><br />
                <a href="https://right2vote.in/our-customers/">Our Customers</a><br />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h6>Service</h6>
                <a href="https://right2vote.in/evoting/">eVoting</a><br />
                <a href="https://right2vote.in/online-auction/">eAuction</a><br />
                <a href="https://right2vote.in/eagm/">eAGM</a><br />
                <a href="https://right2vote.in/edataroom/">eDataRoom</a><br />
                <a href="https://right2vote.in/about-right2vote/time2justice/">Time2Justice</a><br />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h6>Legal</h6>
                <a href="https://right2vote.in/policies/privacy-policy/">Privacy Policy</a><br />
                <a href="https://right2vote.in/terms-of-service/">Terms of Service</a><br />
                <a href="https://right2vote.in/policies">Other Policies</a><br />
                <a href="https://right2vote.in/security-certificates/">Certificates</a><br />
                <a href="https://right2vote.in/notifications/">Notifications</a><br />
                <a href="https://right2vote.in/app-permissions/">App Permission</a><br />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h6>Others</h6>
                <a href="https://right2vote.in/video/">Videos</a><br />
                <a href="https://right2vote.in/blog/">Blog</a><br />
                <a href="https://right2vote.in/case-studies/">Case Studies</a><br />
                <a href="https://right2vote.in/help/">Help</a><br />
                <a href="https://right2vote.in/feedback/">Feedback</a><br />
                <a href="https://right2vote.in/sitemap/">Sitemap</a><br />
                <a href="https://right2vote.in/archives/">Archives</a><br />
              </Col>
            </Row>
          </Col>

          {/* Section 2 */}
          <Col lg={3} md={12} sm={12} className="section2">
            <Row>
              <Col className="app-icons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.right2vote.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://dymk4s89vutua.cloudfront.net/wp-content/uploads/2017/06/google_play.jpg?x60899"
                    alt="Google Play Store Icon - Right2Vote"
                    width="120"
                    height="40"
                  />
                </a>
              </Col><br />
              <Col className="social-icons">
                <a
                  href="https://www.facebook.com/Right2Vote.in/"
                  className="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/right2vote_in/"
                  className="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/10337360"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </Col><br />
              <Col className="copy-info">
                <h6>© Copyright 2023 Right2Vote. All Rights Reserved.</h6>
                <h6>Version: 6.1.0</h6>
                <h6>Last Updated On: 29-01-2024</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
