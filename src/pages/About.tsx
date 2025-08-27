import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="About Us"
        highlight="Us"
        subtitle="From Canada to India — helping local businesses dominate search"
      />

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-12">
        {/* Who we are */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="mt-3 text-white/75">
              LocalSEOPro was founded in Canada with one goal: to make local
              businesses visible online where it matters most — Google Maps and
              local search. We’re expanding to India to bring the same
              playbooks, tools, and experience to a new market.
            </p>
          </div>
          <img
            src="/img/about-team.jpg"
            alt="Our Team"
            className="rounded-2xl border border-white/10 bg-white/5 p-2"
          />
        </div>

        {/* Mission */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <img
            src="/img/about-mission.jpg"
            alt="Mission"
            className="rounded-2xl border border-white/10 bg-white/5 p-2"
          />
          <div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-white/75">
              To empower small and medium businesses with affordable, effective,
              and transparent SEO services that drive real-world results:
              footfall, calls, and new customers.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-semibold">Our Core Values</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: "Transparency",
                d: "Clear reporting, no jargon, no smoke and mirrors.",
              },
              {
                t: "Results First",
                d: "We focus on metrics that matter: calls, visits, and leads.",
              },
              {
                t: "Education",
                d: "We simplify SEO so clients understand what drives growth.",
              },
              {
                t: "Trust",
                d: "Long-term partnerships, not one-off gigs.",
              },
              {
                t: "Adaptability",
                d: "Google changes fast — we stay ahead so you don’t fall behind.",
              },
              {
                t: "Global + Local",
                d: "Canadian roots, Indian expansion — best of both worlds.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-[#FED045] text-sm tracking-wide">
                  {v.t}
                </div>
                <p className="mt-2 text-sm text-white/75">{v.d}</p>
              </div>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
