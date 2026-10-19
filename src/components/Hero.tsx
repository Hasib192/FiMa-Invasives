import fimaLogo from "../assets/logo-main.png";
import { PHONE1 } from "../constants";

const btn =
  "inline-flex items-center justify-center gap-[9px] rounded-full px-6 py-[13px] font-[750] transition hover:-translate-y-px hover:opacity-90 max-[680px]:px-[19px] max-[680px]:py-3";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(130deg,#f7edd8_0%,#fbf8ef_60%,#e8f4ef_100%)] pt-[94px] pb-[100px] font-arial leading-[1.6] max-[900px]:py-[72px] max-[680px]:py-[60px]"
    >
      <div className="pointer-events-none absolute -right-[150px] -top-[200px] h-[400px] w-[400px] rounded-full bg-[rgba(16,132,126,0.13)] blur-[2px]" />
      <div className="pointer-events-none absolute -bottom-[280px] -left-[220px] h-[430px] w-[430px] rounded-full bg-[rgba(29,62,122,0.10)] blur-[2px]" />

      <div className="container-site relative z-[1] grid grid-cols-[1.05fr_0.95fr] items-center gap-14 max-[900px]:gap-[30px] max-[680px]:grid-cols-1 max-[680px]:gap-[34px]">
        <div>
          <p className="mb-4 inline-block rounded-full border border-navy/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy">
            Dhaka, Bangladesh
          </p>

          <h1 className="mb-[13px] font-arial text-[clamp(3rem,6vw,4.65rem)] font-black leading-[1.2] tracking-[-0.055em] text-navy">
            FiMa <span className="text-teal">Invasives</span>
          </h1>

          <p className="mb-2.5 text-[clamp(1.25rem,2vw,1.55rem)] font-[750] text-[#2f466d]">
            Importer, Exporter &amp; Reseller
          </p>

          <p className="max-w-[440px] text-[1.05rem] text-muted-foreground">
            For all kinds of items for invasive procedures.
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <a href="#contact" className={`${btn} bg-brand text-white shadow-[0_10px_24px_rgba(29,62,122,0.16)]`}>
              Contact Us <span aria-hidden="true">→</span>
            </a>
            <a href={`tel:${PHONE1}`} className={`${btn} border-2 border-navy bg-transparent text-navy`}>
              <span aria-hidden="true">☎</span> Call Now
            </a>
          </div>
        </div>

        <div className="grid min-h-[260px] place-items-center rounded-[30px] bg-[rgba(255,253,248,0.86)] px-[30px] py-10 shadow-soft max-[680px]:min-h-[220px] max-[680px]:p-[26px]">
          <img src={fimaLogo} alt="FiMa Invasives logo" className="h-auto w-[min(100%,390px)]" />
        </div>
      </div>
    </section>
  );
}