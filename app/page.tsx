"use client";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#E5E1D8" }}
    >
      {/* Header */}
      <header
        className="flex justify-between items-center px-4 md:px-12 py-4 shadow"
        style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
      >
        <h1 className="text-lg md:text-xl font-bold">
          GreatTime Event Center
        </h1>

        <a
          href="/login"
          className="text-sm font-semibold underline"
          style={{ color: "#2E2E2E" }}
        >
          Admin Login
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#2E2E2E" }}
          >
            Make Your Events Truly Memorable
          </h2>
          <p
            className="text-sm md:text-base mb-6"
            style={{ color: "#5F6F52" }}
          >
            Book beautiful halls for weddings, parties, conferences and
            special occasions at GreatTime Event Center.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-6 py-3 rounded font-semibold"
              style={{ backgroundColor: "#5F6F52", color: "#E5E1D8" }}
            >
              Book a Hall
            </button>

            <button
              className="px-6 py-3 rounded font-semibold border"
              style={{
                borderColor: "#5F6F52",
                color: "#5F6F52",
                backgroundColor: "transparent",
              }}
            >
              View Halls
            </button>
          </div>
        </div>

        {/* Image / Placeholder Card */}
        <div
          className="w-full md:w-[400px] h-[250px] md:h-[300px] rounded-xl shadow flex items-center justify-center"
          style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
        >
          <p className="text-sm opacity-70">
            Hall Preview Image Here
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-4 text-sm"
        style={{ backgroundColor: "#9FAF97", color: "#2E2E2E" }}
      >
        © {new Date().getFullYear()} GreatTime Event Center. All rights reserved.
      </footer>
    </div>
  );
}
