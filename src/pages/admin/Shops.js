import { PlusOutlined, Search1Outlined, Pencil1Outlined, Trash3Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useNavigate } from "react-router-dom";

export default function Shops() {

    const navigate = useNavigate();
    // Dữ liệu mẫu dựa trên Shop entity (id, name, phone, address, region, status, images, createdAt, vv.)
    const mockShops = [
        {
            id: 1,
            name: "StoreHub Hà Nội",
            description: "Cửa hàng trung tâm khu vực miền Bắc",
            phone: "0901234567",
            address: "123 Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
            region: "Miền Bắc",
            status: "ACTIVE",
            images: [{ id: 1, url: "https://placehold.co/100x100" }],
            createdAt: "2026-09-01T10:00:00"
        },
        {
            id: 2,
            name: "StoreHub Hồ Chí Minh",
            description: "Chi nhánh chính khu vực phía Nam",
            phone: "0912345678",
            address: "456 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
            region: "Miền Nam",
            status: "ACTIVE",
            images: [{ id: 2, url: "https://placehold.co/100x100" }],
            createdAt: "2026-09-02T11:30:00"
        },
        {
            id: 3,
            name: "StoreHub Đà Nẵng",
            description: "Chi nhánh đang tạm đóng để nâng cấp",
            phone: "0923456789",
            address: "789 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng",
            region: "Miền Trung",
            status: "INACTIVE",
            images: [],
            createdAt: "2026-09-03T09:15:00"
        }
    ];

    const formatStatus = (status) => {
        if (status === "ACTIVE") {
            return <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#dcfce7] text-[#166534]">Hoạt động</span>;
        }
        return <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#fee2e2] text-[#991b1b]">Ngừng hoạt động</span>;
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-[24px] font-bold text-ink-black">Quản lý cửa hàng</h1>
                    <p className="text-[14px] text-true-black/60 mt-1">
                        Quản lý danh sách cửa hàng, thông tin liên hệ và trạng thái hoạt động.
                    </p>
                </div>
                <button onClick={() => navigate("/admin/create-shop")} className="flex items-center gap-2 bg-mint-green text-paper-white px-5 py-2.5 rounded-[12px] font-medium hover:bg-[#0a7a50] transition-colors">
                    <Lineicons icon={PlusOutlined} size={18} />
                    <span>Thêm cửa hàng</span>
                </button>
            </div>

            {/* Filter & Search */}
            <div className="bg-paper-white p-5 rounded-[16px] shadow-sm border border-mist-gray flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative w-full md:w-[350px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-true-black/40">
                        <Lineicons icon={Search1Outlined} size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên hoặc SĐT..."
                        className="w-full pl-10 pr-4 py-2.5 bg-mist-gray/30 border border-mist-gray rounded-[10px] text-[14px] focus:outline-none focus:border-mint-green transition-colors"
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <select className="w-full md:w-[180px] px-4 py-2.5 bg-mist-gray/30 border border-mist-gray rounded-[10px] text-[14px] focus:outline-none focus:border-mint-green cursor-pointer">
                        <option value="">Tất cả khu vực</option>
                        <option value="Miền Bắc">Miền Bắc</option>
                        <option value="Miền Trung">Miền Trung</option>
                        <option value="Miền Nam">Miền Nam</option>
                    </select>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-paper-white rounded-[16px] shadow-sm border border-mist-gray overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-mist-gray/20 border-b border-mist-gray text-[13px] font-semibold text-ink-black/70">
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4 min-w-[200px]">Cửa hàng</th>
                                <th className="px-6 py-4">Liên hệ</th>
                                <th className="px-6 py-4 min-w-[250px]">Khu vực & Địa chỉ</th>
                                <th className="px-6 py-4">Trạng thái</th>
                                <th className="px-6 py-4 text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockShops.map((shop) => (
                                <tr
                                    key={shop.id}
                                    className="border-b border-mist-gray/50 hover:bg-mist-gray/10 transition-colors text-[14px] text-ink-black"
                                >
                                    <td className="px-6 py-4 font-medium text-true-black/70">#{shop.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {/* Hiển thị ảnh đầu tiên nếu có, nếu không có ảnh thì hiển thị placeholder */}
                                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-mist-gray/50 flex-shrink-0">
                                                {shop.images && shop.images.length > 0 ? (
                                                    <img src={shop.images[0].url} alt={shop.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-true-black/30 font-bold text-xs">NO IMG</div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{shop.name}</div>
                                                {shop.description && <div className="text-[12px] text-true-black/60 truncate max-w-[150px]" title={shop.description}>{shop.description}</div>}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{shop.phone || "N/A"}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium">{shop.region || "N/A"}</div>
                                        <div className="text-[12px] text-true-black/60 truncate max-w-[220px]" title={shop.address}>{shop.address}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatStatus(shop.status)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                className="w-8 h-8 flex items-center justify-center rounded-md bg-mist-gray/30 text-ink-black hover:text-mint-green hover:bg-mint-green/10 transition-colors"
                                                title="Sửa"
                                            >
                                                <Lineicons icon={Pencil1Outlined} size={16} />
                                            </button>
                                            <button
                                                className="w-8 h-8 flex items-center justify-center rounded-md bg-mist-gray/30 text-ink-black hover:text-[#e53e3e] hover:bg-[#e53e3e]/10 transition-colors"
                                                title="Xóa"
                                            >
                                                <Lineicons icon={Trash3Outlined} size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Tĩnh) */}
                <div className="px-6 py-4 border-t border-mist-gray flex items-center justify-between">
                    <span className="text-[13px] text-true-black/60">Hiển thị 1-3 trong số 3 cửa hàng</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1.5 text-[13px] border border-mist-gray rounded-md hover:bg-mist-gray/50 disabled:opacity-50" disabled>Trước</button>
                        <button className="px-3 py-1.5 text-[13px] border border-mist-gray rounded-md hover:bg-mist-gray/50 disabled:opacity-50" disabled>Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
