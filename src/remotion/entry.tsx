import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

// Load Google Fonts for Remotion renderer
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap";
document.head.appendChild(fontLink);

registerRoot(RemotionRoot);
