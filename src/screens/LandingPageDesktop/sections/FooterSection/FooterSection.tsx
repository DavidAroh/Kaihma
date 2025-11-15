import React from "react";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = [
  { label: "How it works" },
  { label: "Highlights" },
  { label: "About Us" },
  { label: "FAQs" },
];

const contactLinks = [{ label: "Email" }, { label: "Phone" }];

const legalLinks = [{ label: "Terms of service" }, { label: "Privacy policy" }];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-6 px-[124px] py-10 w-full bg-[#2d17fc]">
      <div className="flex justify-between px-0 py-2 w-full items-start">
        <div className="inline-flex items-end justify-center gap-1">
          <img
            className="w-[42.81px] h-[60.23px] mt-[-0.25px]"
            alt="Group"
            src="/group-4-1.png"
          />

          <div className="inline-flex flex-col items-start">
            <div className="mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-white text-2xl text-center tracking-[8.00px] leading-[30px]">
              Kaihma
            </div>

            <div className="-mt-1.5 [font-family:'DM_Sans',Helvetica] font-normal italic text-[#2d004e] text-[10px] text-center tracking-[0.40px] leading-[15px]">
              ...sell boldly, build freely
            </div>
          </div>
        </div>

        <nav className="inline-flex flex-col gap-6 rounded-[20px] items-start">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] text-left hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col w-[79px] items-start gap-3.5">
          {contactLinks.map((link, index) => (
            <button
              key={index}
              className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] text-left hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col w-[265px] items-start gap-2.5">
          <div className="mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Follow Us:
          </div>

          <img className="w-full" alt="Icons" src="/icons.svg" />
        </div>
      </div>

      <Separator className="w-full h-px bg-white/20" />

      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2">
          <img
            className="w-6 h-6"
            alt="Tabler copyright"
            src="/tabler-copyright.svg"
          />

          <div className="w-[377.5px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            2025 Kaihma Intl.
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-6 px-2.5 py-[5px]">
          {legalLinks.map((link, index) => (
            <button
              key={index}
              className="mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] underline hover:opacity-80 transition-opacity"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
