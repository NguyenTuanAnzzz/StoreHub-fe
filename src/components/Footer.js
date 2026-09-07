import { Envelope1Outlined, FacebookOutlined, InstagramOutlined, MapMarker1Outlined, Telephone1Outlined, YoutubeOutlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";

export default function Footer() {
    return (
        <footer className="w-full border-t border-mist-gray bg-paper-white pt-16 pb-8 px-6">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.svg" alt="StoreHub Logo" className="w-8 h-8 rounded-md" />
                            <span className="font-semibold text-ink-black text-[20px]">StoreHub</span>
                        </div>
                        <p className="text-[14px] text-true-black/70 mb-6 leading-[1.6]">
                            Hệ thống bán lẻ sản phẩm công nghệ cao cấp hàng đầu Việt Nam. Nơi hội tụ những công nghệ mới nhất.
                        </p>
                        <div className="flex gap-4 text-ink-black">
                            <a href="#" className="hover:text-mint-green transition-colors"><Lineicons icon={FacebookOutlined} size={25} /></a>
                            <a href="#" className="hover:text-mint-green transition-colors"><Lineicons icon={InstagramOutlined} size={25} /></a>
                            <a href="#" className="hover:text-mint-green transition-colors"><Lineicons icon={YoutubeOutlined} size={25} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-ink-black text-[15px] mb-5 uppercase tracking-[0.05em]">Sản phẩm</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Điện thoại di động</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Laptop & Macbook</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Đồng hồ thông minh</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Âm thanh & Phụ kiện</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Hàng cũ giá rẻ</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-ink-black text-[15px] mb-5 uppercase tracking-[0.05em]">Chính sách</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Chính sách bảo hành</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Chính sách đổi trả 30 ngày</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Chính sách giao hàng</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Chính sách bảo mật</a>
                            <a href="#" className="text-[14px] text-true-black/80 hover:text-mint-green transition-colors">Điều khoản dịch vụ</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-ink-black text-[15px] mb-5 uppercase tracking-[0.05em]">Liên hệ</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3">
                                <div className="text-mint-green"><Lineicons icon={MapMarker1Outlined} size={20} /></div>
                                <span className="text-[14px] text-true-black/80">Tầng 12, Tòa nhà Tech Tower, Quận 1, TP. HCM</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-mint-green"><Lineicons icon={Telephone1Outlined} size={20} /></div>
                                <span className="text-[14px] text-true-black/80">1900 9999</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-mint-green"><Lineicons icon={Envelope1Outlined} size={20} /></div>
                                <span className="text-[14px] text-true-black/80">support@storehub.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-mist-gray pt-8">
                    <p className="text-[13px] text-true-black/50 mb-4 md:mb-0">
                        © 2026 StoreHub. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Fake Payment Icons */}
                        <div className="w-10 h-6 bg-mist-gray rounded flex items-center justify-center text-[10px] font-bold text-ink-black/60">VISA</div>
                        <div className="w-10 h-6 bg-mist-gray rounded flex items-center justify-center text-[10px] font-bold text-ink-black/60">MASTER</div>
                        <div className="w-10 h-6 bg-mist-gray rounded flex items-center justify-center text-[10px] font-bold text-ink-black/60">MOMO</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}