export default function FeedbackField({ label, icon, value, onChange }) {
  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <p className="font-semibold" style={{ color: "#003366" }}>
          {label}
        </p>
      </div>

      {/* What went well */}
      <div className="mb-3">
        <label
          className="text-xs font-medium mb-1 block"
          style={{ color: "black" }}
        >
          What went well?
        </label>
        <textarea
          rows={3}
          value={value.well}
          onChange={(e) => onChange({ ...value, well: e.target.value })}
          placeholder="e.g. Staff were helpful and friendly..."
          className="w-full rounded-lg border px-4 py-3 text-sm resize-none
            focus:outline-none focus:ring-2"
          style={{
            borderColor: "#e2e8f0",
            color: "#333",
            focusRingColor: "#003366",
          }}
        />
      </div>

      {/* What can improve */}
      <div>
        <label
          className="text-xs font-medium mb-1 block"
          style={{ color: "black" }}
        >
          What can be improved?
        </label>
        <textarea
          rows={3}
          value={value.improve}
          onChange={(e) => onChange({ ...value, improve: e.target.value })}
          placeholder="e.g. Waiting time could be shorter..."
          className="w-full rounded-lg border px-4 py-3 text-sm resize-none
            focus:outline-none focus:ring-2"
          style={{ borderColor: "#e2e8f0", color: "#333" }}
        />
      </div>
    </div>
  );
}
