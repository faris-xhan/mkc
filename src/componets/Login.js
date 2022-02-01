import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Login(props) {
  const [error, setError] = useState("sss");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const areInputsEmpty = email === "" || password === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (areInputsEmpty) return;
    alert(email + " " + password);
    setError("");
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
      <Button type="submit" disabled={areInputsEmpty}>
        Login
      </Button>
    </Form>
  );
}
