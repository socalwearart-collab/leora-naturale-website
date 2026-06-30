/**
 * All site images live in /public/images/
 * To replace any image: save your file to the path shown below (same filename).
 */

export const IMAGES = {
  logo: "/images/logo.jpg",
  hero: "/images/hero/banner.jpg",
  about: "/images/about/market.jpg",
  impact: "/images/impact/community.jpg",
  aboutPage: "/images/about/wellness.jpg",
  products: {
    "dehydrated-jackfruit": "/images/products/dehydrated-jackfruit.jpg",
    "heen-bovitiya-tea": "/images/products/heen-bovitiya-tea.jpg",
    "dehydrated-bitter-gourd": "/images/products/dehydrated-bitter-gourd.jpg",
    "dehydrated-kohila": "/images/products/dehydrated-kohila.jpg",
    "heen-bovitiya-powder": "/images/products/heen-bovitiya-powder.jpg",
    "banana-sesame": "/images/products/banana-sesame.jpg",
  },
  categories: {
    "Dehydrated Snacks": "/images/categories/dehydrated-snacks.jpg",
    "Herbal Wellness": "/images/categories/herbal-wellness.jpg",
    "Herbal Powders": "/images/categories/herbal-powders.jpg",
    "Traditional Roots": "/images/categories/traditional-roots.jpg",
  },
  ingredients: {
    Jackfruit: "/images/ingredients/jackfruit.jpg",
    "Bitter Gourd": "/images/ingredients/bitter-gourd.jpg",
    "Heen Bovitiya": "/images/ingredients/heen-bovitiya.jpg",
    "Banana & Sesame": "/images/ingredients/banana-sesame.jpg",
  },
  blog: {
    "art-of-dehydration": "/images/blog/art-of-dehydration.jpg",
    "heen-bovitiya-wellness": "/images/blog/heen-bovitiya-wellness.jpg",
    "preservative-free-living": "/images/blog/preservative-free-living.jpg",
  },
} as const;

export function productImage(id: string): string {
  return IMAGES.products[id as keyof typeof IMAGES.products] ?? IMAGES.logo;
}