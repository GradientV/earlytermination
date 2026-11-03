export type ServiceId = "background" | "private" | "federal" | "attorneys";

export interface Service {
  id: ServiceId;
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
  audience: string;
}

export const services: Service[] = [
  {
    id: "background",
    title: "Background investigations",
    eyebrow: "KNOW WHO YOU’RE DEALING WITH",
    description:
      "Look beyond the surface. Focused research into personal, professional, and business backgrounds helps you make decisions with a clearer picture.",
    details: [
      "Personal and employment background investigations",
      "Local, state, and federal criminal history research",
      "Reference checks and professional license verification",
      "Court records, liens, judgments, and lawsuit history",
      "Business due diligence and relationship verification",
    ],
    audience: "For individuals, employers, business owners, and legal teams.",
  },
  {
    id: "private",
    title: "Private investigations",
    eyebrow: "FOLLOW THE FACTS",
    description:
      "Discreet investigative work for questions that demand closer attention. We gather information, examine records, and help you understand what matters.",
    details: [
      "Witness location, skip tracing, and interviews",
      "Asset searches and bankruptcy research",
      "Open-source intelligence and public-record research",
      "Surveillance and general investigations",
      "Business, real estate fraud, and scam investigations",
    ],
    audience:
      "For individuals, businesses, and attorneys with a matter to investigate.",
  },
  {
    id: "federal",
    title: "Federal supervision consulting",
    eyebrow: "EXPERIENCE WITH THE SYSTEM",
    description:
      "Specialized insight into federal probation and supervised release, informed by decades of work inside the state and federal justice systems.",
    details: [
      "Early termination case review and supporting documentation",
      "Probation and supervised release violation analysis",
      "Supervision conditions, assessments, and compliance review",
      "Jurisdictional transfers, relocation, and reentry planning",
      "Organizational compliance plans and audits",
      "Financial analysis and restitution-related matters",
    ],
    audience:
      "For people navigating supervision and the attorneys who represent them.",
  },
  {
    id: "attorneys",
    title: "Attorney support",
    eyebrow: "A DEEPER PERSPECTIVE FOR YOUR CASE",
    description:
      "Independent investigation and practical federal probation insight for counsel. Our work brings detail, context, and an experienced outside perspective to your case preparation.",
    details: [
      "Witness location, background research, and independent interviews",
      "Case review, evidence research, and asset searches",
      "Jury pool research and witness vetting",
      "Federal probation and supervised release consultation",
      "Expert consultation and testimony",
      "Documentation support for early termination and clemency matters",
    ],
    audience:
      "For criminal defense counsel, civil litigators, and other legal teams.",
  },
];
