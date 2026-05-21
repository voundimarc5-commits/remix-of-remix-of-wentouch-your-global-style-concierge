import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { THEME, FONTS } from "./theme";
import { IPhoneMockup } from "./IPhoneMockup";

// Typing helper: returns visible string at current frame
function useTyping(text: string, startFrame: number, endFrame: number, frame: number): string {
  const chars = Math.floor(
    interpolate(frame, [startFrame, endFrame], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    })
  );
  return text.slice(0, chars);
}

// Blinking cursor
const Cursor: React.FC<{ frame: number; active: boolean }> = ({ frame, active }) => {
  if (!active) return null;
  const visible = Math.floor(frame / 8) % 2 === 0;
  return (
    <span
      style={{
        display: "inline-block",
        width: 1.5,
        height: 11,
        backgroundColor: THEME.textMain,
        verticalAlign: "middle",
        marginLeft: 1,
        opacity: visible ? 1 : 0,
      }}
    />
  );
};

// Field label
const FieldLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: FONTS.sans,
      fontSize: 7.5,
      letterSpacing: "1.8px",
      fontWeight: 600,
      color: THEME.textMain,
      textTransform: "uppercase",
      marginBottom: 5,
      display: "flex",
      alignItems: "center",
      gap: 3,
    }}
  >
    {children}
    <span style={{ color: THEME.gold, fontSize: 8 }}>*</span>
  </div>
);

