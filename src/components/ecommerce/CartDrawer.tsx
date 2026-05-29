"use client";

import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const { isCartOpen, setCartOpen } = useUIStore();
  const { items, updateQuantity, removeItem, subtotal } = useCartStore();

  const handleQtyChange = (productId: string, newQty: number, color?: string) => {
    if (newQty < 1) return;
    updateQuantity(productId, newQty, color);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="bg-[#faf9fe] w-full sm:max-w-[480px] p-6 flex flex-col h-full border-l border-[#c7c6ca]/30">
        <SheetHeader className="pb-4 border-b border-[#c7c6ca]/20">
          <SheetTitle className="text-left font-sans text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-16 h-16 text-[#76777b] stroke-1" />
              <div>
                <p className="font-sans text-lg font-medium text-black">Your cart is empty</p>
                <p className="font-sans text-sm text-[#76777b] mt-1">
                  Add tools to your workspace to get started.
                </p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="bg-black text-white px-6 py-3 rounded font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 p-3 bg-white border border-[#c7c6ca]/20 rounded-sm hover:shadow-sm transition-all"
                >
                  {/* Image */}
                  <div className="w-20 h-20 bg-[#f4f3f8] rounded-sm overflow-hidden flex items-center justify-center border border-[#c7c6ca]/20 shrink-0">
                    {item.product.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="w-6 h-6 text-[#76777b] stroke-1" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-sans text-[15px] font-medium text-black truncate">
                        {item.product.name}
                      </h4>
                      {item.selectedColor && (
                        <p className="font-sans text-xs text-[#76777b] mt-0.5">
                          Color: {item.selectedColor}
                        </p>
                      )}
                    </div>

                    {/* Stepper & Action */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#c7c6ca] rounded bg-[#faf9fe]">
                        <button
                          onClick={() =>
                            handleQtyChange(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedColor
                            )
                          }
                          className="px-2 py-1 text-[#46474a] hover:text-black transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-mono font-medium text-black">
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
                          className="px-2 py-1 text-[#46474a] hover:text-black transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor)}
                        className="text-[#76777b] hover:text-[#ba1a1a] transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex flex-col justify-between shrink-0">
                    <span className="font-mono text-sm text-black font-semibold">
                      ${item.product.price * item.quantity}
                    </span>
                    {item.quantity > 1 && (
                      <span className="font-mono text-[11px] text-[#76777b]">
                        ${item.product.price} each
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#c7c6ca]/20 pt-4 space-y-4 shrink-0">
            <div className="flex justify-between items-center font-sans">
              <span className="text-[#46474a] text-sm">Subtotal</span>
              <span className="text-black font-bold text-lg font-mono">
                ${subtotal()}
              </span>
            </div>
            <p className="text-xs text-[#76777b] font-mono text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/cart"
                onClick={() => setCartOpen(false)}
                className="w-full border border-[#c7c6ca] text-black py-3 rounded text-center font-sans text-xs tracking-wider uppercase font-semibold hover:bg-[#f4f3f8] transition-colors"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="w-full bg-black text-white py-3 rounded text-center font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
              >
                Checkout
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
