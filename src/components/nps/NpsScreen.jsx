// src/components/nps/NpsScreen.jsx
import { useState } from "react";
import Header from "../layout/Header";

const SCORE_LABELS = {
  0: "Extremely Poor",
  1: "Very Poor",
  2: "Poor",
  3: "Below Average",
  4: "Average",
  5: "Neutral",
  6: "Fairly Good",
  7: "Good",
  8: "Very Good",
  9: "Excellent",
  10: "Outstanding",
};

function getScoreColor(score) {
  if (score === null) return "#003366";
  if (score <= 3) return "#dc2626"; // red
  if (score <= 6) return "#f59e0b"; // amber
  return "#16a34a"; // green
}

export default function NpsScreen({ onNext, onBack }) {
  const [score, setScore] = useState(null);

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
                Overall satisfaction
              </h2>
              <p className="text-sm mb-8" style={{ color: "#888" }}>
                How likely are you to recommend GhanaBank to a friend or family
                member?
              </p>

              {/* Score buttons 0–10 */}
              <div className="grid grid-cols-11 gap-1 mb-4">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setScore(num)}
                    className="aspect-square rounded-lg text-sm font-bold
                      transition-all duration-150 hover:scale-105"
                    style={{
                      backgroundColor:
                        score === num ? getScoreColor(num) : "#f1f5f9",
                      color: score === num ? "#ffffff" : "#475569",
                      border:
                        score === num
                          ? `2px solid ${getScoreColor(num)}`
                          : "2px solid #e2e8f0",
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Scale labels */}
              <div className="flex justify-between mb-8">
                <span className="text-xs" style={{ color: "#dc2626" }}>
                  Not likely
                </span>
                <span className="text-xs" style={{ color: "#16a34a" }}>
                  Very likely
                </span>
              </div>

              {/* Selected score label */}
              <div
                className="text-center py-4 rounded-xl mb-8 transition-all duration-200"
                style={{
                  backgroundColor: score !== null ? "#e8f0fb" : "#f8fafc",
                  minHeight: "56px",
                }}
              >
                {score !== null ? (
                  <p
                    className="font-semibold text-base"
                    style={{ color: getScoreColor(score) }}
                  >
                    {score}/10 — {SCORE_LABELS[score]}
                  </p>
                ) : (
                  <p className="text-sm" style={{ color: "#cbd5e1" }}>
                    Select a score above
                  </p>
                )}
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
                  onClick={() => onNext(score)}
                  disabled={score === null}
                  className="w-2/3 py-4 rounded-xl text-white font-semibold
                    text-base tracking-wide transition-all duration-200"
                  style={{
                    backgroundColor: score !== null ? "#003366" : "#94a3b8",
                    cursor: score !== null ? "pointer" : "not-allowed",
                  }}
                >
                  Next →
                </button>
              </div>

              {/* Hint */}
              {score === null && (
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "#aaa" }}
                >
                  Please select a score to continue.
                </p>
              )}
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
