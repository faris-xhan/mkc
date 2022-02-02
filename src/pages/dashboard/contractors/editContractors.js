import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useDocument } from "react-firebase-hooks/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { FormItem } from "../../../componets/FormItem";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";

export const EditContractor = (props) => {
  const params = useParams();
  const id = params.contractorId;
  const navigate = useNavigate();
  const [value, loading, error] = useDocument(doc(db, "contractors", id), id);
  const [formData, setFormData] = useState(() => value?.data());

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.firstName !== "") {
      const docRef = doc(db, "contractors", params.contractorId);
      updateDoc(docRef, formData)
        .then(() => {
          navigate("/dashboard/contractors");
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
      {error && (
        <Alert varaint="danger">Failed to update the contractor.</Alert>
      )}
      {loading && formData === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormItem
            label="First Name"
            name="firstName"
            value={formData?.firstName || ""}
            onChange={handleInputChange}
            controlId="first-name"
            placeholder="Enter contractor's first name"
          />
          <FormItem
            name="lastName"
            value={formData?.lastName || ""}
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
            value={formData?.email || ""}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                disabled={formData?.firstName === "" || loading}
              >
                Update
              </Button>
              <Button
                variant="warning"
                onClick={() => navigate("/dashboard/contractors")}
                className="mx-2"
              >
                Cancel
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Container>
  );
};
