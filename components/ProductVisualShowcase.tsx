import Image from "next/image";
import { Product } from "@/data/products";
import * as Icons from "lucide-react";

interface ProductVisualShowcaseProps {
  product: Product;
}

export default function ProductVisualShowcase({
  product,
}: ProductVisualShowcaseProps) {
  const showcases = product.visualShowcases;

  if (!showcases || showcases.length === 0) return null;

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">
            CORE MODULES // TÍNH NĂNG CỐT LÕI
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Kiến trúc nghiệp vụ chuyên sâu
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600 leading-relaxed">
            Các module được thiết kế tối ưu dữ liệu lớn, giao diện kỹ thuật số
            trực quan và bảo mật tuyệt đối cho mọi phiên làm việc.
          </p>
        </div>

        {showcases.map((showcase, index) => {
          const isEven = index % 2 === 0;
          const LucideIcon =
            (Icons[showcase.icon as keyof typeof Icons] as React.ElementType) ||
            Icons.CheckCircle;

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center group ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Image Section */}
              <div
                className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative rounded-xl shadow-sm border border-slate-200 overflow-hidden bg-slate-50 aspect-[16/10]">
                  <Image
                    src={showcase.imagePath}
                    alt={showcase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out border-b border-slate-200"
                    priority={index === 0}
                  />
                  {/* Subtle technical overlay frame */}
                  <div className="absolute inset-0 border border-slate-900/5 rounded-xl pointer-events-none"></div>
                </div>
              </div>

              {/* Text Section */}
              <div
                className={`space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 shadow-xs">
                    <LucideIcon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">
                    {showcase.title}
                  </h3>
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed">
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
