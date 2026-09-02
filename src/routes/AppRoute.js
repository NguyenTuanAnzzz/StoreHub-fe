import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import OAuth2Success from "../pages/OAuth2Success";
import PhoneUpdate from "../pages/PhoneUpdate";
import { useAuth } from "../contexts/AuthContext";
import Profile from "../pages/Profile";
import ProfileLayout from "../layouts/ProfileLayout";

export default function AppRoute() {
    const { token, user } = useAuth();

    return (

        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="login" element={<Login />} />
            <Route path="oauth2/success" element={<OAuth2Success />} />
            <Route path="/" element={<Home />} />
            {token && user && !user.phone && (
                <Route
                    path="/update-phone"
                    element={<PhoneUpdate />}
                />
            )}
            {
                token && (
                    <Route path="/profile" element={<ProfileLayout />}>
                        <Route index element={<Profile />} />

                    </Route>
                )
            }

        </Routes>
    )
}