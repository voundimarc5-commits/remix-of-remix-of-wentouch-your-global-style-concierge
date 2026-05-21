import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { THEME, FONTS } from "./theme";
import { IPhoneMockup } from "./IPhoneMockup";

// Progress step indicator
const ProgressStep: React.FC<{ n: number; label: string; active: boolean; done?: boolean }> = ({
  n,
  label,
  active,
  done,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `1.5px solid ${active || done ? THEME.gold : "#CCC"}`,
        backgroundColor: done ? THEME.gold : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.sans,
          fontSize: 7.5,
          color: done ? "#FFF" : active ? THEME.gold : "#CCC",
          fontWeight: 600,
        }}
      >
        {n}
      </span>
    </div>
    <span
      style={{
        fontFamily: FONTS.sans,
        fontSize: 7,
        letterSpacing: "1.5px",
        fontWeight: 600,
        color: active ? THEME.textMain : "#BBB",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  </div>
);

const ProgressBar: React.FC<{ step: number }> = ({ step }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
    <ProgressStep n={1} label="ARTICLES" active={step === 1} done={step > 1} />
    <div
      style={{
        flex: 1,
        height: 0.5,
        backgroundColor: step > 1 ? THEME.gold : "#DDD",
        margin: "0 4px",
      }}
    />
    <ProgressStep n={2} label="COORDONNÉES" active={step === 2} done={step > 2} />
    <div style={{ flex: 1, height: 0.5, backgroundColor: "#DDD", margin: "0 4px" }} />
    <ProgressStep n={3} label="DEVIS" active={step === 3} />
  </div>
);

const WentouchScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const zaraUrl = "zara.com/uk/en/draped-short-dress-p04174238.html";

  // Phase 1: type the Zara URL into input (frames 20-80)
  const typedChars = Math.floor(
    interpolate(frame, [20, 82], [0, zaraUrl.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    })
  );

  // Phase 2: button lights up (frames 85-100)
  const btnGlow = interpolate(frame, [85, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Phase 3: button click (frames 100-112)
  const btnScale = interpolate(frame, [100, 108, 115], [1, 0.91, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Phase 4: transition to step 2 (frames 118+)
  const step2Opacity = interpolate(frame, [118, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const step1Opacity = interpolate(frame, [112, 132], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });

  const isStep2 = frame >= 132;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F5F0EB",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Status bar spacer */}
      <div style={{ height: 42 }} />

      {/* Header */}
      <div
        style={{
          padding: "0 16px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 18,
            fontWeight: 500,
            color: THEME.textMain,
          }}
        >
          Wen<span style={{ color: THEME.gold, fontStyle: "italic" }}>touch</span>
        </div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 7,
            letterSpacing: "1.5px",
            color: "#999",
            textTransform: "uppercase",
          }}
        >
          CONCIERGERIE — EUROPE
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex: 1, padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Back link */}
        <div style={{ fontFamily: FONTS.sans, fontSize: 7.5, color: "#AAA", letterSpacing: "0.5px" }}>
          ← ACCUEIL
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 7.5,
            letterSpacing: "2px",
            color: THEME.gold,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          NOUVELLE COMMANDE
        </div>

        {/* Title */}
        <div>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: 20,
              fontWeight: 500,
              color: THEME.textMain,
              lineHeight: 1.1,
            }}
          >
            Trouvez-le en Europe.
          </div>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: 19,
              fontStyle: "italic",
              color: THEME.gold,
              lineHeight: 1.2,
            }}
          >
            Nous nous occupons du reste.
          </div>
        </div>

        {/* Gold separator */}
        <div style={{ width: 28, height: 1, backgroundColor: THEME.gold, opacity: 0.6 }} />

        {/* Subtitle */}
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 8,
            color: "#888",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          Collez le lien de votre article, renseignez les détails{"\n"}et recevez votre devis instantanément.
        </div>

        {/* Progress bar */}
        <ProgressBar step={isStep2 ? 2 : 1} />

        {/* Step panel */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 14,
            padding: "14px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* STEP 1 content */}
          <div style={{ opacity: step1Opacity }}>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 8,
                letterSpacing: "1.5px",
                color: THEME.gold,
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              ÉTAPE 1
            </div>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 15,
                fontWeight: 500,
                color: THEME.textMain,
                marginBottom: 10,
              }}
            >
              Collez le lien de votre article
            </div>

            {/* Input + button */}
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={{
                  flex: 1,
                  border: `1px solid ${typedChars > 0 ? THEME.gold : "#DDD"}`,
                  borderRadius: 8,
                  padding: "7px 8px",
                  fontFamily: FONTS.sans,
                  fontSize: 7.5,
                  color: typedChars > 0 ? THEME.textMain : "#CCC",
                  backgroundColor: "#FAFAFA",
                  display: "flex",
                  alignItems: "center",
                  minHeight: 30,
                  transition: "border-color 0.3s",
                  overflow: "hidden",
                }}
              >
                {typedChars > 0 ? (
                  <span style={{ wordBreak: "break-all" }}>
                    {zaraUrl.slice(0, typedChars)}
                    {typedChars < zaraUrl.length && (
                      <span
                        style={{
                          borderRight: "1.5px solid #888",
                          height: 10,
                          marginLeft: 1,
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      />
                    )}
                  </span>
                ) : (
                  "https://www.zara.com/fr/..."
                )}
              </div>
              <div
                style={{
                  backgroundColor: typedChars >= zaraUrl.length ? THEME.gold : "#CCC",
                  borderRadius: 8,
                  padding: "7px 10px",
                  fontFamily: FONTS.sans,
                  fontSize: 8,
                  fontWeight: 600,
                  color: "#FFF",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  transform: `scale(${btnScale})`,
                  boxShadow:
                    btnGlow > 0.01
                      ? `0 0 ${14 * btnGlow}px rgba(184,148,44,${0.5 * btnGlow})`
                      : "none",
                  transition: "background-color 0.3s",
                }}
              >
                Continuer →
              </div>
            </div>

            {/* Accepted sites */}
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 7,
                color: "#AAA",
                lineHeight: 1.5,
                marginTop: 4,
              }}
            >
              Zara, ASOS, Sephora, Farfetch, Amazon UK — tout lien européen accepté.
            </div>

            {/* Add more */}
            <div
              style={{
                height: 0.5,
                backgroundColor: "#EEE",
                margin: "8px 0",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: `1.5px dashed ${THEME.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: THEME.gold, fontSize: 12, lineHeight: 1 }}>+</span>
              </div>
              <span style={{ fontFamily: FONTS.sans, fontSize: 7.5, color: "#BBB" }}>
                Vous pourrez ajouter d'autres articles après avoir renseigné le premier.
              </span>
            </div>
          </div>

          {/* STEP 2 content — coordonnées */}
          {step2Opacity > 0.01 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "14px 14px",
                opacity: step2Opacity,
                backgroundColor: "#FFF",
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 8,
                  letterSpacing: "1.5px",
                  color: THEME.gold,
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                ÉTAPE 2
              </div>
              <div
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 14,
                  fontWeight: 500,
                  color: THEME.textMain,
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
                    border: "1px solid #E8E8E8",
                    borderRadius: 7,
                    padding: "6px 10px",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <div style={{ fontFamily: FONTS.sans, fontSize: 6.5, color: "#AAA", marginBottom: 2 }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: FONTS.sans, fontSize: 9, color: THEME.textMain, fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              ))}
              <div
                style={{
                  backgroundColor: THEME.gold,
                  borderRadius: 8,
                  padding: "8px",
                  textAlign: "center",
                  fontFamily: FONTS.sans,
                  fontSize: 9,
                  fontWeight: 600,
                  color: "#FFF",
                  marginTop: 2,
                }}
              >
                Obtenir mon devis →
              </div>
            </div>
          )}
        </div>
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
