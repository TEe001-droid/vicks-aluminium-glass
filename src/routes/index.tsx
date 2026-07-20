import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/vicks-logo.png.asset.json";
import house1Asset from "@/assets/house1.jpeg.asset.json";
import house2Asset from "@/assets/house2.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vicks Aluminium and Glass — Windows, Doors, Gutters & Carports" },
      { name: "description", content: "Custom aluminium windows, doors, gutters, garage doors and carports. Precision fabrication and installation by Vicks Aluminium and Glass." },
      { property: "og:title", content: "Vicks Aluminium and Glass" },
      { property: "og:description", content: "Custom aluminium windows, doors, gutters, garage doors and carports." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: house1Asset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: house1Asset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Vicks Aluminium and Glass",
        description: "Aluminium windows, doors, gutters, garage doors and carports.",
        image: house1Asset.url,
      }),
    }],
  }),
});

const services = [
  { title: "Aluminium Windows", desc: "Custom sliding, casement and fixed windows fabricated to spec." },
  { title: "Doors", desc: "Sliding, folding and hinged aluminium and glass doors for any opening." },
  { title: "Gutters", desc: "Seamless aluminium gutter systems installed and sealed on-site." },
  { title: "Garage Doors", desc: "Durable aluminium garage doors, manual or automated." },
  { title: "Carports", desc: "Weather-tight aluminium carports built to fit your driveway." },
  { title: "Glass Fitting", desc: "Precision glass cutting, sealing and installation for every product." },
];

function Index() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center">
            <img src={logoAsset.url} alt="Vick's Aluminium and Glass" className="h-12 w-auto" />
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#work" className="hover:text-foreground">Our Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-steel px-4 py-2 text-sm font-semibold text-white shadow-metal transition hover:opacity-90">
            Get a quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img src={house1Asset.url} alt="Vicks team fitting aluminium fascia and gutters on a tiled-roof home" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Trusted Aluminium Fabricators
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.05] text-white md:text-6xl">
              Aluminium windows, doors & gutters — <span className="bg-glass-gradient bg-clip-text text-transparent">built to last.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Custom fabrication and precise installation for homes and businesses. From single windows to full carports and garage doors — we measure, build and fit it right.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-glass-gradient px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:brightness-110">
                Request a free quote
              </a>
              <a href="#work" className="rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">What we do</div>
          <h2 className="font-display text-3xl font-black md:text-4xl text-metal">Aluminium & glass, done properly.</h2>
          <p className="mt-4 text-muted-foreground">Every product is measured on site, fabricated in-house and installed by our own team. No middlemen, no shortcuts.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-metal">
              <div className="mb-4 h-10 w-10 rounded-md bg-glass-gradient shadow-glass" />
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-glass-gradient transition-transform group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">Recent projects</div>
              <h2 className="font-display text-3xl font-black md:text-4xl text-metal">On site with the team.</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">Real installs, real homes. Fascia, gutters, doors and windows — measured and fitted by hand.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="group overflow-hidden rounded-2xl shadow-metal">
              <img src={house1Asset.url} alt="Fitting aluminium fascia on a stone-clad home" className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="bg-steel px-5 py-4 text-sm text-white">Fascia & gutter install — stone-clad tile roof home</figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl shadow-metal">
              <img src={house2Asset.url} alt="Gutter installation on a tiled-roof residential property" className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="bg-steel px-5 py-4 text-sm text-white">Seamless gutter run — residential estate</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-steel py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-glass-gradient opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">Get in touch</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Ready for a quote?</h2>
            <p className="mt-4 max-w-md text-white/75">Tell us about your project — sizes, location, timeline — and we'll come measure up and send a fair, itemised quote.</p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">Phone</dt>
                <dd className="mt-1 text-lg font-semibold">Call or WhatsApp us</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">Service Area</dt>
                <dd className="mt-1 text-lg font-semibold">Residential & commercial installs</dd>
              </div>
            </dl>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
          >
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="mb-4 h-12 w-12 rounded-full bg-glass-gradient shadow-glass" />
                <h3 className="font-display text-xl font-bold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-sm text-white/70">We usually respond within a day.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-white/60">Name</label>
                  <input required className="w-full rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-accent" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-white/60">Phone or email</label>
                  <input required className="w-full rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-accent" placeholder="Best way to reach you" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-white/60">Project details</label>
                  <textarea required rows={4} className="w-full resize-none rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-accent" placeholder="Windows, doors, gutters, carport…" />
                </div>
                <button type="submit" className="w-full rounded-md bg-glass-gradient px-5 py-3 text-sm font-semibold text-white shadow-glass transition hover:brightness-110">
                  Send enquiry
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-xs text-muted-foreground">
          <div className="flex items-center">
            <img src={logoAsset.url} alt="Vick's Aluminium and Glass" className="h-8 w-auto" />
          </div>
          <div>© {new Date().getFullYear()} Vicks Aluminium and Glass. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
