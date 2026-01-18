export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen" style={{ backgroundColor: "#E5E1D8" }}>
            {/* Sidebar */}
            <aside
                className="w-64 p-6"
                style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
            >
                <h2 className="text-xl font-bold mb-10">GreatTime Event Center</h2>

                <nav className="space-y-4">
                    <a href="/admin" className="block hover:opacity-80">
                        Dashboard
                    </a>
                    <a href="/admin/halls" className="block hover:opacity-80">
                        Halls
                    </a>
                    <a href="/admin/bookings" className="block hover:opacity-80">
                        Bookings
                    </a>
                    <a href="/admin/payments" className="block hover:opacity-80">
                        Payments
                    </a>
                    <a href="/admin/settings" className="block hover:opacity-80">
                        Settings
                    </a>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1">
                {/* Topbar */}
                <header
                    className="flex justify-between items-center p-4"
                    style={{ backgroundColor: "#7E8B6A", color: "#2E2E2E" }}
                >
                    <span className="font-semibold">Admin Dashboard</span>

                    <div className="flex items-center gap-3">
                        <span className="text-sm">Admin</span>
                        <div
                            className="w-8 h-8 rounded-full"
                            style={{ backgroundColor: "#9FAF97" }}
                        />
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
