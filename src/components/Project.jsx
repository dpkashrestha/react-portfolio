import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

function Project({ title, description, imageSrc, github, deployed }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={github} target="_blank">
          <FontAwesomeIcon icon={faGithub} color={"black"} size="2x" />
        </Card.Link>
        <Card.Link href={deployed} target="_blank">
          <FontAwesomeIcon icon={faRocket} color={"black"} size="2x" />
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default Project;
