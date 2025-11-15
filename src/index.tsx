import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPageDesktop } from "./screens/LandingPageDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPageDesktop />
  </StrictMode>,
);
