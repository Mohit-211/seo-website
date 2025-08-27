import ServiceTemplate from "../../components/ServiceTemplate";

export default function GoogleAds() {
  return (
    <ServiceTemplate
      serviceSlug="google-ads"
      title="Google Ads for Local"
      subtitle="Immediate visibility with high-intent local campaigns."
      heroImage="/img/ads-hero.jpg"
      sideImage="/img/ads-side.png"
      introHeading="Why Google Ads?"
      introBody="Paid search complements Local SEO by capturing high-intent queries instantly. We build lean, geo-targeted campaigns that convert calls without wasting spend."
      introBullets={[
        "Exact/phrase match with negatives",
        "Call & location extensions",
        "Landing pages tuned for conversions",
      ]}
      deliverables={[
        {
          t: "Campaign Setup",
          d: "Structure, keywords, negatives, ad groups.",
        },
        {
          t: "Ad Copy & Extensions",
          d: "Calls, locations, offers, and testing.",
        },
        {
          t: "Landing Pages",
          d: "Fast Vite pages or your site, conversion-focused.",
        },
        {
          t: "Tracking",
          d: "GAds + GA4 events, call tracking, and dashboards.",
        },
        { t: "Optimization", d: "Bids, budgets, queries, A/B tests weekly." },
        { t: "Reports", d: "CPL, ROAS, and call outcomes." },
      ]}
      process={[
        { n: "1", t: "Plan", d: "Geo, keywords, budget, and goals." },
        { n: "2", t: "Launch", d: "Ads + pages + tracking live." },
        { n: "3", t: "Optimize", d: "Queries, bids, and split tests." },
        { n: "4", t: "Scale", d: "Double down on winners, cut waste." },
      ]}
    />
  );
}
