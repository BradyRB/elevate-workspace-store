import { Order } from "@/types/order";
import { PRODUCTS } from "./products";

export const MOCK_ORDERS: Order[] = [
  {
    id: "ord-9021",
    orderNumber: "ORD-9021",
    date: "Oct 24, 2025",
    items: [
      {
        product: PRODUCTS[0], // Linear-75 Keyboard
        quantity: 2,
        selectedColor: "Obsidian"
      },
      {
        product: PRODUCTS[8], // Felt Desk Mat
        quantity: 1,
        selectedColor: "Grey"
      }
    ],
    shippingAddress: {
      email: "eleanor@goodplace.com",
      firstName: "Eleanor",
      lastName: "Shellstrop",
      address: "1200 Fake Place St",
      apartment: "Apt 4B",
      city: "Phoenix",
      country: "US",
      state: "AZ",
      zipCode: "85001",
      phone: "555-0199"
    },
    shippingMethod: "Standard Shipping",
    shippingCost: 0,
    tax: 27.50,
    subtotal: 423.00,
    total: 450.50,
    status: "processing",
    paymentMethod: "Visa ending in 4242"
  },
  {
    id: "ord-9020",
    orderNumber: "ORD-9020",
    date: "Oct 23, 2025",
    items: [
      {
        product: PRODUCTS[4], // Contour V2 Mouse
        quantity: 1,
        selectedColor: "Black"
      },
      {
        product: PRODUCTS[10], // Aviator Cable
        quantity: 1,
        selectedColor: "Obsidian"
      }
    ],
    shippingAddress: {
      email: "chidi.anagonye@sorbonne.edu",
      firstName: "Chidi",
      lastName: "Anagonye",
      address: "45 Boulevard Saint-Germain",
      city: "Paris",
      country: "FR",
      state: "IDF",
      zipCode: "75005",
      phone: "555-0144"
    },
    shippingMethod: "Express Shipping",
    shippingCost: 15.00,
    tax: 10.50,
    subtotal: 130.00,
    total: 155.50,
    status: "shipped",
    paymentMethod: "Mastercard ending in 9876"
  },
  {
    id: "ord-9019",
    orderNumber: "ORD-9019",
    date: "Oct 23, 2025",
    items: [
      {
        product: PRODUCTS[5], // The Architect Desk
        quantity: 1,
        selectedColor: "Walnut / Carbon"
      },
      {
        product: PRODUCTS[6], // Aero Task Chair
        quantity: 1,
        selectedColor: "Lunar Grey"
      }
    ],
    shippingAddress: {
      email: "tahani@al-jamil.co.uk",
      firstName: "Tahani",
      lastName: "Al-Jamil",
      address: "14 Kensington Palace Gardens",
      city: "London",
      country: "GB",
      state: "ENG",
      zipCode: "W8 4QQ",
      phone: "555-0100"
    },
    shippingMethod: "White Glove Delivery",
    shippingCost: 150.00,
    tax: 180.00,
    subtotal: 2145.00,
    total: 2475.00,
    status: "delivered",
    paymentMethod: "Amex ending in 0001"
  },
  {
    id: "ord-9018",
    orderNumber: "ORD-9018",
    date: "Oct 22, 2025",
    items: [
      {
        product: PRODUCTS[9], // Ergo Mouse Pro
        quantity: 1,
        selectedColor: "Black"
      }
    ],
    shippingAddress: {
      email: "jason.mendoza@jacksonville.com",
      firstName: "Jason",
      lastName: "Mendoza",
      address: "420 Bud Hole Lane",
      city: "Jacksonville",
      country: "US",
      state: "FL",
      zipCode: "32201",
      phone: "555-0188"
    },
    shippingMethod: "Standard Shipping",
    shippingCost: 5.00,
    tax: 6.23,
    subtotal: 89.00,
    total: 100.23,
    status: "delivered",
    paymentMethod: "Visa ending in 5555"
  }
];
