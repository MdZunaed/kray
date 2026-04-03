export const getProductSlugFromHref = (href: string) => href.split("/").filter(Boolean).pop() ?? "";
