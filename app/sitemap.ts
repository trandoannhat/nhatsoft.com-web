import { MetadataRoute } from "next";
import { PRODUCTS } from "../data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  // Lấy danh sách URL tĩnh
  const routes = [
    {
      url: "https://nhatsoft.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    } as const,
  ];

  // Lặp qua mảng Data để tự động sinh URL cho tất cả sản phẩm
  const productUrls = PRODUCTS.map(
    (product) =>
      ({
        url: `https://nhatsoft.com/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      }) as const,
  );

  return [...routes, ...productUrls];
}
