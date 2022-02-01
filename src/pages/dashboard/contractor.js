import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";

const data = {
  firstName: "Farhad",
  lastName: "Khan",
  cnic: "000-00000000-0",
  phoneNo: "9999-99999",
  dob: "04/04/2002",
  city: "New York",
  pecNo: "444",
  cwNo: "777",
  password: "secret",
  email: "test@gmail.com",
};
export const Contractor = (props) => {
  return (
    <Container>
      <Row className="mb-3">
        <h1>Personal Information</h1>
        <Container>
          <InfoItem label="First Name" value={data.firstName} />
          <InfoItem label="Last Name" value={data.lastName} />
          <InfoItem label="CNIC" value={data.cnic} />
          <InfoItem label="City" value={data.city} />
          <InfoItem label="Phone No" value={data.phoneNo} />
          <InfoItem label="Email" value={data.email} />
          <InfoItem label="Password" value={data.password} />
          <InfoItem label="PEC No" value={data.pecNo} />
          <InfoItem label="C&W No" value={data.cwNo} />
        </Container>
      </Row>
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
