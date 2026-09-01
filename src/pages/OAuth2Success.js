import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function OAuth2Success() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { setToken } = useAuth();

    useEffect(() => {
        const token = searchParams.get("token");

        if (!token) {
            navigate("/login");
            return;
        }

        localStorage.setItem("token", token);
        setToken(token);

        navigate("/");
    }, []);

    return <div>Đang đăng nhập bằng Google...</div>;
}