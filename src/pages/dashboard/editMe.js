import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../redux/features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const EditMe = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState(user.displayName);

  const onCancel = (event) => {
    navigate("/dashboard/me");
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");

    if (password) {
      if (password !== confirmPassword) {
        setError("Password do not match!");
        setLoading(false);
        return;
      }

      promises.push(updatePassword(auth.currentUser, password));
    }

    if (email !== user.email) {
      promises.push(updateEmail(auth.currentUser, email));
    }
    if (fullName !== user.displayName) {
      promises.push(updateProfile(auth.currentUser, { displayName: fullName }));
    }

    Promise.all(promises)
      .then(() => {
        dispatch(
          setUser({
            ...user,
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
          })
        );
        navigate("/dashboard/me");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Container className="p-4">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <FormItem
          type="email"
          label="Email"
          controlId="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />

        <FormItem
          label="Full Name:"
          controlId="full-name"
          placeholder="Enter your name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <FormItem
          type="password"
          label="Password"
          value={password}
          controlId="password"
          onChange={handlePasswordChange}
          placeholder="Leave blank to keep the same"
        />
        <FormItem
          type="password"
          value={confirmPassword}
          label="Confirm Password"
          controlId="confirm-password"
          placeholder="Leave blank to keep the same"
          onChange={handleConfirmPasswordChange}
        />

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button disabled={loading} type="submit">
              Update Profile
            </Button>
            <Button variant="warning" className="mx-2" onClick={onCancel}>
              Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

const FormItem = (props) => {
  const { controlId, label, ...rest } = props;
  return (
    <Form.Group as={Row} className="mb-3" controlId={controlId}>
      <Form.Label column sm={2}>
        {label}
      </Form.Label>
      <Col sm={10}>
        <Form.Control {...rest} />
      </Col>
    </Form.Group>
  );
};
