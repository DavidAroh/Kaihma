import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const cardsData = [
  {
    image: "/image-1.png",
    title: "Build your store in minutes with AI tools",
    description:
      "Create a stunning online store without a single line of code.",
  },
  {
    image: "/image-2.png",
    title: "Collect payments confidently",
    description:
      "With integrated payment gateways and escrow protection that builds trust.",
  },
  {
    image: "/image-3.png",
    title: "Find trusted delivery partners",
    description:
      "Connect instantly with reliable agents — no more endless calls or lost orders.",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 px-[124px] py-20 w-full">
      <div className="flex items-center justify-center gap-6 px-0 py-10 w-full">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-start flex-1 bg-white rounded-[10px] overflow-hidden border-[0.5px] border-solid border-[#e8e8e8]"
          >
            <img
              className="w-full h-[254.35px] object-cover"
              alt="Image"
              src={card.image}
            />
            <CardContent className="flex flex-col items-start gap-4 p-4 w-full">
              <h3 className="[font-family:'Noto_Sans',Helvetica] font-semibold text-[#333333] text-[32px] tracking-[0] leading-[normal]">
                {card.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#606060] text-xl tracking-[0] leading-6">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
