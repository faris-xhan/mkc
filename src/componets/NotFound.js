import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const NotFound = (props) => {
  return (
    <Container className="text-center d-flex align-items-center justify-content-center flex-column vh-100">
      <h1 className="display-1 fw-bold">Oh-ho!</h1>
      <h2 className="display-2">404 Not Found</h2>
      <Link to="/">Go Back</Link>
    </Container>
  );
};
