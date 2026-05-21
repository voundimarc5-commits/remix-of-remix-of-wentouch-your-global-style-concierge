import React, { useState } from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { THEME, FONTS } from "./theme";
import { IPhoneMockup } from "./IPhoneMockup";

// Uses real photo if available, falls back to styled placeholder
const ProductImage: React.FC = () => {
  const [failed, setFailed] = useState(false);
  return (
    <div style={{ width: "100%", height: 220, backgroundColor: "#F0EDEA", overflow: "hidden", flexShrink: 0, position: "relative" }}>
      {!failed ? (
        <img
          src="/zara-dress.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
          <svg width="72" height="145" viewBox="0 0 72 145" fill="none">
            <ellipse cx="36" cy="12" rx="9" ry="11" fill="#C4A882" />
            <path d="M25 26 C22 30 17 38 15 48 L12 88 L60 88 L57 48 C55 38 50 30 47 26 L36 32 Z" fill="#4A3D30" />
            <path d="M12 88 C10 104 9 118 11 135 L61 135 C63 118 62 104 60 88 Z" fill="#3D3228" />
            <path d="M20 88 C23 100 22 114 20 128" stroke="#5A4535" strokeWidth="1.2" fill="none" opacity="0.5" />
            <path d="M52 88 C49 100 50 114 52 128" stroke="#5A4535" strokeWidth="1.2" fill="none" opacity="0.5" />
            <path d="M25 28 L14 52" stroke="#C4A882" strokeWidth="6" strokeLinecap="round" />
            <path d="M47 28 L58 52" stroke="#C4A882" strokeWidth="6" strokeLinecap="round" />
            <rect x="27" y="135" width="7" height="9" rx="3.5" fill="#C4A882" />
            <rect x="38" y="135" width="7" height="9" rx="3.5" fill="#C4A882" />
          </svg>
          <span style={{ fontSize: 8, color: "#AAA", fontFamily: "'DM Sans', sans-serif", letterSpacing: "2px" }}>ZARA</span>
        </div>
      )}
    </div>
  );
};

const ZaraScreen: React.FC<{ frame: number }> = ({ frame }) => {
  // Cursor moves to URL bar (frames 40-70), selects URL (70-100), copy toast (100-140)
  const cursorToBar = interpolate(frame, [40, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const highlightWidth = interpolate(frame, [72, 105], [0, 218], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const copyOpacity = interpolate(frame, [108, 124], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const copyOut = interpolate(frame, [152, 168], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor position: starts at product area, floats up to URL bar
  const cursorY = interpolate(frame, [40, 68], [320, 48], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const cursorX = interpolate(frame, [40, 68], [120, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const showCursor = frame >= 38 && frame <= 108;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Status bar spacer */}
      <div style={{ height: 42 }} />

      {/* Safari chrome */}
      <div
        style={{
          padding: "0 10px 8px",
          borderBottom: "0.5px solid #E5E5E5",
          backgroundColor: "#F9F9F9",
        }}
      >
        {/* URL bar */}
        <div
          style={{
            backgroundColor: "#EBEBEB",
            borderRadius: 9,
            padding: "5px 10px",
            fontSize: 9,
            color: "#1C1C1E",
            display: "flex",
            alignItems: "center",
            gap: 4,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Highlight */}
          <div
            style={{
              position: "absolute",
              left: 8,
              top: 3,
              height: "calc(100% - 6px)",
              width: highlightWidth,
              backgroundColor: "rgba(0,122,255,0.3)",
              borderRadius: 3,
            }}
          />
          <span style={{ fontSize: 8, color: "#34C759", zIndex: 1 }}>🔒</span>
          <span style={{ fontSize: 8.5, zIndex: 1, letterSpacing: "-0.2px" }}>
            zara.com/uk/en/draped-short-dress-p04174238.html
          </span>
        </div>
      </div>

      {/* Product page */}
      <div style={{ flex: 1, overflowY: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Product image */}
        <ProductImage />

        {/* Product info */}
        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Name + price */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 13,
                fontWeight: 600,
                color: "#1C1C1E",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                lineHeight: 1.2,
                maxWidth: "60%",
              }}
            >
              DRAPED SHORT DRESS
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 12,
                fontWeight: 500,
                color: "#1C1C1E",
              }}
            >
              22.99 GBP
            </div>
          </div>

          {/* Color ref */}
          <div style={{ fontFamily: FONTS.sans, fontSize: 8, color: "#888", letterSpacing: "0.3px" }}>
            DARK KHAKI | 4174/238/507
          </div>

          <div style={{ height: 0.5, backgroundColor: "#E5E5E5" }} />

          {/* Buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                flex: 1,
                border: "1px solid #1C1C1E",
                borderRadius: 4,
                padding: "7px 0",
                textAlign: "center",
                fontFamily: FONTS.sans,
                fontSize: 9.5,
                fontWeight: 500,
                letterSpacing: "0.5px",
                color: "#1C1C1E",
              }}
            >
              ADD
            </div>
            <div
              style={{
                flex: 1,
                border: "1px solid #1C1C1E",
                borderRadius: 4,
                padding: "7px 0",
                textAlign: "center",
                fontFamily: FONTS.sans,
                fontSize: 9.5,
                fontWeight: 500,
                backgroundColor: "#000",
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <span style={{ fontSize: 8 }}>🍎</span> Pay
            </div>
          </div>

          {/* Description */}
          <div style={{ fontFamily: FONTS.sans, fontSize: 7.5, color: "#555", lineHeight: 1.5 }}>
            Short dress made from a cotton blend yarn. Featuring a round neck and short sleeves. Draped detail at the side.
          </div>
        </div>
      </div>

      {/* Animated cursor dot */}
      {showCursor && (
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "2px solid white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            pointerEvents: "none",
            zIndex: 20,
            transition: "none",
          }}
        />
      )}

      {/* Copy toast */}
      {copyOpacity * copyOut > 0.01 && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "6px 18px",
            backgroundColor: "rgba(0,0,0,0.75)",
            borderRadius: 20,
            fontSize: 10,
            color: "#FFF",
            opacity: Math.min(copyOpacity, copyOut),
            whiteSpace: "nowrap",
            zIndex: 30,
          }}
        >
          Lien copié ✓
        </div>
      )}
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
