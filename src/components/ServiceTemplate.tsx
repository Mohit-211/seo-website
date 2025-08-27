import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

type Deliverable = { t: string; d: string };
type Step = { n: string; t: string; d: string };
type Faq = { q: string; a: string };

type Props = {
  serviceSlug: string; // e.g., "local-seo"
  title: string; // e.g., "Local SEO"
  subtitle?: string; // short hero subtext
  heroImage: string; // /img/local-seo-hero.jpg
  sideImage?: string; // /img/local-seo-map.png
  introHeading?: string; // e.g., "What is Local SEO?"
  introBody: string;
  introBullets?: string[];
  deliverables: Deliverable[];
  processTitle?: string;
  process: Step[];
  faqs?: Faq[];
  ctaText?: string; // button text
  jsonLd?: Record<string, any>; // optional schema.org
};

export default function ServiceTemplate({
  serviceSlug,
  title,
  subtitle,
  heroImage,
  sideImage,
  introHeading,
  introBody,
  introBullets = [],
  deliverables,
  processTitle = "Our Process",
  process,
  faqs = [],
  ctaText = "Talk to a Specialist",
  jsonLd,
}: Props) {
  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      {/* HERO */}
      <section
        className="relative isolate"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,34,42,.85) 0%, rgba(30,34,42,.92) 100%)",
        }}
      >
        <img
          src={heroImage}
          alt={`${title} banner`}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#FED045]" />
            {title}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {title.includes("SEO") ? (
              <>
                {title.split("SEO")[0]}
                <span className="text-[#FED045]">SEO</span>
                {title.split("SEO")[1]}
              </>
            ) : (
              <>{title}</>
            )}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-white/75">{subtitle}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-lg bg-[#FED045] px-5 py-2.5 font-semibold text-black hover:brightness-95"
            >
              Book Free Consultation
            </a>
            <a
              href="/#audit"
              className="rounded-lg border border-[#FED045]/40 bg-[#FED045]/10 px-5 py-2.5 font-medium text-[#FED045] hover:bg-[#FED045]/20"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* INTRO + SIDE IMAGE */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            {introHeading && (
              <h2 className="text-2xl font-semibold">
                {introHeading.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-[#FED045]">
                  {introHeading.split(" ").slice(-1)}
                </span>
              </h2>
            )}
            <p className="mt-3 text-white/75">{introBody}</p>
            {introBullets.length > 0 && (
              <ul className="mt-5 space-y-2 text-white/85">
                {introBullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            )}
          </div>
          {sideImage && (
            <div className="relative">
              <img
                src={sideImage}
                alt={`${title} visual`}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-2"
              />
              <div className="pointer-events-none absolute -bottom-4 -right-4 rounded-xl bg-[#FED045] px-3 py-1.5 text-xs font-semibold text-black">
                Proven Results
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h3 className="text-xl font-semibold">What You Get</h3>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-[#FED045] text-sm tracking-wide">
                Included
              </div>
              <div className="mt-1 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8">
          <h3 className="text-xl font-semibold">{processTitle}</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-4">
            {process.map((s, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FED045] font-bold text-black">
                  {s.n}
                </div>
                <div className="font-semibold">{s.t}</div>
                <div className="text-sm text-white/70">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h3 className="text-xl font-semibold">FAQs</h3>
          <div className="mt-4 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <summary className="cursor-pointer select-none font-medium">
                  {f.q}
                </summary>
                <p className="mt-2 text-white/75">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#FED045] px-6 py-3 font-semibold text-black hover:brightness-95"
            >
              {ctaText}
            </a>
          </div>
        </section>
      )}

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Footer />
    </div>
  );
}
