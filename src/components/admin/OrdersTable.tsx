"use client";

import { Order } from "@/types/order";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OrdersTableProps {
  orders: Order[];
  onOrderClick?: (order: Order) => void;
}

export default function OrdersTable({ orders, onOrderClick }: OrdersTableProps) {
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-[#faf9fe] text-black border border-[#c7c6ca] font-sans text-[11px] font-semibold uppercase px-2 py-0.5">Pending</Badge>;
      case "processing":
        return <Badge className="bg-[#c9e7f3] text-[#4d6973] border border-[#c9e7f3] font-sans text-[11px] font-semibold uppercase px-2 py-0.5">Processing</Badge>;
      case "shipped":
        return <Badge className="bg-[#eeedf3] text-black border border-[#c7c6ca] font-sans text-[11px] font-semibold uppercase px-2 py-0.5">Shipped</Badge>;
      case "delivered":
        return <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-sans text-[11px] font-semibold uppercase px-2 py-0.5">Delivered</Badge>;
      case "cancelled":
        return <Badge className="bg-[#ffdad6] text-[#ba1a1a] border border-[#ffdad6] font-sans text-[11px] font-semibold uppercase px-2 py-0.5">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-[#f4f3f8] border-b border-[#c7c6ca]/30 font-sans text-[11px] font-semibold text-[#76777b] uppercase tracking-wider">
            <th className="py-3.5 px-6 font-medium">Order ID</th>
            <th className="py-3.5 px-6 font-medium">Customer</th>
            <th className="py-3.5 px-6 font-medium">Date</th>
            <th className="py-3.5 px-6 font-medium">Status</th>
            <th className="py-3.5 px-6 font-medium text-right">Total</th>
          </tr>
        </thead>
        <tbody className="font-sans text-sm text-black divide-y divide-[#c7c6ca]/20">
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => onOrderClick?.(order)}
              className={cn(
                "hover:bg-[#f4f3f8]/50 transition-colors",
                onOrderClick && "cursor-pointer"
              )}
            >
              <td className="py-4 px-6 font-mono text-xs font-semibold text-black">
                {order.orderNumber}
              </td>
              <td className="py-4 px-6 font-medium">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </td>
              <td className="py-4 px-6 text-[#76777b]">{order.date}</td>
              <td className="py-4 px-6">{getStatusBadge(order.status)}</td>
              <td className="py-4 px-6 text-right font-semibold font-mono">
                ${order.total.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
