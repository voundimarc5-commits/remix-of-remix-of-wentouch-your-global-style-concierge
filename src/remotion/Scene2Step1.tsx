import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { THEME, FONTS } from "./theme";
import { IPhoneMockup } from "./IPhoneMockup";

const ZaraScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const cursorX = interpolate(frame, [40, 85], [30, 195], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const highlightWidth = interpolate(frame, [85, 115], [0, 158], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const copyOpacity = interpolate(frame, [115, 135], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const copyOpacityOut = interpolate(frame, [148, 165], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        paddingTop: 42,
      }}
    >
      {/* Safari URL bar */}
      <div
        style={{
          margin: "0 12px",
          padding: "6px 10px",
          backgroundColor: "#F2F2F7",
          borderRadius: 8,
          fontSize: 10,
          color: "#333",
          display: "flex",
          alignItems: "center",
          gap: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 3,
            height: "calc(100% - 6px)",
            width: highlightWidth,
            backgroundColor: "rgba(0,122,255,0.25)",
            borderRadius: 3,
          }}
        />
        <span style={{ fontSize: 9, color: "#007AFF", zIndex: 1 }}>🔒</span>
        <span style={{ fontSize: 10, zIndex: 1 }}>zara.com/fr/fr/robe-longue-soie</span>
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: "50%",
            transform: "translateY(-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.35)",
            zIndex: 2,
          }}
        />
      </div>

      {copyOpacity * copyOpacityOut > 0.01 && (
        <div
          style={{
            margin: "6px auto 0",
            padding: "4px 14px",
            backgroundColor: "rgba(0,0,0,0.72)",
            borderRadius: 20,
            fontSize: 10,
            color: "#FFF",
            opacity: Math.min(copyOpacity, copyOpacityOut),
          }}
        >
          Lien copié ✓
        </div>
      )}

      {/* Product area */}
      <div style={{ flex: 1, padding: "10px 12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#F5F0EB",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 38 }}>👗</div>
          <span
            style={{
              fontSize: 9,
              color: "#888",
              fontFamily: FONTS.sans,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            ZARA
          </span>
        </div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#222", fontWeight: 600 }}>
          Robe longue en soie
        </div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 10, color: "#888" }}>Taille S — M — L</div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#222", fontWeight: 700 }}>
          49,95 €
        </div>
      </div>
    </div>
  );
};

export const Scene2Step1: React.FC = () => {
  const frame = useCurrentFrame();

  const phoneOpacity = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phoneY = interpolate(frame, [0, 28], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.15)),
  });

  const labelOpacity = interpolate(frame, [12, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [22, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleY = interpolate(frame, [22, 52], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const subOpacity = interpolate(frame, [40, 70], [0, 1], {
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
        gap: 52,
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
          ÉTAPE 1
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
          Trouvez votre article
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 56,
            fontStyle: "italic",
            color: THEME.gold,
            opacity: subOpacity,
            lineHeight: 1.1,
          }}
        >
          Copiez le lien.
        </div>
      </div>

      <div
        style={{
          opacity: phoneOpacity,
          transform: `translateY(${phoneY}px)`,
          filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22))",
        }}
      >
        <IPhoneMockup scale={1.52}>
          <ZaraScreen frame={frame} />
        </IPhoneMockup>
      </div>
    </div>
  );
};
