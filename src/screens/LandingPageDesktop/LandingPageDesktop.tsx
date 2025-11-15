import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FAQsSection } from "./sections/FAQsSection";
import { FooterSection } from "./sections/FooterSection";
import { GetTheAppSection } from "./sections/GetTheAppSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { WaitlistSection } from "./sections/WaitlistSection";

export const LandingPageDesktop = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen flex bg-neutral-50 overflow-hidden">
      <div className="flex w-full relative flex-col items-center pt-[124px]">
        <HeaderSection />
        <HeroSection />
        <HowItWorksSection />
        <AboutUsSection />
        <HighlightsSection />
        <WaitlistSection />
        <FAQsSection />
        <GetTheAppSection />
        <FooterSection />
      </div>
    </main>
  );
};
