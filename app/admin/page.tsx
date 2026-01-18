// export default function AdminDashboard() {
//     const stats = [
//         { title: "Total Halls", value: 6 },
//         { title: "Total Bookings", value: 124 },
//         { title: "Pending", value: 9 },
//         { title: "Revenue", value: "₦1,200,000" },
//     ];

//     return (
//         <>
//             {/* Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 {stats.map((stat, i) => (
//                     <div
//                         key={i}
//                         className="p-6 rounded-xl shadow"
//                         style={{
//                             backgroundColor: "#9FAF97",
//                             color: "#2E2E2E",
//                         }}
//                     >
//                         <p className="opacity-70">{stat.title}</p>
//                         <h2 className="text-2xl font-bold mt-2">{stat.value}</h2>
//                     </div>
//                 ))}
//             </div>

//             {/* Recent bookings */}
//             <div
//                 className="p-6 rounded-xl shadow"
//                 style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
//             >
//                 <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
//                 <table className="w-full text-sm">
//                     <thead>
//                         <tr className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                             <th className="text-left py-2">Customer</th>
//                             <th>Hall</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="py-2">Usman</td>
//                             <td className="text-center">Royal Hall</td>
//                             <td className="text-center">2026-02-10</td>
//                             <td
//                                 className="text-center font-semibold"
//                                 style={{ color: "#F2C94C" }}
//                             >
//                                 Pending
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }

// export default function AdminDashboard() {
//     const stats = [
//         { title: "Total Halls", value: 6 },
//         { title: "Total Bookings", value: 124 },
//         { title: "Pending", value: 9 },
//         { title: "Revenue", value: "₦1,200,000" },
//     ];

//     return (
//         <div className="p-4 md:p-8">
//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 {stats.map((stat, i) => (
//                     <div
//                         key={i}
//                         className="p-4 md:p-6 rounded-xl shadow"
//                         style={{
//                             backgroundColor: "#9FAF97",
//                             color: "#2E2E2E",
//                         }}
//                     >
//                         <p className="opacity-70 text-sm sm:text-base">{stat.title}</p>
//                         <h2 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{stat.value}</h2>
//                     </div>
//                 ))}
//             </div>

//             {/* Recent bookings */}
//             <div
//                 className="p-4 md:p-6 rounded-xl shadow overflow-x-auto"
//                 style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
//             >
//                 <h3 className="text-lg sm:text-xl font-semibold mb-4">Recent Bookings</h3>
//                 <table className="w-full text-sm min-w-[600px] sm:min-w-full">
//                     <thead>
//                         <tr className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                             <th className="text-left py-2 px-2 sm:px-4">Customer</th>
//                             <th className="text-center py-2 px-2 sm:px-4">Hall</th>
//                             <th className="text-center py-2 px-2 sm:px-4">Date</th>
//                             <th className="text-center py-2 px-2 sm:px-4">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                             <td className="py-2 px-2 sm:px-4">Usman</td>
//                             <td className="text-center py-2 px-2 sm:px-4">Royal Hall</td>
//                             <td className="text-center py-2 px-2 sm:px-4">2026-02-10</td>
//                             <td
//                                 className="text-center font-semibold py-2 px-2 sm:px-4"
//                                 style={{ color: "#F2C94C" }}
//                             >
//                                 Pending
//                             </td>
//                         </tr>
//                         {/* Add more rows here */}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default function AdminDashboard() {
//     const stats = [
//         { title: "Total Halls", value: 6 },
//         { title: "Total Bookings", value: 124 },
//         { title: "Pending", value: 9 },
//         { title: "Revenue", value: "₦1,200,000" },
//     ];

//     const bookings = [
//         { customer: "Usman", hall: "Royal Hall", date: "2026-02-10", status: "Pending" },
//         { customer: "Aisha", hall: "Grand Hall", date: "2026-02-11", status: "Confirmed" },
//         // Add more bookings here
//     ];

//     return (
//         <div className="p-4 md:p-8">
//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 {stats.map((stat, i) => (
//                     <div
//                         key={i}
//                         className="p-4 md:p-6 rounded-xl shadow"
//                         style={{
//                             backgroundColor: "#9FAF97",
//                             color: "#2E2E2E",
//                         }}
//                     >
//                         <p className="opacity-70 text-sm sm:text-base">{stat.title}</p>
//                         <h2 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{stat.value}</h2>
//                     </div>
//                 ))}
//             </div>

