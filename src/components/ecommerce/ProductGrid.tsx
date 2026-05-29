import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-white border border-[#c7c6ca]/20 rounded-lg p-8">
        <p className="font-sans text-lg font-medium text-black">No products found</p>
        <p className="font-sans text-sm text-[#76777b] mt-1">
          Try adjusting your search query or filter settings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
