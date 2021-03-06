import Home from "./pages/home";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/dashboard";
import { Me } from "./pages/dashboard/me";
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { Loader } from "./componets/Loader";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./componets/NotFound";
import Container from "react-bootstrap/Container";
import { EditMe } from "./pages/dashboard/editMe";
import PublicRoute from "./componets/PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./componets/PrivateRoute";
import { setUser } from "./redux/features/userSlice";
import { Contractors } from "./pages/dashboard/contractors/contractors";
import { Contractor } from "./pages/dashboard/contractors/contractor";
import { NewContractor } from "./pages/dashboard/contractors/newContractor";
import { DashboardHome } from "./pages/dashboard/dashboardHome";
import { EditContractor } from "./pages/dashboard/contractors/editContractors";
import { Departments } from "./pages/dashboard/departments/departments";
import { NewDepartment } from "./pages/dashboard/departments/newDepartment";
import { EditDepartment } from "./pages/dashboard/departments/editDepartment";
import { Department } from "./pages/dashboard/departments/department";

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
          <Route path="me" element={<Me />} />
          <Route path="me/edit" element={<EditMe />} />
          <Route path="contractors" element={<Contractors />} />
          <Route path="contractors/new" element={<NewContractor />} />
          <Route path="contractors/:contractorId" element={<Contractor />} />
          <Route
            path="contractors/edit/:contractorId"
            element={<EditContractor />}
          />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/new" element={<NewDepartment />} />
          <Route path="departments/:departmentId" element={<Department />} />
          <Route
            path="departments/edit/:departmentId"
            element={<EditDepartment />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
