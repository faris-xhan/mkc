import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/features/userSlice";

const PrivateRoute = (props) => {
  const user = useSelector(selectUser);
  return user?.uid ? props.children : <Navigate to="/" replace />;
};

export default PrivateRoute;
