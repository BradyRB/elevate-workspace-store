import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CartDrawer from "@/components/ecommerce/CartDrawer";

export default function StoreLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-[#faf9fe]">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
