import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link, useParams } from "react-router-dom";
import { collection, doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";
import { Alert } from "react-bootstrap";

export const Contractor = (props) => {
  const params = useParams();
  const [value, loading, error] = useDocument(
    doc(db, "contractors", params.contractorId),
    params.contractorId
  );

  const data = value?.data();
  return (
    <Container>
      {error && (
        <Alert variant="danger">
          Failed to load the contractor information{" "}
        </Alert>
      )}

      {loading && !error ? (
        <h1>Loading...</h1>
      ) : (
        (data && (
          <Row className="mb-3">
            <h1>Personal Information</h1>
            <Container>
              <InfoItem label="First Name" value={data.firstName} />
              <InfoItem label="Last Name" value={data.lastName} />
              <InfoItem label="Email" value={data.email} />
            </Container>
          </Row>
        )) || <h1>No Contractor to Show</h1>
      )}
    </Container>
  );
};

const InfoItem = (props) => {
  const { label, value } = props;
  return (
    <Row className="mb-2 fs-5 p-1">
      <Col md={4}>
        <strong>{label}</strong>
      </Col>
      <Col md={8}>{value}</Col>
    </Row>
  );
};

const Other = (props) => (
  <>
    <Row className="mb-3">
      <h1>Companies</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Company Ltd.</td>
            <td>company@hotmail.com</td>
            <td>123456789</td>
            <td>
              <ButtonGroup size="sm">
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/dashboard/company/edit/1"
                >
                  Edit
                </Button>
                <Button variant="outline-primary">Remove</Button>
                <Button
                  as={Link}
                  to={`/dashboard/companies/1`}
                  variant="outline-primary"
                >
                  View
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
    <Row className="mb-3">
      <h1>Departments</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Department City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bonga</td>
            <td>California</td>
            <td>
              <Button variant="outline-primary">Remove</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  </>
);
