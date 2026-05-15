export default function WelcomeCard({ onStart }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Top accent stripe */}
      <div className="h-2 w-full" style={{ backgroundColor: "#003366" }} />

      <div className="px-10 py-12 text-center">
        {/* Icon */}
        <div
          className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#e8f0fb" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#003366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: "#003366", fontFamily: "Georgia, serif" }}
        >
          Share Your Experience
        </h1>

        {/* Description */}
        <p
          className="text-base leading-relaxed mb-2"
          style={{ color: "black" }}
        >
          At <strong style={{ color: "#003366" }}>GhanaBank</strong>, your
          feedback shapes the way we serve you.
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "black" }}>
          This survey takes under <strong>3 minutes</strong> to complete and
          covers your experience with our branches, online banking, and support
          services.
        </p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-xl text-white font-semibold cursor-pointer text-base
            tracking-wide transition-all duration-200 active:scale-95"
          style={{ backgroundColor: "stone" }}
        >
          Start Survey →
        </button>

        {/* Confidentiality note */}
        <p className="mt-5 text-xs" style={{ color: "black" }}>
          🔒 Your responses are confidential and anonymous.
        </p>
      </div>
    </div>
  );
}
