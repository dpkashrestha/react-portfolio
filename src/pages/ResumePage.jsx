import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className="resume col d-flex flex-wrap justify-content-center pt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Front-end Proficiencies</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>Javascript</ListGroup.Item>
            <ListGroup.Item>JQuery</ListGroup.Item>
            <ListGroup.Item>Responsive Design</ListGroup.Item>
            <ListGroup.Item>Handlebars JS</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroup.Item>PWA</ListGroup.Item>
            <ListGroup.Item>MERN Stack</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Header>Back-end Proficiencies</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>APIs</ListGroup.Item>
            <ListGroup.Item>GIT</ListGroup.Item>
            <ListGroup.Item>Node</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>MySQL,Sequelize</ListGroup.Item>
            <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
            <ListGroup.Item>RestAPI</ListGroup.Item>
            <ListGroup.Item>GraphQL</ListGroup.Item>
            <ListGroup.Item>Webpack</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Header>Deployment & Testing Proficiencies</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Heroku</ListGroup.Item>
            <ListGroup.Item>Render</ListGroup.Item>
            <ListGroup.Item>Netlify</ListGroup.Item>
            <ListGroup.Item>Github.io</ListGroup.Item>
            <ListGroup.Item>Insomnia/Postman</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
}

export default Resume;
