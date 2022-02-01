import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/dashboard">
          Murtaza Karlu Composing Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-bar" />
        <Navbar.Collapse id="nav-bar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/contractors">
              Contractors
            </Nav.Link>
            <Nav.Link as={NavLink} to="/departments">
              Departments
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Profile" id="profile">
              <NavDropdown.Item as={NavLink} to="/me">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item>Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
