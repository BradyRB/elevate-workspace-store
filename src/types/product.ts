export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details?: string;
  images: string[];
  specs: ProductSpec[];
  features?: string[];
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  reviews?: ProductReview[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
