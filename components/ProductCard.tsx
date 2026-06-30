import Image from "next/image";
import { Product, getWhatsAppOrderLink } from "@/lib/data";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        {!product.inStock && <span className={styles.badge}>Sold out</span>}
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
          <a
            href={getWhatsAppOrderLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}