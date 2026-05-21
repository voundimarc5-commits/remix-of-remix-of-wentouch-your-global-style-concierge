import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { THEME, FONTS } from "./theme";
import { IPhoneMockup } from "./IPhoneMockup";

const WentouchScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const url = "order.wentouch.shop";
  const urlChars = Math.floor(
    interpolate(frame, [15, 55], [0, url.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    })
  );

  const link = "zara.com/fr/fr/robe-longue-soie";
  const linkChars = Math.floor(
    interpolate(frame, [55, 100], [0, link.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    })
  );

  const btnGlow = interpolate(frame, [100, 118], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const btnScale = interpolate(frame, [118, 128, 134], [1, 0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const formOpacity = interpolate(frame, [134, 158], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAF8",
        fontFamily: FONTS.sans,
        display: "flex",
        flexDirection: "column",
        paddingTop: 42,
      }}
    >
      {/* Safari bar */}
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
        }}
      >
        <span style={{ fontSize: 9, color: "#007AFF" }}>🔒</span>
        <span>{url.slice(0, urlChars)}</span>
        {urlChars < url.length && (
          <span style={{ borderRight: "1.5px solid #888", height: 10 }} />
        )}
      </div>

      <div style={{ flex: 1, padding: "14px 14px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Logo */}
        <div style={{ fontSize: 15, fontWeight: 700, color: THEME.textMain, fontFamily: FONTS.serif }}>
          Wen<span style={{ color: THEME.gold, fontStyle: "italic" }}>touch</span>
          <span style={{ fontFamily: FONTS.sans, fontSize: 9, color: "#AAA", fontStyle: "normal", marginLeft: 6 }}>
            · Shopping Conciergerie
          </span>
        </div>

        <div style={{ fontSize: 9, color: "#888" }}>Collez le lien du produit européen</div>

        {/* Link input */}
        <div
          style={{
            border: `1px solid ${linkChars > 0 ? THEME.gold : "#DDD"}`,
            borderRadius: 7,
            padding: "7px 8px",
            fontSize: 8.5,
            color: "#444",
            backgroundColor: "#FFF",
            minHeight: 30,
            display: "flex",
            alignItems: "center",
            transition: "border-color 0.3s",
          }}
        >
          {linkChars > 0 ? (
            <>
              {link.slice(0, linkChars)}
              {linkChars < link.length && (
                <span style={{ borderRight: "1.5px solid #888", height: 10, marginLeft: 1 }} />
              )}
            </>
          ) : (
            <span style={{ color: "#CCC" }}>https://...</span>
          )}
        </div>

        {/* Commander button */}
        <div
          style={{
            backgroundColor: THEME.gold,
            borderRadius: 8,
            padding: "9px 12px",
            textAlign: "center",
            fontSize: 10.5,
            fontWeight: 600,
            color: "#FFF",
            transform: `scale(${btnScale})`,
            boxShadow:
              btnGlow > 0.01
                ? `0 0 ${18 * btnGlow}px ${8 * btnGlow}px rgba(184,148,44,${0.45 * btnGlow})`
                : "none",
          }}
        >
          Commander →
        </div>

        {/* Form filled */}
        {formOpacity > 0.01 && (
          <div
            style={{
              opacity: formOpacity,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginTop: 2,
            }}
          >
            <div
              style={{
                fontSize: 7.5,
                color: "#999",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                fontWeight: 500,
              }}
            >
              Vos coordonnées
            </div>
            {[
              { label: "Nom complet", value: "Marie Mbongo" },
              { label: "Ville", value: "Douala, Cameroun" },
              { label: "WhatsApp", value: "+237 6XX XXX XXX" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: 6,
                  padding: "5px 8px",
                  backgroundColor: "#FFF",
                }}
              >
                <div style={{ fontSize: 7, color: "#AAA", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 9, color: THEME.textMain, fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Scene3Step2: React.FC = () => {
  const frame = useCurrentFrame();

  const phoneOpacity = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phoneY = interpolate(frame, [0, 28], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.1)),
  });

  const labelOpacity = interpolate(frame, [10, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleY = interpolate(frame, [20, 50], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subOpacity = interpolate(frame, [38, 68], [0, 1], {
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
          ÉTAPE 2
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 50,
            fontWeight: 500,
            color: THEME.textMain,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            lineHeight: 1.12,
          }}
        >
          Collez le lien sur wentouch.shop
        </div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 46,
            fontStyle: "italic",
            color: THEME.gold,
            opacity: subOpacity,
            lineHeight: 1.12,
          }}
        >
          Renseignez vos coordonnées.
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
          <WentouchScreen frame={frame} />
        </IPhoneMockup>
      </div>
    </div>
  );
};
