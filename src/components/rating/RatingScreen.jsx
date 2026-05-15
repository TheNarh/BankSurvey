import { useState } from "react";
import Header from "../layout/Header";
import StarRating from "./StarRating";

const SERVICE_LABELS = {
  branch: { label: "Branch Visit", icon: "🏦" },
  online: { label: "Online Banking", icon: "💻" },
  support: { label: "Customer Support", icon: "🎧" },
};

export default function RatingScreen({ services, onNext, onBack }) {
  const [ratings, setRatings] = useState({});

  function handleRatingChange(serviceId, value) {
    setRatings((prev) => ({ ...prev, [serviceId]: value }));
  }

  function allRated() {
    return services.every((s) => ratings[s] !== undefined);
  }

  function handleNext() {
    if (!allRated()) return;
    onNext(ratings);
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Top accent stripe */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: "#003366" }}
            />

            <div className="px-10 py-10">
              {/* Heading */}
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "#003366", fontFamily: "Georgia, serif" }}
              >
                Rate your experience
              </h2>
              <p className="text-sm mb-8" style={{ color: "black" }}>
                Rate each service you used from 1 to 5 stars.
              </p>

              {/* One rating row per selected service */}
              <div className="flex flex-col gap-8 mb-10">
                {services.map((serviceId) => (
                  <div key={serviceId}>
                    {/* Service label */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">
                        {SERVICE_LABELS[serviceId].icon}
                      </span>
                      <p className="font-semibold" style={{ color: "#003366" }}>
                        {SERVICE_LABELS[serviceId].label}
                      </p>
                    </div>

                    {/* Star rating */}
                    <StarRating
                      value={ratings[serviceId] ?? 0}
                      onChange={(val) => handleRatingChange(serviceId, val)}
                    />

                    {/* Rating label */}
                    {ratings[serviceId] && (
                      <p className="text-xs mt-2" style={{ color: "#888" }}>
                        {ratings[serviceId] === 1 && "Very Poor"}
                        {ratings[serviceId] === 2 && "Poor"}
                        {ratings[serviceId] === 3 && "Average"}
                        {ratings[serviceId] === 4 && "Good"}
                        {ratings[serviceId] === 5 && "Excellent"}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onBack}
                  className="w-1/3 py-4 rounded-xl font-semibold text-base
                    border-2 transition-all duration-200 hover:opacity-80"
                  style={{ borderColor: "#003366", color: "#003366" }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!allRated()}
                  className="w-2/3 py-4 rounded-xl text-white font-semibold
                    text-base tracking-wide transition-all duration-200"
                  style={{
                    backgroundColor: allRated() ? "#003366" : "#94a3b8",
                    cursor: allRated() ? "pointer" : "not-allowed",
                  }}
                >
                  Next →
                </button>
              </div>

              {/* Hint */}
              {!allRated() && (
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "black" }}
                >
                  Please rate all services to continue.
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs mt-6" style={{ color: "black" }}>
            © 2026 GhanaBank. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
