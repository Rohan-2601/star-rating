import React, { useState } from "react";
import "./Style.css";

function Star({ starCount = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="container">
      {new Array(starCount).fill(0).map((_, index) => {
        const isActive = index < (hoverValue || starValue);
        console.log(`Star ${index + 1}: ${isActive ? "gold" : "default"}`);

        return (
          <span
            key={index}
            className={isActive ? "gold" : ""}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default Star;

