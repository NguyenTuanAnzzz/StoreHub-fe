import { Check } from 'lucide-react';
import InputField from '../components/InputField';
import { useState } from 'react';
import ButtonField from '../components/ButtonField';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");

    const [rePassword, setRePassword] = useState("");

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const[check, setCheck] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!check){
            setError("Vui lòng đồng ý với Điều khoản và Chính sách");
            return
        }
        if(form.password !== rePassword){
            setError("Mật khẩu không khớp");
            return;
        }
        try{
            const response = await fetch("http://localhost:8080/api/auth/register",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = await response.json();
            if(!response.ok){
                setError(data.message)
                return;
            }
            window.location.href = `/verify-otp?email=${encodeURIComponent(form.email)}`
        }catch(error){
            setError("Không thể kết nối đến server");
       
        }
    }

    return (
        /* Vẫn giữ tuyệt đối h-screen & overflow-hidden để không scroll */
        <div className="flex h-screen w-full overflow-hidden bg-paper-white font-inter text-true-black selection:bg-mint-green selection:text-paper-white">
            
            {/* TRÁI: Phần Giới thiệu có Ảnh Nền (40% màn hình) */}
            <div className="hidden relative flex-col justify-between p-10 lg:flex lg:w-[40%] xl:p-16 overflow-hidden">
                
                {/* Lớp Ảnh nền & Phủ mờ (Overlay) */}
                <div className="absolute inset-0 z-0">
                    {/* Sử dụng ảnh công nghệ trực tiếp từ Unsplash (rất ổn định) */}
                    <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                        alt="StoreHub Workspace" 
                        className="h-full w-full object-cover"
                    />
                    {/* Lớp phủ màu đen (Ink Black) độ trong suốt 80% để chữ trắng nổi bật tuyệt đối */}
                    <div className="absolute inset-0 bg-ink-black/80 mix-blend-multiply"></div>
                </div>

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-mint-green text-paper-white shadow-sm">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    </div>
                    {/* Đổi chữ logo thành màu Trắng cho nổi trên nền đen */}
                    <span className="text-[20px] font-semibold tracking-[-0.2px] text-paper-white">StoreHub</span>
                </div>

                {/* Hero Text */}
                <div className="relative z-10 max-w-[600px] pb-10">
                    <div className="mb-6 inline-block uppercase tracking-[0.05em] text-[13px] font-medium text-mint-green">
                        Khách hàng thành viên
                    </div>
                    {/* Đổi chữ Title thành màu Trắng */}
                    <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-paper-white xl:text-[48px]">
                        Trải nghiệm mua sắm công nghệ đỉnh cao.
                    </h1>
                    {/* Đổi chữ mô tả thành màu Xám sáng (mist-gray) */}
                    <p className="mt-5 text-[16px] leading-[1.5] text-mist-gray/80 xl:text-[18px]">
                        Tạo tài khoản ngay hôm nay để nhận các ưu đãi độc quyền, tích điểm thành viên và theo dõi đơn hàng của bạn một cách dễ dàng nhất.
                    </p>
                </div>

                {/* Footer Left */}
                <div className="relative z-10 text-[14px] text-mist-gray/50">
                    © 2026 StoreHub. Bảo mật & an toàn tuyệt đối.
                </div>
            </div>

            {/* PHẢI: Phần Form Đăng ký (60% màn hình) */}
            <div className="flex w-full flex-col items-center justify-center p-6 lg:w-[60%] lg:px-12">
                
                {/* Giữ nguyên chiều rộng tối đa 420px */}
                <div className="w-full max-w-[420px]">
                    
                    {/* Mobile Header */}
                    <div className="mb-4 text-center lg:hidden">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-mint-green text-paper-white shadow-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        </div>
                        <h2 className="text-[24px] font-semibold text-ink-black">Đăng ký thành viên</h2>
                    </div>

                    {/* Desktop Title */}
                    <div className="mb-5 hidden lg:block">
                        <h2 className="text-[26px] font-semibold tracking-[-0.4px] text-ink-black">Tạo tài khoản</h2>
                        <p className="mt-1 text-[14px] text-true-black/60">Điền thông tin của bạn bên dưới</p>
                    </div>

                    <form noValidate className="space-y-3" onSubmit={handleSubmit}>
                        
                        {/* Row 1: Họ tên & SĐT */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <InputField label={"Họ và tên"} placeholder={"Nguễn Văn A"} value={form.name} name={"name"} onChange={handleChange}/>
                            <InputField label={"Số điện thoại"} placeholder={"0987654321"} value={form.phone} name={"phone"} onChange={ handleChange}/>
                        </div>

                        {/* Row 2: Email */}
                        <InputField label={"Email"} placeholder={"nguyenvana@gmail.com"} value={form.email} name={"email"} onChange={handleChange}/>


                        {/* Row 3: Mật khẩu & Nhập lại */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <InputField label={"Mật khẩu"} placeholder={"6+ password"} value={form.password} name={"password"} onChange={handleChange}/>

                            <InputField label={"Nhập lại mật khẩu"} placeholder={"6+ password"} value={rePassword} name={"rePassword"} onChange={(e) =>(setRePassword(e.target.value))}/>

                        </div>

                        {/* Terms */}
                        <label className="mt-1 flex cursor-pointer items-start gap-2 pt-1">
                            <div className="relative mt-[2.5px] flex h-[16px] w-[16px] shrink-0 items-center justify-center">
                                <input required type="checkbox" name="terms" className="peer h-[16px] w-[16px] cursor-pointer appearance-none rounded-sm border border-cloud-gray bg-paper-white transition-colors checked:border-mint-green checked:bg-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20" onChange={(e) => (setCheck(e.target.checked))}/>
                                <Check className="pointer-events-none absolute h-3 w-3 text-paper-white opacity-0 peer-checked:opacity-100" strokeWidth={3.5} />
                            </div>
                            <span className="text-[13px] leading-[1.5] text-true-black/70">
                                Tôi đồng ý với <a href="/terms" className="font-medium text-mint-green hover:underline">Điều khoản</a> và <a href="/privacy" className="font-medium text-mint-green hover:underline">Chính sách</a>
                            </span>
                        </label>

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
                        <ButtonField label={"Đăng nhập bằng Google"} bgColor = "bg-ink-white" textColor = "text-paper-black" hoverColor = "hover:bg-true-white">
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                                <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v2.75h3.77c2.2-2.03 3.65-5.81 3.65-10.62Z" fill="#4285F4" /><path d="M12 24c3.24 0 5.95-1.07 7.98-2.89l-3.77-2.75c-1.04.7-2.37 1.1-4.21 1.1-3.13 0-5.79-2.11-6.92-4.97H1.31v2.84C3.33 22.04 7.48 24 12 24Z" fill="#34A853" /><path d="M5.08 14.49A7.2 7.2 0 0 1 4.7 12c0-.86.14-1.7.38-2.49V6.67H1.31A12 12 0 0 0 0 12c0 1.93.46 3.76 1.31 5.33l3.77-2.84Z" fill="#FBBC05" /><path d="M12 4.67c1.77 0 3.36.61 4.61 1.8l3.46-3.46C17.94 1.01 15.24 0 12 0 7.48 0 3.33 1.96 1.31 4.67l3.77 2.84C6.21 6.78 8.87 4.67 12 4.67Z" fill="#EA4335" />
                            </svg>
                        </ButtonField>
                        
                        <div className="min-h-[90px] pt-1 flex justify-center">
                            {error && <Error message={error}/>}
                        </div>
                    </form>
                    
                </div>
                
            </div>
            
        </div>
    );
}
