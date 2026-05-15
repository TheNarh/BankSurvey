// src/components/thankyou/ThankYouScreen.jsx
import Header from "../layout/Header";

const SERVICE_LABELS = {
  branch: { label: "Branch Visit", icon: "🏦" },
  online: { label: "Online Banking", icon: "💻" },
  support: { label: "Customer Support", icon: "🎧" },
};

const STAR_LABELS = {
  1: "Very Poor",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

function getScoreColor(score) {
  if (score <= 3) return "#dc2626";
  if (score <= 6) return "#f59e0b";
  return "#16a34a";
}

export default function ThankYouScreen({ surveyData }) {
  const { services, ratings, feedback, nps } = surveyData;

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
              {/* Success icon */}
              <div
                className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#dcfce7" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h2
                className="text-3xl font-bold text-center mb-2"
                style={{ color: "#003366", fontFamily: "Georgia, serif" }}
              >
                Thank You!
              </h2>
              <p
                className="text-center text-sm mb-10"
                style={{ color: "#888" }}
              >
                Your feedback has been submitted. Here's a summary of your
                responses.
              </p>

              {/* Summary card */}
              <div
                className="rounded-xl p-6 mb-8 flex flex-col gap-6"
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* NPS score */}
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#94a3b8" }}
                  >
                    Overall Satisfaction
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: getScoreColor(nps) }}
                  >
                    {nps}/10
                  </p>
                </div>

                <div className="border-t" style={{ borderColor: "#e2e8f0" }} />

                {/* Per service summary */}
                {services.map((serviceId) => (
                  <div key={serviceId}>
                    {/* Service name */}
                    <div className="flex items-center gap-2 mb-2">
                      <span>{SERVICE_LABELS[serviceId].icon}</span>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#003366" }}
                      >
                        {SERVICE_LABELS[serviceId].label}
                      </p>
                    </div>

                    {/* Star rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            style={{
                              color:
                                star <= ratings[serviceId]
                                  ? "#FFD700"
                                  : "#e2e8f0",
                              fontSize: "18px",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs" style={{ color: "#888" }}>
                        {STAR_LABELS[ratings[serviceId]]}
                      </span>
                    </div>

                    {/* Feedback text */}
                    {feedback[serviceId]?.well && (
                      <p className="text-xs mb-1" style={{ color: "#555" }}>
                        <strong>Went well:</strong> {feedback[serviceId].well}
                      </p>
                    )}
                    {feedback[serviceId]?.improve && (
                      <p className="text-xs" style={{ color: "#555" }}>
                        <strong>Improve:</strong> {feedback[serviceId].improve}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit another */}
              <button
                onClick={() => window.location.reload()}
                className="w-full py-4 rounded-xl text-white font-semibold text-base
                  tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#003366" }}
              >
                Submit Another Response
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs mt-6" style={{ color: "#bbb" }}>
            © 2026 GhanaBank. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
