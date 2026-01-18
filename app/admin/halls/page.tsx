export default function HallsPage() {
    const halls = [
        { id: 1, name: "Royal Hall", capacity: 300, price: "₦150,000" },
        { id: 2, name: "Grand Hall", capacity: 500, price: "₦250,000" },
        { id: 3, name: "Diamond Hall", capacity: 200, price: "₦120,000" },
    ];

    return (
        <div
            className="w-full min-h-screen p-4 md:p-8 space-y-6"
            style={{ backgroundColor: "#E5E1D8" }}
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#2E2E2E" }}>
                    Halls Management
                </h1>
                <p className="text-sm mt-1" style={{ color: "#5F6F52" }}>
                    Add, edit, and manage event halls
                </p>
            </div>

            {/* Add Hall */}
            <div
                className="p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h2 className="text-lg md:text-xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Add New Hall
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        placeholder="Hall Name"
                        className="p-2 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        placeholder="Capacity"
                        type="number"
                        className="p-2 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        placeholder="Price (₦)"
                        className="p-2 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />

                    <button
                        className="md:col-span-3 py-2 rounded font-semibold transition"
                        style={{
                            backgroundColor: "#5F6F52",
                            color: "#E5E1D8",
                        }}
                    >
                        Add Hall
                    </button>
                </div>
            </div>

            {/* Halls List */}
            <div
                className="p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h2 className="text-lg md:text-xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    All Halls
                </h2>

                {/* Table for Desktop */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}>
                            <tr>
                                <th className="py-3 px-4 text-left rounded-tl-lg">Name</th>
                                <th className="py-3 px-4 text-center">Capacity</th>
                                <th className="py-3 px-4 text-center">Price</th>
                                <th className="py-3 px-4 text-center rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {halls.map((hall) => (
                                <tr key={hall.id} className="border-b" style={{ borderColor: "#E5E1D8" }}>
                                    <td className="py-3 px-4" style={{ color: "#2E2E2E" }}>{hall.name}</td>
                                    <td className="py-3 px-4 text-center" style={{ color: "#2E2E2E" }}>{hall.capacity}</td>
                                    <td className="py-3 px-4 text-center" style={{ color: "#2E2E2E" }}>{hall.price}</td>
                                    <td className="py-3 px-4 text-center">
                                        <button
                                            className="px-3 py-1 rounded text-sm font-semibold"
                                            style={{ backgroundColor: "#C62828", color: "#FFFFFF" }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cards for Mobile */}
                <div className="md:hidden space-y-4">
                    {halls.map((hall) => (
                        <div
                            key={hall.id}
                            className="p-4 rounded-lg shadow"
                            style={{
                                backgroundColor: "#9FAF97",
                                color: "#2E2E2E",
                            }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-sm opacity-70">Name</span>
                                <span className="font-semibold">{hall.name}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm opacity-70">Capacity</span>
                                <span>{hall.capacity}</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-sm opacity-70">Price</span>
                                <span>{hall.price}</span>
                            </div>
                            <button
                                className="w-full py-2 rounded text-sm font-semibold"
                                style={{ backgroundColor: "#C62828", color: "#FFFFFF" }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}