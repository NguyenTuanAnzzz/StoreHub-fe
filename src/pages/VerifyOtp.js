import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function VerifyOtp() {
    // Logic do bạn xử lý, dưới đây chỉ là state tạm để UI không lỗi
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [time, setTime] = useState(60);
    const [error, setError]= useState("")
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = {"email": email, "otp": otp.join("")}
       
        try{
            const response = await fetch("http://localhost:8080/api/auth/verify-otp",{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            if(!response.ok){
                setError(data.message)
                return;
            }
            
            const data = await response.json()
            navigate('/login')
        }
        catch(error){
            setError("Không thể kết nối đến server");
        }
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            })

        }, 1000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="flex h-screen w-full overflow-hidden bg-paper-white font-inter text-true-black selection:bg-mint-green selection:text-paper-white">

            {/* TRÁI: Phần Giới thiệu có Ảnh Nền (40% màn hình) */}
            <div className="hidden relative flex-col justify-between p-10 lg:flex lg:w-[40%] xl:p-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                        alt="StoreHub Workspace"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ink-black/80 mix-blend-multiply"></div>
                </div>

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-mint-green text-paper-white shadow-sm">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    </div>
                    <span className="text-[20px] font-semibold tracking-[-0.2px] text-paper-white">StoreHub</span>
                </div>

                {/* Hero Text */}
                <div className="relative z-10 max-w-[600px] pb-10">
                    <div className="mb-6 inline-block uppercase tracking-[0.05em] text-[13px] font-medium text-mint-green">
                        Xác thực tài khoản
                    </div>
                    <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-paper-white xl:text-[48px]">
                        Bảo mật cấp cao cho tài khoản của bạn.
                    </h1>
                    <p className="mt-5 text-[16px] leading-[1.5] text-mist-gray/80 xl:text-[18px]">
                        Chúng tôi đã gửi một mã OTP gồm 6 chữ số đến email của bạn. Vui lòng nhập mã để hoàn tất đăng ký.
                    </p>
                </div>


                {/* Footer Left */}
                <div className="relative z-10 text-[14px] text-mist-gray/50">
                    © 2026 StoreHub. Bảo mật & an toàn tuyệt đối.
                </div>
            </div>

            {/* PHẢI: Phần Form (60% màn hình) */}
            <div className="flex w-full flex-col items-center justify-center p-6 lg:w-[60%] lg:px-12">
                <div className="w-full max-w-[420px]">

                    {/* Mobile Header */}
                    <div className="mb-6 text-center lg:hidden">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-mint-green/10 text-mint-green shadow-sm">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                        <h2 className="text-[24px] font-semibold text-ink-black">Xác thực OTP</h2>
                    </div>

                    {/* Desktop Title */}
                    <div className="mb-6 hidden lg:block">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[4px] bg-mint-green/10 text-mint-green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                        <h2 className="text-[26px] font-semibold tracking-[-0.4px] text-ink-black">Nhập mã xác thực</h2>
                        <p className="mt-2 text-[14px] text-true-black/60">
                            Mã xác thực 6 số đã được gửi đến email của bạn. Vui lòng kiểm tra hộp thư đến.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Khu vực nhập OTP */}
                        <div className="flex justify-between gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    className="h-12 w-12 rounded-[4px] border border-cloud-gray bg-paper-white text-center text-lg font-semibold text-ink-black outline-none transition-colors focus:border-mint-green focus:ring-1 focus:ring-mint-green sm:h-14 sm:w-14"
                                    value={digit}
                                    onChange={(e) => {
                                        const value = e.target.value.toUpperCase();
                                        const newOtp = [...otp]
                                        newOtp[index] = value;
                                        setOtp(newOtp)

                                        if (value && index < otp.length - 1) {
                                            document.getElementById(`otp-${index + 1}`)?.focus();
                                        }
                                    }}
                                />
                            ))}
                        </div>
                        <div className="mt-4 text-center text-[14px]">
                            {time > 0 ? (
                                <span className="text-true-black/60">
                                    Mã OTP hết hạn sau{" "}
                                    <span className="font-semibold text-mint-green">
                                        {time}s
                                    </span>
                                </span>
                            ) : ( 
                                <span className="font-medium text-red-500">
                                    Mã OTP đã hết hạn
                                </span>
                            )}
                        </div>

                        {/* Button Xác thực */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-[4px] bg-ink-black px-4 py-[10px] text-[14px] font-medium text-paper-white transition-all hover:bg-true-black shadow-[0px_2px_4px_rgba(0,0,0,0.05)]"
                        >
                            Xác thực ngay
                        </button>

                        {/* Resend OTP */}
                        <div className="text-center text-[14px]">
                            <span className="text-true-black/60">Chưa nhận được mã? </span>
                            <button type="button" className="font-medium text-mint-green hover:underline">
                                Gửi lại mã
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
