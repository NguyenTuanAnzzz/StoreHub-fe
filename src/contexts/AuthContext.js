import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem("token") ||
        sessionStorage.getItem("token")
    );

    const [error, setError] = useState("");
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
                setError(data.message);
                return;
            }

            if (check) {
                localStorage.setItem("token", data.token);
            } else {
                sessionStorage.setItem("token", data.token);
            }

            setToken(data.token);
            navigate("/");

        } catch (error) {
            setError("Không thể kết nối đến server");
        }
    };

    const getMyProfile = async () => {
        try {
            

            const response = await fetch("http://localhost:8080/api/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            

            const data = await response.json();

            
            if (!response.ok) {
                setError(data.message);
                return;
            }

            setUser(data)

        } catch (error) {
            setError("Không thể kết nối đến server");
        }
    };

    useEffect(()=>{
        getMyProfile();
    },[token])



    return (
        <AuthContext.Provider value={{ token, login, error, user, getMyProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};