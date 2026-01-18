"use client";

export default function RegisterPage() {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: "#E5E1D8" }}
        >
            <div
                className="w-full max-w-md p-6 md:p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-1" style={{ color: "#2E2E2E" }}>
                    GreatTime Event Center
                </h1>
                <p className="text-center text-sm mb-6" style={{ color: "#5F6F52" }}>
                    Admin Registration
                </p>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full p-3 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3 rounded outline-none border"
                        style={{ backgroundColor: "#F5F5F5", color: "#2E2E2E", borderColor: "#9FAF97" }}
                    />

                    <button
                        className="w-full py-3 rounded font-semibold transition"
                        style={{
                            backgroundColor: "#5F6F52",
                            color: "#E5E1D8",
                        }}
                    >
                        Register Admin
                    </button>
                </div>

                <p className="text-center text-sm mt-6" style={{ color: "#2E2E2E" }}>
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="font-semibold underline"
                        style={{ color: "#5F6F52" }}
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}