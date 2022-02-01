import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SignOut } from "./SignOut";

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
            <Nav.Link as={NavLink} to="/dashboard/contractors">
              Contractors
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard/departments">
              Departments
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Profile" id="profile">
              <NavDropdown.Item as={NavLink} to="/dashboard/me">
                Settings
              </NavDropdown.Item>
              <SignOut />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
