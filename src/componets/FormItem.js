import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FormItem = (props) => {
  const { controlId, label, ...rest } = props;
  return (
    <FormGroup as={Row} className="mb-3" controlId={controlId}>
      <FormLabel column sm={2}>
        {label}
      </FormLabel>
      <Col sm={10}>
        <FormControl {...rest} />
      </Col>
    </FormGroup>
  );
};
