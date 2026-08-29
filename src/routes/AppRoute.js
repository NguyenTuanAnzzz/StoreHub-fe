import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";

export default function AppRoute(){
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="register" element={<Register/>}/>
            <Route path="verify-otp" element={<VerifyOtp/>}/>
        </Routes>
    )
}