import { useState } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

// 🔥 Firebase
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  service: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [hp, setHp] = useState(""); // honeypot

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setData((d) => ({ ...d, [key]: value }));
    };

  const validate = () => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return "Enter a valid email.";
    if (!data.message.trim()) return "Tell us a bit about your needs.";
    if (!data.consent) return "Please accept the communication consent.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    // If honeypot filled → likely bot; pretend success
    if (hp) {
      setStatus("ok");
      setData(initialState);
      return;
    }

    try {
      setSubmitting(true);

      await addDoc(collection(db, "contacts"), {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim() || null,
        business: data.business.trim() || null,
        service: data.service || null,
        message: data.message.trim(),
        consent: !!data.consent,
        page:
          typeof window !== "undefined" ? window.location.pathname : "/contact",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        createdAt: serverTimestamp(),
      });

      setStatus("ok");
      setData(initialState);
    } catch (e) {
      console.error("Contact submit failed:", e);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="Let’s Talk Local Growth"
        highlight="Local Growth"
        subtitle="Have questions about Local SEO, Google Business Profile, reviews, or citations? Tell us your goals — we’ll map the fastest path to more local customers."
        size="lg"
        pattern="dots"
      />

      {/* Extra small badge under banner */}
      <div className="mx-auto max-w-6xl px-4 -mt-8">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#FED045]" />
          We respond within 1 business day
        </span>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="mb-4 text-2xl font-semibold">Send us a message</h2>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-white/80">
                      Full name *
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-[#FED045]"
                      placeholder="Sarah Johnson"
                      value={data.name}
                      onChange={onChange("name")}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-white/80">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-[#FED045]"
                      placeholder="you@company.com"
                      value={data.email}
                      onChange={onChange("email")}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-white/80">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-[#FED045]"
                      placeholder="+1 555 123 4567"
                      value={data.phone}
                      onChange={onChange("phone")}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-white/80">
                      Business name
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-[#FED045]"
                      placeholder="Johnson Family Dentistry"
                      value={data.business}
                      onChange={onChange("business")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-white/80">
                      Service of interest
                    </label>
                    <select
                      className="w-full rounded-lg border border-white/10 bg-[#1E222A] px-3 py-2 outline-none focus:border-[#FED045]"
                      value={data.service}
                      onChange={onChange("service")}
                    >
                      <option value="">Choose a service</option>
                      <option>Local SEO (Maps)</option>
                      <option>Google Business Profile</option>
                      <option>Reviews & Reputation</option>
                      <option>Citation Building</option>
                      <option>Website SEO</option>
                      <option>Google Ads for Local</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm text-white/80">
                    How can we help? *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-[#FED045]"
                    placeholder="Share your location, industry, and what success would look like."
                    value={data.message}
                    onChange={onChange("message")}
                    required
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-white/80">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-[#FED045]"
                    checked={data.consent}
                    onChange={onChange("consent")}
                  />
                  I agree to be contacted about my inquiry and understand I can
                  opt out anytime.
                </label>

                {/* Honeypot (hidden field to deter bots) */}
                <input
                  type="text"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px" }}
                />

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-lg bg-[#FED045] px-5 py-2.5 font-semibold text-black transition hover:brightness-95 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                  {status === "ok" && (
                    <span className="text-sm text-emerald-400">
                      Thanks! We’ll get back within 1 business day.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact info / CTA */}
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">Talk to a human</h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  📞 <span className="text-white">+1 (555) 123-4567</span> —
                  Canada
                </li>
                <li>
                  📞 <span className="text-white">+91 98765 43210</span> — India
                  (WhatsApp available)
                </li>
                <li>✉️ hello@localseopro.com</li>
                <li>Mon–Fri, 9:00–18:00 (IST & ET)</li>
              </ul>
              <a
                href="https://wa.me/919876543210"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-[#FED045]/30 bg-[#FED045]/10 px-4 py-2 font-medium text-[#FED045] hover:bg-[#FED045]/20"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-0 overflow-hidden">
              <iframe
                title="India Office"
                className="h-60 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30269.94202151492!2d72.821!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6309e3b%3A0xaaaa!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1690000000000"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold">Our Offices</h4>
                <div className="mt-2 grid gap-3 text-sm text-white/80">
                  <div>
                    <div className="font-medium text-white">Canada</div>
                    <div>1234 King St W, Suite 500, Toronto, ON</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">India</div>
                    <div>7th Floor, BKC, Bandra (E), Mumbai 400051</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <h4 className="text-lg font-semibold">Prefer a quick audit?</h4>
              <p className="mt-1 text-white/70">
                Get a free 10-point Local SEO audit of your Google Business
                Profile and citations.
              </p>
              <a
                href="/#audit"
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#FED045] px-4 py-2 font-semibold text-black hover:brightness-95"
              >
                Get Free Audit
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