//             {/* Recent bookings */}
//             <div
//                 className="p-4 md:p-6 rounded-xl shadow"
//                 style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
//             >
//                 <h3 className="text-lg sm:text-xl font-semibold mb-4">Recent Bookings</h3>

//                 {/* Table for medium+ screens */}
//                 <div className="hidden md:block overflow-x-auto">
//                     <table className="w-full text-sm min-w-full">
//                         <thead>
//                             <tr className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                                 <th className="text-left py-2 px-4">Customer</th>
//                                 <th className="text-center py-2 px-4">Hall</th>
//                                 <th className="text-center py-2 px-4">Date</th>
//                                 <th className="text-center py-2 px-4">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking, i) => (
//                                 <tr key={i} className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                                     <td className="py-2 px-4">{booking.customer}</td>
//                                     <td className="text-center py-2 px-4">{booking.hall}</td>
//                                     <td className="text-center py-2 px-4">{booking.date}</td>
//                                     <td
//                                         className="text-center font-semibold py-2 px-4"
//                                         style={{
//                                             color:
//                                                 booking.status === "Pending"
//                                                     ? "#F2C94C"
//                                                     : "#27AE60",
//                                         }}
//                                     >
//                                         {booking.status}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Cards for small screens */}
//                 <div className="md:hidden flex flex-col gap-4">
//                     {bookings.map((booking, i) => (
//                         <div
//                             key={i}
//                             className="p-4 rounded-lg shadow"
//                             style={{ backgroundColor: "#B0C2A0" }}
//                         >
//                             <p className="text-sm opacity-70">Customer</p>
//                             <p className="font-semibold mb-2">{booking.customer}</p>

//                             <p className="text-sm opacity-70">Hall</p>
//                             <p className="mb-2">{booking.hall}</p>

//                             <p className="text-sm opacity-70">Date</p>
//                             <p className="mb-2">{booking.date}</p>

//                             <p className="text-sm opacity-70">Status</p>
//                             <p
//                                 className="font-semibold"
//                                 style={{
//                                     color: booking.status === "Pending" ? "#F2C94C" : "#27AE60",
//                                 }}
//                             >
//                                 {booking.status}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function AdminDashboard() {
//     const stats = [
//         { title: "Total Halls", value: 6 },
//         { title: "Total Bookings", value: 124 },
//         { title: "Pending", value: 9 },
//         { title: "Revenue", value: "₦1,200,000" },
//     ];

//     const bookings = [
//         { customer: "Usman", hall: "Royal Hall", date: "2026-02-10", status: "Pending" },
//         { customer: "Aisha", hall: "Grand Hall", date: "2026-02-11", status: "Confirmed" },
//         // Add more bookings here
//     ];

//     return (
//         <div className="w-full min-h-screen bg-[#ffffff] p-4 md:p-8">
//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full">
//                 {stats.map((stat, i) => (
//                     <div
//                         key={i}
//                         className="p-4 md:p-6 rounded-xl shadow w-full"
//                         style={{
//                             backgroundColor: "#B0C2A0",
//                             color: "#2E2E2E",
//                         }}
//                     >
//                         <p className="opacity-70 text-sm sm:text-base">{stat.title}</p>
//                         <h2 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{stat.value}</h2>
//                     </div>
//                 ))}
//             </div>

//             {/* Recent bookings */}
//             <div className="rounded-xl shadow w-full p-4 md:p-6">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#2E2E2E]">
//                     Recent Bookings
//                 </h3>

//                 {/* Table for medium+ screens */}
//                 <div className="hidden md:block overflow-x-auto w-full">
//                     <table className="w-full text-sm min-w-full bg-[#B0C2A0] rounded-lg">
//                         <thead>
//                             <tr className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                                 <th className="text-left py-2 px-4">Customer</th>
//                                 <th className="text-center py-2 px-4">Hall</th>
//                                 <th className="text-center py-2 px-4">Date</th>
//                                 <th className="text-center py-2 px-4">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking, i) => (
//                                 <tr key={i} className="border-b" style={{ borderColor: "#7E8B6A" }}>
//                                     <td className="py-2 px-4">{booking.customer}</td>
//                                     <td className="text-center py-2 px-4">{booking.hall}</td>
//                                     <td className="text-center py-2 px-4">{booking.date}</td>
//                                     <td
//                                         className="text-center font-semibold py-2 px-4"
//                                         style={{
//                                             color:
//                                                 booking.status === "Pending"
//                                                     ? "#F2C94C"
//                                                     : "#27AE60",
//                                         }}
//                                     >
//                                         {booking.status}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Cards for small screens */}
//                 <div className="md:hidden flex flex-col gap-4 w-full">
//                     {bookings.map((booking, i) => (
//                         <div
//                             key={i}
//                             className="p-4 rounded-lg shadow w-full"
//                             style={{ backgroundColor: "#B0C2A0" }}
//                         >
//                             <p className="text-sm opacity-70">Customer</p>
//                             <p className="font-semibold mb-2">{booking.customer}</p>

