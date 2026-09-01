import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { useNavigate, Link } from 'react-router-dom';
import CheckBoxField from '../components/CheckBoxField';
import { useAuth } from '../contexts/AuthContext';
import Error from '../components/Error';

const Login = () => {

    const [form, setForm] = useState({
        "email" : "",
        "password": ""
    })

    const {error} = useAuth();
    const [check, setCheck] = useState(false)
    const {login} = useAuth();

    const handleChange = (e) =>{
        setForm({...form,
            [e.target.name]: e.target.value})
    }

    const handleCheckbox = (e) =>{
        setCheck(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        login(form, check);
    };

    

    return (
        <AuthLayout>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <InputField label={"Email"} value={form.email} name={"email"} placeholder={"nguyenvana@gmail.com"} onChange={handleChange}/>

                    <InputField label={"Mật khẩu"} value={form.password} name={"password"} placeholder={"password"} onChange={handleChange} type={"password"}/>
                    <CheckBoxField onChange={handleCheckbox}>
                                    Ghi nhớ đăng nhập
                                </CheckBoxField>
                    <ButtonField
                            type="submit"
                            label="Đăng nhập"
                            
                        />
                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500">Hoặc</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <ButtonField label={"Đăng nhập bằng Google"} bgColor="bg-ink-white" textColor="text-paper-black" hoverColor="hover:bg-true-white" onClick={() => {
                                    window.location.href =
                                        "http://localhost:8080/oauth2/authorization/google";
                                }}>
                                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                                        <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v2.75h3.77c2.2-2.03 3.65-5.81 3.65-10.62Z" fill="#4285F4" /><path d="M12 24c3.24 0 5.95-1.07 7.98-2.89l-3.77-2.75c-1.04.7-2.37 1.1-4.21 1.1-3.13 0-5.79-2.11-6.92-4.97H1.31v2.84C3.33 22.04 7.48 24 12 24Z" fill="#34A853" /><path d="M5.08 14.49A7.2 7.2 0 0 1 4.7 12c0-.86.14-1.7.38-2.49V6.67H1.31A12 12 0 0 0 0 12c0 1.93.46 3.76 1.31 5.33l3.77-2.84Z" fill="#FBBC05" /><path d="M12 4.67c1.77 0 3.36.61 4.61 1.8l3.46-3.46C17.94 1.01 15.24 0 12 0 7.48 0 3.33 1.96 1.31 4.67l3.77 2.84C6.21 6.78 8.87 4.67 12 4.67Z" fill="#EA4335" />
                                    </svg>
                    </ButtonField>
                    <div className="mt-2 text-center text-sm text-gray-600">
                        Chưa có tài khoản?{' '}
                        <Link to="/register" className="font-medium text-mint-green hover:underline">
                            Đăng ký
                        </Link>
                    </div>
                    {error && <Error message={error} />}
                </form>

             </AuthLayout>
    );
};

export default Login;
