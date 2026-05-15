export default function ServiceCard({ service, isSelected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(service.id)}
      className="w-full flex items-center gap-4 p-5 rounded-xl border-2 
        transition-all duration-200 text-left"
      style={{
        backgroundColor: isSelected ? "#e8f0fb" : "#ffffff",
        borderColor: isSelected ? "#003366" : "#e2e8f0",
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: isSelected ? "#003366" : "#f1f5f9" }}
      >
        <span className="text-2xl">{service.icon}</span>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="font-semibold text-base" style={{ color: "#003366" }}>
          {service.label}
        </p>
        <p className="text-sm mt-0.5" style={{ color: "#888" }}>
          {service.description}
        </p>
      </div>

      {/* Checkmark */}
      <div
        className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0"
        style={{
          borderColor: isSelected ? "#003366" : "#cbd5e1",
          backgroundColor: isSelected ? "#003366" : "transparent",
        }}
      >
        {isSelected && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
