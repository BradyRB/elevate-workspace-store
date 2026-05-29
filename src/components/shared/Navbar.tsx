"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = useCartStore((state) => state.totalItems());
  const {
    isCartOpen,
    setCartOpen,
    isMobileMenuOpen,
    setMobileMenuOpen,
    isSearchOpen,
    setSearchOpen,
  } = useUIStore();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = searchQuery
    ? PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <nav className="bg-[#faf9fe]/80 backdrop-blur-md border-b border-[#c7c6ca]/30 fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-4 max-w-[1440px] left-1/2 -translate-x-1/2">
        {/* Logo */}
        <Link href="/" className="font-sans text-xl tracking-tighter font-semibold text-black">
          Elevate Workspace
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link
            href="/shop"
            className="font-sans text-[16px] text-[#46474a] hover:text-black transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            href="/shop?category=desks"
            className="font-sans text-[16px] text-[#46474a] hover:text-black transition-colors duration-300"
          >
            Collections
          </Link>
          <Link
            href="/admin"
            className="font-sans text-[16px] text-[#46474a] hover:text-black transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/journal"
            className="font-sans text-[16px] text-[#46474a] hover:text-black transition-colors duration-300"
          >
            Journal
          </Link>
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-black items-center">
          <button
            aria-label="Search items"
            onClick={() => setSearchOpen(true)}
            className="hover:opacity-75 transition-opacity"
          >
            <Search className="w-5 h-5 cursor-pointer" />
          </button>
          <button
            aria-label="Shopping Cart"
            onClick={() => setCartOpen(true)}
            className="hover:opacity-75 transition-opacity relative"
          >
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold font-mono">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/admin" className="hover:opacity-75 transition-opacity" aria-label="Admin Profile">
            <User className="w-5 h-5 cursor-pointer" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden hover:opacity-75 transition-opacity"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="bg-[#faf9fe] w-[300px] p-6">
          <SheetTitle className="text-left font-sans text-xl font-bold mb-6">Elevate Workspace</SheetTitle>
          <div className="flex flex-col gap-6 mt-8">
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1a1b1f] font-sans text-lg font-medium border-b border-[#c7c6ca]/20 pb-2"
            >
              Shop
            </Link>
            <Link
              href="/shop?category=desks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1a1b1f] font-sans text-lg font-medium border-b border-[#c7c6ca]/20 pb-2"
            >
              Collections
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1a1b1f] font-sans text-lg font-medium border-b border-[#c7c6ca]/20 pb-2"
            >
              Journal
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1a1b1f] font-sans text-lg font-medium border-b border-[#c7c6ca]/20 pb-2"
            >
              Dashboard
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1a1b1f] font-sans text-lg font-medium border-b border-[#c7c6ca]/20 pb-2"
            >
              Cart ({mounted ? totalItems : 0})
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Search Dialog overlay */}
      <Dialog open={isSearchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[550px] bg-[#faf9fe] border border-[#c7c6ca]/30 p-6 rounded-lg">
          <DialogTitle className="sr-only">Search the collection</DialogTitle>
          <form onSubmit={handleSearchSubmit} className="relative mt-2">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#76777b]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-[#c7c6ca] focus:border-black focus:ring-0 pl-10 pr-4 py-2 font-sans text-lg text-black placeholder-[#76777b] transition-colors outline-none"
              autoFocus
            />
          </form>
          {searchQuery && (
            <div className="mt-4 max-h-[300px] overflow-y-auto">
              <p className="text-xs text-[#76777b] font-semibold tracking-wider uppercase mb-2">
                Search Results ({filteredProducts.length})
              </p>
              {filteredProducts.length > 0 ? (
                <div className="divide-y divide-[#c7c6ca]/20">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 py-3 hover:bg-[#f4f3f8] px-2 rounded-sm transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#f4f3f8] rounded-sm overflow-hidden flex items-center justify-center border border-[#c7c6ca]/20">
                        {product.images[0] ? (
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-xs text-[#76777b]">Item</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans text-sm font-medium text-black truncate">
                          {product.name}
                        </h4>
                        <p className="font-sans text-xs text-[#76777b]">
                          {product.category}
                        </p>
                      </div>
                      <span className="font-mono text-sm text-black">
                        ${product.price}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#76777b] py-4 text-center">
                  No products matched your search.
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
