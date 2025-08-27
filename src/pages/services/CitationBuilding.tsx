import ServiceTemplate from "../../components/ServiceTemplate";

export default function CitationBuilding() {
  return (
    <ServiceTemplate
      serviceSlug="citation-building"
      title="Citation Building"
      subtitle="Consistent NAP across top directories to boost local authority."
      heroImage="/img/citations-hero.jpg"
      sideImage="/img/citations-side.png"
      introHeading="What Are Citations?"
      introBody="Citations are business listings across directories. Consistency of name, address, phone, and categories strengthens your local authority and reduces confusion."
      introBullets={[
        "Top directories + niche/geo sites",
        "Duplicate suppression & cleanup",
        "Ongoing monitoring",
      ]}
      deliverables={[
        { t: "Baseline Audit", d: "Find existing listings and conflicts." },
        {
          t: "Build & Fix",
          d: "Submit/claim, normalize NAP, remove duplicates.",
        },
        {
          t: "Niche & Geo Citations",
          d: "Industry-specific and city portals.",
        },
        {
          t: "Aggregator Options",
          d: "Manual + aggregator mixes where sensible.",
        },
        { t: "Tracking Sheet", d: "Shared list with logins and status." },
        { t: "Re-checks", d: "Quarterly verification and updates." },
      ]}
      process={[
        { n: "1", t: "Discover", d: "Audit current citations & issues." },
        { n: "2", t: "Normalize", d: "Standardize NAP & categories." },
        { n: "3", t: "Expand", d: "Submit to top, niche, & geo sites." },
        { n: "4", t: "Verify", d: "Confirm live listings & document access." },
      ]}
    />
  );
}