//                             <p className="text-sm opacity-70">Hall</p>
//                             <p className="mb-2">{booking.hall}</p>

//                             <p className="text-sm opacity-70">Date</p>
//                             <p className="mb-2">{booking.date}</p>

//                             <p className="text-sm opacity-70">Status</p>
//                             <p
//                                 className="font-semibold"
//                                 style={{
//                                     color: booking.status === "Pending" ? "#F2C94C" : "#27AE60",
//                                 }}
//                             >
//                                 {booking.status}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


export default function AdminDashboard() {
    const stats = [
        { title: "Total Halls", value: 6 },
        { title: "Total Bookings", value: 124 },
        { title: "Pending", value: 9 },
        { title: "Revenue", value: "₦1,200,000" },
    ];

    const bookings = [
        { customer: "Usman", hall: "Royal Hall", date: "2026-02-10", status: "Pending" },
        { customer: "Aisha", hall: "Grand Hall", date: "2026-02-11", status: "Confirmed" },
        { customer: "Chioma", hall: "Diamond Hall", date: "2026-02-12", status: "Confirmed" },
        { customer: "Tunde", hall: "Royal Hall", date: "2026-02-15", status: "Pending" },
    ];

    return (
        <div
            className="w-full min-h-screen p-4 md:p-8"
            style={{ backgroundColor: "#E5E1D8" }}
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#2E2E2E" }}>
                    Admin Dashboard
                </h1>
                <p className="text-sm mt-1" style={{ color: "#5F6F52" }}>
                    Welcome back! Here's what's happening today.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="p-4 md:p-6 rounded-xl shadow"
                        style={{
                            backgroundColor: "#9FAF97",
                            color: "#2E2E2E",
                        }}
                    >
                        <p className="text-sm opacity-70">{stat.title}</p>
                        <h2 className="text-xl md:text-2xl font-bold mt-2">{stat.value}</h2>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div
                className="rounded-xl shadow p-4 md:p-6"
                style={{ backgroundColor: "#FFFFFF", color: "#2E2E2E" }}
            >
                <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: "#2E2E2E" }}>
                    Recent Bookings
                </h3>

                {/* Table (Tablet & Desktop) */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}>
                            <tr>
                                <th className="py-3 px-4 text-left rounded-tl-lg">Customer</th>
                                <th className="py-3 px-4 text-center">Hall</th>
                                <th className="py-3 px-4 text-center">Date</th>
                                <th className="py-3 px-4 text-center rounded-tr-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, i) => (
                                <tr
                                    key={i}
                                    className="border-b"
                                    style={{ borderColor: "#E5E1D8" }}
                                >
                                    <td className="py-3 px-4">{booking.customer}</td>
                                    <td className="text-center py-3 px-4">{booking.hall}</td>
                                    <td className="text-center py-3 px-4">{booking.date}</td>
                                    <td className="text-center py-3 px-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-semibold"
                                            style={{
                                                backgroundColor:
                                                    booking.status === "Pending"
                                                        ? "#FFF4E6"
                                                        : "#E8F5E9",
                                                color:
                                                    booking.status === "Pending"
                                                        ? "#F57C00"
                                                        : "#2E7D32",
                                            }}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cards (Mobile) */}
                <div className="md:hidden flex flex-col gap-4">
                    {bookings.map((booking, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-lg shadow"
                            style={{
                                backgroundColor: "#9FAF97",
                                color: "#2E2E2E",
                            }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-sm opacity-70">Customer</span>
                                <span className="font-semibold">{booking.customer}</span>
                            </div>

                            <div className="flex justify-between mb-2">
                                <span className="text-sm opacity-70">Hall</span>
                                <span>{booking.hall}</span>
                            </div>

                            <div className="flex justify-between mb-2">
                                <span className="text-sm opacity-70">Date</span>
                                <span>{booking.date}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-sm opacity-70">Status</span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor:
                                            booking.status === "Pending"
                                                ? "#FFF4E6"
                                                : "#E8F5E9",
                                        color:
                                            booking.status === "Pending"
                                                ? "#F57C00"
                                                : "#2E7D32",
                                    }}
                                >
                                    {booking.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
