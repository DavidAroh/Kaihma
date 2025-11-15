import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X, Search } from "lucide-react";

const navigationItems = [
  { label: "How it works" },
  { label: "About Us" },
  { label: "Highlights" },
  { label: "FAQs" },
  { label: "Contact Us" },
];

export const HeaderSection = (): JSX.Element => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-auto bg-white z-50 shadow-sm transition-all duration-300">
      <div className="flex h-[124px] lg:h-auto items-center justify-between px-4 lg:px-[124px] py-6 w-full">
        <div className="inline-flex items-end gap-1 flex-[0_0_auto]">
          <img
            className="w-[42.81px] h-[60.23px] mt-[-0.25px]"
            alt="Group"
            src="/group-4.png"
          />

          <div className="inline-flex flex-col items-start flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#2d004e] text-xl lg:text-2xl text-center tracking-[8.00px] leading-[30px]">
              Kaihma
            </div>

            <div className="self-stretch -mt-1.5 [font-family:'DM_Sans',Helvetica] font-normal italic text-blue-500 text-[10px] text-center tracking-[0.40px] leading-[15px]">
              ...sell boldly, build freely
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="hidden lg:flex justify-center items-center relative left-60 -translate-x-1/2 -translate-y-1/2 w-[400px] animate-fade-in">
            <div className="w-[466px] h-[56px] flex items-center gap-3 px-4 border border-[#e8e8e8] rounded-full bg-[#f8f8f8]">
              <Search className="w-5 h-5 text-[#777777]" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-[#333333] placeholder:text-[#777777] focus:outline-none"
              />
            </div>
          </div>
        )}

        <nav className={`hidden lg:flex items-center justify-center gap-8 transition-opacity duration-300 ${showSearch ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#777777] text-base text-center tracking-[0.15px] leading-6 whitespace-nowrap hover:text-[#2d004e] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="hidden lg:inline-flex h-14 items-center justify-center gap-2.5 px-6 py-3 bg-[#2d17fc] hover:bg-[#2d17fc]/90 rounded-[100px] relative right-8">
          <span className="w-fit font-global-tokens-headings-h-6 font-[number:var(--global-tokens-headings-h-6-font-weight)] text-white text-[length:var(--global-tokens-headings-h-6-font-size)] tracking-[var(--global-tokens-headings-h-6-letter-spacing)] leading-[var(--global-tokens-headings-h-6-line-height)] whitespace-nowrap [font-style:var(--global-tokens-headings-h-6-font-style)]">
            Get started
          </span>
        </Button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#333333]" />
          ) : (
            <Menu className="w-6 h-6 text-[#333333]" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8e8] px-4 py-4 flex flex-col gap-4">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 [font-family:'DM_Sans',Helvetica] font-semibold text-[#777777] hover:text-[#2d004e] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => { document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full h-14 bg-[#2d17fc] hover:bg-[#2d17fc]/90 rounded-[100px]">
            <span className="font-global-tokens-headings-h-6 font-[number:var(--global-tokens-headings-h-6-font-weight)] text-white text-[length:var(--global-tokens-headings-h-6-font-size)] [font-style:var(--global-tokens-headings-h-6-font-style)]">
              Get started
            </span>
          </Button>
        </div>
      )}
    </header>
  );
};
