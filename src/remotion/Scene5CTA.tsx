import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, Easing } from "remotion";
import { THEME, FONTS } from "./theme";

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.8, stiffness: 100 },
    from: 0.72,
    to: 1,
    delay: 8,
  });

  const logoOpacity = interpolate(frame, [8, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const lineWidth = interpolate(frame, [34, 64], [0, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const urlOpacity = interpolate(frame, [36, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const bioOpacity = interpolate(frame, [50, 72], [0, 1], {
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
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 100,
            fontWeight: 500,
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: THEME.textMain }}>Wen</span>
          <span style={{ color: THEME.gold, fontStyle: "italic" }}>touch</span>
        </div>
      </div>

      {/* Separator */}
      <div
        style={{
          width: lineWidth,
          height: 1,
          backgroundColor: THEME.gold,
          opacity: 0.45,
        }}
      />

      {/* URL */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 22,
          color: THEME.gold,
          letterSpacing: "0.05em",
          opacity: urlOpacity,
        }}
      >
        wentouch.shop
      </div>

      {/* Bio */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 16,
          color: THEME.textLight,
          letterSpacing: "0.06em",
          opacity: bioOpacity,
        }}
      >
        Lien en bio
      </div>
    </div>
  );
};
