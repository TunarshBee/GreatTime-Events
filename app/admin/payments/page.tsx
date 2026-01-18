export default function PaymentsPage() {
    const payments = [
        { id: 1, client: "John Doe", event: "Wedding", amount: "₦150,000", status: "Paid", date: "2026-01-18" },
        { id: 2, client: "Jane Smith", event: "Birthday Party", amount: "₦85,000", status: "Pending", date: "2026-01-17" },
        { id: 3, client: "Ahmed Hassan", event: "Conference", amount: "₦200,000", status: "Paid", date: "2026-01-15" },
    ];

    return (
        <div
            className="min-h-screen p-4 md:p-8 space-y-6"
            style={{ backgroundColor: "#E5E1D8" }}
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#2E2E2E" }}>
                    Payments & Revenue
                </h1>
                <p className="text-sm mt-1" style={{ color: "#5F6F52" }}>
                    Track all payments and revenue
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { title: "Total Revenue", value: "₦1,250,000" },
                    { title: "This Month", value: "₦320,000" },
                    { title: "Pending Payments", value: "₦85,000" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-4 md:p-6 rounded-xl shadow"
                        style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
                    >
                        <p className="text-sm opacity-70">{item.title}</p>
                        <h2 className="text-xl md:text-2xl font-bold mt-2">{item.value}</h2>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div
                className="p-4 rounded-xl shadow flex flex-wrap gap-3"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <input
                    type="date"
                    className="p-2 rounded outline-none border"
                    style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                />
                <select
                    defaultValue=""
                    className="p-2 rounded outline-none border"
                    style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                >
                    <option value="">All Payments</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                </select>
                <button
                    className="px-4 py-2 rounded font-semibold"
                    style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
                >
                    Filter
                </button>
            </div>

            {/* Table (Desktop) */}
            <div
                className="hidden md:block p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <table className="w-full text-sm">
                    <thead style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}>
                        <tr>
                            <th className="py-3 px-4 text-left rounded-tl-lg">Client</th>
                            <th className="py-3 px-4 text-center">Event</th>
                            <th className="py-3 px-4 text-center">Amount</th>
                            <th className="py-3 px-4 text-center">Status</th>
                            <th className="py-3 px-4 text-center rounded-tr-lg">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id} className="border-b" style={{ borderColor: "#E5E1D8" }}>
                                <td className="py-3 px-4" style={{ color: "#2E2E2E" }}>{payment.client}</td>
                                <td className="py-3 px-4 text-center" style={{ color: "#2E2E2E" }}>{payment.event}</td>
                                <td className="py-3 px-4 text-center font-semibold" style={{ color: "#2E2E2E" }}>{payment.amount}</td>
                                <td className="py-3 px-4 text-center">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: payment.status === "Paid" ? "#E8F5E9" : "#FFF4E6",
                                            color: payment.status === "Paid" ? "#2E7D32" : "#F57C00",
                                        }}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center" style={{ color: "#2E2E2E" }}>{payment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cards (Mobile) */}
            <div className="md:hidden space-y-4">
                {payments.map((payment) => (
                    <div
                        key={payment.id}
                        className="p-4 rounded-lg shadow"
                        style={{
                            backgroundColor: "#9FAF97",
                            color: "#2E2E2E",
                        }}
                    >
                        <div className="flex justify-between mb-2">
                            <span className="text-sm opacity-70">Client</span>
                            <span className="font-semibold">{payment.client}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm opacity-70">Event</span>
                            <span>{payment.event}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm opacity-70">Amount</span>
                            <span className="font-semibold">{payment.amount}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm opacity-70">Date</span>
                            <span>{payment.date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm opacity-70">Status</span>
                            <span
                                className="px-3 py-1 rounded-full text-xs font-semibold"
                                style={{
                                    backgroundColor: payment.status === "Paid" ? "#E8F5E9" : "#FFF4E6",
                                    color: payment.status === "Paid" ? "#2E7D32" : "#F57C00",
                                }}
                            >
                                {payment.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}