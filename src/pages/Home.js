import React from "react";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { 
    Shield2CheckOutlined, 
    CertificateBadge1Outlined, 
    TruckDelivery1Outlined, 
    RefreshCircle1ClockwiseOutlined,
    Search1Outlined,
    Cart1Outlined,
    ArrowRightOutlined,
    StarFatSolid,
    StarFatOutlined,
    FacebookOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    MapMarker1Outlined,
    Telephone1Outlined,
    Envelope1Outlined
} from "@lineiconshq/free-icons";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
    // Dữ liệu mẫu (mock data)
    const categories = [
        { name: "Điện thoại thông minh", items: "120+ Sản phẩm", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop" },
        { name: "Laptop & PC", items: "85+ Sản phẩm", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop" },
        { name: "Đồng hồ thông minh", items: "45+ Sản phẩm", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop" },
        { name: "Phụ kiện & Âm thanh", items: "200+ Sản phẩm", img: "https://images.unsplash.com/photo-1572569431925-8f225d8ce9d4?q=80&w=600&auto=format&fit=crop" }
    ];

    const products = [
        { id: 1, name: "iPhone 15 Pro Max 256GB", price: "34.990.000 ₫", oldPrice: "36.990.000 ₫", badge: "Mới", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop", rating: 5 },
        { id: 2, name: "MacBook Pro 14 M3 2023", price: "39.490.000 ₫", oldPrice: "", badge: "", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop", rating: 5 },
        { id: 3, name: "Tai nghe AirPods Pro 2", price: "5.890.000 ₫", oldPrice: "6.490.000 ₫", badge: "-10%", img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=600&auto=format&fit=crop", rating: 4 },
        { id: 4, name: "Apple Watch Series 9", price: "9.990.000 ₫", oldPrice: "", badge: "Bán chạy", img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=600&auto=format&fit=crop", rating: 5 },
        { id: 5, name: "Samsung Galaxy S24 Ultra", price: "31.990.000 ₫", oldPrice: "33.990.000 ₫", badge: "Mới", img: "https://images.unsplash.com/photo-1707019129524-118bd9601d36?q=80&w=600&auto=format&fit=crop", rating: 4 },
        { id: 6, name: "iPad Pro 11 inch M2", price: "20.490.000 ₫", oldPrice: "", badge: "", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop", rating: 5 },
        { id: 7, name: "Sony WH-1000XM5", price: "7.990.000 ₫", oldPrice: "8.990.000 ₫", badge: "-11%", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop", rating: 4 },
        { id: 8, name: "Bàn phím cơ Keychron Q1", price: "4.590.000 ₫", oldPrice: "", badge: "Hot", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop", rating: 5 },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1 text-mint-green">
                {[...Array(5)].map((_, i) => (
                    i < rating ? <Lineicons key={i} icon={StarFatSolid} size={12} className="text-[#FFB800] inline-block" /> : <Lineicons key={i} icon={StarFatOutlined} size={12} className="text-[#FFB800] inline-block" />
                ))}
            </div>
        )
    };

    return (
            <HomeLayout>

            {/* Hero Section */}
            <section className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2000&auto=format&fit=crop" 
                        alt="Hero Workspace" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink-black/90 to-ink-black/40"></div>
                </div>
                
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-start">
                    <div className="inline-block bg-mint-green/20 text-mint-green border border-mint-green/30 px-3 py-1 rounded-full text-[13px] font-medium tracking-[0.65px] uppercase mb-6 backdrop-blur-sm">
                        Siêu Sale Công Nghệ 2026
                    </div>
                    <h1 className="text-[48px] lg:text-[72px] font-semibold text-paper-white leading-[1.1] tracking-[-1.14px] max-w-[700px] mb-6">
                        Định hình tương lai <br/>với công nghệ.
                    </h1>
                    <p className="text-[18px] text-paper-white/80 leading-[1.5] max-w-[500px] mb-10">
                        Khám phá bộ sưu tập các sản phẩm công nghệ cao cấp nhất. Mọi thứ bạn cần để nâng cấp không gian làm việc và cuộc sống.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-mint-green text-paper-white text-[16px] font-medium py-4 px-8 rounded-md shadow-sm hover:bg-[#0a7a50] transition-colors flex items-center gap-2">
                            Mua sắm ngay
                            <Lineicons icon={ArrowRightOutlined} size={18} />
                        </button>
                        <button className="bg-paper-white/10 text-paper-white border border-paper-white/20 text-[16px] font-medium py-4 px-8 rounded-md hover:bg-paper-white/20 transition-colors backdrop-blur-sm">
                            Xem bộ sưu tập
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Bar */}
            <section className="border-b border-mist-gray bg-paper-white">
                <div className="w-full max-w-[1200px] mx-auto px-6 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1: Sản phẩm chính hãng */}
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                            <div className="text-mint-green">
                                <Lineicons icon={Shield2CheckOutlined} size={32} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-ink-black text-[16px] mb-1">Sản phẩm chính hãng</h4>
                                <p className="text-[13px] text-true-black/60">Cam kết 100% chính hãng</p>
                            </div>
                        </div>
                        {/* Feature 2: Bảo hành 24 tháng */}
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                            <div className="text-mint-green">
                                <Lineicons icon={CertificateBadge1Outlined} size={32} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-ink-black text-[16px] mb-1">Bảo hành 24 tháng</h4>
                                <p className="text-[13px] text-true-black/60">Lỗi 1 đổi 1 tận nhà</p>
                            </div>
                        </div>
                        {/* Feature 3: Giao hàng hỏa tốc */}
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                            <div className="text-mint-green">
                                <Lineicons icon={TruckDelivery1Outlined} size={32} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-ink-black text-[16px] mb-1">Giao hàng hỏa tốc</h4>
                                <p className="text-[13px] text-true-black/60">Nhận hàng trong 2 giờ</p>
                            </div>
                        </div>
                        {/* Feature 4: Đổi trả 30 ngày */}
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                            <div className="text-mint-green">
                                <Lineicons icon={RefreshCircle1ClockwiseOutlined} size={32} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-ink-black text-[16px] mb-1">Đổi trả 30 ngày</h4>
                                <p className="text-[13px] text-true-black/60">Hỗ trợ đổi trả miễn phí</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Categories */}
            <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <div className="text-[13px] font-medium text-mint-green tracking-[0.65px] uppercase mb-2">Danh mục</div>
                        <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink-black tracking-[-0.4px] leading-[1.15]">Mua sắm theo danh mục</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-sm-2 border border-mist-gray">
                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-paper-white text-[20px] font-semibold tracking-[-0.2px] mb-1">{cat.name}</h3>
                                <p className="text-paper-white/70 text-[14px]">{cat.items}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promo Banner (Mid-page) */}
            <section className="w-full py-12 px-6">
                <div className="w-full max-w-[1200px] mx-auto h-[400px] rounded-[24px] overflow-hidden relative shadow-sm-2 flex items-center">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop" alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-ink-black/60"></div>
                    <div className="relative z-10 p-10 lg:p-16 max-w-[600px]">
                        <div className="text-[13px] font-medium text-mint-green tracking-[0.65px] uppercase mb-4 bg-mint-green/20 px-3 py-1 rounded-full inline-block">Trải nghiệm âm thanh đỉnh cao</div>
                        <h2 className="text-[40px] font-semibold text-paper-white leading-[1.15] tracking-[-0.4px] mb-4">
                            Sony WH-1000XM5
                        </h2>
                        <p className="text-[16px] text-paper-white/80 mb-8 leading-[1.5]">
                            Tai nghe chống ồn không dây hàng đầu thế giới. Thiết kế mới, nhẹ hơn, chống ồn tốt hơn và chất lượng âm thanh vượt trội.
                        </p>
                        <button className="bg-paper-white text-ink-black text-[14px] font-medium py-3 px-8 rounded-md hover:bg-mist-gray transition-colors">
                            Khám phá ngay
                        </button>
                    </div>
                </div>
            </section>

            {/* Best Sellers Grid */}
            <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <div className="text-[13px] font-medium text-mint-green tracking-[0.65px] uppercase mb-2 text-center md:text-left">Nổi bật</div>
                        <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink-black tracking-[-0.4px] leading-[1.15] text-center md:text-left">Sản phẩm bán chạy</h2>
                    </div>
                    <div className="flex gap-2">
                        {['Tất cả', 'Điện thoại', 'Laptop', 'Phụ kiện'].map((filter, i) => (
                            <button key={i} className={`px-4 py-2 rounded-full text-[14px] font-medium border ${i === 0 ? 'bg-ink-black text-paper-white border-ink-black' : 'bg-paper-white text-ink-black border-cloud-gray hover:border-ink-black'} transition-colors`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-paper-white rounded-[16px] border border-mist-gray shadow-sm hover:shadow-sm-2 hover:border-cloud-gray transition-all flex flex-col overflow-hidden relative">
                            {/* Badge */}
                            {product.badge && (
                                <div className={`absolute top-4 left-4 z-10 text-[12px] font-bold px-2.5 py-1 rounded text-paper-white ${product.badge.includes('-') ? 'bg-[#e53e3e]' : 'bg-mint-green'}`}>
                                    {product.badge}
                                </div>
                            )}
                            
                            {/* Image Container */}
                            <div className="w-full h-[240px] bg-mist-gray/30 overflow-hidden relative p-4 flex items-center justify-center">
                                <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                                
                                {/* Quick actions on hover */}
                                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
                                    <button className="flex-1 bg-ink-black text-paper-white text-[13px] font-medium py-2.5 rounded shadow-sm hover:bg-true-black transition-colors">
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                            
                            {/* Product Info */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-2">{renderStars(product.rating)}</div>
                                <h3 className="text-[16px] font-medium text-ink-black leading-[1.5] tracking-[-0.16px] mb-2 line-clamp-2 cursor-pointer hover:text-mint-green transition-colors">
                                    {product.name}
                                </h3>
                                <div className="mt-auto flex items-end gap-2">
                                    <div className="text-[18px] font-semibold text-ink-black">{product.price}</div>
                                    {product.oldPrice && (
                                        <div className="text-[13px] text-true-black/50 line-through mb-[3px]">{product.oldPrice}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                    <button className="bg-paper-white border-2 border-ink-black text-ink-black text-[16px] font-medium py-3 px-8 rounded-md hover:bg-ink-black hover:text-paper-white transition-colors">
                        Xem tất cả sản phẩm
                    </button>
                </div>
            </section>

            {/* Info / Story Section */}
            <section className="border-t border-mist-gray bg-mist-gray/30 py-20 px-6">
                <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink-black tracking-[-0.4px] leading-[1.15] mb-6">
                            Công nghệ dành cho người dẫn đầu
                        </h2>
                        <p className="text-[16px] text-true-black leading-[1.6] mb-6">
                            Tại Ultimate Tech, chúng tôi không chỉ bán thiết bị điện tử. Chúng tôi cung cấp những công cụ tinh hoa giúp bạn làm việc hiệu quả hơn, sáng tạo tốt hơn và kết nối dễ dàng hơn.
                        </p>
                        <p className="text-[16px] text-true-black leading-[1.6] mb-8">
                            Với hệ thống cửa hàng trên toàn quốc và dịch vụ chăm sóc khách hàng chuyên nghiệp chuẩn quốc tế, trải nghiệm mua sắm của bạn sẽ luôn được đảm bảo ở mức cao nhất.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <div className="text-[32px] font-semibold text-mint-green mb-1">50+</div>
                                <div className="text-[14px] text-true-black">Cửa hàng toàn quốc</div>
                            </div>
                            <div>
                                <div className="text-[32px] font-semibold text-mint-green mb-1">2M+</div>
                                <div className="text-[14px] text-true-black">Khách hàng tin dùng</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1531297429006-2cb88849b22a?q=80&w=600&auto=format&fit=crop" alt="Store" className="w-full h-[240px] object-cover rounded-[16px]" />
                        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop" alt="Setup" className="w-full h-[240px] object-cover rounded-[16px] mt-8" />
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="w-full bg-ink-black py-20 px-6">
                <div className="w-full max-w-[800px] mx-auto text-center">
                    <h2 className="text-[32px] font-semibold text-paper-white tracking-[-0.4px] leading-[1.15] mb-4">
                        Đối tác hàng đầu
                    </h2>
                    <p className="text-[16px] text-paper-white/70 mb-8 max-w-[500px] mx-auto">
                        Tự hào đồng hành cùng các thương hiệu công nghệ lớn nhất thế giới như Apple, Samsung, Sony và nhiều đối tác uy tín khác.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-[800px] mx-auto opacity-70">
                        {[
                            { name: 'Apple', url: 'https://cdn.simpleicons.org/apple/white' },
                            { name: 'Samsung', url: 'https://cdn.simpleicons.org/samsung/white' },
                            { name: 'Sony', url: 'https://cdn.simpleicons.org/sony/white' },
                            { name: 'Asus', url: 'https://cdn.simpleicons.org/asus/white' },
                            { name: 'HP', url: 'https://cdn.simpleicons.org/hp/white' },
                            { name: 'Lenovo', url: 'https://cdn.simpleicons.org/lenovo/white' }
                        ].map((partner, idx) => (
                            <img 
                                key={idx} 
                                src={partner.url} 
                                alt={partner.name} 
                                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
                            />
                        ))}
                    </div>
                </div>
            </section>

            </HomeLayout>
    );
};

export default Home;
