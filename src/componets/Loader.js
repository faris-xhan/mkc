import Container from "react-bootstrap/Container";

export const Loader = (props) => {
  return (
    <Container
      fluid
      className="p-0 bg-dark text-white vh-100 d-flex align-items-center justify-content-center"
    >
      <h1>Loading...</h1>
    </Container>
  );
};
