import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();

    console.log(`PrivateRoute: isAuthenticated = ${isAuthenticated}`);

    return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
}

export default PrivateRoute;