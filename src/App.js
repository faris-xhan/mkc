import Home from "./pages/home";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const u = {
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
          uid: user.uid,
        };
        dispatch(setUser(u));
      }
    });

    return unsubscribe;
  }, []);
  return (
    <Container fluid className="p-0 vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
