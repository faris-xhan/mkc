import Home from "./pages/home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/userSlice";
import PublicRoute from "./componets/PublicRoute";
import PrivateRoute from "./componets/PrivateRoute";
import { Loader } from "./componets/Loader";
import { NotFound } from "./componets/NotFound";
import Dashboard from "./pages/dashboard";
import { DashboardHome } from "./pages/dashboard/dashboardHome";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
      } else {
        dispatch(setUser({}));
      }
      setLoading(false);
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container fluid className="p-0 vh-100">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardHome />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
