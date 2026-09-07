import { useAuth } from "../contexts/AuthContext";
import { ADMIN_SIDEBAR_MENU } from "../enums/AdminSidebar";
import { STAFF_SIDEBAR_MENU } from "../enums/StaffSidebar";
import Lineicons from "@lineiconshq/react-lineicons";
import { ArrowRightOutlined } from "@lineiconshq/free-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    let menu = [];
    const { user } = useAuth();

    if (user?.role === 'ADMIN') {
        menu = ADMIN_SIDEBAR_MENU;
    } else if (user?.role === 'STAFF') {
        menu = STAFF_SIDEBAR_MENU;
    }

    return (
        <aside className="w-[260px] bg-ink-black text-paper-white flex flex-col shrink-0">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-paper-white/10">
                <span className="text-[24px] font-bold text-mint-green tracking-[-0.5px]">
                    StoreHub<span className="text-paper-white">Admin</span>
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 flex flex-col gap-2 overflow-y-auto">
                {menu.map(m => (
                    <NavLink
                        key={m.id}
                        to={m.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all cursor-pointer ${isActive
                                ? "bg-mint-green/10 text-mint-green"
                                : "text-paper-white hover:bg-mist-gray/80"
                            }`
                        }
                    >
                        <Lineicons icon={m.icon} size={20} className="stroke-[1.5px]" />
                        <span className="text-[14px]">{m.title}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-paper-white/10">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-[#e53e3e] hover:bg-[#e53e3e]/10 hover:text-[#ff4d4f] rounded-[12px] font-medium transition-colors">
                    <Lineicons icon={ArrowRightOutlined} size={20} className="stroke-[1.5px]" />
                    <span className="text-[14px]">Đăng xuất</span>
                </button>
            </div>
        </aside>
    );
}