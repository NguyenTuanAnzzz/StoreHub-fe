import { useNavigate, useParams } from "react-router-dom";
import ButtonField from "../../components/ButtonField";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import TextareaField from "../../components/TextareaField";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Viewer from "viewerjs";
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
        images: [],
        createAt: "",
        updateAt: ""
    })
    const [previewImages, setPreviewImages] = useState([])
    const [newImages, setNewImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

    const showToast = (message, type = "success") => {
        setToast({ visible: true, message, type });
    };
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const getDetailData = async () => {

        try {
            const response = await fetch(`http://localhost:8080/api/shops/detail/${id}`, {
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
            setPreviewImages(data.images);
            setOldImages(data.images);
        } catch (error) {
            setError(error.messae);
        }

    }

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === "images") {
            const images = Array.from(files)
            setNewImages(prev => [
                ...prev,
                ...images
            ]);
            const newPreviews = images.map((file) => URL.createObjectURL(file))
            setPreviewImages((prev) => [
                ...prev,
                ...newPreviews
            ]);
        }
        setShop({ ...shop, [e.target.name]: e.target.value })
    }

    const handleRemove = (index) => {
        if (index < oldImages.length) {
            setOldImages(prev =>
                prev.filter((_, i) => i !== index)
            );
        } else {
            const newIndex = index - oldImages.length;

            setNewImages(prev =>
                prev.filter((_, i) => i !== newIndex)
            );
        }

        setPreviewImages(prev =>
            prev.filter((_, i) => i !== index)
        );
    };

    const viewerRef = useRef(null);
    const viewerInstance = useRef(null);

    useEffect(() => {
        getDetailData();
    }, [id, token]);

    useEffect(() => {
        if (!viewerRef.current || previewImages.length === 0) return;

        viewerInstance.current = new Viewer(viewerRef.current, {
            navbar: true,
            toolbar: true,
            title: true,
            tooltip: true,
            movable: true,
            zoomable: true,
            rotatable: true,
            scalable: true,
            transition: true,
            fullscreen: true,
        });

        return () => {
            viewerInstance.current?.destroy();
            viewerInstance.current = null;
        };
    }, [previewImages]);



    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("name", shop.name);
            formData.append("phone", shop.phone);
            formData.append("region", shop.region);
            formData.append("status", shop.status);
            formData.append("address", shop.address);
            formData.append("description", shop.description);
            // Ảnh cũ muốn giữ lại
            oldImages.forEach((image) => {
                formData.append("oldImages", image);
            });
            // Ảnh mới
            newImages.forEach((image) => {
                formData.append("images", image);
            });
            const response = await fetch(`http://localhost:8080/api/shops/update/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            const data = await response.json();

            if (!response.ok) {
                showToast(data.message || "Đã xảy ra lỗi khi tạo cửa hàng.", "error");
                return;
            }

            showToast("Tạo cửa hàng thành công!", "success");
            navigate("/admin/shops")
        } catch (error) {
            showToast(error.message, "error");
        }
    };
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
                            onClick={() => navigate("/admin/shops")}
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
                            onClick={handleSubmit}
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
                        onChange={handleChange}
                    />

                    <InputField
                        label="Số điện thoại"
                        name="phone"
                        type="tel"
                        placeholder="VD: 0912345678"
                        required
                        value={shop.phone}
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />

                    <SelectField
                        label="Trạng thái"
                        name="status"
                        required
                        choose={[
                            { value: "", label: "Chọn trạng thái..." },
                            { value: "ACTIVE", label: "Đang hoạt động" },
                            { value: "SUSPENDED", label: "Tạm ngưng" },]}
                        value={shop.status}
                        onChange={handleChange}
                    />

                    <div className="md:col-span-2">
                        <InputField
                            label="Địa chỉ chi tiết"
                            name="address"
                            placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố..."
                            required
                            value={shop.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextareaField
                            label="Mô tả cửa hàng"
                            name="description"
                            placeholder="Nhập ghi chú hoặc mô tả về cửa hàng (không bắt buộc)..."
                            value={shop.description}
                            onChange={handleChange}
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
                        onChange={handleChange}
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
                    {previewImages.length > 0 && (
                        <div
                            ref={viewerRef}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-2"
                        >
                            {previewImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square overflow-hidden rounded-[12px] border border-mist-gray shadow-sm group bg-mist-gray/10"
                                >
                                    <img
                                        src={src}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                                        onClick={() => {
                                            viewerInstance.current?.view(index);
                                        }}
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="
                        absolute inset-0
                        bg-black/40
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        pointer-events-none
                    "
                                    >
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleRemove(index);
                                            }}
                                            className="
                            pointer-events-auto
                            absolute top-2 right-2
                            w-8 h-8
                            rounded-full
                            bg-red-500/90
                            text-white
                            flex items-center justify-center
                        "
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}
