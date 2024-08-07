import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const AuthenticatedRoute = ({ role }) => {
    const { user, setUser } = useContext(AuthContext);
    const location = useLocation();

    const isAuthorized = () => {
        if (!user) {
            return false;
        }

        if (!localStorage.getItem("token")) {
            return false;
        }
        if (
            (role === "Admin" && user.role_type !== "Admin") ||
            (role === "Driver" && user.role_type !== "Driver") ||
            (role === "Passenger" && user.role_type !== "Passenger")
        ) {
            return false;
        }
        return true;
    };

    if (!isAuthorized()) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return (
            <Navigate
                to="/login"
                replace
                state={{
                    redirectTo: location,
                }}
            />
        );
    } else {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
};
