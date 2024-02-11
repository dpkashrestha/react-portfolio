import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerStyles = {
  text: {
    color: "black",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
};

function Footer() {
  return (
    <footer className="bg-body-tertiary py-3 footer">
      <Row className="justify-content-center">
        <Col>
          <ul
            className="list-unstyled d-flex flex-row justify-content-center"
            style={footerStyles.text}
          >
            <li className="me-3">
              <a
                href="https://github.com/dpkashrestha"
                style={footerStyles.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
            <li className="me-3">
              <a
                href="https://twitter.com/?lang=en"
                style={footerStyles.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                style={footerStyles.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
