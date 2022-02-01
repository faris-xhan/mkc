import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormItem } from "../../componets/FormItem";
import { db } from "../../firebase/firebase";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
};
export const NewContractor = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.firstName !== "") {
      setLoading(true);
      const contractorsCollection = collection(db, "contractors");
      const docRef = doc(contractorsCollection);
      setDoc(docRef, formData)
        .then(() => {
          setError("");
          navigate("/dashboard/contractors");
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to add contractor");
          setLoading(false);
        });
    }
  };
  return (
    <Container className="p-3">
      {error && <Alert varaint="danger">{error}</Alert>}
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
            <Button
              type="submit"
              disabled={formData.firstName === "" || loading}
            >
              Save
            </Button>
            <Button variant="warning" className="mx-2">
              Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};
