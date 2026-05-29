export interface ShippingAddress {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;
}

export interface PaymentDetails {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDelivery: string;
}

export interface CheckoutState {
  shippingAddress: ShippingAddress | null;
  shippingMethod: ShippingMethod | null;
  paymentDetails: PaymentDetails | null;
  setShippingAddress: (address: ShippingAddress) => void;
  setShippingMethod: (method: ShippingMethod) => void;
  setPaymentDetails: (payment: PaymentDetails) => void;
  resetCheckout: () => void;
}
