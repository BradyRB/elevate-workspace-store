"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "@/store/cartStore";
import PageWrapper from "@/components/shared/PageWrapper";
import { shippingAddressSchema, paymentDetailsSchema } from "@/lib/validations";
import { useState, useEffect } from "react";
import { CheckCircle2, Lock, CreditCard, ChevronRight, ShoppingBag, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";

// Combined schema for form submission validation
const checkoutFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  newsletter: z.boolean().optional(),
  country: z.string().min(1, { message: "Country is required." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  apartment: z.string().optional(),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State/Province is required." }),
  zipCode: z.string().min(1, { message: "Zip/Postal code is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
  cardName: z.string().min(1, { message: "Name on card is required." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Use MM/YY format." }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits." }),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { items, subtotal, clearCart } = useCartStore();
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentType, setPaymentType] = useState<"cc" | "apple">("cc");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdOrderNumber, setCreatedOrderNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      country: "United States",
      newsletter: false,
    },
  });

  const calculatedSubtotal = subtotal();

  if (items.length === 0 && !isSuccess) {
    return (
      <PageWrapper className="pt-24 text-center py-32 space-y-4">
        <ShoppingBag className="w-16 h-16 text-[#76777b] mx-auto stroke-1" />
        <h2 className="font-sans text-2xl font-bold text-black">Your Cart is Empty</h2>
        <p className="font-sans text-sm text-[#76777b]">
          Add workspace products to your cart before proceeding to checkout.
        </p>
        <button
          onClick={() => router.push("/shop")}
          className="bg-black text-white px-6 py-3 rounded font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
        >
          Browse Products
        </button>
      </PageWrapper>
    );
  }

  const shippingCost = shippingMethod === "standard" ? 0 : 25;
  const taxCost = Math.round(calculatedSubtotal * 0.07 * 100) / 100;
  const totalCost = calculatedSubtotal + shippingCost + taxCost;

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      const mockOrderNo = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      setCreatedOrderNumber(mockOrderNo);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <PageWrapper className="pt-24 pb-20 text-center max-w-xl mx-auto space-y-6">
        <CheckCircle2 className="w-20 h-20 text-[#47636c] mx-auto stroke-1 animate-bounce" />
        <div>
          <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-1">
            Checkout Completed
          </span>
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-black tracking-tight leading-none">
            Order Placed Successfully!
          </h1>
          <p className="font-sans text-sm text-[#46474a] mt-4 leading-relaxed">
            Thank you for shopping at Elevate Workspace. Your order has been securely logged into our system. An email confirmation has been sent.
          </p>
        </div>

        <div className="bg-[#f4f3f8] border border-[#c7c6ca]/40 rounded-lg p-5 text-left font-sans space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#76777b]">Order Number</span>
            <span className="font-mono font-bold text-black">{createdOrderNumber}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-[#c7c6ca]/20 pt-2">
            <span className="text-[#76777b]">Status</span>
            <span className="text-[#4d6973] font-semibold uppercase text-xs">Processing</span>
          </div>
          <div className="flex justify-between text-sm border-t border-[#c7c6ca]/20 pt-2">
            <span className="text-[#76777b]">Estimated Shipping</span>
            <span className="text-black font-semibold">
              {shippingMethod === "standard" ? "3-5 Business Days" : "1-2 Business Days"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => router.push("/shop")}
            className="w-full border border-[#c7c6ca] text-black py-3.5 rounded font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#faf9fe]"
          >
            Continue Shop
          </button>
          <button
            onClick={() => router.push("/admin")}
            className="w-full bg-black text-white py-3.5 rounded font-sans text-xs font-semibold uppercase tracking-wider hover:opacity-90 flex items-center justify-center gap-1.5"
          >
            View Admin Logs
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="pt-24 pb-20">
      <div className="mb-10">
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-black tracking-tight leading-none">
          Checkout
        </h1>
        <p className="font-sans text-sm text-[#76777b] mt-1.5 leading-snug">
          Secure, encrypted purchase of workspace tools.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Column: Form Steps */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-12">
          {/* Step 1: Contact */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-bold text-black border-b border-[#c7c6ca]/30 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">1</span>
              Contact Information
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@example.com"
                  {...register("email")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.email.message}</p>
                )}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="newsletter"
                  {...register("newsletter")}
                  className="rounded-sm border-[#c7c6ca] text-black focus:ring-black h-4 w-4 bg-transparent cursor-pointer"
                />
                <label htmlFor="newsletter" className="font-sans text-xs text-[#76777b] cursor-pointer">
                  Email me with news and special offers
                </label>
              </div>
            </div>
          </section>

          {/* Step 2: Shipping */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-bold text-black border-b border-[#c7c6ca]/30 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">2</span>
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="country">
                  COUNTRY / REGION
                </label>
                <select
                  id="country"
                  {...register("country")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none appearance-none pr-8 cursor-pointer"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>France</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.firstName && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.lastName && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.lastName.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="address">
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("address")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.address && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.address.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="apartment">
                  APARTMENT, SUITE, ETC. (OPTIONAL)
                </label>
                <input
                  type="text"
                  id="apartment"
                  {...register("apartment")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="city">
                  CITY
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.city && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="state">
                  STATE / PROVINCE
                </label>
                <input
                  type="text"
                  id="state"
                  {...register("state")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.state && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.state.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="zipCode">
                  ZIP / POSTAL CODE
                </label>
                <input
                  type="text"
                  id="zipCode"
                  {...register("zipCode")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.zipCode && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.zipCode.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] font-semibold text-[#76777b] uppercase tracking-wider mb-1" htmlFor="phone">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone")}
                  className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                />
                {errors.phone && (
                  <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Step 3: Shipping Method */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-bold text-black border-b border-[#c7c6ca]/30 pb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">3</span>
              Shipping Method
            </h2>
            <div className="space-y-3">
              <label
                onClick={() => setShippingMethod("standard")}
                className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-all ${
                  shippingMethod === "standard"
                    ? "border-black bg-[#f4f3f8] scale-101"
                    : "border-[#c7c6ca] hover:border-[#76777b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="text-black focus:ring-black"
                  />
                  <div className="font-sans">
                    <span className="block font-semibold text-black text-sm">Standard Delivery</span>
                    <span className="text-[#76777b] text-xs">3-5 Business Days</span>
                  </div>
                </div>
                <span className="font-sans text-sm font-bold text-black font-mono">Free</span>
              </label>

              <label
                onClick={() => setShippingMethod("express")}
                className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-all ${
                  shippingMethod === "express"
                    ? "border-black bg-[#f4f3f8] scale-101"
                    : "border-[#c7c6ca] hover:border-[#76777b]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="text-black focus:ring-black"
                  />
                  <div className="font-sans">
                    <span className="block font-semibold text-black text-sm">Express Courier</span>
                    <span className="text-[#76777b] text-xs">1-2 Business Days</span>
                  </div>
                </div>
                <span className="font-sans text-sm font-bold text-black font-mono">$25.00</span>
              </label>
            </div>
          </section>

          {/* Step 4: Payment */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#c7c6ca]/30 pb-2">
              <h2 className="font-sans text-lg font-bold text-black flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-mono">4</span>
                Payment Method
              </h2>
              <Lock className="w-4 h-4 text-[#76777b]" />
            </div>

            <div className="border border-[#c7c6ca] rounded overflow-hidden">
              {/* Credit Card radio select */}
              <div className="p-4 bg-[#f4f3f8] border-b border-[#c7c6ca] flex items-center gap-3">
                <input
                  type="radio"
                  id="pay-cc"
                  checked={paymentType === "cc"}
                  onChange={() => setPaymentType("cc")}
                  className="text-black focus:ring-black"
                />
                <label className="font-sans text-sm font-semibold flex-grow cursor-pointer text-black" htmlFor="pay-cc">
                  Credit Card
                </label>
                <CreditCard className="w-4.5 h-4.5 text-[#76777b]" />
              </div>

              {paymentType === "cc" && (
                <div className="p-4 space-y-4 bg-white">
                  <div>
                    <input
                      type="text"
                      placeholder="Card number (16 digits)"
                      {...register("cardNumber")}
                      className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                    />
                    {errors.cardNumber && (
                      <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Name on card"
                      {...register("cardName")}
                      className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                    />
                    {errors.cardName && (
                      <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.cardName.message}</p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <input
                        type="text"
                        placeholder="Expiration (MM / YY)"
                        {...register("expiryDate")}
                        className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                      />
                      {errors.expiryDate && (
                        <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.expiryDate.message}</p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        placeholder="Security code (CVV)"
                        {...register("cvv")}
                        className="w-full bg-transparent border border-[#c7c6ca] rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans text-sm text-black outline-none"
                      />
                      {errors.cvv && (
                        <p className="text-xs text-[#ba1a1a] mt-1 font-sans">{errors.cvv.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Apple Pay radio select */}
              <div className="p-4 flex items-center gap-3 hover:bg-[#f4f3f8]/50 transition-colors">
                <input
                  type="radio"
                  id="pay-apple"
                  checked={paymentType === "apple"}
                  onChange={() => setPaymentType("apple")}
                  className="text-black focus:ring-black"
                />
                <label className="font-sans text-sm font-semibold flex-grow cursor-pointer text-black" htmlFor="pay-apple">
                  Apple Pay
                </label>
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5 rounded-sm"> Pay</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary sticky */}
        <div className="w-full lg:w-2/5 xl:w-1/3 shrink-0 lg:sticky lg:top-28">
          <div className="bg-white border border-[#c7c6ca]/50 rounded-lg p-6 space-y-6 shadow-xs">
            <h3 className="font-sans text-lg font-bold text-black border-b border-[#c7c6ca]/30 pb-3">
              Order Summary
            </h3>

            {/* Product items logs */}
            <div className="space-y-4 max-h-[240px] overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-[#f4f3f8] rounded border border-[#c7c6ca]/30 flex-shrink-0 overflow-hidden relative flex items-center justify-center">
                    {item.product.images && item.product.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="w-5 h-5 text-[#76777b]" />
                    )}
                    <span className="absolute top-0 right-0 bg-black text-white text-[9px] w-4.5 h-4.5 flex items-center justify-center rounded-bl font-mono">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0 font-sans text-xs">
                    <h4 className="font-semibold text-black truncate leading-tight">
                      {item.product.name}
                    </h4>
                    {item.selectedColor && (
                      <p className="text-[#76777b] mt-0.5">Color: {item.selectedColor}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs font-semibold text-black text-right shrink-0">
                    ${item.product.price * item.quantity}.00
                  </span>
                </div>
              ))}
            </div>

            {/* Summary math calculation */}
            <div className="space-y-3 pt-4 border-t border-[#c7c6ca]/30 font-sans text-sm">
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
                <span>Taxes (7%)</span>
                <span className="text-black font-semibold font-mono">
                  ${taxCost.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#c7c6ca]/30 font-sans">
              <span className="text-base font-bold text-black">Total</span>
              <span className="text-lg font-bold text-black font-mono">
                USD ${totalCost.toFixed(2)}
              </span>
            </div>

            {/* Pay CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white hover:opacity-90 py-4 mt-4 font-sans text-xs tracking-wider uppercase font-semibold rounded text-center transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed h-12 shrink-0"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Verifying Transaction..." : "Complete Order"}</span>
            </button>
            <p className="font-sans text-[10px] text-[#76777b] text-center italic mt-2">
              All transactions are secure, encrypted, and compliant.
            </p>
          </div>
        </div>
      </form>
    </PageWrapper>
  );
}
