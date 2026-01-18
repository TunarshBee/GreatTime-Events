export default function SettingsPage() {
    return (
        <div
            className="min-h-screen p-4 md:p-8 space-y-6"
            style={{ backgroundColor: "#E5E1D8" }}
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#2E2E2E" }}>
                    System Settings
                </h1>
                <p className="text-sm mt-1" style={{ color: "#5F6F52" }}>
                    Configure your event center settings
                </p>
            </div>

            {/* Center Info */}
            <div
                className="p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h2 className="text-lg font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Event Center Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Center Name"
                        defaultValue="GreatTime Event Center"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Contact Phone"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Email Address"
                        type="email"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Location"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                </div>
                <button
                    className="mt-4 px-6 py-2 rounded font-semibold"
                    style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
                >
                    Save Information
                </button>
            </div>

            {/* Booking Settings */}
            <div
                className="p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h2 className="text-lg font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Booking Settings
                </h2>
                <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span style={{ color: "#2E2E2E" }}>Allow online bookings</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span style={{ color: "#2E2E2E" }}>Require payment before approval</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span style={{ color: "#2E2E2E" }}>Send email notifications</span>
                    </label>
                </div>
                <button
                    className="mt-4 px-6 py-2 rounded font-semibold"
                    style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
                >
                    Save Settings
                </button>
            </div>

            {/* Admin Account */}
            <div
                className="p-4 md:p-6 rounded-xl shadow"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h2 className="text-lg font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Admin Account
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Username"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Current Password"
                        type="password"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="New Password"
                        type="password"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                    <input
                        className="p-2 rounded border outline-none"
                        placeholder="Confirm Password"
                        type="password"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />
                </div>
                <button
                    className="mt-4 px-6 py-2 rounded font-semibold"
                    style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
                >
                    Update Account
                </button>
            </div>

            {/* Danger Zone */}
            <div
                className="p-4 md:p-6 rounded-xl shadow border-2"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#C62828" }}
            >
                <h2 className="text-lg font-bold mb-2" style={{ color: "#C62828" }}>
                    Danger Zone
                </h2>
                <p className="text-sm mb-4" style={{ color: "#5F6F52" }}>
                    These actions are irreversible. Please proceed with caution.
                </p>
                <button
                    className="px-6 py-2 rounded font-semibold"
                    style={{ backgroundColor: "#C62828", color: "#FFFFFF" }}
                >
                    Clear All Data
                </button>
            </div>
        </div>
    );
}