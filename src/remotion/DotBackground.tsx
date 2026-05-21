import React from "react";
import { THEME } from "./theme";

export const DotBackground: React.FC = () => {
  const spacing = 28;
  const cols = Math.ceil(1080 / spacing) + 1;
  const rows = Math.ceil(1920 / spacing) + 1;

  const dots: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * spacing}
          cy={r * spacing}
          r={1.5}
          fill={THEME.dotColor}
          opacity={0.3}
        />
      );
    }
  }

  return (
    <svg
      style={{ position: "absolute", inset: 0, width: 1080, height: 1920 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots}
    </svg>
  );
};
