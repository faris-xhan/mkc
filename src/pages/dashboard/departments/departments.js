import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Departments = (props) => {
  return (
    <Container>
      <div className="d-flex align-items-end justify-content-between p-2">
        <h1>Department</h1>
        <Button variant="success" as={Link} to="/dashboard/departments/new">
          Add a new department
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Deparment City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bonga Ltd.</td>
            <td>California</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
