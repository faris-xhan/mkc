import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/features/userSlice";

const PublicRoute = (props) => {
  const user = useSelector(selectUser);
  return user?.uid ? <Navigate to="/dashboard" /> : props.children;
};

export default PublicRoute;
