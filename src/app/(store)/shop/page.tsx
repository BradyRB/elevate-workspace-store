"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect, Suspense } from "react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ecommerce/ProductCard";
import PageWrapper from "@/components/shared/PageWrapper";
import { Search, ChevronRight, ChevronLeft, X, SlidersHorizontal } from "lucide-react";
import { useUIStore } from "@/store/uiStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

function ShopContent() {
  const searchParams = useSearchParams();
  const { isFilterOpen, setFilterOpen } = useUIStore();

  // URL states
  const searchParamVal = searchParams.get("search") || "";
  const categoryParamVal = searchParams.get("category") || "";

  // Local state filters
  const [searchQuery, setSearchQuery] = useState(searchParamVal);
  const [selectedCategory, setSelectedCategory] = useState(categoryParamVal);
  const [priceRanges, setPriceRanges] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Sync URL search parameters
  useEffect(() => {
    setSearchQuery(searchParamVal);
  }, [searchParamVal]);

  // Sync URL category parameters
  useEffect(() => {
    setSelectedCategory(categoryParamVal);
  }, [categoryParamVal]);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory((prev) => (prev === slug ? "" : slug));
    setCurrentPage(1);
  };

  const handlePriceRangeToggle = (range: string) => {
    setPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
    setCurrentPage(1);
  };

  const handleColorToggle = (color: string) => {
    setSelectedColor((prev) => (prev === color ? null : color));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setPriceRanges([]);
    setSelectedColor(null);
    setSortBy("Featured");
    setCurrentPage(1);
  };

  // Filtered and sorted products memo
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price range filters
    if (priceRanges.length > 0) {
      result = result.filter((p) => {
        return priceRanges.some((range) => {
          if (range === "under-500") return p.price < 500;
          if (range === "500-1500") return p.price >= 500 && p.price <= 1500;
          if (range === "over-1500") return p.price > 1500;
          return true;
        });
      });
    }

    // Color filter simulation (if present)
    if (selectedColor) {
      // Mocking color options for specific products
      if (selectedColor === "Blue") {
        result = result.filter((p) => ["linear-75", "aero-task-chair", "merino-foundation"].includes(p.id));
      } else if (selectedColor === "Black") {
        result = result.filter((p) => ["linear-75", "tactile-01", "contour-v2", "architect-desk", "ergo-mouse-pro", "aviator-cable", "walnut-headphone-stand"].includes(p.id));
      } else if (selectedColor === "Grey") {
        result = result.filter((p) => ["linear-75", "tactile-01", "merino-foundation", "aero-task-chair", "lumina-task-light", "felt-desk-mat-medium"].includes(p.id));
      } else if (selectedColor === "White") {
        result = result.filter((p) => ["linear-75", "axis-r1", "studio-desk-lite"].includes(p.id));
      }
    }

    // Sorting
    if (sortBy === "Newest Arrivals") {
      // simulate newest by ordering by reviewsCount descending
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, priceRanges, selectedColor, sortBy]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  const FiltersSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider">
          Categories
        </h3>
        <ul className="space-y-2.5 font-sans text-sm text-black">
          {CATEGORIES.map((cat) => (
            <li
              key={cat.id}
              onClick={() => handleCategorySelect(cat.slug)}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span
                className={
                  selectedCategory === cat.slug
                    ? "font-bold text-black"
                    : "text-[#46474a] group-hover:text-black transition-colors"
                }
              >
                {cat.name}
              </span>
              <ChevronRight
                className={`w-3.5 h-3.5 text-[#76777b] transition-all ${
                  selectedCategory === cat.slug
                    ? "opacity-100 translate-x-1"
                    : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Price filter checks */}
      <div className="space-y-4 pt-6 border-t border-[#c7c6ca]/30">
        <h3 className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider">
          Price Range
        </h3>
        <ul className="space-y-3 font-sans text-sm text-black">
          <li className="flex items-center gap-3">
            <input
              type="checkbox"
              id="under-500"
              checked={priceRanges.includes("under-500")}
              onChange={() => handlePriceRangeToggle("under-500")}
              className="border-[#c7c6ca] text-black focus:ring-black rounded-sm h-4 w-4 bg-transparent cursor-pointer"
            />
            <label htmlFor="under-500" className="cursor-pointer text-[#46474a] hover:text-black">
              Under $500
            </label>
          </li>
          <li className="flex items-center gap-3">
            <input
              type="checkbox"
              id="500-1500"
              checked={priceRanges.includes("500-1500")}
              onChange={() => handlePriceRangeToggle("500-1500")}
              className="border-[#c7c6ca] text-black focus:ring-black rounded-sm h-4 w-4 bg-transparent cursor-pointer"
            />
            <label htmlFor="500-1500" className="cursor-pointer text-[#46474a] hover:text-black">
              $500 - $1,500
            </label>
          </li>
          <li className="flex items-center gap-3">
            <input
              type="checkbox"
              id="over-1500"
              checked={priceRanges.includes("over-1500")}
              onChange={() => handlePriceRangeToggle("over-1500")}
              className="border-[#c7c6ca] text-black focus:ring-black rounded-sm h-4 w-4 bg-transparent cursor-pointer"
            />
            <label htmlFor="over-1500" className="cursor-pointer text-[#46474a] hover:text-black">
              Over $1,500
            </label>
          </li>
        </ul>
      </div>

      {/* Swatches */}
      <div className="space-y-4 pt-6 border-t border-[#c7c6ca]/30">
        <h3 className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider">
          Color Filter
        </h3>
        <div className="flex gap-2.5 flex-wrap">
          {[
            { name: "Black", color: "#1A1A1A" },
            { name: "White", color: "#E5E5E7" },
            { name: "Grey", color: "#9CA3AF" },
            { name: "Blue", color: "#47636c" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleColorToggle(item.name)}
              className={`w-8 h-8 rounded-full border transition-all ${
                selectedColor === item.name
                  ? "border-black scale-110 ring-2 ring-black/10 ring-offset-2"
                  : "border-[#c7c6ca]/50 hover:scale-105"
              }`}
              style={{ backgroundColor: item.color }}
              title={item.name}
            />
          ))}
        </div>
      </div>

      {/* Clear active filters button */}
      {(searchQuery || selectedCategory || priceRanges.length > 0 || selectedColor) && (
        <button
          onClick={handleClearFilters}
          className="w-full mt-4 text-center py-2.5 border border-[#c7c6ca] hover:border-black text-[#46474a] hover:text-black font-sans text-xs font-semibold uppercase tracking-wider transition-colors rounded-sm flex items-center justify-center gap-1.5"
        >
          <X className="w-3.5 h-3.5" />
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <PageWrapper className="pt-24 pb-20">
      {/* Header section */}
      <header className="mb-10 border-b border-[#c7c6ca]/30 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-wider block mb-1">
            Browse the Workspace Catalog
          </span>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-black tracking-tight leading-none">
            The Collection
          </h1>
        </div>
        <div className="font-mono text-sm text-[#76777b]">
          {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"} available
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="w-64 shrink-0 hidden lg:block border-r border-[#c7c6ca]/30 pr-6">
          <FiltersSidebar />
        </aside>

        {/* Mobile Filter Button */}
        <div className="flex items-center gap-3 lg:hidden w-full bg-[#f4f3f8] p-3 rounded-lg border border-[#c7c6ca]/30 shrink-0">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold text-black px-4 py-2 border border-[#c7c6ca] rounded bg-white w-full justify-center"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters & Sorting
          </button>
        </div>

        {/* Main Product Grid Area */}
        <div className="flex-grow space-y-8">
          {/* Search bar & Sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-lg border border-[#c7c6ca]/30">
            {/* Integrated Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4.5 h-4.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#76777b]" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-0 border-b border-[#c7c6ca] focus:border-black focus:ring-0 pl-10 pr-4 py-2 font-sans text-sm text-black placeholder-[#76777b] transition-colors outline-none"
              />
            </div>

            {/* Sorting Select options */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="font-mono text-xs text-[#76777b]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent border-0 border-b border-[#c7c6ca] focus:border-black focus:ring-0 py-1.5 font-sans text-sm text-black cursor-pointer pr-8 focus:outline-none"
              >
                <option>Featured</option>
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid implementation */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white border border-[#c7c6ca]/20 rounded-lg p-8">
              <p className="font-sans text-lg font-medium text-black">No products matched your filters</p>
              <p className="font-sans text-sm text-[#76777b] mt-1">
                Try clearing your search query or selecting a different category.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-6 bg-black text-white px-6 py-2.5 rounded font-sans text-xs tracking-wider uppercase font-semibold hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="pt-8 pb-4 flex justify-center items-center gap-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c7c6ca] text-[#46474a] hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:hover:border-[#c7c6ca] disabled:hover:text-[#46474a] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-black font-semibold px-2">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c7c6ca] text-[#46474a] hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:hover:border-[#c7c6ca] disabled:hover:text-[#46474a] cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Filter panel */}
      <Sheet open={isFilterOpen} onOpenChange={setFilterOpen}>
        <SheetContent side="left" className="bg-[#faf9fe] w-[300px] p-6 overflow-y-auto">
          <SheetHeader className="pb-4 border-b border-[#c7c6ca]/20 mb-6">
            <SheetTitle className="text-left font-sans text-lg font-bold">Filters & Sorting</SheetTitle>
          </SheetHeader>
          <FiltersSidebar />
        </SheetContent>
      </Sheet>
    </PageWrapper>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
