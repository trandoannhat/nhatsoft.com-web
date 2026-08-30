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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Chức năng cốt lõi
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-slate-500">
            Trải nghiệm các module nghiệp vụ được thiết kế tối ưu cho trải
            nghiệm người dùng cuối.
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
                <div className="relative rounded-2xl shadow-sm border border-slate-200 overflow-hidden bg-slate-50 aspect-[16/10]">
                  <Image
                    src={showcase.imagePath}
                    alt={showcase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Text Section */}
              <div
                className={`space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${showcase.bgColor}`}>
                    <LucideIcon
                      className={`w-6 h-6 ${showcase.bgColor.replace("bg-", "text-").replace("-50", "-600")}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {showcase.title}
                  </h3>
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
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
