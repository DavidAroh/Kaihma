import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 md:px-[124px] py-20 w-full bg-[#d994261a]">
      <h2 className="[font-family:'Noto_Sans',Helvetica] font-normal text-[#333333] text-2xl md:text-[40px] text-center tracking-[0] leading-normal max-w-4xl">
        Kaihma makes selling online fun, easy, and trustworthy.
      </h2>

      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#606060] text-lg md:text-xl text-center tracking-[0] leading-normal max-w-4xl">
        Kaihma is an all-in-one platform that helps African entrepreneurs build
        trusted online stores, collect payments, and find reliable delivery
        partners. Kaihma empowers anyone selling online, from fashion and
        skincare brands to gadget stores and logistics companies. to build your
        own online store, your brand, your customers, your control.
      </p>
    </section>
  );
};
