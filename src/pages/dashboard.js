import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { Header } from "../componets/dashboard/Header";
import Footer from "../componets/Footer";

const Dashboard = (props) => {
  return (
    <Container fluid className="d-flex vh-100 flex-column p-0">
      <Header />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Dashboard;
