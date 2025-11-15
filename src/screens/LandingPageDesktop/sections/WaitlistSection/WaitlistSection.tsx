import React from "react";
import { Button } from "../../../../components/ui/button";

export const WaitlistSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center px-[124px] py-20 w-full bg-white">
      <div className="flex items-center justify-center gap-6 flex-1 bg-[#2d17fc] rounded-[10px] overflow-hidden min-h-[405px]">
        <img
          className="w-[610px] h-full object-cover"
          alt="Image"
          src="/image-7.png"
        />

        <div className="flex flex-col items-start justify-center gap-6 p-4 flex-1">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="[font-family:'Noto_Sans',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[51px]">
              Be first to experience the future of selling online
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#eeeeee] text-xl tracking-[0] leading-[normal]">
              Join 1, 000+ entrepreneurs waiting to sell boldly with Kaihma. Get
              early access, product updates, and exclusive founder insights.
            </p>
          </div>

          <Button className="w-[200px] h-14 bg-[#e09213] hover:bg-[#c97f0f] rounded-[100px] px-6 py-3">
            <span className="font-global-tokens-headings-h-6 font-[number:var(--global-tokens-headings-h-6-font-weight)] text-white text-[length:var(--global-tokens-headings-h-6-font-size)] tracking-[var(--global-tokens-headings-h-6-letter-spacing)] leading-[var(--global-tokens-headings-h-6-line-height)] whitespace-nowrap [font-style:var(--global-tokens-headings-h-6-font-style)]">
              Join the waitlist
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
