import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { BRAND_TAGLINE_SINHALA } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}>
        <Image
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&h=900&fit=crop"
          alt="Fresh natural ingredients"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <Logo variant="hero" />
        <p className={styles.tagline}>{BRAND_TAGLINE_SINHALA}</p>
        <p className={styles.eyebrow}>Healthy &amp; Preservative Free</p>
        <h1 className={styles.title}>
          The Art of <em>Natural</em> Preservation
        </h1>
        <p className={styles.subtitle}>
          Premium dehydrated snacks and herbal wellness products crafted in Sri Lanka.
          Artisanal quality, maximum nutrition, zero compromise.
        </p>
        <div className={styles.actions}>
          <Link href="/products" className="btn btn-primary">
            Shop Collection
          </Link>
          <Link href="/about" className="btn btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
            Our Story
          </Link>
        </div>
        <a href="#product-range" className={styles.scrollHint}>
          Scroll to explore
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}