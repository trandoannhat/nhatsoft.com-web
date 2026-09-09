// Định nghĩa cấu trúc chuẩn bị cho Backend trả về sau này
export interface CompanyStat {
  value: string;
  label: string;
  desc: string;
  color?: string; // Dùng để highlight màu riêng (vd: brand-600)
}

export interface ServiceCore {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

// 1. Số liệu thống kê thực tế
export const COMPANY_STATS: CompanyStat[] = [
  {
    value: "8+",
    label: "Năm kinh nghiệm",
    desc: "Phát triển phần mềm doanh nghiệp",
    color: "text-slate-900",
  },
  {
    value: "120+",
    label: "Dự án bàn giao",
    desc: "Cho các tập đoàn & SME quy mô lớn",
    color: "text-brand-600",
  },
  {
    value: "50+",
    label: "Kỹ sư chuyên sâu",
    desc: "Senior .NET, Next.js & Cloud Architects",
    color: "text-slate-900",
  },
  {
    value: "99.4%",
    label: "Khách hàng hài lòng",
    desc: "Tỷ lệ hợp đồng đồng hành dài hạn",
    color: "text-brand-600",
  },
];

// 2. Dịch vụ & Năng lực cốt lõi
export const SERVICES: ServiceCore[] = [
  {
    icon: "corporate_fare",
    title: "Enterprise Software",
    desc: "Hệ thống ERP lõi, quản trị tài chính kế toán cam kết, quản lý chuỗi cung ứng SCM và vận hành chuỗi phân phối đa điểm phức tạp.",
    tags: ["ERP Lõi", "SCM Chuỗi", "Báo cáo real-time"],
  },
  {
    icon: "cloud_sync",
    title: "SaaS Platforms",
    desc: "Xây dựng nền tảng B2B SaaS quy mô lớn với kiến trúc Multi-Tenant phân lập dữ liệu, tự động onboarding, dynamic billing.",
    tags: ["Multi-Tenant", "Billing Meter", "RBAC Matrix"],
  },
  {
    icon: "terminal",
    title: "Custom Software",
    desc: "Phát triển phần mềm may đo chuyên sâu theo yêu cầu nghiệp vụ đặc thù trên nền .NET 8/9 và Next.js, không dư thừa tính năng.",
    tags: [".NET 8/9 LTS", "Next.js 15", "DDD Pattern"],
  },
  {
    icon: "integration_instructions",
    title: "Cloud & Integration",
    desc: "Tích hợp liên thông hệ thống qua REST API, Kafka/RabbitMQ, cổng thanh toán quốc tế và hạ tầng microservices Azure/K8s.",
    tags: ["Microservices", "Kafka / MQ", "API Gateway"],
  },
];

// 3. Quy trình phát triển Agile
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Khám phá & Phân tích",
    desc: "Khảo sát nghiệp vụ chi tiết, xác định phạm vi, lập tài liệu đặc tả SRS và kiến trúc tổng thể.",
  },
  {
    step: "02",
    title: "Kiến trúc & UX",
    desc: "Thiết kế cơ sở dữ liệu, Domain Models, Wireframes và luồng người dùng chi tiết.",
  },
  {
    step: "03",
    title: "Phát triển Agile",
    desc: "Chia Sprint 2 tuần/lần, lập trình theo chuẩn Clean Architecture, cập nhật demo liên tục.",
  },
  {
    step: "04",
    title: "QA & Bảo mật",
    desc: "Kiểm thử Unit, Integration, Stress test và rà soát bảo mật chuyên sâu chuẩn OWASP.",
  },
  {
    step: "05",
    title: "Triển khai Cloud",
    desc: "Tự động hóa CI/CD, đóng gói Docker/Kubernetes, triển khai staging sang production Zero-downtime.",
  },
  {
    step: "06",
    title: "Vận hành 24/7 SLA",
    desc: "Giám sát APM thời gian thực, sao lưu định kỳ, cam kết SLA phản hồi sự cố dưới 15 phút.",
  },
];
