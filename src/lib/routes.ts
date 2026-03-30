const normalizeSlug = (slug: string) => slug.replace(/^_+/, "");

const withUnderscoreSlug = (slug: string) => `_${normalizeSlug(slug)}`;

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  products: "/products",
  product: (slug: string) => `/products/${withUnderscoreSlug(slug)}`,
  categories: "/categories",
  category: (slug: string) => `/categories/${withUnderscoreSlug(slug)}`,
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
