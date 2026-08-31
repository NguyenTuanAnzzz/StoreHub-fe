import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { useNavigate } from 'react-router-dom';
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
                    {error && <Error message={error} />}
                </form>

             </AuthLayout>
    );
};

export default Login;
