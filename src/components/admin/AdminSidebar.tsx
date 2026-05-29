"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBag, FolderHeart, Users, Settings, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/shop", icon: FolderHeart },
    { name: "Orders", href: "#", icon: ShoppingBag },
    { name: "Customers", href: "#", icon: Users },
  ];

  return (
    <aside className="bg-[#f4f3f8] h-screen w-64 fixed left-0 top-0 border-r border-[#c7c6ca]/50 flex flex-col p-6 gap-8 z-40 hidden md:flex">
      {/* Header Profile */}
      <div className="flex items-center gap-4 px-2 py-3 border-b border-[#c7c6ca]/30 pb-6 shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#e5e2e3] overflow-hidden flex-shrink-0 border border-[#c7c6ca]">
          <img
            alt="Admin User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnsvdFoZCGYIv1LevZVwu21Gw7_IrOiYypI1GuOYg8Tuk6Oa2XSIHjdDi7OTF_9t6PY6YBh5lSOgn0jwggNivdnf2XMyk4qwTOGrnSKN2B9TTrrXIsGlKzMxwu8YqsrwqhTW18mY6DFIDStouEDffakWc5YpHtHA4cWWilRl3I2GrNFqpx8BrMTKKrjrkUM9u5UA5Ai_nMtPQGpv7sQAXvSdXgk7eYvBzGkWr60BStk_7bRrtfaQiykN7ej0WtHGE9G5XPbrNpdGjA"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-sans text-base font-bold text-black truncate">Elevate Admin</span>
          <span className="font-sans text-xs text-[#76777b] truncate">Workspace Operations</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1.5 flex-grow">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (link.href !== "/" && link.href !== "#" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2.5 font-sans text-sm font-medium transition-all",
                isActive
                  ? "bg-[#c9e7f3] text-[#001f27]"
                  : "text-[#46474a] hover:bg-[#e3e2e7] hover:text-black"
              )}
            >
              <Icon className={cn("w-4.5 h-4.5", isActive ? "stroke-[2.5]" : "stroke-[2]")} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer operations */}
      <div className="flex flex-col gap-1.5 shrink-0 border-t border-[#c7c6ca]/30 pt-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-sans text-sm font-medium text-[#46474a] hover:bg-[#e3e2e7] hover:text-black transition-colors"
        >
          <Settings className="w-4.5 h-4.5" />
          <span>Settings</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 font-sans text-sm font-medium text-[#ba1a1a] hover:bg-[#ffdad6] transition-colors"
        >
          <LogOut className="w-4.5 h-4.5" />
          <span>Exit Admin</span>
        </Link>
      </div>
    </aside>
  );
}
