import { useState } from "react";
import Header from "../layout/Header";
import FeedbackField from "./FeedbackField";

const SERVICE_LABELS = {
  branch: { label: "Branch Visit", icon: "🏦" },
  online: { label: "Online Banking", icon: "💻" },
  support: { label: "Customer Support", icon: "🎧" },
};

const EMPTY_FEEDBACK = { well: "", improve: "" };

export default function FeedbackScreen({ services, onNext, onBack }) {
  const [feedback, setFeedback] = useState(
    Object.fromEntries(services.map((s) => [s, { ...EMPTY_FEEDBACK }])),
  );

  function handleChange(serviceId, value) {
    setFeedback((prev) => ({ ...prev, [serviceId]: value }));
  }

  function handleNext() {
    onNext(feedback);
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
                Tell us more
              </h2>
              <p className="text-sm mb-8" style={{ color: "black" }}>
                Your details help us improve. Both fields are optional.
              </p>

              {/* One feedback field per selected service */}
              <div className="flex flex-col gap-10 mb-10">
                {services.map((serviceId, index) => (
                  <div key={serviceId}>
                    <FeedbackField
                      icon={SERVICE_LABELS[serviceId].icon}
                      label={SERVICE_LABELS[serviceId].label}
                      value={feedback[serviceId]}
                      onChange={(val) => handleChange(serviceId, val)}
                    />
                    {/* Divider between services */}
                    {index < services.length - 1 && (
                      <div
                        className="mt-10 border-t"
                        style={{ borderColor: "#e2e8f0" }}
                      />
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
                  className="w-2/3 py-4 rounded-xl text-white font-semibold
                    text-base tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#003366" }}
                >
                  Next →
                </button>
              </div>
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
