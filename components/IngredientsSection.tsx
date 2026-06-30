import Image from "next/image";
import styles from "./IngredientsSection.module.css";

const ingredients = [
  {
    name: "Jackfruit",
    description: "A tropical superfruit rich in fiber, vitamins, and natural sweetness — perfect for guilt-free snacking.",
    image: "https://images.unsplash.com/photo-1605027990121-4753a3f3f0b8?w=400&h=400&fit=crop",
  },
  {
    name: "Bitter Gourd",
    description: "Known for its holistic health properties, preserving authentic earthy bitterness through gentle dehydration.",
    image: "https://images.unsplash.com/photo-1594282418429-2fd9f9f5e2e5?w=400&h=400&fit=crop",
  },
  {
    name: "Heen Bovitiya",
    description: "A treasured Sri Lankan herb used in traditional wellness, offering floral notes and healing heritage.",
    image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=400&h=400&fit=crop",
  },
  {
    name: "Banana & Sesame",
    description: "A delightful fusion of naturally sweet banana and nutrient-rich sesame seeds for a perfect crunch.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11fe08?w=400&h=400&fit=crop",
  },
];

export default function IngredientsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Super Healthy Ingredients</span>
          <h2 className="section-title">Nature&apos;s Finest, <em>Preserved</em></h2>
        </div>

        <div className={styles.grid}>
          {ingredients.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={item.image} alt={item.name} fill sizes="200px" style={{ objectFit: "cover" }} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}