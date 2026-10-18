import { FileCheck, Ship, Warehouse, Megaphone, Rocket } from "lucide-react";
import aboutImg from "../assets/about-us-banner.jpg";

const brands = [
  "BD", "B. Braun", "Cook Medical", "Baxter", "Octapharma", "Kedrion", "Teleflex",
  "Able", "Meditech", "Omron", "Surgimed", "GE", "Paramount",
];

const services = [
  { icon: FileCheck, title: "Product Registration" },
  { icon: Ship, title: "Import" },
  { icon: Warehouse, title: "Storage & Distribution" },
  { icon: Megaphone, title: "Promotion & Sales" },
  { icon: Rocket, title: "Market Research & Launch" },
];

const eyebrow = "text-sm font-bold uppercase tracking-widest text-teal";

export default function About() {
  return (
    <section id="about" className="py-[86px] font-arial leading-[1.6] max-[680px]:py-16">
      <div className="container-site">
        {/* Image + intro */}
        <div className="grid grid-cols-2 items-center gap-14 max-[900px]:gap-[34px] max-[680px]:grid-cols-1">
          <img
            src={aboutImg}
            alt="Interventional devices in a cath lab"
            width={1280}
            height={960}
            loading="lazy"
            className="h-[380px] w-full rounded-[28px] object-cover shadow-soft max-[680px]:order-2 max-[680px]:h-[290px]"
          />

          <div>
            {/* Kept as in the React version */}
            <p className={eyebrow}>About Us</p>

            <h2 className="mb-[18px] mt-2.5 font-arial text-[clamp(2rem,3.5vw,2.7rem)] font-[850] leading-[1.2] text-navy">
              A young, dynamic and fast growing company
            </h2>

            <p className="text-[1.02rem] text-muted-foreground">
              FiMa Invasives is an importer, exporter and reseller of biologics and items for invasive
              procedures, based in Dhaka. We supply interventional devices, consumables, stents, catheters
              and guidewires.
            </p>
            <p className="mt-3 text-[1.02rem] text-muted-foreground">
              We import from well-known multinational manufacturers and distribute all over Bangladesh,
              covering the full chain from registration to market launch.
            </p>

            {/* Kept as in the React version */}
            <div className="mt-6 rounded-2xl border bg-card p-5">
              <p className="font-display text-lg font-bold text-navy">Dr. AKM Noor</p>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="mt-16 text-center max-[680px]:mt-12">
          <p className={eyebrow}>Brands we import</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-navy shadow-[0_6px_16px_-10px_rgba(29,62,122,0.3)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Service chain */}
        <div className="mt-14 text-center max-[680px]:mt-12">
          <p className={eyebrow}>What we cover</p>
          <ol className="mt-6 grid grid-cols-5 gap-4 max-[900px]:grid-cols-3 max-[680px]:grid-cols-2 max-[680px]:gap-3">
            {services.map(({ icon: Icon, title }, i) => (
              <li
                key={title}
                className="relative rounded-[22px] border border-[rgba(29,62,122,0.06)] bg-card px-4 pb-5 pt-7 shadow-soft"
              >
                <span className="absolute left-4 top-3 text-xs font-bold text-teal/60">0{i + 1}</span>
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-[14px] bg-[#e5f1ec] text-teal">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold leading-snug text-navy">{title}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}