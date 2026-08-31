import { Cart1Outlined, Search1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {

    const {token, user} = useAuth();

    return (
        <nav className="w-full bg-paper-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-mist-gray transition-all">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <img src="/logo_ultimate_tech.svg" alt="Ultimate Tech Logo" className="w-12 h-12 rounded-md shadow-sm-2" />
                    <span className="font-semibold text-ink-black text-[20px] tracking-[-0.2px]">Ultimate Tech</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {['Sản phẩm mới', 'Khuyến mãi', 'Apple', 'Phụ kiện', 'Tin tức'].map(item => (
                        <a key={item} href="#" className="text-[14px] font-medium text-ink-black hover:text-mint-green transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-mint-green hover:after:w-full after:transition-all">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5">
                    <button className="text-ink-black hover:text-mint-green transition-colors hidden md:block">
                        <Lineicons icon={Search1Outlined} size={20} />
                    </button>
                    <button className="text-ink-black hover:text-mint-green transition-colors relative">
                        <Lineicons icon={Cart1Outlined} size={20} />
                        <span className="absolute -top-1.5 -right-2 bg-mint-green text-paper-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                    </button>
                    {token ? user.name :<a href="/login" className="bg-ink-black text-paper-white text-[14px] font-medium py-2.5 px-5 rounded-md shadow-sm hover:bg-mint-green transition-colors hidden sm:block">
                        Đăng nhập
                    </a>}

                    
                </div>
            </div>
        </nav>)
}