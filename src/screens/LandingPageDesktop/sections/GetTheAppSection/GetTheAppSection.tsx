import React from "react";

export const GetTheAppSection = (): JSX.Element => {
  const appStoreButtons = [
    {
      src: "/b-logo-vectors---download-free-high-quality-vectors-from-freepik.png",
      alt: "Download on Google Play",
    },
    {
      src: "/b-logo-vectors---download-free-high-quality-vectors-from-freepik-1.png",
      alt: "Download on App Store",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-[124px] py-10 w-full bg-white">
      <div className="flex flex-col items-center gap-6 w-full max-w-[1192px]">
        <h2 className="w-full [font-family:'Noto_Sans',Helvetica] font-semibold text-[#333333] text-[40px] text-center tracking-[0] leading-[60px]">
          Get the best services with our app
        </h2>

        <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#606060] text-2xl text-center tracking-[0] leading-[normal]">
          Be among the first to get our app when it launches and enjoy exciting
          free tools to scale-up your business.&nbsp;&nbsp;Everything you need
          to grow your business with high conversion rate, all in one place.
        </p>
      </div>

      <div className="inline-flex items-center justify-center gap-10">
        {appStoreButtons.map((button, index) => (
          <div
            key={index}
            className="flex flex-col w-[386px] items-start gap-2.5"
          >
            <img
              className="w-full h-[118px] object-contain"
              alt={button.alt}
              src={button.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
