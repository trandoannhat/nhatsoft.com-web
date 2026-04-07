// data/products.ts

export interface TechStack {
  name: string;
  iconName: string;
  color: string;
  bg: string;
}

export interface VisualShowcase {
  imagePath: string;
  title: string;
  desc: string;
  icon: string;
  bgColor: string;
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
  demoUrl?: string;
  visualShowcases?: VisualShowcase[];
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
  // ==========================================
  // 1. NHATSOFT SPA - MÔ HÌNH SAAS CHO THUÊ
  // ==========================================
  {
    id: "nhatsoft-spa",
    title: "NhatSoft Spa - Phần mềm Quản lý Tiệm Online",
    version: "v1.0.0",
    lastUpdate: "Tháng 4, 2026",
    desc: "Phần mềm quản lý Spa trên nền tảng Cloud (SaaS). Không cần cài đặt, quản lý lịch hẹn và doanh thu ngay trên điện thoại.",
    fullDescription:
      "Giải pháp phần mềm quản lý toàn diện theo mô hình Cho thuê dịch vụ (SaaS) dành cho các tiệm Spa, Salon và Nail. Chỉ với chi phí bằng một cốc cà phê mỗi ngày, tiệm của bạn đã được số hóa 100%. Không cần đầu tư hệ thống hay thuê Server tốn kém, dữ liệu của bạn được lưu trữ an toàn trên hệ thống đám mây của chúng tôi.",
    categoryId: "webapp",
    price: "Từ 199.000đ/tháng", // Nhấn mạnh giá thuê hàng tháng cực rẻ
    badge: "Dùng thử 14 ngày", // Kích thích khách hàng dùng thử
    badgeColor: "bg-pink-100 text-pink-700",
    iconName: "Layout",
    demoUrl: "https://spa.nhatsoft.com",
    visualShowcases: [
      {
        imagePath: "/images/products/spa-dashboard.png",
        title: "Báo Cáo Doanh Thu Real-time",
        desc: "Nắm bắt chính xác dòng tiền, số lượng khách, nhân viên đang làm việc chỉ bằng một cái liếc mắt trên Dashboard.",
        icon: "BarChart3",
        bgColor: "bg-pink-50",
      },
      {
        imagePath: "/images/products/spa-calendar.png",
        title: "Lưới Lịch Hẹn Thông Minh",
        desc: "Quản lý tình trạng khách hàng theo từng KTV. Màu sắc trạng thái rõ ràng, tự động cảnh báo ngay khi xếp trùng lịch.",
        icon: "CalendarDays",
        bgColor: "bg-indigo-50",
      },
      {
        imagePath: "/images/products/spa-crm.png",
        title: "Quản lý KTV & Khách hàng",
        desc: "Lưu trữ lịch sử dịch vụ, ghi chú khách hàng. Chấm dứt cãi vã nhờ hệ thống tự động tính hoa hồng KTV cực chuẩn xác.",
        icon: "Users",
        bgColor: "bg-emerald-50",
      },
    ],
    techStack: [
      {
        name: "Cloud Hosting", // Đổi tên công nghệ sang hướng dịch vụ Cloud để khách dễ hiểu
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "Multi-tenant Architecture",
        iconName: "ShieldCheck",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "PostgreSQL Database",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        name: "Web & Mobile Responsive",
        iconName: "Smartphone",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
    ],
    features: [
      "☁️ Sử dụng ngay không cần cài đặt (Cloud-based SaaS).",
      "💰 Chi phí siêu rẻ trả theo tháng, không tốn tiền bảo trì Server.",
      "🔒 Tự động sao lưu dữ liệu hàng ngày, bảo mật chuẩn Enterprise.",
      "🚀 Miễn phí nâng cấp tất cả tính năng mới trong suốt thời gian thuê.",
      "📅 Tự động hóa xếp lịch hẹn, tính tiền và tính hoa hồng kỹ thuật viên.",
    ],
  },
  // ==========================================
  // 1. SAAS CORE ENGINE
  // ==========================================
  {
    id: "saas-core-engine",
    title: "NhatSoft SaaS Core Engine",
    version: "v1.0.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Bộ mã nguồn nền tảng (Boilerplate) chuyên trị bài toán Multi-tenant, Sơ đồ tổ chức đa cấp và Ma trận phân quyền RBAC đỉnh cao.",
    fullDescription:
      "Giải pháp hoàn hảo giúp Developer và Agency 'nhảy cóc' 2-3 tháng vật lộn với logic nền tảng phức tạp. NhatSoft Core cung cấp sẵn bộ khung quản lý Đa khách hàng (Multi-tenant), Quản lý Sơ đồ tổ chức không giới hạn cấp độ, và Ma trận phân quyền động (Dynamic RBAC).",
    categoryId: "source",
    price: "Từ 2.500.000đ",
    badge: "Bán Chạy",
    badgeColor: "bg-rose-100 text-rose-700",
    iconName: "ShieldCheck",
    demoUrl: "https://core.nhatsoft.com",
    visualShowcases: [
      {
        imagePath: "/images/products/danh-sach-nhan-vien.png",
        title: "Quản trị Nhân sự Tập trung & Trực quan",
        desc: "Giao diện quản lý danh sách người dùng được tối ưu hóa. Dễ dàng theo dõi thông tin liên hệ, Vai trò (Role) và Trạng thái hoạt động.",
        icon: "Users",
        bgColor: "bg-blue-50",
      },
      {
        imagePath: "/images/products/so-do-to-chuc-da-cap.png",
        title: "Sơ đồ Tổ chức Linh hoạt Không giới hạn",
        desc: "Cấu trúc dữ liệu Tree-view đệ quy cho phép thiết lập sơ đồ doanh nghiệp từ Tập đoàn, Chi nhánh, đến từng Phòng ban nhỏ nhất.",
        icon: "GitFork",
        bgColor: "bg-emerald-50",
      },
      {
        imagePath: "/images/products/ghi-de-quyen-ngoai-le.png",
        title: "Kiểm soát Tuyệt đối với Ma trận RBAC",
        desc: "Cơ chế 'Ghi đè quyền' độc quyền. Trực quan hóa toàn bộ ma trận chức năng, cho phép bật/tắt chính xác từng hành động cho cá nhân.",
        icon: "ShieldCheck",
        bgColor: "bg-rose-50",
      },
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
        name: "SQL Server / PostgreSQL",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
    ],
    features: [
      "Quản lý Đa khách hàng (Multi-Tenant) cách ly dữ liệu tuyệt đối theo TenantId.",
      "Cấu trúc Sơ đồ tổ chức (Tree-view) đệ quy không giới hạn.",
      "Ma trận phân quyền (Role Matrix) chi tiết 5 cấp độ (Access, Create, Edit, Delete, Export).",
      "Ghi đè quyền ngoại lệ (User Override) cho từng cá nhân.",
      "Dynamic Sidebar - Giao diện tự động ẩn/hiện menu theo quyền User.",
    ],
  },

  // ==========================================
  // 2. HỆ THỐNG QUẢN LÝ SÂN BÓNG
  // ==========================================
  {
    id: "pitch-management",
    title: "Hệ thống Quản lý Sân bóng Mini",
    version: "v2.1.0",
    lastUpdate: "Tháng 3, 2026",
    desc: "Giải pháp toàn diện đặt lịch, quản lý doanh thu và khách hàng. Xây dựng tối ưu với C#, .NET 8 và PostgreSQL.",
    fullDescription:
      "Giải pháp phần mềm quản lý sân bóng đá mini chuyên nghiệp. Tự động hóa quy trình đặt lịch (kéo thả trực quan), quản lý doanh thu, tính tiền dịch vụ (nước, bóng) và hệ thống báo cáo thống kê trực quan theo thời gian thực.",
    categoryId: "webapp",
    price: "Liên hệ",
    badge: "Hot",
    badgeColor: "bg-green-100 text-green-700",
    iconName: "Layout",
    demoUrl: "https://pitch.nhatsoft.com",
    visualShowcases: [
      {
        imagePath: "/images/products/san-bong-lich-dat.png",
        title: "Lưới Lịch Đặt Sân Trực Quan (Kéo/Thả)",
        desc: "Quản lý hàng chục sân bóng trên một màn hình duy nhất. Hỗ trợ thao tác kéo thả để chuyển giờ, đổi sân cực kỳ nhanh chóng và chống trùng lịch tuyệt đối.",
        icon: "CalendarDays",
        bgColor: "bg-green-50",
      },
      {
        imagePath: "/images/products/san-bong-pos.png",
        title: "Quầy Thu Ngân (POS) & Bán Lẻ",
        desc: "Tự động tính toán tiền giờ theo khung giờ vàng/giờ thường. Tích hợp quản lý kho nước uống, đồ thuê (áo, bóng) và in bill thanh toán chuyên nghiệp.",
        icon: "ShoppingCart",
        bgColor: "bg-blue-50",
      },
      {
        imagePath: "/images/products/san-bong-bao-cao.png",
        title: "Báo Cáo Doanh Thu Theo Thời Gian Thực",
        desc: "Hệ thống Dashboard biểu đồ trực quan giúp chủ sân nắm bắt chính xác dòng tiền, công nợ khách quen và hiệu suất khai thác sân từng ngày.",
        icon: "BarChart3",
        bgColor: "bg-amber-50",
      },
    ],
    techStack: [
      {
        name: ".NET 8 (Web API)",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "C# & EF Core", // Thay vì để cứng C# 12
        iconName: "Code2",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "SQL Server / PostgreSQL", // 🌟 FIX: Đã thêm PostgreSQL
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        name: "Next.js 14",
        iconName: "Layout",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
    ],
    features: [
      "Quản lý lưới lịch đặt sân trực quan (Drag & Drop).",
      "Hệ thống tính tiền tự động linh hoạt theo khung giờ.",
      "Quản lý kho hàng hóa, dịch vụ đi kèm (Nước uống, cho thuê đồ).",
      "Báo cáo doanh thu biểu đồ thời gian thực, chống thất thoát.",
      "Tích hợp API thanh toán chuyển khoản, tạo mã QR động.",
      "🚀 Giao diện thực tế đang trong giai đoạn hoàn thiện (Coming Soon Quý 3/2026)",
    ],
  },

  // ==========================================
  // 3. DỊCH VỤ OUTSOURCE WEB
  // ==========================================
  {
    id: "outsource-web-dev",
    title: "Dịch vụ Phát triển Web & Gia công",
    version: "2026",
    lastUpdate: "Liên tục",
    desc: "Nhận thiết kế website trọn gói. Từ Web giới thiệu/Landing Page nhanh gọn đến các hệ thống Web App, CRM phức tạp theo yêu cầu.",
    fullDescription:
      "Cung cấp giải pháp phần mềm may đo cho doanh nghiệp. Chúng tôi triển khai đa dạng công nghệ: từ hệ sinh thái WordPress & MySQL tối ưu chi phí cho Web bán hàng, cho đến kiến trúc Next.js & .NET 8 Enterprise cho các hệ thống Quản trị, SaaS đa người dùng.",
    categoryId: "service",
    price: "Từ 3.000.000đ",
    badge: "Outsource",
    badgeColor: "bg-orange-100 text-orange-700",
    iconName: "Briefcase",
    visualShowcases: [
      {
        imagePath: "/images/products/outsource-landing.png",
        title: "Thiết Kế UI/UX Đẳng Cấp & Độc Bản",
        desc: "Giao diện được thiết kế riêng biệt, phù hợp với nhận diện thương hiệu. Tối ưu hóa trải nghiệm người dùng (UX) để tăng tỷ lệ chuyển đổi mua hàng.",
        icon: "LayoutTemplate",
        bgColor: "bg-indigo-50",
      },
      {
        imagePath: "/images/products/outsource-responsive.png",
        title: "Tương Thích Mọi Thiết Bị (Responsive)",
        desc: "Website hiển thị hoàn hảo và tốc độ tải trang siêu tốc trên mọi thiết bị: Mobile, Tablet, Desktop. Đạt chuẩn Core Web Vitals của Google.",
        icon: "Smartphone",
        bgColor: "bg-rose-50",
      },
      {
        imagePath: "/images/products/outsource-cms.png",
        title: "Hệ Quản Trị (CMS) Thân Thiện",
        desc: "Bàn giao kèm hệ thống quản trị nội dung dễ sử dụng. Khách hàng có thể tự thay đổi bài viết, hình ảnh, sản phẩm mà không cần biết lập trình.",
        icon: "Settings",
        bgColor: "bg-slate-50",
      },
    ],
    techStack: [
      {
        name: "Next.js & React", // Cho Web App phức tạp
        iconName: "Code2",
        color: "text-slate-800",
        bg: "bg-slate-100",
      },
      {
        name: ".NET 8 / Node.js", // Cho Backend phức tạp
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "WordPress & PHP", // 🌟 FIX: Đã thêm PHP
        iconName: "Layout",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
      {
        name: "MySQL / PostgreSQL", // 🌟 FIX: Đã thêm MySQL
        iconName: "Database",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
    ],
    features: [
      "Tư vấn giải pháp và kiến trúc hệ thống miễn phí.",
      "Thiết kế Landing Page, Web công ty, E-commerce tối ưu SEO.",
      "Phát triển hệ thống Web App, SaaS phức tạp theo yêu cầu.",
      "Bàn giao toàn bộ mã nguồn, bảo hành kỹ thuật 12 tháng.",
    ],
  },
];
