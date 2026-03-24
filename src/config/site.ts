export const siteConfig = {
  name: "Kray",
  primaryColor: "#74A662",
  logoPath: "/logo.svg",
  placeholderImage: "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
  currency: "$",
} as const;

export type SiteConfig = typeof siteConfig;
