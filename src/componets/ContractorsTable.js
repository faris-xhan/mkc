import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";

export const ContractorsTable = (props) => {
  const { data } = props;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>
              {d.firstName} {d.lastName || ""}
            </td>
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
    deleteDoc(doc(db, "contractors", id))
      .then(() => {
        navigate("/dashboard/contractors");
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
          to={`/dashboard/contractors/edit/${id}`}
        >
          Edit
        </Button>
        <Button variant="outline-primary" disabled={loading} onClick={onDelete}>
          Remove
        </Button>
        <Button
          as={Link}
          to={`/dashboard/contractors/${id}`}
          variant="outline-primary"
        >
          View
        </Button>
      </ButtonGroup>
    </td>
  );
};
