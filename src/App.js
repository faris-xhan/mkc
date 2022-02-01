import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="p-0 vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
