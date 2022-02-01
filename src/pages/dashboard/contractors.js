import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const Contractors = (props) => {
  return (
    <Container>
      <div className="d-flex align-items-end justify-content-between p-2">
        <h1>Contractors</h1>
        <Button variant="success" as={Link} to="/dashboard/contractors/new">
          Add a new contractor
        </Button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Contractor Name</th>
            <th>PEC No</th>
            <th>C&W No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Farhad</td>
            <td>11122</td>
            <td>000</td>
            <td>
              <ButtonGroup size="sm">
                <Button variant="outline-primary">Edit</Button>
                <Button variant="outline-primary">Remove</Button>
                <Button
                  as={Link}
                  to={`/dashboard/contractors/1`}
                  variant="outline-primary"
                >
                  View
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
