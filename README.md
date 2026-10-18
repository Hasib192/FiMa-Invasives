# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

or 
```sh
bun install
bun run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## The prompt used for build
Build a single-page marketing website for "FiMa Invasives", an importer, exporter and reseller of items for invasive medical procedures, based in Dhaka, Bangladesh.

BRAND & DESIGN SYSTEM

- Colors (from the printed business card): navy #1D3E7A, teal #10847E, warm cream #F2E2C4 for section backgrounds. Cards are near-white, page background is a very light cream. Define these as semantic theme tokens, not hardcoded utilities.
- Fonts: Montserrat (600/700/800) for headings, Nunito Sans (400/600/700) for body.
- Style: clean, medical, trustworthy. Generous rounded corners (rounded-2xl/3xl), soft drop shadows, subtle hover lift on cards. No purple/indigo gradients.
- Fully responsive; sticky translucent header with backdrop blur.

CONTENT & SECTIONS (in this order)

1. Header — FiMa logo left; nav links About, Products, Our Concerns, Contact; a navy "Contact Us" pill button. On mobile, a hamburger that toggles a menu.
2. Hero (id="top", cream background with two soft blurred navy/teal blobs) — small pill badge "Dhaka, Bangladesh"; large heading "FiMa Invasives" with "FiMa" in navy and "Invasives" in teal; subheading "Importer, Exporter & Reseller"; one-line tagline "For all kinds of items for invasive procedures."; two buttons: "Contact Us" (scrolls to contact) and "Call Now" (tel: link). Right side: the FiMa logo in a white rounded card.
3. About Us (id="about") — photo on one side, text on the other. Heading "A young, dynamic and fast growing company". Copy: FiMa Invasives is an importer, exporter and reseller of items for invasive procedures, based in Dhaka, supplying interventional devices, consumables, stents, catheters and guidewires. Include a bordered card: "Dr. AKM Noor — Managing Director".
4. Our Products (id="products", cream background) — heading "Everything for invasive procedures", five icon cards in a responsive grid: Interventional Devices, Procedural Consumables, Stents & Accessories, Catheters & Guidewires, Other Invasive Items. Each card: circular icon with teal border, fills navy/teal on hover, lifts slightly.
5. Our Concerns (id="concerns") — heading "Sister concerns", two large cards: "CIPI BD" (logo card) and "Fiona'z Trimmings" (photo background with the wordmark "FIONA'Z TRIMMINGS" overlaid). Both say "Visit website →" and open a centered modal saying "Website coming soon" with a Close button; clicking the backdrop also closes it.
6. Contact Us (id="contact", cream background) — heading "Let's talk". Left: a form (name, phone, message, all required) that on submit opens https://wa.me/8801819484999 with the details pre-filled as a WhatsApp message. Right: cards for Address (Google Maps link), Phone (both numbers, tel: links), WhatsApp, Email (mailto:), and a "Follow us" card with Facebook/LinkedIn/Instagram icons shown greyed as placeholders with a "link coming soon" note.
7. Footer — navy background, "© \<current year\> FiMa Invasives. All rights reserved." and the address.

CONTACT DETAILS

- Address: 709/9, Ibrahimpur, Kafrul, Dhaka-1206, Bangladesh
- Phone: +8801715600400 and +8801819484999 (WhatsApp on the second)
- Email: akmnoor14@gmail.com
- Managing Director: Dr. AKM Noor

TECH

- TanStack Start (React 19) with route file src/routes/index.tsx, Tailwind CSS v4 configured in src/styles.css via @theme tokens.
- Google Fonts loaded with a \<link\> in the root route head, never @import of a remote URL in styles.css.
- lucide-react icons (Syringe, Activity, Layers, Cable, Package, Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin, Instagram, ArrowRight, Menu, X).
- Route head() with a real title/description/og:title/og:description for the page.
