import Image from "next/image";
import { Product } from "@/data/products";
import * as Icons from "lucide-react";

interface ProductVisualShowcaseProps {
  product: Product;
}

export default function ProductVisualShowcase({
  product,
}: ProductVisualShowcaseProps) {
  // 1. Lấy mảng dữ liệu showcase động từ product (Không dùng hardcode nữa)
  const showcases = product.visualShowcases;

  if (!showcases || showcases.length === 0) return null;

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-[2.5rem] mt-12 border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Phô Diễn Sức Mạnh Nền Tảng
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-500">
            Xem thực tế các tính năng và giao diện đẳng cấp mà bạn sẽ nhận được.
          </p>
        </div>

        {showcases.map((showcase, index) => {
          const isEven = index % 2 === 0;

          // 🌟 2. CÁCH FIX LỖI TYPESCRIPT CHUẨN NHẤT
          // Ép kiểu ép TypeScript hiểu chuỗi này chắc chắn là tên của một Icon
          const LucideIcon =
            (Icons[showcase.icon as keyof typeof Icons] as React.ElementType) ||
            Icons.CheckCircle;

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* PHẦN ẢNH */}
              <div
                className={`relative transition-all duration-500 hover:scale-[1.02] ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className={`absolute -inset-4 rounded-xl ${showcase.bgColor} opacity-60 blur-2xl transform rotate-3`}
                ></div>
                <div className="relative rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden bg-slate-50 aspect-[16/10]">
                  <Image
                    src={showcase.imagePath}
                    alt={showcase.title}
                    fill
                    // 🌟 FIX: Đã thêm scale-125 và group-hover:scale-[1.35]
                    className="object-cover scale-125 group-hover:scale-[1.35] transition-transform duration-700 cursor-pointer"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* PHẦN TEXT ĐỘNG */}
              <div
                className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${showcase.bgColor}`}>
                    <LucideIcon
                      className={`w-8 h-8 ${showcase.bgColor.replace("bg-", "text-").replace("-50", "-600")}`}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    {showcase.title}
                  </h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {showcase.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
