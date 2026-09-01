import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import { useAuth } from '../contexts/AuthContext';

const PhoneUpdate = () => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setPhone(e.target.value);
    }

    const navigate = useNavigate();
    const {token} = useAuth();
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try{
            const response = await fetch("http://localhost:8080/api/me/update-phone",{
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"     
                },
                body: JSON.stringify({phone})
            })

            const data = await response.json();
            if(response.ok){
                navigate("/")
            }
            if(!response.ok){
                setError(data.message || "Có lỗi xảy ra");
                return;
            }
            // Nếu thành công thì có thể chuyển hướng hoặc thông báo ở đây
        }catch(error){
            setError("Không thể kết nối đến server");
        }
    };

    return (
        <AuthLayout>
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-ink-black mb-2">Cập nhật số điện thoại</h2>
                <p className="text-gray-600 text-sm">Vui lòng nhập sđt để tiếp tục sử dụng</p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputField 
                    label={"Số điện thoại"} 
                    value={phone} 
                    name={"phone"} 
                    placeholder={"0912345678"} 
                    onChange={handleChange} 
                    type={"tel"}
                />

                <ButtonField
                    type="submit"
                    label="Tiếp tục"
                />

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-500">Hoặc</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="text-center text-sm text-gray-600">
                    <Link to="/login" className="font-medium text-mint-green hover:underline">
                        Đăng nhập bằng Email
                    </Link>
                </div>

                {error && <Error message={error} />}
            </form>
        </AuthLayout>
    );
};

export default PhoneUpdate;
