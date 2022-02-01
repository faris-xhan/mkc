import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";

export const Me = (props) => {
  const user = useSelector(selectUser);
  return (
    <Container className="p-4">
      <Row className="mb-3">
        <Col md={2}>
          <strong>Email:</strong>
        </Col>
        <Col md={10}>{user.email}</Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>
          <strong>Full Name:</strong>
        </Col>
        <Col md={10}>{user.displayName}</Col>
      </Row>
      <Row>
        <Col md={2} />
        <Col md={10}>
          <Button as={Link} to="/dashboard/me/edit">
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
