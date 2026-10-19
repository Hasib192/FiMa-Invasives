import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { PHONE1, PHONE2, EMAIL, ADDRESS, MAP } from "../constants";

const phones = [
  { tel: PHONE1, label: "+88 01715 600 400" },
  { tel: PHONE2, label: "+88 01819 484 999" },
];

const waLink = (tel: string) => `https://wa.me/${tel.replace("+", "")}`;

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaInstagram, label: "Instagram" },
];

const input = "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello FiMa Invasives,\nName: ${f.name}\nPhone: ${f.phone}\n\n${f.message}`;
    window.open(`${waLink(PHONE2)}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">Contact Us</p>
          <h2 className="mt-2 font-arial text-[clamp(2rem,4vw,2.7rem)] font-[850] leading-[1.2] text-navy max-[680px]:text-[2rem]">
            Let's talk
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-4 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <input required maxLength={100} placeholder="Your name" className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required maxLength={20} type="tel" placeholder="Phone number" className={input} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
            <textarea required maxLength={1000} rows={5} placeholder="Your message" className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 font-semibold text-primary-foreground">
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
          </form>

          <div className="space-y-4">
            <a href={MAP} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:ring-2 hover:ring-ring">
              <MapPin className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Address</p>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </div>
            </a>

            <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <Phone className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Phone</p>
                {phones.map(({ tel, label }) => (
                  <a key={tel} href={`tel:${tel}`} className="block text-muted-foreground hover:text-accent">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Each number opens its own WhatsApp chat */}
            <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <MessageCircle className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">WhatsApp</p>
                {phones.map(({ tel, label }) => (
                  <a key={tel} href={waLink(tel)} target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-accent">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <a href={`mailto:${EMAIL}`} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:ring-2 hover:ring-ring">
              <Mail className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Email</p>
                <p className="break-all text-muted-foreground">{EMAIL}</p>
              </div>
            </a>

            <div className="rounded-2xl bg-card p-5 shadow-soft">
              <p className="font-bold text-navy">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ icon: I, label }) => (
                  <span key={label} className="grid h-11 w-11 place-items-center rounded-full border text-navy opacity-60">
                    <I className="h-5 w-5" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}