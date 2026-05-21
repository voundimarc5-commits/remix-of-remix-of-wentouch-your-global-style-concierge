import React from "react";
import { useCurrentFrame, interpolate, Easing, Sequence } from "remotion";
import { THEME } from "./theme";
import { DotBackground } from "./DotBackground";
import { Scene1Title } from "./Scene1Title";
import { Scene2Step1 } from "./Scene2Step1";
import { Scene3Step2 } from "./Scene3Step2";
import { Scene4Step3 } from "./Scene4Step3";
import { Scene5CTA } from "./Scene5CTA";

const FADE = 18;

// Scene boundaries (global frames)
const SCENES = [
  { start: 0,   end: 90  },  // Scene 1
  { start: 90,  end: 270 },  // Scene 2
  { start: 270, end: 480 },  // Scene 3
  { start: 480, end: 630 },  // Scene 4
  { start: 630, end: 720 },  // Scene 5
];

function useSceneOpacity(sceneIndex: number): number {
  const frame = useCurrentFrame();
  const { start, end } = SCENES[sceneIndex];
  const fadeIn = interpolate(frame, [start, start + FADE], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const fadeOut = interpolate(frame, [end - FADE, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  return Math.min(fadeIn, fadeOut);
}

const SceneWrapper: React.FC<{ sceneIndex: number; children: React.ReactNode }> = ({
  sceneIndex,
  children,
}) => {
  const opacity = useSceneOpacity(sceneIndex);
  return (
    <div style={{ position: "absolute", inset: 0, opacity }}>
      {children}
    </div>
  );
};

export const WentouchProcess: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: THEME.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DotBackground />

      {/* Scene 1 */}
      <SceneWrapper sceneIndex={0}>
        <Sequence from={0} durationInFrames={90} layout="none">
          <Scene1Title />
        </Sequence>
      </SceneWrapper>

      {/* Scene 2 */}
      <SceneWrapper sceneIndex={1}>
        <Sequence from={90} durationInFrames={180} layout="none">
          <Scene2Step1 />
        </Sequence>
      </SceneWrapper>

      {/* Scene 3 */}
      <SceneWrapper sceneIndex={2}>
        <Sequence from={270} durationInFrames={210} layout="none">
          <Scene3Step2 />
        </Sequence>
      </SceneWrapper>

      {/* Scene 4 */}
      <SceneWrapper sceneIndex={3}>
        <Sequence from={480} durationInFrames={150} layout="none">
          <Scene4Step3 />
        </Sequence>
      </SceneWrapper>

      {/* Scene 5 */}
      <SceneWrapper sceneIndex={4}>
        <Sequence from={630} durationInFrames={90} layout="none">
          <Scene5CTA />
        </Sequence>
      </SceneWrapper>
    </div>
  );
};
