// src/components/layout/Header.jsx

function GhanaBankLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Shield icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "#003366" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
            fill="#FFD700"
          />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill="#003366"
            fontFamily="serif"
          >
            GB
          </text>
        </svg>
      </div>

      {/* Bank name */}
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#003366" }}
        >
          Ghana
        </p>
        <p
          className="text-xl font-bold leading-tight"
          style={{ color: "#003366", fontFamily: "Georgia, serif" }}
        >
          Bank
        </p>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header
      className="w-full py-4 px-8 flex items-center justify-between shadow-sm"
      style={{ backgroundColor: "#ffffff", borderBottom: "2px solid #003366" }}
    >
      <GhanaBankLogo />
      <span
        className="text-sm font-medium tracking-wide"
        style={{ color: "black" }}
      >
        Customer Feedback Portal
      </span>
    </header>
  );
}
