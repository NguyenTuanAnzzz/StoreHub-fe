import { 
    CertificateBadge1Outlined,
    TabOutlined,
    TruckDelivery1Outlined,
    Cart1Outlined,
    Shield2CheckOutlined
} from "@lineiconshq/free-icons";

export const STAFF_SIDEBAR_MENU = [
    {
        id: "overview",
        title: "Tổng quan (Báo cáo)",
        path: "/staff/overview",
        icon: CertificateBadge1Outlined
    },
    {
        id: "products",
        title: "Quản lý Sản phẩm",
        path: "/staff/products",
        icon: TabOutlined
    },
    {
        id: "inventory",
        title: "Quản lý Tồn kho",
        path: "/staff/inventory",
        icon: TruckDelivery1Outlined
    },
    {
        id: "orders",
        title: "Quản lý Đơn hàng",
        path: "/staff/orders",
        icon: Cart1Outlined
    },
    {
        id: "settings",
        title: "Cài đặt Shop",
        path: "/staff/settings",
        icon: Shield2CheckOutlined
    }
];
