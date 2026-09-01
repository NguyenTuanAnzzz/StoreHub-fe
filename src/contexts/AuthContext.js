import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem("token") ||
        sessionStorage.getItem("token")
    );

    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const login = async ({ email, password }, check) => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setLoginError(data.message);
                return;
            }

            if (check) {
                localStorage.setItem("token", data.token);
                sessionStorage.removeItem("token")
            } else {
                sessionStorage.setItem("token", data.token);
                localStorage.removeItem("token");
            }

            setToken(data.token);
            navigate("/");

        } catch (error) {
            setLoginError("Không thể kết nối đến server");
        }
    };

    const getMyProfile = async () => {
        if (!token) {
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8080/api/me",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (!response.ok) {
                setUser(null);
                return;
            }

            const data = await response.json();
            setUser(data);
            if (!data.phone) {
                navigate("/update-phone");
            }

        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        getMyProfile();
    }, [token])



    return (
        <AuthContext.Provider value={{ token, setToken, login, loginError, user, getMyProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};