import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { DepartmentsTable } from "../../../componets/DepartmentsTable";
import { db } from "../../../firebase/firebase";

export const Departments = (props) => {
  const [value, loading, error] = useCollection(collection(db, "departments"));
  const data = value?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return (
    <Container>
      <div className="d-flex align-items-end justify-content-between p-2">
        <h1>Departments</h1>
        <Button variant="success" as={Link} to="/dashboard/departments/new">
          Add a new department
        </Button>
      </div>
      {loading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <DepartmentsTable data={data} />
      )}
    </Container>
  );
};
