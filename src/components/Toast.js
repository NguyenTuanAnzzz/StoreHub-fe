import React, { useEffect } from "react";

export default function Toast({ 
    message, 
    type = "success", 
    visible, 
    onClose, 
    duration = 3000 
}) {
    // Tự động đóng toast sau khoảng thời gian duration
    useEffect(() => {
        if (visible && duration > 0) {
            const timer = setTimeout(() => {
                if (onClose) onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [visible, duration, onClose]);

    // Định nghĩa phong cách (CSS classes) và biểu tượng (SVG) cho từng loại thông báo
    const config = {
        success: {
            bg: "bg-[#dcfce7]",
            border: "border-[#86efac]",
            text: "text-[#166534]",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        error: {
            bg: "bg-[#fee2e2]",
            border: "border-[#fca5a5]",
            text: "text-[#991b1b]",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )
        },
        warning: {
            bg: "bg-[#fef3c7]",
            border: "border-[#fde047]",
            text: "text-[#854d0e]",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        info: {
            bg: "bg-[#e0f2fe]",
            border: "border-[#7dd3fc]",
            text: "text-[#075985]",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    };

    const currentConfig = config[type] || config.success;

    return (
        <div 
            className={`fixed top-6 right-6 z-50 flex items-start gap-3 px-4 py-3 min-w-[280px] max-w-[400px] rounded-[12px] shadow-sm border ${currentConfig.bg} ${currentConfig.border} ${currentConfig.text} transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
                visible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none"
            }`}
        >
            <div className="shrink-0 mt-0.5">
                {currentConfig.icon}
            </div>
            
            <div className="flex-1 text-[14px] font-medium leading-relaxed">
                {message}
            </div>
        </div>
    );
}
