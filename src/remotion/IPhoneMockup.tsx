import React from "react";
import { THEME } from "./theme";

interface IPhoneMockupProps {
  children: React.ReactNode;
  scale?: number;
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({
  children,
  scale = 1,
}) => {
  const W = 340;
  const H = 680;
  const R = 46;

  return (
    <div
      style={{
        width: W * scale,
        height: H * scale,
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        position: "relative",
      }}
    >
      {/* Phone body */}
      <div
        style={{
          width: W,
          height: H,
          borderRadius: R,
          backgroundColor: THEME.iphoneBlack,
          position: "relative",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.45), 0 0 0 1.5px #3A3A3A, inset 0 0 0 1px #555",
          overflow: "hidden",
        }}
      >
        {/* Screen */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            borderRadius: R - 8,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          {children}
        </div>

        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 28,
            borderRadius: 14,
            backgroundColor: THEME.iphoneBlack,
            zIndex: 10,
          }}
        />

        {/* Side buttons */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 100,
            width: 3,
            height: 36,
            borderRadius: "3px 0 0 3px",
            backgroundColor: "#2C2C2C",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 150,
            width: 3,
            height: 60,
            borderRadius: "3px 0 0 3px",
            backgroundColor: "#2C2C2C",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 224,
            width: 3,
            height: 60,
            borderRadius: "3px 0 0 3px",
            backgroundColor: "#2C2C2C",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 160,
            width: 3,
            height: 80,
            borderRadius: "0 3px 3px 0",
            backgroundColor: "#2C2C2C",
          }}
        />
      </div>
    </div>
  );
};
