import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardRoute() {
    const { token, user } = useAuth();

    if (
        !token ||
        !user ||
        !["ADMIN", "STAFF"].includes(user.role)
    ) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}