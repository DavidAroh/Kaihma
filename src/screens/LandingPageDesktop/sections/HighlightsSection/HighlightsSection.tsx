import React from "react";
import { Button } from "../../../../components/ui/button";

const highlightsData = [
  {
    id: 1,
    imagePosition: "left",
    imageSrc: "/image-4.png",
    title: "Customers cancel after products are shipped (POD gone wrong)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor tincidunt donec facilisis egestas id cum tellus amet facilisi. Phasellus sit amet fames donec. Dignissim et aliquet iaculis quam adipiscing odio ut feugiat...",
  },
  {
    id: 2,
    imagePosition: "right",
    imageSrc: "/image-5.png",
    title: "Delivery agents delay or go missing with goods",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor tincidunt donec facilisis egestas id cum tellus amet facilisi. Phasellus sit amet fames donec. Dignissim et aliquet iaculis quam adipiscing odio ut feugiat...",
  },
  {
    id: 3,
    imagePosition: "left",
    imageSrc: "/image-6.png",
    title: "Trust is broken, buyers doubt every seller",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor tincidunt donec facilisis egestas id cum tellus amet facilisi. Phasellus sit amet fames donec. Dignissim et aliquet iaculis quam adipiscing odio ut feugiat...",
  },
];

export const HighlightsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px] px-[124px] py-20 w-full">
      {highlightsData.map((highlight) => (
        <div
          key={highlight.id}
          className="flex items-center justify-center gap-[45px] w-full"
        >
          {highlight.imagePosition === "left" && (
            <img
              className="w-[580px] h-[457px] rounded-[10px] border border-solid border-[#dcc196] object-cover"
              alt={highlight.title}
              src={highlight.imageSrc}
            />
          )}

          <div className="flex flex-col items-start gap-4 flex-1">
            <h2 className="mt-[-1.00px] [font-family:'Noto_Sans',Helvetica] font-semibold text-[#333333] text-[40px] tracking-[0] leading-[normal]">
              {highlight.title}
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-xl tracking-[0] leading-5">
              <span className="text-[#606060]">{highlight.description}</span>
              <Button
                variant="link"
                className="h-auto p-0 font-bold text-[#2d17fc] text-xl inline"
              >
                Read more
              </Button>
            </p>
          </div>

          {highlight.imagePosition === "right" && (
            <img
              className="w-[580px] h-[457px] rounded-[10px] border border-solid border-[#dcc196] object-cover"
              alt={highlight.title}
              src={highlight.imageSrc}
            />
          )}
        </div>
      ))}
    </section>
  );
};
