import React from 'react';
import { Lineicons } from "@lineiconshq/react-lineicons";
import { XmarkCircleOutlined } from "@lineiconshq/free-icons";

const Error = ({ title = "Đã xảy ra lỗi", message}) => {
    

    return (
        <div className="flex flex-col items-center justify-center px-4 py-3 bg-paper-white border border-cloud-gray rounded-lg shadow-sm font-inter max-w-xs mx-auto">
            <div className="w-8 h-8 flex items-center justify-center bg-red-50 rounded-full mb-2">
                <Lineicons icon={XmarkCircleOutlined} className="w-4 h-4 text-red-500" strokeWidth={2} />
            </div>
            
            <h3 className="text-base font-medium text-ink-black mb-1 text-center">
                {title}
            </h3>
            
            {message && (
                <p className="text-xs text-center text-ink-black opacity-80">
                    {message}
                </p>
            )}
        </div>
    );
};

export default Error;
