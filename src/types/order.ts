import { CartItem } from "./cart";
import { ShippingAddress } from "./checkout";

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  shippingMethod: string;
  shippingCost: number;
  tax: number;
  subtotal: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
}
