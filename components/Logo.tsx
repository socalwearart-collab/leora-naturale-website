import Image from "next/image";
import { LOGO_SRC } from "@/lib/data";
import styles from "./Logo.module.css";

type Props = {
  variant?: "header" | "footer" | "hero" | "section";
};

const sizes = {
  header: { width: 180, height: 56 },
  footer: { width: 200, height: 80 },
  hero: { width: 320, height: 140 },
  section: { width: 280, height: 120 },
} as const;

export default function Logo({ variant = "header" }: Props) {
  const { width, height } = sizes[variant];

  return (
    <Image
      src={LOGO_SRC}
      alt="Leora Naturale"
      width={width}
      height={height}
      className={`${styles.logo} ${styles[variant]}`}
      priority={variant === "header" || variant === "hero"}
      unoptimized
    />
  );
}