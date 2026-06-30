import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryCards.module.css";

const categories = [
  {
    title: "Dehydrated Snacks",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&h=500&fit=crop",
    href: "/products",
  },
  {
    title: "Herbal Wellness",
    image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=800&h=500&fit=crop",
    href: "/products",
  },
  {
    title: "Herbal Powders",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=500&fit=crop",
    href: "/products",
  },
  {
    title: "Traditional Roots",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop",
    href: "/products",
  },
];

export default function CategoryCards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Browse by Category</span>
          <h2 className="section-title">
            Explore Our <em>Wellness Collection</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className={styles.card}>
              <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              <div className={styles.overlay}>
                <h3>{cat.title}</h3>
                <span>Browse the full range →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}