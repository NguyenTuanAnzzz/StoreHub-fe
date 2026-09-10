import { PlusOutlined, Search1Outlined, Pencil1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useNavigate } from "react-router-dom";
import ButtonField from "../../components/ButtonField";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Pagination from "../../components/Pagination";
export default function Shops() {

    const navigate = useNavigate();
    const [shops, setShops] = useState([])
    const { token } = useAuth();
    const [error, setError] = useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(10)

    const [filter, setFilter] = useState({
        keyword: "",
        region: "",
        status: ""
    });
    const handleChange = (page) => {
        setCurrentPage(page);
    };

    const handleChangeFilter = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
        setCurrentPage(0)
    };
    const getAllData = async () => {
        try {

            const params = new URLSearchParams();

            if (filter.keyword) {
                params.append("keyword", filter.keyword);
            }

            if (filter.region) {
                params.append("region", filter.region);
            }

            if (filter.status) {
                params.append("status", filter.status);
            }

            params.append("page", currentPage);
            params.append("size", size);

            const query = params.toString()


            const response = await fetch(
                `http://localhost:8080/api/shops?${query}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json();
            if (!response.ok) {
                setError(data.message);
                return
            }
            setShops(data.content);
            setCurrentPage(data.page.number)
            setTotalPages(data.page.totalPages)

        } catch (error) {
            setError(error.message)
        }

    }


    useEffect(() => {
        getAllData()
    }, [filter, currentPage])


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
                <div className="w-[180px]">
                    <ButtonField
                        type="button"
                        bgColor="bg-mint-green"
                        textColor="text-paper-white"
                        hoverColor="hover:bg-[#0a7a50]"
                        onClick={() => navigate("/admin/create-shop")}
                    >
                        <div className="flex items-center gap-2">
                            <Lineicons icon={PlusOutlined} size={18} />
                            <span>Thêm cửa hàng</span>
                        </div>
                    </ButtonField>
                </div>
            </div>

            {/* Filter & Search */}
            <div className="bg-paper-white p-5 rounded-[16px] shadow-sm border border-mist-gray flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-end">
                <div className="w-full lg:w-[350px]">
                    <InputField
                        label="Tìm kiếm"
                        name="keyword"
                        placeholder="Tìm kiếm theo tên hoặc SĐT..."
                        onChange={handleChangeFilter}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto md:items-end">
                    {/* Khu vực */}
                    <div className="w-full md:w-[180px]">
                        <SelectField
                            label="Khu vực"
                            name="region"
                            choose={[
                                { value: "", label: "Tất cả khu vực" },
                                { value: "NORTH", label: "Miền Bắc" },
                                { value: "CENTRAL", label: "Miền Trung" },
                                { value: "SOUTH", label: "Miền Nam" }
                            ]}
                            onChange={handleChangeFilter}
                        />
                    </div>

                    {/* Trạng thái */}
                    <div className="w-full md:w-[180px]">
                        <SelectField
                            label="Trạng thái"
                            name="status"
                            choose={[
                                { value: "", label: "Tất cả trạng thái" },
                                { value: "ACTIVE", label: "Đang hoạt động" },
                                { value: "SUSPENDED", label: "Đình chỉ" },
                                { value: "INACTIVE", label: "Ngừng hoạt động" }
                            ]}
                            onChange={handleChangeFilter}
                        />
                    </div>

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
                            {shops.map((shop) => (
                                <tr
                                    key={shop.id}
                                    className="border-b border-mist-gray/50 hover:bg-mist-gray/10 transition-colors text-[14px] text-ink-black"
                                >
                                    <td className="px-6 py-4 font-medium text-true-black/70">#{shop.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {/* Hiển thị ảnh đầu tiên nếu có, nếu không có ảnh thì hiển thị placeholder */}
                                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-mist-gray/50 flex-shrink-0">

                                                <img src={shop.images?.[0]} alt={shop.name} className="w-full h-full object-cover" />


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
                                                onClick={() => navigate(`/admin/shops/${shop.id}`)}
                                            >
                                                <Lineicons icon={Pencil1Outlined} size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Tĩnh) */}
                <Pagination totalPages={totalPages} currentPage={currentPage} handleChange={handleChange} />
            </div>
        </div>
    );
}
