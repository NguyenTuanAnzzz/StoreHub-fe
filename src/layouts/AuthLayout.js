import { useLocation } from 'react-router-dom';

export default function AuthLayout({children}) {
    const location = useLocation();

    let mobileTitle = "Đăng nhập / Đăng ký";
    let desktopTitle = "Trải nghiệm mua sắm công nghệ đỉnh cao.";
    let desktopDesc = "Tạo tài khoản ngay hôm nay để nhận các ưu đãi độc quyền, tích điểm thành viên và theo dõi đơn hàng của bạn một cách dễ dàng nhất.";

    if (location.pathname === '/login') {
        mobileTitle = "Chào mừng trở lại";
        desktopTitle = "Chào mừng bạn quay trở lại.";
        desktopDesc = "Đăng nhập để xem lịch sử mua hàng, quản lý đơn hàng và nhận những ưu đãi riêng dành cho bạn.";
    } else if (location.pathname === '/register') {
        mobileTitle = "Tạo tài khoản ngay";
        desktopTitle = "Bắt đầu hành trình mua sắm.";
        desktopDesc = "Tạo tài khoản ngay hôm nay để nhận các ưu đãi độc quyền, tích điểm thành viên và theo dõi đơn hàng của bạn một cách dễ dàng nhất.";
    } else if (location.pathname.includes('/phone') || location.pathname.includes('/update-phone')) {
        mobileTitle = "Xác thực số điện thoại";
        desktopTitle = "Bảo mật tài khoản của bạn.";
        desktopDesc = "Cung cấp số điện thoại giúp tăng cường bảo mật và giúp chúng tôi giao hàng đến bạn chính xác nhất.";
    } else if (location.pathname.includes('/verify')) {
        mobileTitle = "Xác thực OTP";
        desktopTitle = "Hoàn tất đăng nhập.";
        desktopDesc = "Vui lòng nhập mã OTP đã được gửi đến số điện thoại hoặc email của bạn để tiếp tục.";
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
                        alt="Ultimate Tech Workspace" 
                        className="h-full w-full object-cover"
                    />
                    {/* Lớp phủ màu đen (Ink Black) độ trong suốt 80% để chữ trắng nổi bật tuyệt đối */}
                    <div className="absolute inset-0 bg-ink-black/80 mix-blend-multiply"></div>
                </div>

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <img src="/logo_ultimate_tech.svg" alt="Ultimate Tech Logo" className="h-12 w-12 rounded-md shadow-sm" />
                    {/* Đổi chữ logo thành màu Trắng cho nổi trên nền đen */}
                    <span className="text-[20px] font-semibold tracking-[-0.2px] text-paper-white">Ultimate Tech</span>
                </div>

                {/* Hero Text */}
                <div className="relative z-10 max-w-[600px] pb-10">
                    <div className="mb-6 inline-block uppercase tracking-[0.05em] text-[13px] font-medium text-mint-green">
                        Khách hàng thành viên
                    </div>
                    {/* Đổi chữ Title thành màu Trắng */}
                    <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-paper-white xl:text-[48px]">
                        {desktopTitle}
                    </h1>
                    {/* Đổi chữ mô tả thành màu Xám sáng (mist-gray) */}
                    <p className="mt-5 text-[16px] leading-[1.5] text-mist-gray/80 xl:text-[18px]">
                        {desktopDesc}
                    </p>
                </div>

                {/* Footer Left */}
                <div className="relative z-10 text-[14px] text-mist-gray/50">
                    © 2026 Ultimate Tech. Bảo mật & an toàn tuyệt đối.
                </div>
            </div>

            {/* PHẢI: Phần Form Đăng ký (60% màn hình) */}
            <div className="flex w-full flex-col items-center justify-center p-6 lg:w-[60%] lg:px-12">
                
                {/* Giữ nguyên chiều rộng tối đa 420px */}
                <div className="w-full max-w-[420px]">
                    
                    {/* Mobile Header */}
                    <div className="mb-4 text-center lg:hidden">
                        <img src="/logo_ultimate_tech.svg" alt="Ultimate Tech Logo" className="mx-auto mb-2 h-10 w-10 rounded-md shadow-sm" />
                        <h2 className="text-[24px] font-semibold text-ink-black">{mobileTitle}</h2>
                    </div>

                    
                    {children}
                    
                </div>
                
            </div>
            
        </div>
    );
}
