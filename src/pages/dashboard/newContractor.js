import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormItem } from "../../componets/FormItem";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
};
export const NewContractor = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.firstName !== "") {
      console.log(formData);
      navigate("/dashboard/contractors");
    }
  };
  return (
    <Container className="p-3">
      <Form onSubmit={handleSubmit}>
        <FormItem
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          controlId="first-name"
          placeholder="Enter contractor's first name"
        />
        <FormItem
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          label="Last Name"
          controlId="last-name"
          placeholder="Enter contractor's last name"
        />
        <FormItem
          label="Email"
          type="email"
          name="email"
          controlId="email"
          value={formData.value}
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Save</Button>
            <Button variant="warning" className="mx-2">
              Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};
