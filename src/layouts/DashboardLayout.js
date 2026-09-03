import { Search1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex h-screen bg-mist-gray/30 overflow-hidden font-sans">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Header */}
                <header className="h-20 bg-paper-white border-b border-mist-gray flex items-center justify-between px-8 shrink-0">
                    {/* Search */}
                    <div className="flex items-center gap-3 bg-mist-gray/40 px-4 py-2.5 rounded-[12px] w-[320px] border border-mist-gray/50 focus-within:border-mint-green transition-colors">
                        <Lineicons icon={Search1Outlined} size={18} className="text-ink-black/50" />
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm đơn hàng, sản phẩm..." 
                            className="bg-transparent border-none outline-none text-[14px] w-full text-ink-black placeholder:text-ink-black/40" 
                        />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <div className="text-[14px] font-bold text-ink-black">Admin User</div>
                            <div className="text-[12px] text-true-black/50">Quản trị viên</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-mist-gray flex items-center justify-center overflow-hidden border border-cloud-gray cursor-pointer">
                            <img 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" 
                                alt="Admin" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}