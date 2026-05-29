"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const { setCartOpen } = useUIStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, "Default");
    setCartOpen(true);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <article className="border border-[#c7c6ca]/50 rounded-lg overflow-hidden bg-[#ffffff] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(26,27,31,0.12)] cursor-pointer flex flex-col h-full relative">
        {/* Image Frame */}
        <div className="aspect-square bg-[#f4f3f8] relative overflow-hidden shrink-0 flex items-center justify-center">
          {product.images && product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-[48px] text-[#c7c6ca] mb-2 material-symbols-outlined select-none">
                {product.category === "seating"
                  ? "chair"
                  : product.category === "desks"
                  ? "table"
                  : product.category === "lighting"
                  ? "lightbulb"
                  : "devices"}
              </span>
            </div>
          )}

          {/* Out of Stock Banner */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center">
              <span className="bg-black text-white font-sans text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-sm">
                Out of Stock
              </span>
            </div>
          )}

          {/* Quick Action Overlay */}
          {product.inStock && (
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button
                onClick={handleAddToCart}
                className="bg-black text-white hover:bg-neutral-800 p-3 rounded-full shadow-lg transition-transform duration-300 translate-y-4 group-hover:translate-y-0"
                aria-label="Add to cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Content details */}
        <div className="p-4 flex flex-col justify-between flex-grow space-y-1">
          <div>
            <h3 className="font-sans text-lg font-medium text-black tracking-tight group-hover:text-black transition-colors leading-tight">
              {product.name}
            </h3>
            <p className="font-sans text-sm text-[#76777b] mt-0.5 leading-snug truncate">
              {product.description}
            </p>
          </div>
          <div className="pt-2 flex justify-between items-center mt-auto">
            <span className="font-mono text-sm font-semibold text-black">
              ${product.price}
            </span>
            <span className="font-sans text-xs text-[#76777b] capitalize font-medium px-2 py-0.5 bg-[#f4f3f8] border border-[#c7c6ca]/20 rounded-sm">
              {product.category}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
