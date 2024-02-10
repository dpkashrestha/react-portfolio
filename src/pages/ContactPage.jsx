// function Contact() {

//     return (

//         <span>This is contact page.</span>
//     );
// }

// export default Contact;

import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send formData to backend or perform validation
    console.log(formData);
  };

  return (
    <div className="col d-flex justify-content-center pt-5">
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
