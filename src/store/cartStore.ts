import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeItem: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1, selectedColor = "Default") => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) =>
              item.product.id === product.id &&
              item.selectedColor === selectedColor
          );

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            return { items: updatedItems };
          }

          return {
            items: [...state.items, { product, quantity, selectedColor }],
          };
        });
      },
      removeItem: (productId, selectedColor = "Default") => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                item.selectedColor === selectedColor
              )
          ),
        }));
      },
      updateQuantity: (productId, quantity, selectedColor = "Default") => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId && item.selectedColor === selectedColor
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => {
        const { items } = get();
        return items.reduce((acc, item) => acc + item.quantity, 0);
      },
      subtotal: () => {
        const { items } = get();
        return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: "elevate-workspace-cart",
    }
  )
);
