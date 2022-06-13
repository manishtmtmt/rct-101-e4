import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const RequiredAuth = ({ children }) => {
  const {isAuthenticated} = useSelector((state)=> state.auth.data)
  // const location = useLocation();
  // const from = { pathname: location.pathname}
  if(isAuthenticated) return children;
  else return <Navigate to="/login" />
};

export default RequiredAuth;
