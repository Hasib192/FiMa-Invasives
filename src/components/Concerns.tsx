import { useEffect, useState } from "react";
import cipiLogo from "../assets/cipi-bd.png";
import fionaz from "../assets/Fiona'z Trimmings-bg.webp";

const card =
  "relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[22px] border border-border p-7 text-center shadow-soft transition-transform duration-200 hover:-translate-y-1 max-[680px]:min-h-[220px]";

const visit = "mt-4 text-[0.9rem] font-extrabold";

export default function Concerns() {
  const [modal, setModal] = useState<string | null>(null);

  // Close the modal with the Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="concerns" className="py-[86px] font-arial leading-[1.6] max-[680px]:py-16">
      <div className="container-site">
        <h2 className="text-center font-arial text-[clamp(2rem,4vw,2.7rem)] font-[850] leading-[1.2] text-navy max-[680px]:text-[2rem]">
          Sister concerns
        </h2>

        <div className="mt-11 grid grid-cols-2 gap-6 max-[680px]:mt-8 max-[680px]:grid-cols-1 max-[680px]:gap-4">
          {/* CIPI BD */}
          <button
            type="button"
            onClick={() => setModal("CIPI BD")}
            aria-label="CIPI BD website coming soon"
            className={`${card} bg-card`}
          >
            <img src={cipiLogo} alt="CIPI BD logo" loading="lazy" className="max-h-[150px] w-full max-w-[400px] object-contain" />
            <span className={`${visit} text-teal`}>Visit website →</span>
          </button>

          {/* Fiona'z Trimmings */}
          <button
            type="button"
            onClick={() => setModal("Fiona'z Trimmings")}
            aria-label="Fiona'z Trimmings website coming soon"
            className={`${card} bg-[linear-gradient(120deg,rgba(25,49,81,0.84),rgba(18,102,98,0.7))]`}
          >
            <img src={fionaz} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-left" />

            {/* Simple black overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-[1] self-stretch text-left text-[#fff7e8] [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
              <p className="text-[clamp(2.3rem,4vw,3.6rem)] font-bold leading-[1.2] tracking-[0.15em]">FIONA'Z</p>
              <p className="mt-[5px] text-base tracking-[0.25em]">TRIMMINGS</p>
              <span className={`${visit} inline-block text-white`}>Visit website →</span>
            </div>
          </button>
        </div>
      </div>

      {/* Coming soon modal */}
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setModal(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-[rgba(13,24,44,0.64)] p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[min(100%,390px)] rounded-[28px] bg-card px-[30px] py-9 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
          >
            <h3 id="modal-title" className="mb-3 font-arial text-[1.8rem] font-bold leading-[1.2] text-navy">
              {modal}
            </h3>
            <p className="text-muted-foreground">Website coming soon</p>
            <button
              type="button"
              onClick={() => setModal(null)}
              className="mt-2.5 min-w-[120px] cursor-pointer rounded-full bg-brand px-6 py-[13px] font-[750] text-white shadow-[0_10px_24px_rgba(29,62,122,0.16)] transition hover:-translate-y-px hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}