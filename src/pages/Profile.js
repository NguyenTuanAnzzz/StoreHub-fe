import { useEffect, useRef, useState } from "react";
import ButtonField from "../components/ButtonField";
import InputField from "../components/InputField";
import HomeLayout from "../layouts/HomeLayout";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        avatar: ""
    });

    const { user, token, getMyProfile } = useAuth();
    const [error, setError] = useState("");

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm({
            ...form,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("phone", form.phone);

            if (form.avatar instanceof File) {
                formData.append("avatar", form.avatar);
            }
            const response = await fetch("http://localhost:8080/api/me/update-profile", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            })
            const data = await response.json();
            if (!response.ok) {
                setError(data.message)
                return;
            }
            await getMyProfile()
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                avatar: user.avatar || ""
            });
        }
    }, [user]);

    return (
        <main className="flex-1">
            <div className="bg-paper-white rounded-[16px] border border-mist-gray shadow-sm overflow-hidden p-8 md:p-10">

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-10"
                >

                    {/* Avatar Section */}
                    <div className="flex items-center gap-6">

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="w-[100px] h-[100px] cursor-pointer shrink-0"
                        >
                            {form.avatar instanceof File || (typeof form.avatar === 'string' && form.avatar !== '') ? (
                                <img
                                    src={form.avatar instanceof File ? URL.createObjectURL(form.avatar) : form.avatar}
                                    alt="Avatar"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-mist-gray flex items-center justify-center">
                                    Avatar
                                </div>
                            )}
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            name="avatar"
                            accept="image/jpeg,image/png"
                            onChange={handleChange}
                            className="hidden"
                        />

                        <div>
                            <p className="text-[15px] font-medium text-ink-black">
                                Ảnh đại diện
                            </p>

                            <p className="text-[13px] text-ink-black/50">
                                Nhấn vào ảnh để thay đổi
                            </p>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-mist-gray"></div>

                    {/* Info Section */}
                    <div>
                        <h3 className="text-[16px] font-semibold text-ink-black mb-6">
                            Thông tin cá nhân
                        </h3>

                        <div className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                <InputField
                                    label="Họ và tên"
                                    name="name"
                                    placeholder="Nhập tên của bạn"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                                <InputField
                                    label="Số điện thoại"
                                    name="phone"
                                    placeholder="09xx xxx xxx"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="opacity-80">
                                <InputField
                                    label="Địa chỉ Email (Không thể thay đổi)"
                                    readOnly
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    value={form.email}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-mist-gray"></div>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <div className="w-[180px]">
                            <ButtonField
                                type="submit"
                                label="Lưu thay đổi"
                                bgColor="bg-mint-green"
                                hoverColor="hover:bg-[#0a7a50]"
                            />
                        </div>
                    </div>

                </form>

            </div>
        </main>
    );
};

export default Profile;