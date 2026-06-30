import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, formatDate } from "@/lib/data";
import styles from "./page.module.css";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Leora Naturale`, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
        </div>
      </section>

      <article className={`section ${styles.article}`}>
        <div className="container">
          <header className={styles.header}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <h1>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </header>

          <div className={styles.imageWrap}>
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={500}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}