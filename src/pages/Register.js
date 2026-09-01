import InputField from '../components/InputField';
import { useState } from 'react';
import ButtonField from '../components/ButtonField';
import Error from '../components/Error';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import CheckBoxField from '../components/CheckBoxField';

export default function Register() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");

    const [rePassword, setRePassword] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [check, setCheck] = useState(false)

    const navigate = useNavigate();

    const handleCheckbox = (e) => {
        setCheck(e.target.checked)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!check) {
            setError("Vui lòng đồng ý với Điều khoản và Chính sách");
            return
        }
        if (form.password !== rePassword) {
            setError("Mật khẩu không khớp");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = await response.json();
            if (!response.ok) {
                setError(data.message)
                return;
            }
            navigate(`/verify-otp?email=${encodeURIComponent(form.email)}`);
        } catch (error) {
            setError("Không thể kết nối đến server");

        }
    }



    return (
        <AuthLayout> <form noValidate className="space-y-3" onSubmit={handleSubmit}>
           

            {/* Row 1: Họ tên & SĐT */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InputField label={"Họ và tên"} placeholder={"Nguễn Văn A"} value={form.name} name={"name"} onChange={handleChange} />
                <InputField label={"Số điện thoại"} placeholder={"0987654321"} value={form.phone} name={"phone"} onChange={handleChange} />
            </div>

            {/* Row 2: Email */}
            <InputField label={"Email"} placeholder={"nguyenvana@gmail.com"} value={form.email} name={"email"} onChange={handleChange} />


            {/* Row 3: Mật khẩu & Nhập lại */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InputField label={"Mật khẩu"} placeholder={"6+ password"} value={form.password} name={"password"} onChange={handleChange} type={"password"} />

                <InputField label={"Nhập lại mật khẩu"} placeholder={"6+ password"} value={rePassword} name={"rePassword"} type={"password"} onChange={(e) => (setRePassword(e.target.value))} />

            </div>

            {/* Terms */}
            <CheckBoxField onChange={handleCheckbox} required={true}>
                Tôi đồng ý với <a href="/terms" className="font-medium text-mint-green hover:underline">Điều khoản</a> và <a href="/privacy" className="font-medium text-mint-green hover:underline">Chính sách</a>
            </CheckBoxField>

            {/* Submit Button */}
            <ButtonField
                type="submit"
                label="Hoàn tất đăng ký"
            />

            <div className="my-4 flex items-center gap-4">
                <span className="h-px flex-1 bg-mist-gray" />
                <span className="text-[12px] font-medium text-true-black/40">Hoặc tiếp tục với</span>
                <span className="h-px flex-1 bg-mist-gray" />
            </div>

            {/* Google Button */}
            <ButtonField label={"Đăng nhập bằng Google"} bgColor="bg-ink-white" textColor="text-paper-black" hoverColor="hover:bg-true-white" onClick={() => {
                window.location.href =
                    "http://localhost:8080/oauth2/authorization/google";
            }}>
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v2.75h3.77c2.2-2.03 3.65-5.81 3.65-10.62Z" fill="#4285F4" /><path d="M12 24c3.24 0 5.95-1.07 7.98-2.89l-3.77-2.75c-1.04.7-2.37 1.1-4.21 1.1-3.13 0-5.79-2.11-6.92-4.97H1.31v2.84C3.33 22.04 7.48 24 12 24Z" fill="#34A853" /><path d="M5.08 14.49A7.2 7.2 0 0 1 4.7 12c0-.86.14-1.7.38-2.49V6.67H1.31A12 12 0 0 0 0 12c0 1.93.46 3.76 1.31 5.33l3.77-2.84Z" fill="#FBBC05" /><path d="M12 4.67c1.77 0 3.36.61 4.61 1.8l3.46-3.46C17.94 1.01 15.24 0 12 0 7.48 0 3.33 1.96 1.31 4.67l3.77 2.84C6.21 6.78 8.87 4.67 12 4.67Z" fill="#EA4335" />
                </svg>
            </ButtonField>

            <div className="mt-2 text-center text-sm text-gray-600">
                Đã có tài khoản?{' '}
                <Link to="/login" className="font-medium text-mint-green hover:underline">
                    Đăng nhập
                </Link>
            </div>

            <div className="min-h-[90px] pt-1 flex justify-center">
                {error && <Error message={error} />}
            </div>
        </form>
        </AuthLayout>


    );
}
