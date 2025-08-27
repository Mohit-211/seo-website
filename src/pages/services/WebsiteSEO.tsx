import ServiceTemplate from "../../components/ServiceTemplate";

export default function WebsiteSEO() {
  return (
    <ServiceTemplate
      serviceSlug="website-seo"
      title="Website SEO"
      subtitle="Technical + content SEO to rank your site and convert traffic."
      heroImage="/img/web-seo-hero.jpg"
      sideImage="/img/web-seo-side.png"
      introHeading="Why Website SEO?"
      introBody="Complement your Local SEO with a fast, crawlable site and content that targets local intent. We fix technical blockers and build pages that convert searches to leads."
      introBullets={[
        "Core Web Vitals & speed fixes",
        "Local landing pages & FAQs",
        "Internal links & schema",
      ]}
      deliverables={[
        {
          t: "Technical Audit",
          d: "CWV, indexing, sitemaps, redirects, errors.",
        },
        {
          t: "On-Page SEO",
          d: "Titles/meta, headers, internal links, schema.",
        },
        { t: "Local Pages", d: "City/service pages optimized for intent." },
        { t: "Content Plan", d: "Topical clusters for authority & FAQs." },
        { t: "Analytics", d: "Goals, events, and call tracking setup." },
        { t: "Reporting", d: "Rankings, traffic, conversions." },
      ]}
      process={[
        { n: "1", t: "Audit", d: "Technical + content baseline." },
        { n: "2", t: "Fix", d: "Crawlability, speed, and metadata." },
        { n: "3", t: "Build", d: "Local pages + content clusters." },
        { n: "4", t: "Measure", d: "Leads and conversions, not vanity." },
      ]}
    />
  );
}
