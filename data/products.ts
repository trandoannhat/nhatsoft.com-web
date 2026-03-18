// data/products.ts

export interface TechStack {
  name: string;
  iconName: string; // Lưu tên icon thay vì component
  color: string;
  bg: string;
}

export interface Product {
  id: string;
  title: string;
  version: string;
  lastUpdate: string;
  desc: string;
  fullDescription: string;
  categoryId: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  iconName: string;
  techStack: TechStack[];
  features: string[];
}

export const CATEGORIES = [
  { id: "all", name: "Tất cả dự án", iconName: "Layout" },
  { id: "webapp", name: "Ứng dụng Web", iconName: "Layout" },
  { id: "mobile", name: "Ứng dụng Di động", iconName: "Smartphone" },
  { id: "api", name: "API & Dịch vụ nền tảng", iconName: "Server" },
  { id: "source", name: "Mã nguồn tham khảo", iconName: "Code" },
];

// Giữ nguyên phần export const PRODUCTS... ở dưới nhé

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Hệ thống Quản lý Sân bóng Mini",
    version: "v2.1.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Giải pháp toàn diện đặt lịch, quản lý doanh thu và khách hàng. Xây dựng tối ưu với C#, .NET 8 và SQL Server.",
    fullDescription:
      "Giải pháp phần mềm quản lý sân bóng đá mini chuyên nghiệp. Tự động hóa quy trình đặt lịch, quản lý doanh thu, tính tiền dịch vụ (nước, bóng) và báo cáo thống kê trực quan.",
    categoryId: "webapp",
    price: "Liên hệ",
    badge: "Bán chạy",
    badgeColor: "bg-red-100 text-red-700",
    iconName: "Layout",
    techStack: [
      {
        name: ".NET 8 (Web API)",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "C# 12",
        iconName: "Code2",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "SQL Server",
        iconName: "Database",
        color: "text-red-600",
        bg: "bg-red-50",
      },
      {
        name: "Next.js 14",
        iconName: "Layout",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
    ],
    features: [
      "Quản lý lưới lịch đặt sân trực quan (Kéo/thả).",
      "Hệ thống tính tiền tự động theo khung giờ vàng/thường.",
      "Quản lý kho hàng, dịch vụ đi kèm.",
      "Báo cáo doanh thu biểu đồ thời gian thực.",
      "Tích hợp API thanh toán chuyển khoản/Mã QR.",
    ],
  },
  {
    id: "2",
    title: "NhatSoft Spa Management",
    version: "v1.5.0",
    lastUpdate: "Tháng 2, 2026",
    desc: "Phần mềm CRM chuyên biệt cho Spa/Salon. Quản lý lịch hẹn, liệu trình, hoa hồng nhân viên và báo cáo chi tiết.",
    fullDescription:
      "Hệ thống CRM toàn diện thiết kế riêng cho chuỗi Spa và Salon làm đẹp. Giúp tối ưu hóa vận hành, chăm sóc khách hàng tự động và quản lý hoa hồng nhân viên chính xác tuyệt đối.",
    categoryId: "webapp",
    price: "Từ 5.000.000đ",
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    iconName: "Star",
    techStack: [
      {
        name: ".NET 8",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "SQL Server",
        iconName: "Database",
        color: "text-red-600",
        bg: "bg-red-50",
      },
      {
        name: "React Native",
        iconName: "Smartphone",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
    ],
    features: [
      "Quản lý lịch hẹn thông minh, nhắc lịch tự động qua Zalo ZNS.",
      "Quản lý gói liệu trình (mua 10 tặng 2, trừ lùi buổi làm).",
      "Tính hoa hồng nhân viên, kỹ thuật viên phức tạp.",
      "App Mobile dành riêng cho khách hàng theo dõi liệu trình.",
    ],
  },
];
