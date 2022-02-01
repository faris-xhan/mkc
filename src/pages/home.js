import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../componets/Footer";
import Login from "../componets/Login";

export default function Home(props) {
  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column">
      <Navbar variant="dark" bg="dark">
        <Container>
          <NavbarBrand>
            Murtaza Karlu Composing Center - Dera Ismail Khan
          </NavbarBrand>
        </Container>
      </Navbar>
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Container style={{ maxWidth: "500px" }}>
          <h1 className="text-center mb-3"> Login </h1>
          <Login />
        </Container>
      </div>
      <Footer />
    </Container>
  );
}
