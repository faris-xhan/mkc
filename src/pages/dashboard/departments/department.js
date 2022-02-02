import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase/firebase";
import { Alert, Button } from "react-bootstrap";

export const Department = (props) => {
  const params = useParams();
  const [value, loading, error] = useDocument(
    doc(db, "departments", params.departmentId),
    params.departmentId
  );

  const data = value?.data();
  return (
    <Container>
      {error && (
        <Alert variant="danger">
          Failed to load the department information{" "}
        </Alert>
      )}

      {loading && !error ? (
        <h1>Loading...</h1>
      ) : (
        (data && (
          <Row className="mb-3">
            <h1 className="mb-3 display-1">Department</h1>
            <Container>
              <InfoItem label="Department Name" value={data.dname} />
              <InfoItem label="Department City" value={data.dcity} />
            </Container>
          </Row>
        )) || <h1>No Department to Show</h1>
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
