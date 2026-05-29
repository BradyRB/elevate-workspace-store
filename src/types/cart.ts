import { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, color?: string) => void;
  removeItem: (productId: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, color?: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}
