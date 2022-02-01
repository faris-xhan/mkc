import { signOut } from "firebase/auth";
import Button from "react-bootstrap/Button";
import { auth } from "../../firebase/firebase";
import NavDropdown from "react-bootstrap/NavDropdown";

export const SignOut = (props) => {
  const onSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <NavDropdown.Item as={Button} onClick={onSignOut}>
      Sign out
    </NavDropdown.Item>
  );
};
