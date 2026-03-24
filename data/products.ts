// data/products.ts
// FILE DATA CHUẨN ĐỂ PUBLIC BÁN HÀNG TRÊN NHATSOFT.COM

export interface TechStack {
  name: string;
  iconName: string; // Lưu tên icon (ví dụ của Lucide React)
  color: string;
  bg: string;
}

// 🌟 UPDATE INTERFACE: Thêm featureImages để chứa 3 ảnh xịn của sếp
export interface Product {
  id: string;
  title: string;
  version: string;
  lastUpdate: string;
  desc: string; // Mô tả ngắn ngoài trang chủ
  fullDescription: string; // Mô tả dài trong trang chi tiết
  categoryId: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  iconName: string; // Icon chính cho sản phẩm
  techStack: TechStack[];
  features: string[]; // Danh sách gạch đầu dòng tính năng
  demoUrl?: string;
  featureImages?: string[]; // 🌟 Danh sách 3 ảnh screenshot xịn (slug path)
}

export const CATEGORIES = [
  { id: "all", name: "Tất cả dự án", iconName: "Layout" },
  { id: "webapp", name: "Ứng dụng Web", iconName: "Layout" },
  { id: "mobile", name: "Ứng dụng Di động", iconName: "Smartphone" },
  { id: "api", name: "API & Dịch vụ nền tảng", iconName: "Server" },
  { id: "source", name: "Mã nguồn tham khảo", iconName: "Code" },
  { id: "service", name: "Dịch vụ Gia công", iconName: "Briefcase" },
];

export const PRODUCTS: Product[] = [
  // ================================================================
  // 🏆 SIÊU PHẨM SỐ 1: NHATSOFT SAAS CORE ENGINE
  // ================================================================
  {
    id: "saas-core-engine",
    title: "NhatSoft SaaS Core Engine",
    version: "v1.0.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Bộ mã nguồn nền tảng (Boilerplate) chuyên trị bài toán Multi-tenant, Sơ đồ tổ chức đa cấp và Ma trận phân quyền RBAC đỉnh cao.",
    fullDescription:
      "Giải pháp hoàn hảo giúp Developer và Agency 'nhảy cóc' 2-3 tháng vật lộn với logic nền tảng phức tạp. NhatSoft Core cung cấp sẵn bộ khung quản lý Đa khách hàng (Multi-tenant), Quản lý Sơ đồ tổ chức không giới hạn cấp độ, và Ma trận phân quyền động (Dynamic RBAC). Nhờ Entity Framework Core, mã nguồn hỗ trợ linh hoạt chuyển đổi giữa SQL Server và PostgreSQL, MySQL chỉ với 1 thao tác cấu hình.",
    categoryId: "source",
    price: "Từ 2.500.000đ",
    badge: "Bán Chạy",
    badgeColor: "bg-rose-100 text-rose-700",
    iconName: "ShieldCheck", // Icon bảo mật đẳng cấp
    demoUrl: "https://core.nhatsoft.com",

    // 🌟 ỐP 3 TẤM ẢNH XỊN CỦA SẾP VÀO ĐÂY (Path slug chuẩn Next.js public folder)
    featureImages: [
      "/images/products/danh-sach-nhan-vien.png",
      "/images/products/so-do-to-chuc-da-cap.png",
      "/images/products/ghi-de-quyen-ngoai-le.png",
    ],

    techStack: [
      {
        name: ".NET 8 Web API",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "C# & EF Core",
        iconName: "Code2",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "Next.js & React",
        iconName: "Layout",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
      {
        name: "SQL Server / PostgreSQL / MySQL",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
    ],
    features: [
      "Quản lý Đa khách hàng (Multi-Tenant) cách ly dữ liệu tuyệt đối theo TenantId.",
      "Cấu trúc Sơ đồ tổ chức (Tree-view) đệ quy (Chi nhánh, Phòng ban) không giới hạn.",
      "Ma trận phân quyền (Role Matrix) chi tiết 5 cấp độ (Access, Create, Edit, Delete, Export).",
      "Tính năng Ghi đè quyền ngoại lệ (User Override) cho từng cá nhân xuất sắc.",
      "Dynamic Sidebar - Giao diện tự động ẩn/hiện menu và điều hướng theo quyền User.",
      "Cung cấp 2 gói License rõ ràng: Cá nhân (Single-Project) và Thương mại (Unlimited).",
    ],
  },

  // ================================================================
  // 2. Các sản phẩm khác (để sếp tham khảo, giữ nguyên mô tả cũ )
  // ================================================================
  {
    id: "pitch-management",
    title: "Hệ thống Quản lý Sân bóng Mini",
    version: "v2.1.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Giải pháp toàn diện đặt lịch, quản lý doanh thu và khách hàng. Xây dựng tối ưu với C#, .NET 8 và SQL Server.",
    fullDescription: "...",
    categoryId: "webapp",
    price: "Liên hệ",
    badge: "Premium",
    iconName: "Layout",
    techStack: [],
    features: [],
  },
  {
    id: "outsource-web-dev",
    title: "Dịch vụ Phát triển Web & Gia công Phần mềm",
    version: "2026",
    lastUpdate: "Liên tục",
    desc: "Nhận thiết kế website trọn gói. Từ Web giới thiệu/Landing Page nhanh gọn đến các hệ thống Web App, CRM phức tạp theo yêu cầu.",
    fullDescription: "...",
    categoryId: "service",
    price: "Từ 3.000.000đ",
    badge: "Outsource",
    iconName: "Layout",
    techStack: [],
    features: [],
  },
];
