import { useState } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { Check, Minus } from "lucide-react";
import { Link } from "react-router-dom";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number; // billed yearly
  featured?: boolean;
  cta?: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for solo locations getting started with Maps.",
    monthly: 99,
    yearly: 990,
    features: [
      "Google Business Profile (GBP) setup/cleanup",
      "Core categories & services optimization",
      "10 local citations (NAP consistency)",
      "Review request templates",
      "Monthly report (Maps views, calls, directions)",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Best for growing clinics & service businesses.",
    monthly: 249,
    yearly: 2490,
    featured: true,
    cta: "Most Popular",
    features: [
      "Everything in Starter",
      "Advanced GBP optimization (photos, Q&A, posts)",
      "30+ citations + duplicate suppression",
      "Review acquisition system (QR/SMS/email templates)",
      "Local landing page recommendations",
      "Competitor snapshot & gap analysis",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Multi-location & high-competition niches.",
    monthly: 499,
    yearly: 4990,
    features: [
      "Everything in Growth",
      "City/service page content plan",
      "Local link recommendations",
      "Multi-location tracking & reporting",
      "Reputation playbooks + response templates",
      "Quarterly strategy review",
      "Slack/WhatsApp support",
    ],
  },
];

const COMPARISON_FEATURES = [
  { label: "GBP optimization", starter: true, growth: true, pro: true },
  { label: "Posts & updates (per month)", starter: "—", growth: "4", pro: "8" },
  {
    label: "Citations built/managed",
    starter: "10",
    growth: "30+",
    pro: "50+",
  },
  { label: "Duplicate suppression", starter: false, growth: true, pro: true },
  {
    label: "Review acquisition system",
    starter: "Templates",
    growth: "Automated flow",
    pro: "Automated + training",
  },
  {
    label: "Reporting cadence",
    starter: "Monthly",
    growth: "Monthly",
    pro: "Monthly + QBR",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  const price = (p: Plan) => (yearly ? p.yearly : p.monthly);
  const unit = yearly ? "/yr" : "/mo";
  const saveBadge = yearly ? "Save ~2 months" : undefined;

  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      <PageBanner
        title="Pricing"
        subtitle="Simple plans that grow local visibility. No lock-in. Cancel anytime."
        size="lg"
        pattern="dots"
      />

      {/* Toggle */}
      <section className="mx-auto max-w-6xl px-4 -mt-10 md:-mt-14">
        <div className="mx-auto flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
          <button
            onClick={() => setYearly(false)}
            className={`w-1/2 rounded-xl px-4 py-2 text-sm ${
              !yearly
                ? "bg-[#FED045] text-black font-semibold"
                : "text-white/80"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`relative w-1/2 rounded-xl px-4 py-2 text-sm ${
              yearly ? "bg-[#FED045] text-black font-semibold" : "text-white/80"
            }`}
          >
            Yearly
            {yearly && (
              <span className="absolute -top-2 right-2 rounded-full bg-black/70 px-2 py-[2px] text-[10px] font-semibold text-[#FED045]">
                Save 2 months
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl border bg-white/5 p-6 transition hover:translate-y-[-2px] ${
                p.featured
                  ? "border-[#FED045]/60 shadow-[0_0_0_1px_rgba(254,208,69,.15),0_30px_80px_-20px_rgba(0,0,0,.35)]"
                  : "border-white/10"
              }`}
            >
              {p.cta && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FED045] px-3 py-[6px] text-xs font-semibold text-black shadow">
                  {p.cta}
                </div>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">${price(p)}</span>
                <span className="text-white/60">{unit}</span>
              </div>
              {saveBadge && yearly && p !== PLANS[0] && (
                <div className="mt-1 text-xs text-[#FED045]">
                  Billed annually
                </div>
              )}

              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-[#FED045]" />
                    <span className="text-white/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-semibold transition
                  ${
                    p.featured
                      ? "bg-[#FED045] text-black hover:brightness-95"
                      : "border border-[#FED045]/40 text-[#FED045] hover:bg-[#FED045]/10"
                  }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-xs text-white/60">
          Prices shown in USD-equivalent. GST/HST or local taxes may apply.
          Multi-location discounts available.
        </p>
      </section>

      {/* Comparison (quick scan) */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold">
            <div>Feature</div>
            <div className="text-center">Starter</div>
            <div className="text-center">Growth</div>
            <div className="text-center">Pro</div>
          </div>
          {COMPARISON_FEATURES.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 items-center px-4 py-3 text-sm odd:bg-white/0 even:bg-white/[0.035]"
            >
              <div className="text-white/80">{row.label}</div>
              <Cell v={row.starter} />
              <Cell v={row.growth} />
              <Cell v={row.pro} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h3 className="text-xl font-semibold">FAQs</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              q: "Is there a contract?",
              a: "No long-term lock-ins. Month-to-month with the ability to pause or cancel anytime.",
            },
            {
              q: "How fast can we see results?",
              a: "Most clients see meaningful Map Pack movement and more calls in 30–60 days, depending on competition and baseline.",
            },
            {
              q: "Do you work with multi-location businesses?",
              a: "Yes. The Pro plan is designed for multi-location setups, including location groups and per-location reporting.",
            },
            {
              q: "Can you manage Google Ads too?",
              a: "Absolutely. We offer Local Google Ads management as an add-on or standalone service.",
            },
          ].map((f, i) => (
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
      </section>

      <Footer />
    </div>
  );
}

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === "boolean") {
    return (
      <div className="text-center">
        {v ? (
          <Check className="inline h-4 w-4 text-[#FED045]" />
        ) : (
          <Minus className="inline h-4 w-4 text-white/30" />
        )}
      </div>
    );
  }
  return <div className="text-center text-white/80">{v}</div>;
}
