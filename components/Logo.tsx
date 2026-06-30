import Image from "next/image";
import styles from "./Logo.module.css";

type Props = {
  variant?: "header" | "footer" | "hero" | "section";
};

export default function Logo({ variant = "header" }: Props) {
  return (
    <Image
      src="/images/logo.jpg"
      alt="Leora Naturale"
      width={variant === "hero" ? 320 : variant === "section" ? 280 : 180}
      height={variant === "hero" ? 175 : variant === "section" ? 150 : 100}
      className={`${styles.logo} ${styles[variant]}`}
      priority={variant === "header" || variant === "hero"}
    />
  );
}