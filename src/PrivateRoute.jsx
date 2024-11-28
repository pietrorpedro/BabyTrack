import { Navigate } from "react-router-dom";

function PrivateRoute({isAuthenticated, children}) {
    return isAuthenticated ? <>{children}</> : <Navigate to={"/signin"}/>
}

export default PrivateRoute;