import ServiceTemplate from "../../components/ServiceTemplate";

export default function GoogleBusinessProfile() {
  return (
    <ServiceTemplate
      serviceSlug="google-business-profile"
      title="Google Business Profile Optimization"
      subtitle="Keep your listing sharp, active, and conversion-ready."
      heroImage="/img/gbp-hero.jpg"
      sideImage="/img/gbp-side.png"
      introHeading="Why Optimize GBP?"
      introBody="Your Google Business Profile is the storefront on Google. We optimize categories, services, products, photos, posts, messaging, and Q&A so more searches become calls."
      introBullets={[
        "Correct categories & complete services",
        "Compelling photos & UGC strategy",
        "Consistent posting & offers",
        "Message, call & direction tracking",
      ]}
      deliverables={[
        {
          t: "Profile Cleanup",
          d: "Verify, merge duplicates, fix suspensions, and complete fields.",
        },
        {
          t: "Conversion Boosters",
          d: "Photos, products/services, booking links, FAQs, and messaging.",
        },
        {
          t: "Posts & Offers",
          d: "Weekly posts, events, and limited-time offers to drive action.",
        },
        {
          t: "Insights Tracking",
          d: "Call, direction, and view metrics with monthly reports.",
        },
        {
          t: "Guidelines Compliance",
          d: "Stay within Google policies to avoid penalties.",
        },
        { t: "Training", d: "Simple SOPs for your team to keep it fresh." },
      ]}
      process={[
        {
          n: "1",
          t: "Audit",
          d: "Categories, completeness, policy, competitors.",
        },
        {
          n: "2",
          t: "Optimize",
          d: "Fields, images, services/products, CTAs.",
        },
        { n: "3", t: "Engage", d: "Posts, Q&A, messaging, updates." },
        { n: "4", t: "Measure", d: "Insights + conversions, iterate monthly." },
      ]}
      faqs={[
        {
          q: "Suspended profile?",
          a: "We help with reinstatement and proof packages.",
        },
        {
          q: "How often to post?",
          a: "Weekly is ideal; promotions and events as needed.",
        },
      ]}
    />
  );
}
