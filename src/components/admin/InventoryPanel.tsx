"use client";

import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface InventoryPanelProps {
  products: Product[];
  onAddClick?: () => void;
}

export default function InventoryPanel({ products, onAddClick }: InventoryPanelProps) {
  // Let's list some low stock products first
  const sortedProducts = [...products].sort((a, b) => {
    // Put out-of-stock and low stock first
    if (!a.inStock && b.inStock) return -1;
    if (a.inStock && !b.inStock) return 1;
    if (a.reviewsCount < b.reviewsCount) return -1;
    return 0;
  });

  return (
    <div className="flex flex-col h-full bg-white">
      {/* List container */}
      <div className="overflow-y-auto divide-y divide-[#c7c6ca]/20 max-h-[390px] pr-1">
        {sortedProducts.map((product) => {
          // Let's create realistic stock indicators
          const mockStock = product.inStock
            ? product.price > 500
              ? Math.floor(product.rating * 3) // Higher price -> lower stock counts
              : Math.floor(product.rating * 12)
            : 0;

          const isLowStock = mockStock > 0 && mockStock < 10;

          return (
            <div
              key={product.id}
              className="flex items-center gap-4 py-3.5 hover:bg-[#f4f3f8]/30 transition-colors px-2 rounded-sm"
            >
              {/* Product Thumbnail */}
              <div className="w-12 h-12 rounded bg-[#f4f3f8] flex-shrink-0 overflow-hidden border border-[#c7c6ca]/30 flex items-center justify-center">
                {product.images && product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg text-[#c7c6ca] material-symbols-outlined select-none">
                    box
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-grow min-w-0">
                <h4 className="font-sans text-sm font-semibold text-black truncate leading-tight">
                  {product.name}
                </h4>
                <p
                  className={cn(
                    "font-sans text-xs mt-0.5 font-medium leading-none",
                    mockStock === 0
                      ? "text-[#ba1a1a]"
                      : isLowStock
                      ? "text-amber-600"
                      : "text-[#76777b]"
                  )}
                >
                  {mockStock === 0
                    ? "Out of stock"
                    : isLowStock
                    ? `${mockStock} low stock`
                    : `${mockStock} in stock`}
                </p>
              </div>

              {/* Price */}
              <div className="font-mono text-sm font-semibold text-black text-right shrink-0">
                ${product.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
