import React from 'react';
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
    Cart1Outlined,
    RefreshCircle1ClockwiseOutlined,
    TruckDelivery1Outlined,
    CertificateBadge1Outlined,
    Shield2CheckOutlined,
    ArrowRightOutlined,
    Search1Outlined,
    UserMultiple4Outlined,
    AppStoreOutlined,
    TabOutlined
} from "@lineiconshq/free-icons";
import DashboardLayout from '../../layouts/DashboardLayout';

const Overview = () => {
    return (

        <>
            <div className="w-full max-w-[1200px] mx-auto">

                {/* Tiêu đề */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-[28px] font-semibold text-ink-black tracking-[-0.2px]">Tổng quan hệ thống</h1>
                        <p className="text-[14px] text-true-black/60 mt-1">Theo dõi hoạt động kinh doanh và hiệu suất cửa hàng</p>
                    </div>
                    <button className="bg-ink-black text-paper-white px-5 py-2.5 rounded-[12px] text-[14px] font-medium hover:bg-true-black transition-colors shrink-0">
                        Xuất báo cáo
                    </button>
                </div>

                {/* 4 Thẻ Thống Kê (Stats Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-paper-white rounded-[16px] border border-mist-gray p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-[12px] bg-mint-green/10 text-mint-green flex items-center justify-center">
                                <Lineicons icon={RefreshCircle1ClockwiseOutlined} size={24} className="stroke-[1.5px]" />
                            </div>
                            <span className="text-[12px] font-bold px-2.5 py-1.5 rounded-full bg-mint-green/10 text-mint-green">
                                +12.5%
                            </span>
                        </div>
                        <h3 className="text-[14px] font-medium text-true-black/60 mb-1">Doanh thu hôm nay</h3>
                        <p className="text-[24px] font-bold text-ink-black tracking-tight">24.500.000 ₫</p>
                    </div>

                    <div className="bg-paper-white rounded-[16px] border border-mist-gray p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-[12px] bg-mint-green/10 text-mint-green flex items-center justify-center">
                                <Lineicons icon={Cart1Outlined} size={24} className="stroke-[1.5px]" />
                            </div>
                            <span className="text-[12px] font-bold px-2.5 py-1.5 rounded-full bg-mint-green/10 text-mint-green">
                                +5.2%
                            </span>
                        </div>
                        <h3 className="text-[14px] font-medium text-true-black/60 mb-1">Đơn hàng mới</h3>
                        <p className="text-[24px] font-bold text-ink-black tracking-tight">145</p>
                    </div>

                    <div className="bg-paper-white rounded-[16px] border border-mist-gray p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-[12px] bg-[#e53e3e]/10 text-[#e53e3e] flex items-center justify-center">
                                <Lineicons icon={TruckDelivery1Outlined} size={24} className="stroke-[1.5px]" />
                            </div>
                            <span className="text-[12px] font-bold px-2.5 py-1.5 rounded-full bg-[#e53e3e]/10 text-[#e53e3e]">
                                -2.1%
                            </span>
                        </div>
                        <h3 className="text-[14px] font-medium text-true-black/60 mb-1">Đang vận chuyển</h3>
                        <p className="text-[24px] font-bold text-ink-black tracking-tight">32</p>
                    </div>

                    <div className="bg-paper-white rounded-[16px] border border-mist-gray p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-[12px] bg-mint-green/10 text-mint-green flex items-center justify-center">
                                <Lineicons icon={Cart1Outlined} size={24} className="stroke-[1.5px]" />
                            </div>
                            <span className="text-[12px] font-bold px-2.5 py-1.5 rounded-full bg-mint-green/10 text-mint-green">
                                +18.2%
                            </span>
                        </div>
                        <h3 className="text-[14px] font-medium text-true-black/60 mb-1">Khách hàng mới</h3>
                        <p className="text-[24px] font-bold text-ink-black tracking-tight">48</p>
                    </div>
                </div>

                {/* Khu vực Nội dung (Biểu đồ & Đơn hàng) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Biểu đồ doanh thu (Vẽ bằng CSS Flexbox) */}
                    <div className="lg:col-span-2 bg-paper-white rounded-[16px] border border-mist-gray shadow-sm p-6">
                        <h2 className="text-[18px] font-semibold text-ink-black mb-6">Doanh thu 7 ngày qua</h2>

                        <div className="h-[280px] w-full flex items-end justify-between gap-2 md:gap-4 pt-10 relative">
                            <div className="absolute inset-0 flex flex-col justify-between pb-6 opacity-40 pointer-events-none">
                                <div className="w-full border-b border-cloud-gray border-dashed"></div>
                                <div className="w-full border-b border-cloud-gray border-dashed"></div>
                                <div className="w-full border-b border-cloud-gray border-dashed"></div>
                                <div className="w-full border-b border-cloud-gray border-dashed"></div>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "40%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">60.0 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T2</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "65%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">97.5 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T3</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "45%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">67.5 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T4</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "80%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">120.0 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T5</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "55%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">82.5 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T6</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "90%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">135.0 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">T7</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                <div className="w-full max-w-[48px] bg-mint-green/20 rounded-t-md relative group hover:bg-mint-green/40 transition-colors cursor-pointer" style={{ height: "75%" }}>
                                    <div className="absolute top-0 left-0 w-full bg-mint-green rounded-t-md" style={{ height: '4px' }}></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink-black text-paper-white text-[12px] px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">112.5 Tr</div>
                                </div>
                                <span className="text-[13px] text-true-black/50 font-medium">CN</span>
                            </div>
                        </div>
                    </div>

                    {/* Đơn hàng mới (Recent Orders) */}
                    <div className="bg-paper-white rounded-[16px] border border-mist-gray shadow-sm p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-[18px] font-semibold text-ink-black">Đơn hàng mới</h2>
                            <span className="text-[13px] font-medium text-mint-green hover:underline cursor-pointer">Xem tất cả</span>
                        </div>

                        <div className="flex flex-col gap-1 flex-1">
                            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-mist-gray/40 transition-colors cursor-pointer group">
                                <div>
                                    <div className="text-[14px] font-semibold text-ink-black group-hover:text-mint-green transition-colors">#DH-9921</div>
                                    <div className="text-[13px] text-true-black/60 mt-0.5">Nguyễn Văn A</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[14px] font-semibold text-ink-black">24.990.000 ₫</div>
                                    <div className="text-[12px] font-medium mt-1 text-mint-green">Hoàn thành</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-mist-gray/40 transition-colors cursor-pointer group">
                                <div>
                                    <div className="text-[14px] font-semibold text-ink-black group-hover:text-mint-green transition-colors">#DH-9920</div>
                                    <div className="text-[13px] text-true-black/60 mt-0.5">Trần Thị B</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[14px] font-semibold text-ink-black">5.490.000 ₫</div>
                                    <div className="text-[12px] font-medium mt-1 text-[#f59e0b]">Đang giao</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-mist-gray/40 transition-colors cursor-pointer group">
                                <div>
                                    <div className="text-[14px] font-semibold text-ink-black group-hover:text-mint-green transition-colors">#DH-9919</div>
                                    <div className="text-[13px] text-true-black/60 mt-0.5">Lê Hoàng C</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[14px] font-semibold text-ink-black">32.000.000 ₫</div>
                                    <div className="text-[12px] font-medium mt-1 text-[#f59e0b]">Đang xử lý</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-mist-gray/40 transition-colors cursor-pointer group">
                                <div>
                                    <div className="text-[14px] font-semibold text-ink-black group-hover:text-mint-green transition-colors">#DH-9917</div>
                                    <div className="text-[13px] text-true-black/60 mt-0.5">Hoàng E</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[14px] font-semibold text-ink-black">8.990.000 ₫</div>
                                    <div className="text-[12px] font-medium mt-1 text-[#e53e3e]">Đã hủy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Overview;
