"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import PageWrapper from "@/components/shared/PageWrapper";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { items, updateQuantity, removeItem, clearCart, subtotal, totalItems } = useCartStore();

  const handleQtyChange = (productId: string, newQty: number, color?: string) => {
    if (newQty < 1) return;
    updateQuantity(productId, newQty, color);
  };

  if (!mounted) {
    return (
      <PageWrapper className="pt-24 pb-20 text-center py-32">
        <div className="font-sans text-sm text-[#76777b] font-medium">Loading workstation cart...</div>
      </PageWrapper>
    );
  }

  const calculatedSubtotal = subtotal();
  const shippingCost = calculatedSubtotal > 100 ? 0 : 15;
  const taxCost = Math.round(calculatedSubtotal * 0.07 * 100) / 100;
  const totalCost = calculatedSubtotal + shippingCost + taxCost;

  return (
    <PageWrapper className="pt-24 pb-20">
      <div className="mb-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#76777b] hover:text-black transition-colors mb-3 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Continue Shopping
        </Link>
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-black tracking-tight leading-none">
          Your Cart
        </h1>
        <p className="font-sans text-sm text-[#76777b] mt-1.5 font-mono">
          Items in your focus cycle: {totalItems()}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-24 bg-white border border-[#c7c6ca]/20 rounded-lg p-8 max-w-2xl mx-auto space-y-6">
          <ShoppingBag className="w-16 h-16 text-[#76777b] mx-auto stroke-1" />
          <div>
            <h2 className="font-sans text-xl font-bold text-black">Your cart is empty</h2>
            <p className="font-sans text-sm text-[#76777b] mt-1 max-w-sm mx-auto">
              You haven&apos;t added any precision-engineered workspace tools to your workstation yet.
            </p>
          </div>
          <button
            onClick={() => router.push("/shop")}
            className="bg-black text-white px-8 py-3.5 rounded font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Explore the Catalog
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Items log details */}
          <div className="flex-grow w-full lg:w-3/5 xl:w-2/3 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-[#c7c6ca]/30">
              <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider">
                Cart Line Items
              </span>
              <button
                onClick={clearCart}
                className="font-sans text-xs font-medium text-[#ba1a1a] hover:underline"
              >
                Clear All Items
              </button>
            </div>

            <div className="divide-y divide-[#c7c6ca]/20">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex flex-col sm:flex-row gap-4 py-5 first:pt-2"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-[#f4f3f8] rounded-md overflow-hidden flex items-center justify-center border border-[#c7c6ca]/20 shrink-0 mx-auto sm:mx-0">
                    {item.product.images && item.product.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="w-8 h-8 text-[#76777b] stroke-1" />
                    )}
                  </div>

                  {/* Info details */}
                  <div className="flex-grow flex flex-col justify-between text-center sm:text-left min-w-0">
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-black leading-tight truncate">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-[#76777b] mt-1 font-mono uppercase">
                        Category: {item.product.category}
                      </p>
                      {item.selectedColor && (
                        <p className="font-sans text-xs text-black font-medium mt-1">
                          Color: {item.selectedColor}
                        </p>
                      )}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                      <div className="flex items-center border border-[#c7c6ca] rounded bg-[#faf9fe]">
                        <button
                          onClick={() =>
                            handleQtyChange(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedColor
                            )
                          }
                          className="px-2.5 py-1 text-[#46474a] hover:text-black transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3.5 text-sm font-mono font-medium text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQtyChange(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedColor
                            )
                          }
                          className="px-2.5 py-1 text-[#46474a] hover:text-black transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor)}
                        className="text-[#76777b] hover:text-[#ba1a1a] transition-colors flex items-center gap-1 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Pricing row */}
                  <div className="text-center sm:text-right shrink-0 flex flex-col justify-center sm:justify-start pt-2 sm:pt-0">
                    <span className="font-mono text-base font-bold text-black block">
                      ${item.product.price * item.quantity}.00
                    </span>
                    {item.quantity > 1 && (
                      <span className="font-mono text-xs text-[#76777b] mt-0.5 block">
                        ${item.product.price}.00 each
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing summary sidebar (Right) */}
          <div className="w-full lg:w-2/5 xl:w-1/3 shrink-0 lg:sticky lg:top-28">
            <div className="bg-white border border-[#c7c6ca]/50 rounded-lg p-6 space-y-6 shadow-xs">
              <h3 className="font-sans text-lg font-bold text-black border-b border-[#c7c6ca]/30 pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 font-sans text-sm">
                <div className="flex justify-between text-[#46474a]">
                  <span>Subtotal</span>
                  <span className="text-black font-semibold font-mono">
                    ${calculatedSubtotal}.00
                  </span>
                </div>
                <div className="flex justify-between text-[#46474a]">
                  <span>Shipping</span>
                  <span className="text-black font-semibold">
                    {shippingCost === 0 ? "Free" : `$${shippingCost}.00`}
                  </span>
                </div>
                <div className="flex justify-between text-[#46474a]">
                  <span>Estimated Taxes (7%)</span>
                  <span className="text-black font-semibold font-mono">
                    ${taxCost.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-[#c7c6ca]/30 font-sans">
                <span className="text-base font-bold text-black">Total</span>
                <div className="text-right">
                  <span className="text-xl font-bold text-black font-mono block">
                    USD ${totalCost.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-[#76777b] mt-0.5 block">
                    Including VAT
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-black text-white hover:opacity-90 py-4 mt-6 font-sans text-xs tracking-wider uppercase font-semibold rounded text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="font-sans text-[10px] text-[#76777b] text-center italic mt-2">
                Secure checkout encrypted by active security certification tokens.
              </p>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
