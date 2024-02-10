import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerStyles = {
  heading: {
    color: "#333", // Dark color for headings
  },
  text: {
    color: "#666", // Slightly darker color for regular text
  },
  link: {
    color: "#666", // Slightly darker color for links
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
              <a href="#!" style={footerStyles.link}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
            <li className="me-3">
              <a href="#!" style={footerStyles.link}>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="#!" style={footerStyles.link}>
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
