import ServiceTemplate from "../../components/ServiceTemplate";

export default function ReviewsReputation() {
  return (
    <ServiceTemplate
      serviceSlug="reviews-reputation"
      title="Reviews & Reputation"
      subtitle="Generate 5-star reviews that win trust and drive conversions."
      heroImage="/img/reviews-hero.jpg"
      sideImage="/img/reviews-side.png"
      introHeading="Why Reviews Matter"
      introBody="Reviews are the #1 trust signal in local search. We build a simple, compliant system that earns more quality reviews and responds to them professionally."
      introBullets={[
        "Automated review requests (QR/SMS/email)",
        "Responder playbooks & escalation paths",
        "Policy-safe gating avoidance",
      ]}
      deliverables={[
        {
          t: "Acquisition System",
          d: "QR codes, SMS/email templates, timing & triggers.",
        },
        {
          t: "Responses",
          d: "Done-for-you replies, tone guides, crisis handling.",
        },
        {
          t: "Profile Spread",
          d: "Google + key vertical sites (Healthgrades, Avvo, etc.).",
        },
        {
          t: "Sentiment Tracking",
          d: "Monitor ratings and keywords that impact conversions.",
        },
        {
          t: "Compliance",
          d: "No gating; transparent, policy-aligned tactics.",
        },
        {
          t: "Reporting",
          d: "Growth trends, keyword sentiment, and impact on calls.",
        },
      ]}
      process={[
        { n: "1", t: "Setup", d: "Templates, QR, links; train front desk." },
        { n: "2", t: "Request", d: "Automate after appointments or jobs." },
        { n: "3", t: "Respond", d: "Speedy replies + playbooks." },
        { n: "4", t: "Improve", d: "Act on feedback themes to boost CX." },
      ]}
    />
  );
}
