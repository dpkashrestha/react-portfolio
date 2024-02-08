import Card from "react-bootstrap/Card";

function Project({ title, description, imageSrc, github, deployed }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={github}>Github</Card.Link>
        <Card.Link href={deployed}>Live App</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
