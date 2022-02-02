import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";

export const DepartmentsTable = (props) => {
  const { data } = props;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Department Name</th>
          <th>Deparment City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.dname}</td>
            <td>{d.dcity}</td>
            <ActionsCell id={d.id} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const ActionsCell = ({ id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onDelete = (event) => {
    setLoading(true);
    deleteDoc(doc(db, "departments", id))
      .then(() => {
        navigate("/dashboard/departments");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <td>
      <ButtonGroup size="sm">
        <Button
          variant="outline-primary"
          as={Link}
          to={`/dashboard/departments/edit/${id}`}
        >
          Edit
        </Button>
        <Button variant="outline-primary" disabled={loading} onClick={onDelete}>
          Remove
        </Button>
        <Button
          as={Link}
          to={`/dashboard/departments/${id}`}
          variant="outline-primary"
        >
          View
        </Button>
      </ButtonGroup>
    </td>
  );
};
