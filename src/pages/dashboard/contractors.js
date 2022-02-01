import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { ContractorsTable } from "../../componets/ContractorsTable";
import { Alert } from "react-bootstrap";

export const Contractors = (props) => {
  const [value, loading, error] = useCollection(collection(db, "contractors"));
  const data = value?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return (
    <Container>
      <div className="d-flex align-items-end justify-content-between p-2">
        <h1>Contractors</h1>
        <Button variant="success" as={Link} to="/dashboard/contractors/new">
          Add a new contractor
        </Button>
      </div>
      {error && (
        <Alert variant="danger">Failed to load contractors try refresh.</Alert>
      )}
      {loading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <ContractorsTable data={data} />
      )}
    </Container>
  );
};
