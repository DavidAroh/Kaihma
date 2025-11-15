import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What is Kaihma?",
  },
  {
    id: "item-2",
    question: "Is Kaihma a marketplace?",
  },
  {
    id: "item-3",
    question: "When will Kaihma launch?",
  },
  {
    id: "item-4",
    question: "Who is Kaihma for?",
  },
  {
    id: "item-5",
    question: "Why Kaihma?",
  },
];

export const FAQsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-left gap-6 px-[124px] py-20 w-full bg-white">
      <h2 className="mt-[-1.00px] [font-family:'Noto_Sans',Helvetica] font-medium text-[#333333] text-[64px] leading-[72px] tracking-[0]">
        FAQs
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <React.Fragment key={faq.id}>
            <AccordionItem value={faq.id} className="border-none">
              <AccordionTrigger className="gap-2.5 px-0 py-7 hover:no-underline [&[data-state=open]>div>img]:rotate-90">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-left flex-1 text-left [font-family:'DM_Sans',Helvetica] font-medium text-[#333333] text-[32px] tracking-[0] leading-[normal]">
                    {faq.question}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            {index < faqData.length - 1 && (
              <div className="w-full h-px bg-[#3333331a]" />
            )}
          </React.Fragment>
        ))}
      </Accordion>
    </section>
  );
};
