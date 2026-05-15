import { useState } from "react";

export default function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
          className="text-3xl transition-transform duration-100 hover:scale-110"
        >
          <span
            style={{
              color: star <= (hovered ?? value) ? "#FFD700" : "#cbd5e1",
            }}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}
