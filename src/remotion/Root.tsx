import React from "react";
import { Composition } from "remotion";
import { WentouchProcess } from "./WentouchProcess";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="WentouchProcess"
      component={WentouchProcess}
      durationInFrames={720}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
