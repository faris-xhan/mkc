import {
  Container,
  Row,
  Col,
  FormGroup,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormItem } from "../../../componets/FormItem";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const initialFormData = {
  dname: "",
  dcity: "",
};

export const NewDepartment = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.dname !== "") {
      setLoading(true);
      const departmentsCollection = collection(db, "departments");
      const docRef = doc(departmentsCollection);
      setDoc(docRef, formData)
        .then(() => {
          setError("");
          navigate("/dashboard/departments");
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to add contractor");
          setLoading(false);
        });
    }
  };
  return (
    <Container>
      <h1>New Department</h1>
      {error && <Alert varaint="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <FormItem
          label="Department Name"
          name="dname"
          value={formData.dname}
          onChange={handleInputChange}
          controlId="department-name"
          placeholder="Enter department name"
        />
        <FormItem
          name="dcity"
          value={formData.dcity}
          onChange={handleInputChange}
          label="Department City"
          controlId="department-city"
          placeholder="Enter department city"
        />

        <FormGroup as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" disabled={formData.dname === "" || loading}>
              Save
            </Button>
            <Button
              variant="warning"
              className="mx-2"
              onClick={() => navigate("/dashboard/departments")}
            >
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};
