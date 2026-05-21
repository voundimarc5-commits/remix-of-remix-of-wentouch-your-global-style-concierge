import React from "react";
import { useCurrentFrame, interpolate, spring, Easing, useVideoConfig } from "remotion";
import { THEME, FONTS } from "./theme";

const WentouchCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardY = spring({
    frame,
    fps,
    config: { damping: 14, mass: 1, stiffness: 80 },
    from: 130,
    to: 0,
    delay: 12,
  });

  const cardScale = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 90 },
    from: 0.72,
    to: 1,
    delay: 12,
  });

  const cardOpacity = interpolate(frame, [12, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkOpacity = interpolate(frame, [58, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });
  const checkScale = interpolate(frame, [58, 78], [0.4, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  return (
    <div
      style={{
        opacity: cardOpacity,
        transform: `translateY(${cardY}px) scale(${cardScale})`,
        width: 580,
        height: 350,
        borderRadius: 34,
        background: "linear-gradient(135deg, #1A1612 0%, #2E2820 55%, #1A1612 100%)",
        boxShadow:
          "0 50px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(184,148,44,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        padding: 38,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold glow */}
      <div
        style={{
          position: "absolute",
          top: -70,
          right: -70,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(184,148,44,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: 30,
              fontWeight: 500,
              color: "#EDE8E2",
            }}
          >
            Wen<span style={{ color: THEME.gold, fontStyle: "italic" }}>touch</span>
          </div>
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              color: "rgba(237,232,226,0.45)",
              marginTop: 4,
            }}
          >
            Conciergerie Shopping Premium
          </div>
        </div>

        {/* Check badge */}
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            backgroundColor: THEME.gold,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: checkOpacity,
            transform: `scale(${checkScale})`,
            boxShadow: `0 0 22px rgba(184,148,44,0.55)`,
          }}
        >
          <span style={{ fontSize: 26, color: "#FFF", lineHeight: 1 }}>✓</span>
        </div>
      </div>

      {/* Product */}
      <div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 10,
            color: "rgba(237,232,226,0.4)",
            marginBottom: 10,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}
        >
          Commande livrée
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 18px",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 14,
            border: "1px solid rgba(184,148,44,0.22)",
          }}
        >
          <div style={{ fontSize: 30 }}>📦</div>
          <div>
            <div style={{ fontFamily: FONTS.serif, fontSize: 18, color: "#EDE8E2" }}>
              Robe longue en soie — Zara
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 11,
                color: THEME.gold,
                marginTop: 5,
              }}
            >
              Douala, Cameroun · 5 jours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Scene4Step3: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = interpolate(frame, [8, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [18, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleY = interpolate(frame, [18, 48], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subOpacity = interpolate(frame, [36, 66], [0, 1], {
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
        gap: 64,
        padding: "0 80px",
      }}
    >
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 16,
            letterSpacing: "3px",
            color: THEME.gold,
            fontWeight: 500,
            opacity: labelOpacity,
            textTransform: "uppercase",
          }}
        >
          ÉTAPE 3
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 56,
            fontWeight: 500,
            color: THEME.textMain,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            lineHeight: 1.1,
          }}
        >
          On achète, on expédie.
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 52,
            fontStyle: "italic",
            color: THEME.gold,
            opacity: subOpacity,
            lineHeight: 1.1,
          }}
        >
          Vous recevez au Cameroun.
        </div>
      </div>

      <WentouchCard />
    </div>
  );
};
