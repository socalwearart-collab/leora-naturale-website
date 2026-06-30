import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import CategoryCards from "@/components/CategoryCards";
import ProcessSection from "@/components/ProcessSection";
import IngredientsSection from "@/components/IngredientsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import NewsletterSection from "@/components/NewsletterSection";
import { getFeaturedProducts } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />
      <AboutSection />
      <ProductGrid
        products={featuredProducts}
        subtitle="Discover our chemical-free range of dehydrated snacks, packed with nutrients and crafted for your modern lifestyle."
      />
      <CategoryCards />
      <ProcessSection />
      <IngredientsSection />
      <ImpactSection />
      <TestimonialsSection />
      <BlogSection />
      <CertificationsSection />
      <FAQSection />
      <ContactForm />
      <NewsletterSection />
    </>
  );
}