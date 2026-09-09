import { useParams } from "react-router-dom";
import ButtonField from "../../components/ButtonField";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import TextareaField from "../../components/TextareaField";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function ShopDetail() {

    const { token } = useAuth();
    const { id } = useParams()
    const [shop, setShop] = useState({
        id: "",
        name: "",
        phone: "",
        address: "",
        region: "",
        status: "",
        description: "",
        avatar: [],
        createAt: "",
        updateAt: ""
    })
    const [error, setError] = useState("");
    const getDetailData = async () => {

        try {
            const response = await fetch(`http://localhost:8080/api/shops/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message)
                return
            }
            setShop(data);
        } catch (error) {
            setError(error.messae);
        }
    }
    useEffect(() => {
        getDetailData()
    }, [shop])
    return (
        <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-[24px] font-bold text-ink-black">
                        Chi tiết cửa hàng
                    </h1>
                    <p className="text-[14px] text-true-black/60 mt-1">
                        Cập nhật thông tin chi tiết của cửa hàng.
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-[120px]">
                        <ButtonField
                            type="button"
                            bgColor="bg-paper-white"
                            textColor="text-ink-black"
                            borderColor="border-mist-gray"
                            hoverColor="hover:bg-mist-gray/30"
                        >
                            Quay lại
                        </ButtonField>
                    </div>
                    <div className="w-[160px]">
                        <ButtonField
                            type="button"
                            bgColor="bg-mint-green"
                            textColor="text-paper-white"
                            hoverColor="hover:bg-[#0a7a50]"
                            borderColor="border-mint-green"
                        >
                            Cập nhật
                        </ButtonField>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-paper-white p-6 md:p-8 rounded-[16px] shadow-sm border border-mist-gray">
                <h2 className="text-[18px] font-semibold text-ink-black mb-6 pb-4 border-b border-mist-gray/60 flex items-center gap-2">
                    <svg className="w-5 h-5 text-mint-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Thông tin chung
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <InputField
                        label="Tên cửa hàng"
                        placeholder="VD: Cửa hàng trung tâm Hà Nội"
                        name="name"
                        required
                        value={shop.name}
                    />

                    <InputField
                        label="Số điện thoại"
                        name="phone"
                        type="tel"
                        placeholder="VD: 0912345678"
                        required
                        value={shop.phone}
                    />

                    <SelectField
                        label="Khu vực"
                        name="region"
                        required
                        choose={[
                            { value: "", label: "Chọn khu vực..." },
                            { value: "NORTH", label: "Miền Bắc" },
                            { value: "CENTRAL", label: "Miền Trung" },
                            { value: "SOUTH", label: "Miền Nam" }
                        ]}
                        value={shop.region}
                    />

                    <SelectField
                        label="Trạng thái"
                        name="status"
                        required
                        choose={[
                            { value: "", label: "Chọn trạng thái..." },
                            { value: "ACTIVE", label: "Đang hoạt động" },
                            { value: "SUSPENDED", label: "Tạm ngưng" },
                            { value: "INACTIVE", label: "Ngừng hoạt động" }
                        ]}
                        value={shop.status}
                    />

                    <div className="md:col-span-2">
                        <InputField
                            label="Địa chỉ chi tiết"
                            name="address"
                            placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố..."
                            required
                            value={shop.address}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextareaField
                            label="Mô tả cửa hàng"
                            name="description"
                            placeholder="Nhập ghi chú hoặc mô tả về cửa hàng (không bắt buộc)..."
                            value={shop.description}
                        />
                    </div>
                </div>

                <h2 className="text-[18px] font-semibold text-ink-black mt-10 mb-6 pb-4 border-b border-mist-gray/60 flex items-center gap-2">
                    <svg className="w-5 h-5 text-mint-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Hình ảnh cửa hàng
                </h2>

                <div className="flex flex-col gap-5">
                    <input
                        type="file"
                        name="images"
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        className="hidden"
                        id="shop-images"
                    />

                    <label
                        htmlFor="shop-images"
                        className="w-full md:w-[400px] group flex flex-col items-center justify-center py-8 px-6 border-2 border-dashed border-mist-gray hover:border-mint-green rounded-[16px] bg-mist-gray/5 hover:bg-mint-green/5 transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-14 h-14 rounded-full bg-mist-gray/30 group-hover:bg-mint-green/20 flex items-center justify-center text-true-black/60 group-hover:text-mint-green mb-4 transition-colors duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-[15px] font-medium text-ink-black group-hover:text-mint-green transition-colors duration-300">
                                Nhấn để chọn ảnh hoặc kéo thả vào đây
                            </p>
                            <p className="text-[13px] text-true-black/50 mt-1.5">
                                Hỗ trợ định dạng JPG, PNG, WEBP (Tối đa 5MB)
                            </p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
