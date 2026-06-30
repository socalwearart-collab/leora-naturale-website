import products from "@/data/products.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  featured: boolean;
  inStock: boolean;
};

export const WHATSAPP_NUMBER = "940718147561";
export const CONTACT_EMAIL = "leoranaturale@gmail.com";
export const CONTACT_PHONE = "071 8147561";

export function getProducts(): Product[] {
  return products as Product[];
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter((product) => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((product) => product.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(getProducts().map((product) => product.category)));
}

export function getWhatsAppOrderLink(productName?: string): string {
  const message = productName
    ? `Hello Leora Naturale, I would like to order ${productName}.`
    : "Hello Leora Naturale, I would like to place an order.";
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}