import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';

export default function VerifyOtp() {
    // Logic do bạn xử lý, dưới đây chỉ là state tạm để UI không lỗi
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [time, setTime] = useState(60);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = { "email": email, "otp": otp.join("") }

        try {
            const response = await fetch("http://localhost:8080/api/auth/verify-otp", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            if (!response.ok) {
                setError(data.message)
                return;
            }

            const data = await response.json()
            navigate('/login')
        }
        catch (error) {
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


        <AuthLayout>
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
        </AuthLayout>
    );
}
