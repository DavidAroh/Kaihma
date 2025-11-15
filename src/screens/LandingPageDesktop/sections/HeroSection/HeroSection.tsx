import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const floatingCards = [
  {
    top: "top-[13px]",
    left: "left-[651px]",
    image: "/rectangle-15.png",
    text: "Converts 17% better on sales",
  },
  {
    bottom: "bottom-0",
    right: "right-[18px]",
    image: "/rectangle-15-1.png",
    text: "Free, fast, flexible and reliable",
  },
  {
    top: "top-[344px]",
    left: "left-[555px]",
    image: "/rectangle-15-2.png",
    text: "Get more done with AI",
  },
];

const companyLogos = [
  { src: "/logo-4.svg", alt: "Logo", width: "w-[169px]", height: "h-10" },
  { src: "/logo.svg", alt: "Logo", width: "w-[100px]", height: "h-10" },
  { src: "/logo-2.svg", alt: "Logo", width: "w-[100px]", height: "h-[51px]" },
  { src: "/logo-1.svg", alt: "Logo", width: "w-44", height: "h-10" },
  { src: "/logo-3.svg", alt: "Logo", width: "w-[52px]", height: "h-11" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 px-[124px] py-20 w-full bg-white">
      <div className="justify-center gap-6 px-0 py-6 w-full flex items-center relative">
        <div className="flex flex-col items-start justify-center gap-6 px-0 py-6 flex-1">
          <h1 className="self-stretch mt-[-1.00px] [font-family:'Noto_Sans',Helvetica] font-normal text-transparent text-[64px] tracking-[0] leading-[64px]">
            <span className="font-semibold text-[#2d17fc]">Build</span>
            <span className="font-semibold text-[#333333]">&nbsp;</span>
            <span className="font-semibold text-[#2d17fc]">your</span>
            <span className="font-semibold text-[#333333]">&nbsp;</span>
            <span className="font-semibold text-[#2d17fc]">store</span>
            <span className="font-semibold text-[#333333]">
              {" "}
              in a few minutes
            </span>
          </h1>

          <p className="self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#606060] text-xl tracking-[0] leading-6">
            Build a gorgeous online store, collect payments confidently, and
            find reliable delivery partners, all in one place built for
            Africa&apos;s reality.
          </p>

          <div className="inline-flex items-start gap-4">
            <Button className="h-14 px-6 py-3 bg-[#2d17fc] hover:bg-[#2d17fc]/90 rounded-[100px] font-global-tokens-headings-h-6 font-[number:var(--global-tokens-headings-h-6-font-weight)] text-white text-[length:var(--global-tokens-headings-h-6-font-size)] tracking-[var(--global-tokens-headings-h-6-letter-spacing)] leading-[var(--global-tokens-headings-h-6-line-height)] [font-style:var(--global-tokens-headings-h-6-font-style)]">
              Join the waitlist
            </Button>

            <Button
              variant="outline"
              className="h-14 px-6 py-3 rounded-[100px] border-[0.5px] border-[#2d17fc] bg-transparent hover:bg-[#2d17fc]/5 font-global-tokens-headings-h-6 font-[number:var(--global-tokens-headings-h-6-font-weight)] text-[#2d17fc] text-[length:var(--global-tokens-headings-h-6-font-size)] tracking-[var(--global-tokens-headings-h-6-letter-spacing)] leading-[var(--global-tokens-headings-h-6-line-height)] [font-style:var(--global-tokens-headings-h-6-font-style)]"
            >
              See how it works
            </Button>
          </div>
        </div>

        <div className="flex-1 relative h-[385px]">
          <div className="absolute -top-10 -left-10 w-[555px] h-[555px] z-0">
            <div className="absolute top-[calc(50.00%_-_224px)] left-[calc(50.00%_-_224px)] w-[450px] h-[450px] bg-[#e8e8e8] rounded-[225px] blur-[60px] opacity-80" />
            <img
              className="absolute top-[calc(50.00%_-_278px)] left-[calc(50.00%_-_278px)] w-[555px] h-[555px] object-cover"
              alt="Ai intelligence"
              src="/rectangle-15-2.png"
            />
          </div>
          <img
            className="relative z-10 w-full h-full rounded-[10px] object-cover"
            alt="Image"
            src="/image.png"
          />
        </div>

        {floatingCards.map((card, index) => (
          <Card
            key={index}
            className={`flex w-[200px] items-center justify-center p-0.5 absolute ${card.top || ""} ${card.left || ""} ${card.bottom || ""} ${card.right || ""} bg-white rounded-[10px] shadow-[0px_4px_9.5px_#0000001a] border-0`}
          >
            <CardContent className="flex items-center justify-center p-0">
              <img
                className="w-[60px] h-[60px] object-cover"
                alt="Feature icon"
                src={card.image}
              />
              <p className="flex-1 [font-family:'DM_Sans',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-6">
                {card.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 px-0 py-6 w-full">
        <h2 className="w-fit mt-[-1.00px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#606060] text-lg tracking-[0] leading-6 whitespace-nowrap">
          Trusted by Top Companies
        </h2>

        <div className="flex items-center justify-between px-0 py-4 w-full">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              className={`${logo.width} ${logo.height}`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
