import React from 'react';

const Error = ({ title = "Đã xảy ra lỗi", message}) => {
    

    return (
        <div className="flex flex-col items-center justify-center px-4 py-3 bg-paper-white border border-cloud-gray rounded-lg shadow-sm font-inter max-w-xs mx-auto">
            <div className="w-8 h-8 flex items-center justify-center bg-red-50 rounded-full mb-2">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
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
