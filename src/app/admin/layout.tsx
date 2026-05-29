import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#faf9fe]">
      {/* Side Bar on Desktop */}
      <AdminSidebar />
      {/* Scrollable area */}
      <div className="flex-1 md:pl-64 min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
