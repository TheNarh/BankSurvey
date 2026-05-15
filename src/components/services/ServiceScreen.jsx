import { useState } from "react";
import Header from "../layout/Header";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    id: "branch",
    icon: "🏦",
    label: "Branch Visit",
    description: "In-person experience at any GhanaBank branch",
  },
  {
    id: "online",
    icon: "💻",
    label: "Online Banking",
    description: "Mobile app or web banking platform",
  },
  {
    id: "support",
    icon: "🎧",
    label: "Customer Support",
    description: "Phone, email or live chat support",
  },
];

export default function ServiceScreen({ onNext }) {
  const [selected, setSelected] = useState([]);

  function handleToggle(id) {
    setSelected(
      (prev) =>
        prev.includes(id)
          ? prev.filter((s) => s !== id) // remove if already selected
          : [...prev, id], // add if not selected
    );
  }

  function handleNext() {
    if (selected.length === 0) return;
    onNext(selected);
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
                Which service did you use?
              </h2>
              <p className="text-sm mb-8" style={{ color: "black" }}>
                Select all that apply.
              </p>

              {/* Service cards */}
              <div className="flex flex-col gap-4 mb-10">
                {SERVICES.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isSelected={selected.includes(service.id)}
                    onToggle={handleToggle}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={selected.length === 0}
                className="w-full py-4 rounded-xl text-white font-semibold text-base
                  tracking-wide transition-all duration-200"
                style={{
                  backgroundColor:
                    selected.length === 0 ? "#94a3b8" : "#003366",
                  cursor: selected.length === 0 ? "not-allowed" : "pointer",
                }}
              >
                Next →
              </button>

              {/* Selection hint */}
              {selected.length === 0 && (
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "#aaa" }}
                >
                  Please select at least one service to continue.
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
