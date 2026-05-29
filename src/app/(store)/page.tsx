import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ecommerce/ProductCard";
import PageWrapper from "@/components/shared/PageWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  // Let's get the first 4 products as new arrivals
  const newArrivals = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[800px] flex items-center justify-center bg-[#eeedf3] px-4 md:px-16 overflow-hidden">
        {/* Background Image with Mix Blend Multiply */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply transition-opacity duration-1000"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGC8LSdGjmmAmCZqpZEEW8tfMrJnIor766Rn1f1-8Z2pPaOS-xlOd3CZc0DaYxtzIKsiDs28fBqcVWBh0eH7EaLJQjWQAWP8hI9RSXtshhEMbBisxbOU87hpzcQXqAhS-RAQ22vAaXR_DTinW41HA0hSxZKTDnunSowRi4joRZO4RuaJ74y9YGDJteN7SFJWjgBZinU-cPBKPcOmZTZbV4bwQhzqH9Y6hsF0xafmcF0TsaJzBXP9ueKd-A7yZHjzxfgVEMGuPnmTTu')",
          }}
        />

        <div className="relative z-10 text-center max-w-3xl space-y-6">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">
            Tools for the Focused Mind
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#46474a] max-w-2xl mx-auto leading-relaxed">
            Curated workspace essentials engineered for precision, designed for clarity, and built to elevate your daily practice.
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-black text-white hover:opacity-90 transition-opacity px-8 py-4 rounded font-sans text-xs tracking-wider uppercase font-semibold"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section (New Arrivals) */}
      <PageWrapper className="py-20 md:py-24">
        <div className="flex justify-between items-end mb-10 md:mb-12 border-b border-[#c7c6ca]/30 pb-4">
          <div>
            <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-1">
              Curated Collection
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-black tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-mono text-sm text-[#46474a] hover:text-black underline underline-offset-4 transition-colors font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </PageWrapper>

      {/* Bento-like visual section */}
      <section className="bg-[#f4f3f8] py-20 px-4 md:px-16 border-t border-b border-[#c7c6ca]/20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block">
              Precision & Industrial Design
            </span>
            <h2 className="font-sans text-4xl font-bold text-black tracking-tight leading-tight">
              Crafting Industrial Sophistication
            </h2>
            <p className="font-sans text-base text-[#46474a] leading-relaxed">
              We design and curate desk essentials that promote flow, focus, and clean organization. From anodized billet aluminum articulating structures to natural merino wool felts, every material is thoughtfully sourced and meticulously integrated.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <h4 className="font-sans text-xl font-bold text-black">100%</h4>
                <p className="font-sans text-xs text-[#76777b] mt-1">Sustainably Sourced Wool</p>
              </div>
              <div className="border-l border-[#c7c6ca]/40 pl-8">
                <h4 className="font-sans text-xl font-bold text-black">6063</h4>
                <p className="font-sans text-xs text-[#76777b] mt-1">Grade Anodized Aluminum</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 aspect-[16/10] bg-[#eeedf3] rounded-lg overflow-hidden border border-[#c7c6ca]/30 relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGC8LSdGjmmAmCZqpZEEW8tfMrJnIor766Rn1f1-8Z2pPaOS-xlOd3CZc0DaYxtzIKsiDs28fBqcVWBh0eH7EaLJQjWQAWP8hI9RSXtshhEMbBisxbOU87hpzcQXqAhS-RAQ22vAaXR_DTinW41HA0hSxZKTDnunSowRi4joRZO4RuaJ74y9YGDJteN7SFJWjgBZinU-cPBKPcOmZTZbV4bwQhzqH9Y6hsF0xafmcF0TsaJzBXP9ueKd-A7yZHjzxfgVEMGuPnmTTu"
              alt="Meticulously organized workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
