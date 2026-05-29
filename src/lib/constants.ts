export const SITE_CONFIG = {
  name: "Elevate Workspace",
  description: "Tools for the Focused Mind. Curated workspace essentials engineered for precision.",
  url: "https://elevateworkspace.com",
};

export const ROUTES = {
  home: "/",
  shop: "/shop",
  cart: "/cart",
  checkout: "/checkout",
  admin: "/admin",
  product: (slug: string) => `/products/${slug}`,
};
