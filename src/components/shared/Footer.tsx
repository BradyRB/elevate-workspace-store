"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] dark:bg-[#2f3034] border-t border-[#c7c6ca]/30 w-full px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
      <div className="col-span-1">
        <div className="font-sans text-xl font-semibold text-black dark:text-white mb-4">
          Elevate Workspace
        </div>
        <p className="font-sans text-sm text-[#46474a] dark:text-[#f1f0f5]/70 mb-4 max-w-xs leading-relaxed">
          Crafting environments for calm focus and professional excellence. Precision engineered workspace tools for the focused mind.
        </p>
        <div className="font-sans text-xs text-[#76777b] dark:text-[#f1f0f5]/50">
          © {new Date().getFullYear()} Elevate Workspace. All rights reserved.
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-2">Shop</h4>
          <Link href="/shop" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit">
            All Products
          </Link>
          <Link href="/shop?category=desks" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit">
            Desks
          </Link>
          <Link href="/shop?category=seating" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit">
            Seating
          </Link>
          <Link href="/shop?category=accessories" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit">
            Accessories
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-2">Company</h4>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            About Us
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Sustainability
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Journal
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Careers
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-2">Support</h4>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Shipping & Returns
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Contact Us
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            FAQ
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-2">Legal</h4>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>
          <a href="#" className="font-sans text-sm text-[#46474a] hover:text-black dark:text-[#f1f0f5]/80 dark:hover:text-white transition-colors w-fit" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
