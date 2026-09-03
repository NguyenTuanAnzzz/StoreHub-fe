import {
    ArrowRightOutlined,
    Cart1Outlined,
    CertificateBadge1Outlined,
    DashboardSquare1Stroke
} from "@lineiconshq/free-icons";
import HomeLayout from "./HomeLayout";
import Lineicons from "@lineiconshq/react-lineicons";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProfileLayout() {

    const { logout, user } = useAuth();
    return (
        <HomeLayout>
            <div className="bg-mist-gray/20 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-[1000px] mx-auto px-6 py-12 md:py-16">

                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-[32px] font-semibold text-ink-black tracking-[-0.4px]">
                            Tài khoản của bạn
                        </h1>

                        <p className="text-[15px] text-true-black/60 mt-2">
                            Quản lý thông tin cá nhân và đơn hàng
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">

                        {/* Sidebar */}
                        <aside className="w-full md:w-[240px] shrink-0">
                            <nav className="flex flex-col gap-1 sticky top-24">

                                <NavLink
                                    to="/profile"
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all cursor-pointer ${isActive
                                            ? "bg-mint-green/10 text-mint-green"
                                            : "text-ink-black hover:bg-mist-gray/80"
                                        }`
                                    }
                                >
                                    <Lineicons
                                        icon={CertificateBadge1Outlined}
                                        size={20}
                                        className="stroke-[1.5px]"
                                    />

                                    <span className="text-[14px]">
                                        Hồ sơ của tôi
                                    </span>
                                </NavLink>

                                <NavLink
                                    to="/profile/orders"
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all cursor-pointer ${isActive
                                            ? "bg-mint-green/10 text-mint-green"
                                            : "text-ink-black hover:bg-mist-gray/80"
                                        }`
                                    }
                                >
                                    <Lineicons
                                        icon={Cart1Outlined}
                                        size={20}
                                        className="stroke-[1.5px]"
                                    />

                                    <span className="text-[14px]">
                                        Đơn hàng đã mua
                                    </span>
                                </NavLink>

                                {(user?.role === "ADMIN" || user?.role === "STAFF") && (<NavLink
                                    to={user.role === "ADMIN" ? "/admin/overview" : "/staff/overview"}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-all cursor-pointer ${isActive
                                            ? "bg-mint-green/10 text-mint-green"
                                            : "text-ink-black hover:bg-mist-gray/80"
                                        }`
                                    }
                                >
                                    <Lineicons
                                        icon={DashboardSquare1Stroke}
                                        size={20}
                                        className="stroke-[1.5px]"
                                    />


                                    <span className="text-[14px]">
                                        Dashboard
                                    </span>
                                </NavLink>)}

                                <div className="w-full h-[1px] bg-mist-gray my-2" />

                                <button onClick={logout}
                                    type="button"
                                    className="flex items-center gap-3 px-4 py-3 text-[#e53e3e] hover:bg-[#e53e3e]/10 rounded-[12px] font-medium cursor-pointer transition-colors text-left"
                                >
                                    <Lineicons
                                        icon={ArrowRightOutlined}
                                        size={20}
                                        className="stroke-[1.5px]"
                                    />

                                    <span className="text-[14px]">
                                        Đăng xuất
                                    </span>
                                </button>

                            </nav>
                        </aside>

                        {/* Main Content Area */}
                        <Outlet />


                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}