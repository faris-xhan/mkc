import Container from "react-bootstrap/Container";
import { Header } from "../componets/dashboard/Header";

const Dashboard = (props) => {
  return (
    <Container fluid className="p-0">
      <Header />
    </Container>
  );
};

export default Dashboard;
