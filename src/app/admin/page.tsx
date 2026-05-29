"use client";

import { useMemo, useState } from "react";
import { MOCK_ORDERS } from "@/data/orders";
import { PRODUCTS } from "@/data/products";
import StatCard from "@/components/admin/StatCard";
import OrdersTable from "@/components/admin/OrdersTable";
import InventoryPanel from "@/components/admin/InventoryPanel";
import { DollarSign, ShoppingBag, BarChart3, TrendingUp, Download, FileSpreadsheet, Plus, HelpCircle, X, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Order } from "@/types/order";

export default function AdminDashboardPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Bento stat metrics
  const stats = [
    {
      label: "Total Sales",
      value: "$124,500",
      delta: "+14.2%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: "Total Orders",
      value: "842",
      delta: "+5.4%",
      isPositive: true,
      icon: ShoppingBag,
    },
    {
      label: "Average Order Value",
      value: "$147.86",
      delta: "-1.2%",
      isPositive: false,
      icon: BarChart3,
    },
    {
      label: "Conversion Rate",
      value: "3.2%",
      delta: "+0.8%",
      isPositive: true,
      icon: TrendingUp,
      gradient: true,
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-[1440px] mx-auto space-y-10">
      {/* Header operations */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c7c6ca]/30 pb-6">
        <div>
          <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-1">
            Overview
          </span>
          <h1 className="font-sans text-3xl font-bold text-black tracking-tight leading-none">
            System Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => alert("Exported recent data logs successfully.")}
            className="flex items-center gap-1.5 bg-white border border-[#c7c6ca] text-black px-4 py-2 rounded font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#f4f3f8] transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Data</span>
          </button>
          <button
            onClick={() => alert("Generated workspace PDF reports successfully.")}
            className="flex items-center gap-1.5 bg-black text-white hover:opacity-90 px-4 py-2 rounded font-sans text-xs font-semibold uppercase tracking-wider transition-opacity shadow-xs"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Generate Report</span>
          </button>
        </div>
      </header>

      {/* Metrics grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            delta={stat.delta}
            isPositive={stat.isPositive}
            icon={stat.icon}
            gradient={stat.gradient}
          />
        ))}
      </section>

      {/* Grid layouts for Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent orders logs (Spans 2 cols) */}
        <section className="lg:col-span-2 bg-white border border-[#c7c6ca]/50 rounded-lg overflow-hidden flex flex-col shadow-xs">
          <div className="p-6 border-b border-[#c7c6ca]/30 flex justify-between items-center bg-white">
            <div>
              <h2 className="font-sans text-lg font-bold text-black leading-tight">
                Recent Orders
              </h2>
              <p className="font-sans text-xs text-[#76777b] mt-0.5 leading-none">
                Interactive real-time transaction history log
              </p>
            </div>
            <button
              onClick={() => alert("Redirecting to comprehensive Orders List panel...")}
              className="font-mono text-xs text-[#76777b] hover:text-black font-semibold transition-colors"
            >
              View All
            </button>
          </div>
          <OrdersTable orders={MOCK_ORDERS} onOrderClick={setSelectedOrder} />
        </section>

        {/* Inventory alerts */}
        <section className="bg-white border border-[#c7c6ca]/50 rounded-lg overflow-hidden flex flex-col shadow-xs">
          <div className="p-6 border-b border-[#c7c6ca]/30 flex justify-between items-center bg-white">
            <div>
              <h2 className="font-sans text-lg font-bold text-black leading-tight">
                Inventory
              </h2>
              <p className="font-sans text-xs text-[#76777b] mt-0.5 leading-none">
                Stock counts & warning system
              </p>
            </div>
            <button
              onClick={() => alert("Creating a new product catalog stub...")}
              className="w-8 h-8 rounded-full border border-[#c7c6ca] hover:border-black flex items-center justify-center transition-colors"
              aria-label="Add new product"
            >
              <Plus className="w-4 h-4 text-black" />
            </button>
          </div>
          <div className="p-4 flex-grow">
            <InventoryPanel products={PRODUCTS} />
          </div>
        </section>
      </div>

      {/* Order Detail Modal */}
      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        {selectedOrder && (
          <DialogContent className="bg-[#faf9fe] border border-[#c7c6ca]/30 p-6 rounded-lg sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
            <DialogHeader className="border-b border-[#c7c6ca]/20 pb-4 mb-4">
              <DialogTitle className="font-sans text-lg font-bold text-black flex justify-between items-center pr-6">
                <span>Order Details</span>
                <span className="font-mono text-xs font-semibold bg-[#faf9fe] text-black px-2 py-0.5 border border-[#c7c6ca] rounded-sm">
                  {selectedOrder.orderNumber}
                </span>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 text-sm font-sans text-black">
              {/* Order Metadata */}
              <div className="grid grid-cols-2 gap-4 bg-[#f4f3f8] p-4 rounded-lg border border-[#c7c6ca]/30">
                <div>
                  <span className="text-xs text-[#76777b] block">Date</span>
                  <span className="font-medium">{selectedOrder.date}</span>
                </div>
                <div>
                  <span className="text-xs text-[#76777b] block">Status</span>
                  <span className="font-bold text-[#4d6973] uppercase text-xs">
                    {selectedOrder.status}
                  </span>
                </div>
                <div className="border-t border-[#c7c6ca]/20 pt-2 col-span-2">
                  <span className="text-xs text-[#76777b] block">Payment Reference</span>
                  <span className="font-medium font-mono">{selectedOrder.paymentMethod}</span>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-2">
                <h4 className="font-bold border-b border-[#c7c6ca]/20 pb-1">Shipping Details</h4>
                <div className="text-xs space-y-1 text-[#46474a]">
                  <p className="font-bold text-black">
                    {selectedOrder.shippingAddress.firstName} {selectedOrder.shippingAddress.lastName}
                  </p>
                  <p>{selectedOrder.shippingAddress.address}</p>
                  {selectedOrder.shippingAddress.apartment && (
                    <p>{selectedOrder.shippingAddress.apartment}</p>
                  )}
                  <p>
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zipCode}
                  </p>
                  <p>Country: {selectedOrder.shippingAddress.country}</p>
                  <p className="mt-1 font-mono">Contact: {selectedOrder.shippingAddress.email} | {selectedOrder.shippingAddress.phone}</p>
                </div>
              </div>

              {/* Product items logs */}
              <div className="space-y-2.5">
                <h4 className="font-bold border-b border-[#c7c6ca]/20 pb-1">Items Summary</h4>
                <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center justify-between text-xs py-1 border-b border-[#c7c6ca]/10 last:border-0">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="font-mono bg-black text-white px-1.5 py-0.5 rounded-sm font-semibold">
                          x{item.quantity}
                        </span>
                        <div className="truncate font-medium text-black">
                          {item.product.name}
                          {item.selectedColor && (
                            <span className="text-[#76777b] text-[10px] block font-normal">Color: {item.selectedColor}</span>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-[#46474a] shrink-0 font-semibold">
                        ${item.product.price * item.quantity}.00
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals math calculation */}
              <div className="border-t border-[#c7c6ca]/30 pt-4 space-y-2 text-xs text-[#46474a]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-black font-semibold">${selectedOrder.subtotal}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping ({selectedOrder.shippingMethod})</span>
                  <span className="font-mono text-black font-semibold">${selectedOrder.shippingCost}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (7%)</span>
                  <span className="font-mono text-black font-semibold">${selectedOrder.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-[#c7c6ca]/20 pt-2 text-sm font-bold text-black font-sans">
                  <span>Total Cost</span>
                  <span className="font-mono">${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
