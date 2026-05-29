import { z } from "zod";

export const shippingAddressSchema = z.object({
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
});

export const paymentDetailsSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
  cardName: z.string().min(1, { message: "Name on card is required." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Use MM/YY format." }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits." }),
});

export const checkoutSchema = z.object({
  shippingAddress: shippingAddressSchema,
  shippingMethod: z.string().min(1, { message: "Shipping method is required." }),
  paymentDetails: paymentDetailsSchema,
});

export type ShippingAddressInput = z.infer<typeof shippingAddressSchema>;
export type PaymentDetailsInput = z.infer<typeof paymentDetailsSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
