import ServiceTemplate from "../../components/ServiceTemplate";

export default function LocalSEO() {
  return (
    <ServiceTemplate
      serviceSlug="local-seo"
      title="Local SEO"
      subtitle="Win the Google Map Pack for 'near me' searches and turn views into calls."
      heroImage="/img/local-seo-hero.jpg"
      sideImage="/img/local-seo-map.png"
      introHeading="What is Local SEO?"
      introBody="Local SEO boosts your visibility in Google’s Map Pack and local results. We optimize Google Business Profile, reviews, citations, and local content so nearby customers find—and choose—you."
      introBullets={[
        "Win city + 'near me' searches",
        "Increase calls, directions & bookings",
        "Consistent NAP across top directories",
        "Active posts, photos & Q&A on GBP",
      ]}
      deliverables={[
        {
          t: "Google Business Profile",
          d: "Setup/cleanup, categories, services, photos, posts, Q&A, messaging.",
        },
        {
          t: "Reviews & Reputation",
          d: "Acquisition playbook, response templates, and monitoring.",
        },
        {
          t: "Citations & NAP",
          d: "Accurate listings, duplicate cleanup, and consistency fixes.",
        },
        {
          t: "Local Content",
          d: "Service-area pages, FAQs, and on-page local signals.",
        },
        {
          t: "Local On-Page SEO",
          d: "Schema, titles/meta, internal links for local intent.",
        },
        {
          t: "Reporting",
          d: "Monthly KPIs: rankings, calls, directions, and actions.",
        },
      ]}
      process={[
        {
          n: "1",
          t: "Audit",
          d: "GBP, citations, competitors, baseline metrics.",
        },
        {
          n: "2",
          t: "Fix",
          d: "Clean NAP, optimize profile/site, add core content.",
        },
        { n: "3", t: "Grow", d: "Reviews engine, posts, local links & pages." },
        { n: "4", t: "Measure", d: "Track map rankings, calls & ROI monthly." },
      ]}
      faqs={[
        {
          q: "How fast are results?",
          a: "Meaningful movement in 30–60 days for most local niches.",
        },
        {
          q: "Do I need a website?",
          a: "GBP alone can drive leads; a site strengthens rankings and conversions.",
        },
        {
          q: "Multi-location?",
          a: "Yes — location groups, unique pages, and per-location tracking.",
        },
      ]}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Local SEO",
        serviceType: "Local SEO",
        areaServed: ["India", "Canada"],
        provider: { "@type": "Organization", name: "LocalSEOPro" },
        description:
          "Local SEO service to improve visibility in Google Maps and local search.",
      }}
    />
  );
}
