import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { THEME, FONTS } from "./theme";

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();

  const line1Opacity = interpolate(frame, [10, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const line1Y = interpolate(frame, [10, 36], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const line2Opacity = interpolate(frame, [28, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const line2Y = interpolate(frame, [28, 58], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: "0 80px",
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 68,
          fontWeight: 500,
          color: THEME.textMain,
          opacity: line1Opacity,
          transform: `translateY(${line1Y}px)`,
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
        }}
      >
        Comment ça marche&nbsp;?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 26,
          fontStyle: "italic",
          color: THEME.gold,
          opacity: line2Opacity,
          transform: `translateY(${line2Y}px)`,
          textAlign: "center",
          letterSpacing: "0.02em",
        }}
      >
        3 étapes. 5 minutes.
      </div>
    </div>
  );
};