// Input field
const Field: React.FC<{
  label: string;
  value: string;
  placeholder: string;
  active: boolean;
  done: boolean;
  frame: number;
  isDropdown?: boolean;
  dropdownOpen?: boolean;
}> = ({ label, value, placeholder, active, done, frame, isDropdown, dropdownOpen }) => (
  <div>
    <FieldLabel>{label}</FieldLabel>
    <div
      style={{
        border: `1px solid ${active ? THEME.gold : done ? "#D5C9B8" : "#E8E4DE"}`,
        borderRadius: 8,
        padding: "9px 11px",
        backgroundColor: active ? "#FFFDF9" : "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 36,
        transition: "border-color 0.2s",
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.sans,
          fontSize: 10,
          color: value ? THEME.textMain : "#C0B9AE",
          flex: 1,
        }}
      >
        {value || placeholder}
        {active && <Cursor frame={frame} active={active} />}
      </span>
      {isDropdown && (
        <span style={{ fontSize: 8, color: "#AAA", marginLeft: 6 }}>▾</span>
      )}
    </div>
    {/* Dropdown open state */}
    {isDropdown && dropdownOpen && (
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          backgroundColor: "#FFF",
          border: "1px solid #E0D9D0",
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          overflow: "hidden",
          marginTop: 2,
          width: "100%",
        }}
      >
        {["Douala", "Yaoundé", "Bafoussam"].map((city, i) => (
          <div
            key={city}
            style={{
              padding: "8px 11px",
              fontFamily: FONTS.sans,
              fontSize: 10,
              color: i === 0 ? THEME.gold : THEME.textMain,
              backgroundColor: i === 0 ? "#FBF8F2" : "transparent",
              fontWeight: i === 0 ? 500 : 400,
            }}
          >
            {city}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Timing constants (relative to scene frame, max 209)
// Phase 1: URL typing + click (0-118)
// Phase 2: form appears (118-135), then fields animate
const F = {
  step2In:      [118, 135],
  nom:          [138, 152],   // "Marie Mbongo" 13 chars
  whatsapp:     [155, 168],   // "+237 696 157 575" 16 chars
  email:        [171, 182],   // "marie@wentouch.com" 18 chars
  villeOpen:    [185, 189],   // dropdown opens
  villeSelect:  [189, 193],   // Douala selected
  btnPulse:     [196, 209],   // button pulse
};

const NOM_TEXT = "Marie Mbongo";
const WA_TEXT = "+237 696 157 575";
const EMAIL_TEXT = "marie@wentouch.com";

const WentouchScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const zaraUrl = "zara.com/uk/en/draped-short-dress-p04174238.html";

  // ── Phase 1: URL typing ──────────────────────────────────────
  const typedChars = Math.floor(
    interpolate(frame, [20, 82], [0, zaraUrl.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    })
  );

  const btnGlow = interpolate(frame, [85, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const btnScale = interpolate(frame, [100, 108, 115], [1, 0.91, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const step1Opacity = interpolate(frame, [112, 132], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });

  // ── Phase 2: form appears ────────────────────────────────────
  const step2Opacity = interpolate(frame, F.step2In, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const step2Y = interpolate(frame, F.step2In, [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // ── Field values ─────────────────────────────────────────────
  const nomVal    = useTyping(NOM_TEXT,   F.nom[0],     F.nom[1],     frame);
  const waVal     = useTyping(WA_TEXT,    F.whatsapp[0],F.whatsapp[1],frame);
  const emailVal  = useTyping(EMAIL_TEXT, F.email[0],   F.email[1],   frame);
  const villeVal  = frame >= F.villeSelect[1] ? "Douala" : "";

  const isNomActive    = frame >= F.nom[0]     && frame < F.whatsapp[0];
  const isWaActive     = frame >= F.whatsapp[0]&& frame < F.email[0];
  const isEmailActive  = frame >= F.email[0]   && frame < F.villeOpen[0];
  const isVilleActive  = frame >= F.villeOpen[0]&& frame < F.villeSelect[1] + 4;
  const dropdownOpen   = frame >= F.villeOpen[0] && frame < F.villeSelect[1] + 3;

  // Button pulse (after all fields done)
  const btnPulseOpacity = interpolate(frame, [F.btnPulse[0], F.btnPulse[0] + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const btnPulseScale = interpolate(
    frame,
    [F.btnPulse[0] + 4, F.btnPulse[0] + 9],
    [1, 1.03],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.sine) }
  );

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
      <div style={{ height: 42 }} />

      {/* Header */}
      <div style={{ padding: "0 16px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: FONTS.serif, fontSize: 18, fontWeight: 500, color: THEME.textMain }}>
          Wen<span style={{ color: THEME.gold, fontStyle: "italic" }}>touch</span>
        </div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 7, letterSpacing: "1.5px", color: "#999", textTransform: "uppercase" }}>
          CONCIERGERIE — EUROPE
        </div>
      </div>

      <div style={{ flex: 1, padding: "0 16px", display: "flex", flexDirection: "column", gap: 8, overflowY: "hidden" }}>
        {/* Back + title (step 1 phase) */}
        {!isStep2 && (
          <div style={{ opacity: step1Opacity }}>
            <div style={{ fontFamily: FONTS.sans, fontSize: 7.5, color: "#AAA", letterSpacing: "0.5px", marginBottom: 4 }}>
              ← ACCUEIL
            </div>
            <div style={{ fontFamily: FONTS.sans, fontSize: 7.5, letterSpacing: "2px", color: THEME.gold, fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>
              NOUVELLE COMMANDE
            </div>
            <div style={{ fontFamily: FONTS.serif, fontSize: 18, fontWeight: 500, color: THEME.textMain, lineHeight: 1.1 }}>
              Trouvez-le en Europe.
            </div>
            <div style={{ fontFamily: FONTS.serif, fontSize: 17, fontStyle: "italic", color: THEME.gold, lineHeight: 1.2, marginBottom: 8 }}>
              Nous nous occupons du reste.
            </div>
            <div style={{ width: 28, height: 0.5, backgroundColor: THEME.gold, opacity: 0.6, marginBottom: 8 }} />

            {/* Progress step 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 8 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", border: `1.5px solid ${THEME.gold}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: FONTS.sans, fontSize: 7, color: THEME.gold, fontWeight: 700 }}>1</span>
              </div>
              <span style={{ fontFamily: FONTS.sans, fontSize: 7, letterSpacing: "1.5px", color: THEME.textMain, fontWeight: 600, textTransform: "uppercase" }}>ARTICLES</span>
              <div style={{ flex: 1, height: 0.5, backgroundColor: "#DDD", margin: "0 3px" }} />
              {[["2","COORDONNÉES"],["3","DEVIS"]].map(([n, l]) => (
                <React.Fragment key={n}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid #CCC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 7, color: "#CCC", fontWeight: 700 }}>{n}</span>
                  </div>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 6.5, letterSpacing: "1px", color: "#CCC", textTransform: "uppercase" }}>{l}</span>
                  {n === "2" && <div style={{ flex: 1, height: 0.5, backgroundColor: "#DDD", margin: "0 3px" }} />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1 panel */}
            <div style={{ backgroundColor: "#FFF", borderRadius: 14, padding: "14px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: FONTS.sans, fontSize: 7.5, letterSpacing: "1.5px", color: THEME.gold, fontWeight: 600, textTransform: "uppercase" }}>ÉTAPE 1</div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 14, fontWeight: 500, color: THEME.textMain }}>Collez le lien de votre article</div>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{
                  flex: 1, border: `1px solid ${typedChars > 0 ? THEME.gold : "#DDD"}`,
                  borderRadius: 8, padding: "7px 8px", fontFamily: FONTS.sans, fontSize: 7.5,
                  color: typedChars > 0 ? THEME.textMain : "#CCC", backgroundColor: "#FAFAFA",
                  display: "flex", alignItems: "center", minHeight: 28, overflow: "hidden",
                }}>
                  {typedChars > 0 ? (
                    <span style={{ wordBreak: "break-all" }}>
                      {zaraUrl.slice(0, typedChars)}
                      {typedChars < zaraUrl.length && <span style={{ borderRight: "1.5px solid #888", height: 10, marginLeft: 1, display: "inline-block", verticalAlign: "middle" }} />}
                    </span>
                  ) : "https://www.zara.com/fr/..."}
                </div>
                <div style={{
                  backgroundColor: typedChars >= zaraUrl.length ? THEME.gold : "#CCC",
                  borderRadius: 8, padding: "7px 10px", fontFamily: FONTS.sans, fontSize: 8,
                  fontWeight: 600, color: "#FFF", whiteSpace: "nowrap", display: "flex", alignItems: "center",
                  transform: `scale(${btnScale})`,
                  boxShadow: btnGlow > 0.01 ? `0 0 ${14 * btnGlow}px rgba(184,148,44,${0.5 * btnGlow})` : "none",
                }}>Continuer →</div>
              </div>
              <div style={{ fontFamily: FONTS.sans, fontSize: 7, color: "#AAA", lineHeight: 1.5 }}>
                Zara, ASOS, Sephora, Farfetch, Amazon UK — tout lien européen accepté.
              </div>
              <div style={{ height: 0.5, backgroundColor: "#EEE" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", border: `1.5px dashed ${THEME.gold}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: THEME.gold, fontSize: 11, lineHeight: 1 }}>+</span>
                </div>
                <span style={{ fontFamily: FONTS.sans, fontSize: 7, color: "#BBB" }}>
                  Vous pourrez ajouter d'autres articles après avoir renseigné le premier.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — coordonnées */}
        {step2Opacity > 0.01 && (
          <div
            style={{
              opacity: step2Opacity,
              transform: `translateY(${interpolate(frame, F.step2In, [12, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* + Ajouter un autre article */}
            <div style={{
              border: `1.5px dashed ${THEME.gold}`, borderRadius: 10, padding: "8px",
              textAlign: "center", fontFamily: FONTS.sans, fontSize: 7.5, letterSpacing: "2px",
              color: THEME.gold, fontWeight: 600, textTransform: "uppercase", marginBottom: 8,
            }}>
              + AJOUTER UN AUTRE ARTICLE
            </div>

            {/* Coordonnées panel */}
            <div style={{
              backgroundColor: "#FFF", borderRadius: 14, padding: "14px 14px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              display: "flex", flexDirection: "column", gap: 10, position: "relative",
            }}>
              <div style={{ fontFamily: FONTS.sans, fontSize: 8, letterSpacing: "1.5px", color: THEME.gold, fontWeight: 600, textTransform: "uppercase" }}>
                ÉTAPE 2
              </div>
              <div style={{ fontFamily: FONTS.serif, fontSize: 16, fontWeight: 500, color: THEME.textMain, marginBottom: 2 }}>
                Vos coordonnées
              </div>

              <Field label="NOM COMPLET" value={nomVal} placeholder="Marie Mbongo"
                active={isNomActive} done={nomVal.length > 0} frame={frame} />
              <Field label="WHATSAPP" value={waVal} placeholder="+237 6XX XXX XXX"
                active={isWaActive} done={waVal.length > 0} frame={frame} />
              <Field label="EMAIL" value={emailVal} placeholder="marie@example.com"
                active={isEmailActive} done={emailVal.length > 0} frame={frame} />

              {/* Ville dropdown */}
              <div style={{ position: "relative" }}>
                <Field label="VILLE DE LIVRAISON" value={villeVal} placeholder="— Sélectionnez —"
                  active={isVilleActive} done={villeVal.length > 0} frame={frame}
                  isDropdown dropdownOpen={dropdownOpen} />
              </div>
            </div>

            {/* Legal note */}
            <div style={{
              fontFamily: FONTS.sans, fontSize: 7, color: "#AAA", lineHeight: 1.6,
              textAlign: "center", padding: "8px 4px",
            }}>
              En soumettant, vous autorisez Wentouch à effectuer vos achats.{"\n"}
              Les frais de transport seront confirmés avant expédition.
            </div>

            {/* Valider button */}
            <div style={{
              backgroundColor: THEME.gold, borderRadius: 10, padding: "11px",
              textAlign: "center", fontFamily: FONTS.sans, fontSize: 9.5,
              fontWeight: 700, color: "#FFF", letterSpacing: "2px", textTransform: "uppercase",
              opacity: btnPulseOpacity,
              transform: `scale(${frame >= 222 ? btnPulseScale : 1})`,
              boxShadow: frame >= F.btnPulse[0]
                ? `0 4px 18px rgba(184,148,44,0.45)`
                : "none",
            }}>
              VALIDER MA COMMANDE →
            </div>
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
        <div style={{
          fontFamily: FONTS.sans, fontSize: 16, letterSpacing: "3px",
          color: THEME.gold, fontWeight: 500, opacity: labelOpacity, textTransform: "uppercase",
        }}>
          ÉTAPE 2
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 50, fontWeight: 500, color: THEME.textMain,
          opacity: titleOpacity, transform: `translateY(${titleY}px)`, lineHeight: 1.12,
        }}>
          Collez le lien sur wentouch.shop
        </div>
        <div style={{
          fontFamily: FONTS.serif, fontSize: 46, fontStyle: "italic", color: THEME.gold,
          opacity: subOpacity, lineHeight: 1.12,
        }}>
          Renseignez vos coordonnées.
        </div>
      </div>

      <div style={{
        opacity: phoneOpacity, transform: `translateY(${phoneY}px)`,
        filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22))",
      }}>
        <IPhoneMockup scale={1.52}>
          <WentouchScreen frame={frame} />
        </IPhoneMockup>
      </div>
    </div>
  );
};
