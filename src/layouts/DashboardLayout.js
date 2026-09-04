import { Search1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardLayout() {

    const { user } = useAuth();
    return (
        <div className="flex h-screen bg-mist-gray/30 overflow-hidden font-sans">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}
                <header className="h-20 bg-paper-white border-b border-mist-gray flex items-center justify-end px-8 shrink-0">

                    {/* Profile */}
                    <div className="flex items-center gap-4 ">
                        <div className="text-right hidden md:block">
                            <div className="text-[14px] font-bold text-ink-black">{user.name}</div>
                            <div className="text-[12px] text-true-black/50">{user.role}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-mist-gray flex items-center justify-center overflow-hidden border border-cloud-gray cursor-pointer">
                            <img
                                src={user.avatarg}
                                alt="Admin"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}