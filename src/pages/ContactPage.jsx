import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form with data:", formData);
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setValidEmail(isValidEmail(value));
    } else if (name === "message") {
      if (!value || value.trim() === "") {
        setValidMessage(false);
      } else {
        setValidMessage(true);
      }
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="container page-header">
        <h1>Contact me</h1>
      </div>
      <div className="col d-flex justify-content-center pt-">
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group controlId="formName">
            <Form.Label className="mt-5">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              className="mb-3"
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address *</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                name="email"
                className="mb-3"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleOnBlur}
                placeholder="Enter your email"
                required
                isInvalid={!validEmail}
              />
              <Form.Control.Feedback type="invalid">
                Please input a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message *</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                rows={10}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleOnBlur}
                placeholder="Enter your message"
                isInvalid={!validMessage}
              />
              <Form.Control.Feedback type="invalid">
                Message is required.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Contact;
