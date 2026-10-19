import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  FileCheck,
  Ship,
  Warehouse,
  Megaphone,
  Rocket,
} from "lucide-react";
import aboutImg from "../assets/about-us-banner.jpg";

type BrandLogo = {
  name: string;
  src: string;
  alt?: string;
  imageClass?: string;
  monochrome?: boolean;
};

// Brand logos are image assets, not text labels.
const brands: BrandLogo[] = [
  {
    name: "BD",
    src: "https://www.unicornhs.org/wp-content/uploads/2022/09/Brands-Logo-BD.png",
  },
  {
    name: "B. Braun",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bbraun.svg",
  },
  {
    name: "Cook Medical",
    src: "https://www.unicornhs.org/wp-content/uploads/2022/10/Cook-Medical-Logo.png",
  },
  {
    name: "Baxter",
    src: "https://www.unicornhs.org/wp-content/uploads/2022/09/Brands-Logo-Baxter.png",
  },
  {
    name: "Octapharma",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Logo_octapharma.png",
  },
  {
    name: "Kedrion",
    src: "https://mma.prnewswire.com/media/2680007/Kedrion_Biopharma_Logo.jpg?p=twitter",
  },
  {
    name: "Teleflex",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Teleflex_logo.svg",
  },
  {
    name: "Able",
    src: "https://www.ablemedicaldevices.com/wp-content/uploads/2021/07/ABLE_%E2%94%ACLogoFinal-WHITE_VECTOR.png",
    monochrome: true,
  },
  {
    name: "Meditech",
    src: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66f88a4e5388b20001a5dddc/picture",
  },
  {
    name: "Omron",
    src: "https://www.unicornhs.org/wp-content/uploads/2022/10/Omron-Logo.png",
  },
  {
    name: "Surgimed",
    src: "https://img.ws.mms.shopee.ph/ph-11134216-7qul5-ljqjghhwb5an2f",
  },
  {
    name: "GE",
    alt: "GE HealthCare logo",
    src: "https://www.gehealthcare.com/cdn/res/images/logo.svg",
  },
  {
    name: "Paramount",
    src: "https://www.paramountsurgimed.com/wp-content/uploads/2023/08/156x150-px-5.jpg",
    imageClass: "object-cover object-[center_44%] scale-[1.12]",
  },
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
  const [brandCarouselPaused, setBrandCarouselPaused] = useState(false);
  const [brandCarouselDirection, setBrandCarouselDirection] = useState<"left" | "right">("left");

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

            <div className="mt-6 rounded-2xl border bg-card p-5">
              <p className="font-display text-lg font-bold text-navy">Dr. AKM Noor</p>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
          </div>
        </div>

        {/* Partners: continuously moving, single-row logo marquee */}
        <div className="mt-16 text-center max-[680px]:mt-12">
          <p className={eyebrow}>Our Partners</p>
          <h3 className="mt-2.5 font-arial text-[clamp(1.8rem,3vw,2.25rem)] font-[850] leading-[1.2] text-navy">
            Brands We Import
          </h3>
          <p className="mt-2 text-[1rem] text-muted-foreground">
            Connecting Bangladesh with global healthcare manufacturers.
          </p>

          <div className="mt-6" role="region" aria-label="Our partners logo carousel">
            <div className="mb-3 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Move logos to the right"
                title="Move logos to the right"
                onClick={() => setBrandCarouselDirection("right")}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors duration-200 hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Move logos to the left"
                title="Move logos to the left"
                onClick={() => setBrandCarouselDirection("left")}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors duration-200 hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={brandCarouselPaused ? "Resume logo movement" : "Pause logo movement"}
                title={brandCarouselPaused ? "Resume logo movement" : "Pause logo movement"}
                onClick={() => setBrandCarouselPaused((paused) => !paused)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors duration-200 hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                {brandCarouselPaused ? (
                  <Play className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="brand-logo-marquee rounded-2xl" aria-label="Moving partner logos">
              <div
                className="brand-logo-track"
                style={{
                  animationDirection: brandCarouselDirection === "left" ? "normal" : "reverse",
                  animationPlayState: brandCarouselPaused ? "paused" : "running",
                }}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="brand-logo-group"
                    aria-hidden={copy === 1 ? "true" : undefined}
                  >
                    {brands.map((brand) => (
                      <div
                        key={brand.name}
                        className="group flex h-[94px] w-[168px] shrink-0 items-center justify-center rounded-2xl border border-[rgba(29,62,122,0.18)] bg-card p-4 shadow-[0_8px_20px_-16px_rgba(29,62,122,0.32)] transition-colors duration-200 hover:border-teal max-[900px]:w-[148px] max-[680px]:h-[82px] max-[680px]:w-[128px]"
                      >
                        <img
                          src={brand.src}
                          alt={copy === 1 ? "" : (brand.alt ?? brand.name + " logo")}
                          title={copy === 1 ? undefined : brand.name}
                          loading="eager"
                          decoding="async"
                          className={
                            "max-h-[58px] max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.04] max-[680px]:max-h-[48px] " +
                            (brand.imageClass ?? "")
                          }
                          style={brand.monochrome ? { filter: "brightness(0) saturate(100%)" } : undefined}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
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
