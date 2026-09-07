import { BarChart4Outlined, Home2Stroke, TabOutlined, Search1Outlined, Shield2CheckOutlined, UserMultiple4Outlined } from "@lineiconshq/free-icons";

export const ADMIN_SIDEBAR_MENU = [
    {
        id: "overview",
        title: "Báo cáo toàn hệ thống",
        path: "/admin/overview",
        icon: BarChart4Outlined
    },
    {
        id: "shops",
        title: "Quản lý cửa hàng",
        path: "/admin/shops",
        icon: Home2Stroke
    },
    {
        id: "categories",
        title: "Danh mục sản phẩm",
        path: "/admin/categories",
        icon: TabOutlined
    },
    {
        id: "audit",
        title: "Nhật ký tồn kho (Audit)",
        path: "/admin/audit-logs",
        icon: Search1Outlined
    },
    {
        id: "users",
        title: "Tài khoản nhân viên",
        path: "/admin/users",
        icon: UserMultiple4Outlined
    },
    {
        id: "settings",
        title: "Cài đặt hệ thống",
        path: "/admin/settings",
        icon: Shield2CheckOutlined
    }
];