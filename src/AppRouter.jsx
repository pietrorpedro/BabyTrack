import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAuth } from "./contexts/AuthContext";

import PrivateRoute from "./PrivateRoute";

import Dashboard from "./views/Dashboard";
import Form from "./views/Form";
import Home from "./views/Home";
import Settings from "./views/Settings";
import SignIn from "./views/SignIn";
import SignOut from "./views/SignOut";
import SignUp from "./views/SignUp";

function AppRouter() {

    const {isAuthenticated} = useAuth();
    console.log(`AppRouter: isAuthenticated = ${isAuthenticated}`);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signout" element={<SignOut/>}/>

                <Route
                    path="/"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Settings />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/form"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Form />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;