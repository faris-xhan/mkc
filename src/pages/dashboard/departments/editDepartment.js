import {
  Container,
  Row,
  Col,
  FormGroup,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FormItem } from "../../../componets/FormItem";
import { useEffect, useState } from "react";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

export const EditDepartment = (props) => {
  const navigate = useNavigate();
  const id = useParams().departmentId;

  const [value, loading, error] = useDocument(doc(db, "departments", id), id);
  const [formData, setFormData] = useState(() => value?.data());

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.dname !== "") {
      const docRef = doc(db, "departments", id);
      updateDoc(docRef, formData)
        .then(() => {
          navigate("/dashboard/departments");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (!loading && value?.data()) {
      setFormData(value?.data());
    }
    //  eslint-disable-next-line
  }, [loading]);
  return (
    <Container className="p-3">
      <h1 className="mb-3">Update Department</h1>
      {error && (
        <Alert varaint="danger">Failed to update the contractor.</Alert>
      )}
      {loading && formData === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormItem
            label="Department Name"
            name="dname"
            value={formData?.dname || ""}
            onChange={handleInputChange}
            controlId="department-name"
            placeholder="Enter department name"
          />
          <FormItem
            name="dcity"
            value={formData?.dcity || ""}
            onChange={handleInputChange}
            label="Department City"
            controlId="department-city"
            placeholder="Enter department city"
          />

          <FormGroup as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                disabled={formData?.dname === "" || loading}
              >
                Update
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
      )}
    </Container>
  );
};
