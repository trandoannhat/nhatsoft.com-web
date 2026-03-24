// src/components/ProductVisualShowcase.tsx
import Image from "next/image";
import { Product } from "@/data/products";
import * as Icons from "lucide-react";

interface ProductVisualShowcaseProps {
  product: Product;
}

// Chú thích ảnh cho từng tấm
const imageCaptions = [
  {
    title: "Quản trị Nhân sự Tập trung & Trực quan",
    desc: "Giao diện quản lý danh sách người dùng được tối ưu hóa. Dễ dàng theo dõi thông tin liên hệ, Vai trò (Role) và Trạng thái hoạt động.",
    icon: "Users",
    bgColor: "bg-blue-50",
  },
  {
    title: "Quản lý Sơ đồ Tổ chức Linh hoạt Không giới hạn",
    desc: "Cấu trúc dữ liệu Tree-view đệ quy cho phép bạn thiết lập sơ đồ doanh nghiệp từ Tập đoàn, Chi nhánh, đến từng Phòng ban, Tổ/Nhóm nhỏ nhất.",
    icon: "GitFork",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Kiểm soát Quyền hạn Tuyệt đối với Ma trận RBAC",
    desc: "Cơ chế 'Ghi đè quyền' độc quyền. Trực quan hóa toàn bộ ma trận chức năng, cho phép bạn bật/tắt chính xác từng hành động (Xem, Thêm, Sửa, Xóa, Xuất) cho cá nhân.",
    icon: "ShieldCheck",
    bgColor: "bg-rose-50",
  },
];

export default function ProductVisualShowcase({
  product,
}: ProductVisualShowcaseProps) {
  if (!product.featureImages || product.featureImages.length === 0) return null;

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Phô Diễn Sức Mạnh Nền Tảng
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Xem thực tế các màn hình quản trị đẳng cấp Enterprise mà bạn sẽ nhận
            được.
          </p>
        </div>

        {product.featureImages.map((imagePath, index) => {
          const isEven = index % 2 === 0;
          const caption = imageCaptions[index];
          const LucideIcon = Icons[caption.icon];

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* PHẦN ẢNH (Giao diện ốp khung trình duyệt, bồng bềnh trên nền web) */}
              <div
                className={`relative transition-all duration-500 hover:scale-105 ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* 🌟 Hiệu ứng màu nền phía sau ảnh trong suốt (linh hoạt nhờ code) */}
                <div
                  className={`absolute -inset-4 rounded-xl ${caption.bgColor} opacity-60 blur-2xl transform rotate-3`}
                ></div>

                <div className="relative rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={caption.title}
                    width={1920} // Tỷ lệ 16:9 shots.so
                    height={1080}
                    layout="responsive"
                    className="object-cover"
                    priority={index === 0} // Ưu tiên ảnh đầu tiên
                  />
                </div>
              </div>

              {/* PHẦN TEXT (Caption mô tả tính năng chuẩn Tech Lead) */}
              <div
                className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${caption.bgColor}`}>
                    <LucideIcon
                      className={`w-8 h-8 ${caption.bgColor.replace("bg-", "text-").replace("-50", "-600")}`}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {caption.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {caption.desc}
                </p>
                <div className="border-l-4 border-blue-500 pl-4 py-2 text-gray-500 italic">
                  Phần mềm thực tế, dữ liệu thực tế: Trụ sở NhatSoft Quận 1, Gò
                  Vấp, nhân viên Nguyễn Văn A.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
