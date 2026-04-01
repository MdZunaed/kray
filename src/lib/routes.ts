const normalizeSlug = (slug: string) => slug.replace(/^_+/, "");

export const routes = {
  home: "/",
  search: "/search",
  about: "/about",
  contact: "/contact",
  products: "/products",
  product: (slug: string) => `/products/${normalizeSlug(slug)}`,
  categories: "/categories",
  category: (slug: string) => `/categories/${normalizeSlug(slug)}`,
  cart: "/cart",
  checkout: "/checkout",
  register: "/register",
  login: "/login",
  account: "/account",
  accountAddress: "/account/address",
  accountOrders: "/account/orders",
  accountWallet: "/account/wallet",
  accountCoupon: "/account/coupon",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
} as const;

export const getParamSlug = (value: string) => normalizeSlug(value);
