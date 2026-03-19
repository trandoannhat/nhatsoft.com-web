import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Chặn bot vào các trang quản trị nếu có
    },
    sitemap: "https://nhatsoft.com/sitemap.xml",
  };
}
