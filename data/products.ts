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
  // MODULE: QUẢN LÝ NGÂN SÁCH XÃ/PHƯỜNG
  // ==========================================
  {
    id: "budget-management",
    title: "NhatSoft Budget - Quản lý Ngân sách Xã/Phường",
    version: "v1.0.0",
    lastUpdate: "Tháng 6, 2026",
    desc: "Trợ lý số hóa giải ma trận tài chính công. Tự động kiểm soát thu chi, phân bổ dự toán và loại bỏ hoàn toàn rủi ro xuất toán.",
    fullDescription:
      "Quản lý ngân sách nhà nước tại cấp Xã/Phường luôn là bài toán áp lực với hàng chục tỷ đồng và hàng trăm tiểu mục đan chéo. Kế toán thường xuyên đối mặt với 'ma trận' Excel, rủi ro nhân đôi số liệu hoặc chi vượt nguồn kinh phí. NhatSoft Budget Management ra đời như một 'chốt chặn' an toàn tuyệt đối: giám sát chặt chẽ vòng đời dòng tiền, tự động hóa đối soát và kết xuất báo cáo chuẩn Thông tư chỉ với một cú click.",
    categoryId: "webapp",
    price: "Liên hệ",
    badge: "Mới ra mắt",
    badgeColor: "bg-blue-100 text-blue-700",
    iconName: "PieChart",
    demoUrl: "https://app.nhatsoft.com/register",
    visualShowcases: [
      {
        imagePath: "/images/products/budget-allocation.png",
        title: "Phân bổ Dự toán thông minh",
        desc: "Khởi tạo từ Quyết định mẹ, linh hoạt 'chẻ nhỏ' túi kinh phí xuống từng đơn vị, tiểu mục. Thuật toán tự động giám sát, đảm bảo không một đồng nào phân bổ sai mục đích.",
        icon: "Network",
        bgColor: "bg-blue-50",
      },
      {
        imagePath: "/images/products/budget-revenue.png",
        title: "Bóc tách Thực thu 'Bọc thép'",
        desc: "Nhận diện dữ liệu Excel thông minh, tự động triệt tiêu lỗi cộng gộp trùng lặp giữa dòng cha - dòng con và sinh Quyết định bổ sung khi có biến động.",
        icon: "FileSpreadsheet",
        bgColor: "bg-emerald-50",
      },
      {
        imagePath: "/images/products/budget-control.png",
        title: "Chốt chặn Kiểm soát Chi",
        desc: "Khi lập Giấy rút dự toán/UNC, hệ thống rà soát số dư thực tế theo thời gian thực. Tự động cảnh báo và chặn đứng giao dịch nếu vượt mức, miễn nhiễm rủi ro chi lố.",
        icon: "ShieldAlert",
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
        name: "Next.js 15",
        iconName: "Layout",
        color: "text-slate-700",
        bg: "bg-slate-100",
      },
      {
        name: "PostgreSQL",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
    ],
    features: [
      "Quản trị Danh mục: Tự động sao chép mục lục ngân sách sang năm tài chính mới.",
      "Phân bổ Dự toán: Giám sát chặt chẽ nghiệp vụ điều chỉnh, điều chuyển trong năm.",
      "Tiến độ Thu: Tự động cộng dồn lũy kế và tính tỷ lệ % hoàn thành so với dự toán.",
      "Kiểm soát Chi: Chặn đứng giao dịch sai nguồn, vượt tổng mức kinh phí.",
      "⏳ Sắp ra mắt: Quản lý Quỹ & Tự động đối chiếu Kho bạc (Mẫu 01a/ĐC, 02a/ĐC).",
      "⏳ Sắp ra mắt: Quyết toán Ngân sách & Chốt sổ kết dư cuối năm.",
      "⏳ Sắp ra mắt: Báo cáo chuẩn Thông tư 344/2016/TT-BTC (Sổ cái, Nhật ký thu/chi).",
    ],
  },
  // ==========================================
  // MODULE: QUẢN LÝ KHO THÔNG MINH
  // ==========================================
  {
    id: "inventory-management",
    title: "NhatSoft - Phân hệ Quản lý Kho Thông Minh",
    version: "v1.0.0",
    lastUpdate: "Tháng 8, 2026",
    desc: "Tự động tính giá vốn FIFO, nhập liệu siêu tốc và chống xuất âm. Giải pháp giải phóng nhân viên kho khỏi thao tác rườm rà.",
    fullDescription:
      "Quản lý kho chưa bao giờ là bài toán dễ dàng với các doanh nghiệp: nhập liệu tốn thời gian, sai lệch giá vốn, hay các mẫu in chứng từ quá cứng nhắc. Hiểu được những 'nỗi đau' đó, NhatSoft tự hào giới thiệu Phân hệ Quản lý Kho hoàn toàn mới – mảnh ghép hoàn hảo cho hệ thống ERP của bạn. Hệ thống giúp bạn biết chính xác trong kho còn bao nhiêu hàng, đồng thời tối ưu hóa toàn bộ luồng công việc của nhân sự.",
    categoryId: "webapp",
    price: "Liên hệ",
    badge: "Mới ra mắt",
    badgeColor: "bg-rose-100 text-rose-700",
    iconName: "Box",
    demoUrl: "https://app.nhatsoft.com/register",
    visualShowcases: [
      {
        imagePath: "/images/products/inventory-dashboard.png", // Bạn cần chuẩn bị ảnh này
        title: "Trải nghiệm nhập liệu Siêu tốc",
        desc: "Tích hợp Quick Create (tạo nhanh vật tư tại chỗ), tìm kiếm thông minh hàng ngàn mã không độ trễ, và thao tác hoàn toàn bằng phím tắt (F2) giúp kế toán nhập liệu thoăn thoắt.",
        icon: "Zap",
        bgColor: "bg-amber-50",
      },
      {
        imagePath: "/images/products/inventory-fifo.png",
        title: "Lõi thuật toán Giá vốn (FIFO)",
        desc: "Tự động dò tìm lô hàng cũ nhất để trừ tồn và áp giá vốn. Hệ thống thông minh tự động hoàn trả tồn kho vào đúng lô nhập ban đầu nếu xóa/sửa Phiếu xuất.",
        icon: "Calculator",
        bgColor: "bg-emerald-50",
      },
      {
        imagePath: "/images/products/inventory-print.png",
        title: "Mẫu in Chứng từ linh hoạt",
        desc: "Tùy biến mẫu in C30-HD, C31-HD sát với thực tế. Tự động quét và tổng hợp các số hóa đơn gốc thành một dải số gọn gàng ở phần Chứng từ kèm theo.",
        icon: "Printer",
        bgColor: "bg-indigo-50",
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
        name: "Next.js 15",
        iconName: "Layout",
        color: "text-slate-700",
        bg: "bg-slate-100",
      },
      {
        name: "PostgreSQL",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
    ],
    features: [
      "Khai báo nhanh tại chỗ (Quick Create) không làm mất dữ liệu đang nhập dở.",
      "Hỗ trợ Import Excel hàng nghìn dòng phiếu nhập/xuất trong vài giây.",
      "Tuân thủ tuyệt đối nguyên tắc FIFO (Nhập trước - Xuất trước).",
      "Ngăn chặn tuyệt đối việc xuất kho khi không đủ tồn (Chống xuất âm).",
      "Khóa an toàn: Không cho phép xóa Phiếu Nhập nếu hàng đã được bán.",
      "Bổ sung trường thông tin thực tế: 'Bộ phận giao/nhận', 'Số hóa đơn gốc'.",
    ],
  },
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

    lastUpdate: "Tháng 6, 2026",

    desc: "Nền tảng Backend + Frontend dành cho ERP, CRM, HRM và các hệ thống SaaS doanh nghiệp. Xây dựng một lần, tái sử dụng cho nhiều dự án.",

    fullDescription:
      "NhatSoft SaaS Core Engine là nền tảng phát triển ứng dụng doanh nghiệp được xây dựng trên .NET 8 Web API, Next.js và Domain-Driven Design (DDD). Hệ thống tích hợp sẵn Multi-Tenant, Dynamic RBAC, ACL, JWT Authentication, Audit Log, Dynamic Menu Permission và các thành phần cốt lõi thường mất nhiều tháng để phát triển. Giúp Software House, Startup, Freelancer và Doanh nghiệp tập trung vào nghiệp vụ thay vì xây dựng lại nền tảng cho mỗi dự án mới.",

    categoryId: "source",

    price: "Liên hệ",

    badge: "Enterprise Ready",

    badgeColor: "bg-blue-100 text-blue-700",

    iconName: "ShieldCheck",

    demoUrl: "https://core.nhatsoft.com",

    visualShowcases: [
      {
        imagePath: "/images/products/danh-sach-nhan-vien.png",
        title: "Quản lý Người dùng & Vai trò",
        desc: "Quản trị tập trung tài khoản, vai trò và trạng thái hoạt động. Hỗ trợ nhiều Tenant trên cùng một hệ thống với khả năng phân quyền linh hoạt.",
        icon: "Users",
        bgColor: "bg-blue-50",
      },
      {
        imagePath: "/images/products/so-do-to-chuc-da-cap.png",
        title: "Sơ đồ Tổ chức Đa cấp",
        desc: "Mô hình tổ chức dạng cây không giới hạn cấp độ, phù hợp cho doanh nghiệp, tập đoàn, cơ quan nhà nước và hệ thống đa chi nhánh.",
        icon: "GitFork",
        bgColor: "bg-emerald-50",
      },
      {
        imagePath: "/images/products/ghi-de-quyen-ngoai-le.png",
        title: "Dynamic RBAC & ACL",
        desc: "Quản lý Permission, Role và quyền cá nhân (ACL). Hỗ trợ ghi đè quyền ngoại lệ và menu động theo từng người dùng.",
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
        name: "Next.js 15",
        iconName: "Layout",
        color: "text-slate-700",
        bg: "bg-slate-100",
      },
      {
        name: "Clean Architecture",
        iconName: "Layers",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
      },
      {
        name: "DDD + EF Core",
        iconName: "Code2",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "SQL Server / PostgreSQL",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
    ],

    features: [
      "Multi-Tenant: Cô lập dữ liệu tuyệt đối giữa các Tenant.",
      "Dynamic RBAC: Permission, Role và Menu động.",
      "ACL (Access Control List) cho từng người dùng.",
      "JWT Authentication + Refresh Token.",
      "ASP.NET Core Identity tích hợp sẵn.",
      "Audit Log tự động bằng EF Core Interceptor.",
      "Seed Permission tự động từ source code.",
      "Dynamic Sidebar và Menu Permission theo quyền.",
      "Sơ đồ tổ chức đa cấp không giới hạn.",
      "Repository Pattern + Unit Of Work.",
      "Clean Architecture + Domain Driven Design (DDD).",
      "Soft Delete, CreatedBy, UpdatedBy.",
      "API Versioning.",
      "Swagger/OpenAPI.",
      "Hỗ trợ SQL Server và PostgreSQL.",
      "Frontend quản trị hiện đại với Next.js + React.",
      "Giao diện Responsive cho Desktop, Tablet và Mobile.",
      "Sẵn sàng cho ERP, CRM, HRM, Hotel, Workflow và E-Office.",
      "Tiết kiệm 2-3 tháng xây dựng nền tảng cho mỗi dự án.",
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

  // để đồng bộ với thietkeweb.nhatsoft.com

  {
    id: "outsource-web-dev",
    title: "Thiết Kế Website Chuyên Nghiệp & Gia Công Web",
    version: "2026",
    lastUpdate: "Liên tục",
    desc: "Thiết kế website trọn gói chuẩn SEO, giao diện đẹp, tối ưu chuyển đổi. Từ Landing Page, Website doanh nghiệp đến Web App theo yêu cầu.",
    fullDescription:
      "NhatSoft cung cấp dịch vụ thiết kế website và phát triển hệ thống web chuyên nghiệp cho doanh nghiệp. Từ website giới thiệu công ty, landing page bán hàng, website bất động sản, spa, sân bóng, cho đến CRM nội bộ, ERP mini và các hệ thống SaaS đa người dùng. Chúng tôi tối ưu cả giao diện, tốc độ tải trang, chuẩn SEO Google và khả năng mở rộng lâu dài cho doanh nghiệp.",
    categoryId: "service",
    price: "Từ 2.990.000đ",
    badge: "Thiết Kế Web",
    badgeColor: "bg-blue-100 text-blue-700",
    iconName: "Briefcase",

    demoUrl: "https://nhatdev.top",

    visualShowcases: [
      {
        imagePath: "/images/products/web-company-homepage.png",
        title: "Website Doanh Nghiệp Chuyên Nghiệp",
        desc: "Giao diện hiện đại, tăng uy tín thương hiệu và tối ưu chuyển đổi khách hàng ngay từ trang chủ.",
        icon: "Monitor",
        bgColor: "bg-blue-50",
      },
      {
        imagePath: "/images/products/landing-page-conversion.png",
        title: "Landing Page Tối Ưu Chuyển Đổi",
        desc: "Thiết kế landing page bán hàng mạnh mẽ, tối ưu CTA, form đăng ký và tỷ lệ chốt đơn.",
        icon: "MousePointerClick",
        bgColor: "bg-amber-50",
      },
      {
        imagePath: "/images/products/mobile-responsive-real.png",
        title: "Hiển Thị Hoàn Hảo Trên Mobile",
        desc: "Responsive chuẩn Google giúp website đẹp trên mọi thiết bị và cải thiện SEO vượt trội.",
        icon: "Smartphone",
        bgColor: "bg-emerald-50",
      },
    ],

    techStack: [
      {
        name: "WordPress & PHP",
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
        name: ".NET 8 / Node.js",
        iconName: "Server",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        name: "MySQL / PostgreSQL",
        iconName: "Database",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
    ],

    features: [
      "Thiết kế website doanh nghiệp, landing page, web bán hàng chuẩn SEO.",
      "Thiết kế website bất động sản, spa, salon, sân bóng, giáo dục, nội thất...",
      "Phát triển CRM nội bộ, Web App quản trị, SaaS đa người dùng theo yêu cầu.",
      "Tư vấn miễn phí giải pháp phù hợp với ngân sách doanh nghiệp.",
      "Bàn giao toàn bộ source code, hosting/domain hỗ trợ đầy đủ.",
      "Bảo hành kỹ thuật 12 tháng, hỗ trợ vận hành lâu dài.",
    ],
  },
  // ==========================================
  // NHATSOFT HRM - QUẢN LÝ NHÂN SỰ
  // ==========================================
  {
    id: "nhatsoft-hrm",
    title: "NhatSoft HRM - Phần mềm Quản lý Nhân sự",
    version: "MVP",
    lastUpdate: "Tháng 6, 2026",

    desc: "Phần mềm quản lý nhân sự tập trung dành cho doanh nghiệp: hồ sơ nhân viên, chấm công, nghỉ phép, đơn chờ duyệt và dashboard tổng quan.",

    fullDescription:
      "NhatSoft HRM là giải pháp quản lý nhân sự trên nền tảng web, giúp doanh nghiệp tập trung dữ liệu nhân viên, theo dõi chấm công, quản lý nghỉ phép và nắm bắt tình hình nhân sự hằng ngày. Hệ thống được thiết kế theo hướng đơn giản, dễ sử dụng và sẵn sàng mở rộng theo nhu cầu vận hành của doanh nghiệp.",

    categoryId: "webapp",

    price: "Đăng ký dùng thử",
    badge: "Dùng thử miễn phí",
    badgeColor: "bg-indigo-100 text-indigo-700",

    iconName: "Users",

    // Link này sẽ hiển thị nút “Trải nghiệm Demo”
    demoUrl: "https://app.nhatsoft.com/register",

    visualShowcases: [
      {
        imagePath: "/images/products/hrm-dashboard.png",
        title: "Tổng quan nhân sự trực quan",
        desc: "Theo dõi nhanh tổng số nhân sự, nhân viên thử việc, đơn chờ duyệt, nhân viên nghỉ trong ngày, cơ cấu phòng ban và sinh nhật nhân viên trong tháng.",
        icon: "BarChart3",
        bgColor: "bg-indigo-50",
      },
      {
        imagePath: "/images/products/hrm-employee-profile.png",
        title: "Quản lý hồ sơ nhân viên",
        desc: "Lưu trữ và tra cứu thông tin nhân sự tập trung: thông tin liên hệ, phòng ban, vị trí công việc và trạng thái làm việc.",
        icon: "Users",
        bgColor: "bg-emerald-50",
      },
      {
        imagePath: "/images/products/hrm-leave-management.png",
        title: "Chấm công và quản lý nghỉ phép",
        desc: "Hỗ trợ theo dõi chấm công, tạo đơn xin nghỉ và quản lý các yêu cầu đang chờ duyệt trên cùng một hệ thống.",
        icon: "CalendarDays",
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
        name: "Angular",
        iconName: "Layout",
        color: "text-red-600",
        bg: "bg-red-50",
      },
      {
        name: "JWT Authentication",
        iconName: "ShieldCheck",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "MySQL Database",
        iconName: "Database",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        name: "Cloud SaaS",
        iconName: "Server",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
      },
      {
        name: "Responsive Web",
        iconName: "Smartphone",
        color: "text-slate-700",
        bg: "bg-slate-100",
      },
    ],

    features: [
      "Dashboard tổng quan nhân sự: tổng nhân sự, thử việc, đơn chờ duyệt và nghỉ hôm nay.",
      "Quản lý hồ sơ nhân viên tập trung, dễ tìm kiếm và cập nhật.",
      "Theo dõi cơ cấu nhân sự theo phòng ban.",
      "Quản lý chấm công nhân viên trên hệ thống.",
      "Tạo và theo dõi đơn xin nghỉ phép.",
      "Danh sách đơn nghỉ chờ duyệt dành cho quản lý hoặc bộ phận nhân sự.",
      "Theo dõi sinh nhật nhân viên trong tháng.",
      "Quản lý gói dịch vụ và nâng cấp theo nhu cầu sử dụng.",
      "Giao diện hiện đại, hỗ trợ tốt trên máy tính và thiết bị di động.",
      "Nền tảng sẵn sàng mở rộng thêm tính lương, hợp đồng, phân quyền và báo cáo nhân sự.",
    ],
  },
];
