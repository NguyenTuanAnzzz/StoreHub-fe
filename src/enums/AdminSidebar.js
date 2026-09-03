import { AppStoreOutlined, BarChart4Outlined, Cart1Outlined, CertificateBadge1Outlined, Home2Stroke, Search1Outlined, Shield2CheckOutlined, TabOutlined, TruckDelivery1Outlined, UserMultiple4Outlined } from "@lineiconshq/free-icons";

export const ADMIN_SIDEBAR_MENU = [
    {
        id: "overview",
        title: "Tổng quan hệ thống",
        path: "/admin/overview",
        icon: CertificateBadge1Outlined
    },
    {
        id: "shops",
        title: "Duyệt & Quản lý Shop",
        path: "/admin/shops",
        icon: AppStoreOutlined
    },
    {
        id: "categories",
        title: "Danh mục sản phẩm",
        path: "/admin/categories",
        icon: TabOutlined
    },
    {
        id: "products",
        title: "Sản phẩm toàn sàn",
        path: "/admin/products",
        icon: Cart1Outlined          // cần import thêm
    },
    {
        id: "orders",
        title: "Đơn hàng & Vận chuyển",
        path: "/admin/orders",
        icon: TruckDelivery1Outlined  // cần import thêm
    },
    {
        id: "warehouses",
        title: "Kho hàng & Tồn kho",
        path: "/admin/warehouses",
        icon: Home2Stroke       // hoặc icon tương đương
    },
    {
        id: "reports",
        title: "Báo cáo doanh thu",
        path: "/admin/reports",
        icon: BarChart4Outlined        // hoặc icon tương đương
    },
    {
        id: "audit",
        title: "Nhật ký thay đổi",
        path: "/admin/audit-logs",
        icon: Search1Outlined    // hoặc icon tương đương
    },
    {
        id: "users",
        title: "Tài khoản & Khiếu nại",
        path: "/admin/users",
        icon: UserMultiple4Outlined
    },
    {
        id: "settings",
        title: "Cài đặt",
        path: "/admin/settings",
        icon: Shield2CheckOutlined
    }
];