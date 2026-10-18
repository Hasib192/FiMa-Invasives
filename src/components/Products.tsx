import { Activity, Syringe, Layers, Cable, Package } from "lucide-react";

const products = [
  {
    icon: Activity,
    name: "Interventional Devices",
    items: ["Chemo Port", "CVC", "PICC", "HD Catheters", "Huber Needle", "Biopsy Needle"],
    note: "For all age groups",
  },
  {
    icon: Syringe,
    name: "Procedural Consumables",
    items: ["Disposables", "Sutures", "Adhesive Gels", "Anaesthetic Gels & Sprays"],
    note: "& more",
  },
  {
    icon: Layers,
    name: "Cardiac Stents & Pacemakers",
    items: ["Medicated Stents", "Non-medicated Stents", "Temporary Pacemakers", "Permanent Pacemakers"],
  },
  {
    icon: Cable,
    name: "Catheters & Guidewires",
    items: ["Pigtail Catheters", "SPC Sets", "Urology Catheters"],
    note: "All types of urology catheters",
  },
  {
    icon: Package,
    name: "Medical Equipment",
    items: [
      "Hospital Beds", "Cardiac Monitors", "USG", "ECG", "Echo Machines",
      "Defibrillators", "Ventilators", "HFNC & BiPAP", "HD Machines",
    ],
    note: "& more",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#f5ecd9] py-[86px] font-arial leading-[1.6] max-[680px]:py-16">
      <div className="container-site">
        <div className="text-center">
          <p className="mb-2.5 text-[0.77rem] font-extrabold uppercase tracking-[0.16em] text-teal">Our Products</p>
          <h2 className="font-arial text-[clamp(2rem,4vw,2.7rem)] font-[850] leading-[1.2] text-navy max-[680px]:text-[2rem]">
            Everything for invasive procedures
          </h2>
        </div>

        <div className="mt-11 grid grid-cols-5 gap-4 max-[900px]:grid-cols-3 max-[680px]:mt-8 max-[680px]:grid-cols-2 max-[680px]:gap-3">
          {products.map(({ icon: Icon, name, items, note }) => (
            <article
              key={name}
              className="group flex flex-col rounded-[22px] border border-[rgba(29,62,122,0.06)] bg-card px-4 py-[26px] text-center shadow-soft transition-transform duration-200 hover:-translate-y-1 max-[900px]:last:col-start-2 max-[680px]:last:col-span-2 max-[680px]:last:col-start-auto max-[680px]:px-[13px] max-[680px]:py-[22px]"
            >
              {/* Icon kept as in the React version */}
              <div className="mx-auto mb-[17px] grid h-16 w-16 place-items-center rounded-full border-2 border-teal text-navy transition group-hover:bg-brand group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="font-arial text-[1.02rem] font-bold leading-[1.4] text-navy max-[680px]:text-[0.95rem]">
                {name}
              </h3>

              <div className="mx-auto my-3 h-[2px] w-8 rounded-full bg-teal/40" />

              <ul className="flex flex-wrap justify-center gap-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[#e5f1ec] px-2.5 py-1 text-xs font-semibold leading-tight text-[#2f466d]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {note && <p className="mt-auto pt-3 text-xs italic text-muted-foreground">{note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}