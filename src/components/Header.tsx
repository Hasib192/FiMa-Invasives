import { useState } from "react";
import fimaLogo from "../assets/logo-main.png";
import { NAV } from "../constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-[rgba(251,248,240,0.93)] font-arial leading-[1.6] backdrop-blur-[14px]">
      <div className="container-site flex h-[76px] items-center justify-between gap-6 max-[680px]:h-[70px]">
        <a href="#top" aria-label="FiMa Invasives home">
          <img
            src={fimaLogo}
            alt="FiMa logo"
            className="block max-h-[54px] w-[150px] object-contain object-left max-[680px]:w-[128px]"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-[30px] min-[681px]:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-[0.92rem] font-bold text-[#344360] transition-colors hover:text-teal">
              {l}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-brand px-5 py-2.5 text-[0.92rem] font-bold text-white">
            Contact Us
          </a>
        </nav>

        <button
          className="cursor-pointer bg-transparent p-[7px] text-[27px] leading-none text-navy min-[681px]:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="container-site pb-4 min-[681px]:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block px-1 py-2.5 font-bold">
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand px-1 py-2.5 text-center font-bold text-white"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}