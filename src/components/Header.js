import { Cart1Outlined, Search1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const { token, user } = useAuth();
    const navigate = useNavigate();


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
                    {token ? (
                        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate("/profile")}>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
                                {user?.avatar ? (
                                    <img
                                        src={user.avatar}
                                        alt="Avatar"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 text-gray-400 mt-1.5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 1 1 9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </div>
                            <span className="font-medium text-[14px] text-ink-black group-hover:text-mint-green transition-colors">{user?.name}</span>
                        </div>
                    ) : (
                        <a href="/login" className="bg-ink-black text-paper-white text-[14px] font-medium py-2.5 px-5 rounded-md shadow-sm hover:bg-mint-green transition-colors hidden sm:block">
                            Đăng nhập
                        </a>
                    )}


                </div>
            </div>
        </nav>)
}