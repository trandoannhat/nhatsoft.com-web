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
  demoUrl?: string; // Thêm trường này (có dấu ? để không bị lỗi nếu sản phẩm nào chưa có link)
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
    demoUrl: "https://pitch.nhatsoft.com", // <-- Bổ sung link demo
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
    price: "Từ 3.000.000đ",
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    iconName: "Star",
    demoUrl: "https://spa.nhatsoft.com", // <-- Bổ sung link demo
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
  }, // ... (giữ nguyên id 1 và 2 của bạn ở trên)
  {
    id: "3",
    title: "Hệ thống CRM Multi-tenant Enterprise",
    version: "v3.0.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Nền tảng CRM đa khách thuê (Multi-tenant) với hệ thống phân quyền RBAC linh hoạt, kiến trúc Microservices tối ưu cho mô hình SaaS.",
    fullDescription:
      "Kiến trúc phần mềm cấp doanh nghiệp được thiết kế theo chuẩn Clean Architecture. Hỗ trợ cách ly dữ liệu theo từng tenant, phân quyền chi tiết (Role-Based Access Control) và dễ dàng scale-up cho các hệ thống lớn có hàng trăm nghìn user.",
    categoryId: "webapp",
    price: "Từ 25.000.000đ",
    badge: "Enterprise",
    badgeColor: "bg-indigo-100 text-indigo-700",
    iconName: "ShieldCheck",
    demoUrl: "https://crm.nhatsoft.com", // <-- Bổ sung link demo
    techStack: [
      {
        name: ".NET 8",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "Next.js 14",
        iconName: "Layout",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
      {
        name: "PostgreSQL",
        iconName: "Database",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "Redis Cache",
        iconName: "Database",
        color: "text-red-500",
        bg: "bg-red-50",
      },
    ],
    features: [
      "Kiến trúc Multi-tenant (Database-per-tenant hoặc Shared-database).",
      "Hệ thống phân quyền RBAC (Role, Permission, Policy) linh hoạt.",
      "Tích hợp Elasticsearch cho tốc độ tìm kiếm Real-time.",
      "Cơ chế Caching phân tán với Redis giúp tối ưu hiệu năng.",
    ],
  },
  {
    id: "4",
    title: "Coffee Price Scraper API",
    version: "v1.2.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "API RESTful tự động thu thập, phân tích và đồng bộ giá nông sản/cà phê trực tuyến thời gian thực. Tích hợp cực nhanh vào hệ thống của bạn.",
    fullDescription:
      "Giải pháp Web Scraping hiệu năng cao chuyên lấy dữ liệu giá thị trường (như giacaphe.com). API cung cấp dữ liệu JSON chuẩn hóa, hỗ trợ Webhook và cơ chế Retry tự động khi có lỗi mạng, giúp website của bạn luôn cập nhật giá mới nhất tính bằng giây.",
    categoryId: "api",
    price: "1.500.000đ / Năm",
    badge: "Mới",
    badgeColor: "bg-emerald-100 text-emerald-700",
    iconName: "Zap",
    techStack: [
      {
        name: "C# Worker Service",
        iconName: "Code2",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "RESTful API",
        iconName: "Server",
        color: "text-green-600",
        bg: "bg-green-50",
      },
    ],
    features: [
      "Thu thập dữ liệu thời gian thực (Real-time Scraping).",
      "Cung cấp Webhook bắn dữ liệu tự động khi có biến động giá.",
      "Giới hạn tỷ lệ gọi (Rate Limiting) và bảo mật bằng API Key.",
      "Tài liệu Swagger/OpenAPI chi tiết, dễ dàng tích hợp.",
    ],
  },
  {
    id: "5",
    title: ".NET 8 Clean Architecture Boilerplate",
    version: "v2.0.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Mã nguồn khởi tạo dự án chuẩn Enterprise dành cho Developer. Tích hợp sẵn Auth, Asynchronous pattern và Best Practices mới nhất.",
    fullDescription:
      "Khung mã nguồn (Boilerplate) đúc kết từ hàng chục dự án thực tế. Giúp đội ngũ Dev tiết kiệm 2-3 tuần thiết lập ban đầu. Code base đã cấu hình sẵn JWT, Global Exception, CQRS Pattern và xử lý lập trình bất đồng bộ (Async) tối ưu.",
    categoryId: "source",
    price: "2.990.000đ",
    badge: "Dành cho Dev",
    badgeColor: "bg-slate-100 text-slate-700",
    iconName: "Code",
    techStack: [
      {
        name: ".NET 8 Core",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "EF Core 8",
        iconName: "Database",
        color: "text-sky-600",
        bg: "bg-sky-50",
      },
      {
        name: "MediatR",
        iconName: "Code2",
        color: "text-slate-700",
        bg: "bg-slate-100",
      },
    ],
    features: [
      "Cấu trúc thư mục chuẩn Clean Architecture (Domain, Application, Infrastructure, API).",
      "Tối ưu hóa lập trình bất đồng bộ (Asynchronous Programming).",
      "Tích hợp sẵn hệ thống Log tập trung (Serilog).",
      "Kèm theo tài liệu hướng dẫn (Workshop Material) đào tạo nội bộ.",
    ],
  },
  {
    id: "outsource-web-dev",
    title: "Dịch vụ Phát triển Web & Gia công Phần mềm",
    version: "2026",
    lastUpdate: "Liên tục",
    desc: "Nhận thiết kế website trọn gói. Từ Web giới thiệu/Landing Page nhanh gọn đến các hệ thống Web App, CRM phức tạp theo yêu cầu.",
    fullDescription:
      "Cung cấp giải pháp phần mềm may đo cho doanh nghiệp và cá nhân. Chúng tôi triển khai đa dạng công nghệ: từ WordPress tối ưu chi phí, tốc độ cao cho Web bán hàng/Giới thiệu, cho đến kiến trúc Next.js & .NET 8 Enterprise cho các hệ thống Quản trị, SaaS, đa người dùng.",
    categoryId: "Dịch vụ",
    price: "Từ 3.000.000đ",
    badge: "Outsource",
    badgeColor: "bg-orange-100 text-orange-700",
    iconName: "Layout",
    techStack: [
      {
        name: "WordPress",
        iconName: "Layout",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
      {
        name: "Next.js & React",
        iconName: "Code2",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
      {
        name: ".NET 8 Backend",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "Tối ưu SEO",
        iconName: "Zap",
        color: "text-amber-500",
        bg: "bg-amber-50",
      },
    ],
    features: [
      "Thiết kế Landing Page, Web công ty, Blog siêu tốc với WordPress.",
      "Phát triển hệ thống Web App, SaaS phức tạp bằng Next.js & C#.",
      "Tư vấn kiến trúc hệ thống, Database và giải pháp Cloud.",
      "Bàn giao toàn bộ mã nguồn, bảo hành kỹ thuật 12 tháng.",
    ],
  },
];
