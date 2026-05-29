"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import PageWrapper from "@/components/shared/PageWrapper";
import ProductCard from "@/components/ecommerce/ProductCard";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { ShoppingBag, Star, ShieldAlert, BadgeCheck, Check, Minus, Plus, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { addItem } = useCartStore();
  const { setCartOpen } = useUIStore();

  // Find product by slug
  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug);
  }, [slug]);

  // Gallery active index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Selected details state
  const [selectedColor, setSelectedColor] = useState(
    product?.id === "linear-75" ? "Obsidian" : "Default"
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <PageWrapper className="pt-24 text-center py-32 space-y-4">
        <ShieldAlert className="w-16 h-16 text-[#ba1a1a] mx-auto stroke-1" />
        <h2 className="font-sans text-2xl font-bold text-black">Product Not Found</h2>
        <p className="font-sans text-sm text-[#76777b]">
          The product you are looking for does not exist or has been removed.
        </p>
        <button
          onClick={() => router.push("/shop")}
          className="bg-black text-white px-6 py-3 rounded font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
        >
          Return to Shop
        </button>
      </PageWrapper>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Fallback to general products if empty
  const finalRelated = relatedProducts.length > 0 
    ? relatedProducts 
    : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    setCartOpen(true);
  };

  const handleQtyChange = (val: number) => {
    setQuantity((prev) => Math.max(1, prev + val));
  };

  return (
    <PageWrapper className="pt-24 pb-20">
      {/* Detail core layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
        {/* Gallery column (Left) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          {/* Main frame */}
          <div className="flex-1 bg-[#f4f3f8] rounded-lg overflow-hidden border border-[#c7c6ca]/30 aspect-square md:aspect-[4/3] relative group flex items-center justify-center">
            {product.images && product.images[activeImageIndex] ? (
              <img
                src={product.images[activeImageIndex]}
                alt={`${product.name} active shot`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            ) : (
              <span className="text-[96px] text-[#c7c6ca] material-symbols-outlined select-none">
                {product.category === "seating"
                  ? "chair"
                  : product.category === "desks"
                  ? "table"
                  : product.category === "lighting"
                  ? "lightbulb"
                  : "devices"}
              </span>
            )}
          </div>

          {/* Thumbnails grid list */}
          {product.images && product.images.length > 1 && (
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-24 shrink-0 justify-start">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded overflow-hidden relative border transition-all ${
                    activeImageIndex === idx
                      ? "border-black border-2 scale-102"
                      : "border-[#c7c6ca]/50 hover:border-[#76777b] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column (Right) */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 space-y-6">
            <div>
              <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-1">
                {product.category}
              </span>
              <h1 className="font-sans text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="font-sans text-base text-[#46474a] mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="font-mono text-2xl font-bold text-black border-t border-b border-[#c7c6ca]/20 py-3">
              ${product.price}.00
            </div>

            {/* Colors - Simulating option picker for Linear-75 */}
            {product.id === "linear-75" && (
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="font-sans text-xs text-[#76777b] uppercase tracking-wider">
                    Select Color
                  </span>
                  <span className="font-sans text-black">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {[
                    { name: "Obsidian", color: "#1A1A1A" },
                    { name: "Silver", color: "#E5E5E7" },
                    { name: "Mist", color: "#9CA3AF" },
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedColor(item.name)}
                      className={`w-10 h-10 rounded-full border transition-all relative ${
                        selectedColor === item.name
                          ? "border-black scale-110 ring-2 ring-black/10 ring-offset-2"
                          : "border-[#c7c6ca]/50 hover:scale-105"
                      }`}
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                      aria-label={`Select ${item.name} color`}
                    >
                      {selectedColor === item.name && (
                        <Check className={`w-4 h-4 absolute inset-0 m-auto ${item.name === "Silver" ? "text-black" : "text-white"}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stepper + CTA */}
            <div className="space-y-4 pt-4">
              {product.inStock ? (
                <div className="flex gap-4">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#c7c6ca] rounded bg-[#faf9fe] shrink-0 h-14">
                    <button
                      onClick={() => handleQtyChange(-1)}
                      className="px-3 text-[#46474a] hover:text-black transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-mono font-medium text-black text-sm select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(1)}
                      className="px-3 text-[#46474a] hover:text-black transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-grow bg-black text-white hover:opacity-90 font-sans text-xs tracking-wider uppercase font-semibold h-14 rounded transition-all flex items-center justify-center gap-2"
                  >
                    <span>Add to Cart</span>
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  disabled
                  className="w-full bg-[#c7c6ca]/50 text-[#76777b] font-sans text-xs tracking-wider uppercase font-semibold h-14 rounded cursor-not-allowed flex items-center justify-center"
                >
                  Out of Stock
                </button>
              )}
              <p className="font-sans text-[11px] text-[#76777b] font-mono text-center">
                Free shipping on workspace orders over $100
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Bento Grid */}
      <div className="border-t border-[#c7c6ca]/30 pt-16 mb-20">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-black tracking-tight mb-8">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.specs.map((spec, index) => {
            const Icon = 
              index === 0 ? Settings : 
              index === 1 ? Check : 
              index === 2 ? BadgeCheck : Check;

            return (
              <div
                key={spec.label}
                className="bg-[#f4f3f8]/50 p-6 border border-[#c7c6ca]/30 rounded-lg hover:shadow-xs transition-shadow"
              >
                <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-2">
                  {spec.label}
                </span>
                <p className="font-sans text-sm text-black leading-relaxed">
                  {spec.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews logs list */}
      <div className="border-t border-[#c7c6ca]/30 pt-16 mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-black tracking-tight">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2 text-black shrink-0">
            <span className="font-sans text-xl font-bold leading-none">{product.rating}</span>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-current"
                      : "stroke-current text-transparent fill-[#c7c6ca]"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-[#76777b] ml-1">
              ({product.reviewsCount} reviews)
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((rev) => (
              <div
                key={rev.id}
                className="border-b border-[#c7c6ca]/20 pb-6 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-sans text-sm font-semibold text-black">
                      {rev.author}
                    </div>
                    <div className="font-sans text-xs text-[#76777b] flex items-center gap-1 mt-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Purchase
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#76777b]">{rev.date}</div>
                </div>
                <p className="font-sans text-sm text-[#46474a] leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-[#f4f3f8]/30 rounded-lg border border-[#c7c6ca]/20">
              <p className="font-sans text-sm text-[#46474a]">
                There are no reviews for this product yet.
              </p>
              <button className="mt-4 border border-[#c7c6ca] hover:border-black text-black px-4 py-1.5 rounded font-sans text-xs uppercase tracking-wider transition-colors bg-white">
                Write a Review
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Related Products list */}
      <div className="border-t border-[#c7c6ca]/30 pt-16">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-black tracking-tight mb-8">
          Complete Your Setup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalRelated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
