import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const areInputsEmpty = email === "" || password === "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (areInputsEmpty || loading) return;

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        setError("Failed to log in.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Alert
          variant="danger"
          className="mb-3"
          onClose={() => setError("")}
          dismissible
        >
          {error}
        </Alert>
      )}
      <FormGroup controlId="email" className="mb-3">
        <FormLabel className="fw-normal">Email</FormLabel>
        <FormControl
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId="password" className="mb-3">
        <FormLabel className="fw-normal">Password</FormLabel>
        <FormControl
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={areInputsEmpty || loading}>
        Login
      </Button>
    </Form>
  );
}
