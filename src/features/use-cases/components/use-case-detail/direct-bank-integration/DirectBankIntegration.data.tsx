import {
  fiveIcon,
  fourIcon,
  keyIcon1,
  keyIcon4,
  keyIcon5,
  keyIcon9,
  oneIcon,
  threeIcon,
  twoIcon,
} from "@/features/use-cases/assets";

export const detailsCheckPoints = {
  heading: "What You Can Enable with Embedded Payments",
  description1: "Our modular APIs allow you to build complete payment flows inside your platform, removing friction and giving users the confidence to transact more frequently and more securely.",
  description2: "",
  points: [
    {
      id: 1,
      title: "Seamless Account-to-Account (A2A) Transfers",
      description: "Enable users to send or receive funds directly between bank accounts with no cards, no intermediaries, and no delays — just secure authentication and instant execution.",
    },
    {
      id: 2,
      title: "Integrated Payouts for Businesses",
      description: "Let platforms and SMEs manage bulk or recurring payouts — whether to freelancers, vendors, team members, or customers — all through programmable APIs with full transparency and control.",
    },
    {
      id: 3,
      title: "Branded Checkout & In-App Payments",
      description: "Keep the customer within your ecosystem. Create a branded, compliant checkout experience that feels native — with no redirects or clunky payment gateways.",
    },
    {
      id: 4,
      title: "Balance Verification Before Payments",
      description: "Fetch real-time balances from users' connected accounts to prevent failed payments, reduce risk, and improve confidence for larger-value transactions.",
    },
    {
      id: 5,
      title: "Real-Time Payment Status & Webhooks",
      description: "Track transaction lifecycle in real time. Our webhook infrastructure keeps you updated on success, failure, pending statuses, and exceptions for operational visibility.",
    },
    {
      id: 6,
      title: "Real-Time Payment Status & Webhooks",
      description: "All connections are PSD2 and UK Open Banking compliant. Users grant granular consent for access and payment execution, ensuring compliance and trust.",
    },
  ],
};

export const detailsNumberPoints = {
  heading: "Technical Features",
  points: [
    {
      id: 1,
      title: "Open Banking Rail Support: Faster Payments, SEPA, and domestic rails across the UK & EU.",
      numberIcon: oneIcon.src,
    },
    {
      id: 2,
      title: "Encryption & Security: End-to-end data protection.",
      numberIcon: twoIcon.src,
    },
    {
      id: 3,
      title: "Developer-Friendly APIs: REST-based JSON endpoints with sandbox environment.",
      numberIcon: threeIcon.src,
    },
    {
      id: 4,
      title: "Consent Management: OAuth 2.0 flow with real-time scope control.",
      numberIcon: fourIcon.src,
    },
    {
      id: 5,
      title: "Latency: Sub-second response time for balance checks and payment status.",
      numberIcon: fiveIcon.src,
    },
  ],
};

export const detailsKeyPoints = {
  heading: "Perfect For",
  points: [
    {
      id: 1,
      title: "E-commerce & Marketplaces",
      description: "Embed checkout with direct-from-bank payments to reduce fees, lower fraud, and boost conversions.",
      keyIcon: keyIcon9.src,
    },
    {
      id: 2,
      title: "B2B Platforms & Invoicing Tools",
      description: "Give suppliers, contractors, and business users the ability to get paid faster, with transparent payment flows tied to their accounts.",
      keyIcon: keyIcon5.src,
    },
    {
      id: 3,
      title: "SaaS & HR Platforms",
      description: "Automate payrolls, reimbursements, and vendor payments from one single interface — integrated with bank accounts and balance validation.",
      keyIcon: keyIcon4.src,
    },
    {
      id: 4,
      title: "Fintechs & Challenger Banks",
      description: "Use embedded payment capabilities to complement your product suite, offering native transfers, deposits, and more without a card network.",
      keyIcon: keyIcon1.src,
    },
  ],
};