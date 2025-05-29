import React, { useState } from "react";

export default function StarRating({ initialRating, onRate }) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(initialRating);

  const handleClick = (rating) => {
    setSelectedStar(rating);
    onRate(rating); // Call parent function to persist rating
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            color: hoveredStar >= star || selectedStar >= star ? "#FFD700" : "#ccc",
            fontSize: "2rem",
            transition: "color 0.2s"
          }}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}