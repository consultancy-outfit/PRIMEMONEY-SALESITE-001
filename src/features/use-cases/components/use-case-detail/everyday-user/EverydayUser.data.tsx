import {
  fiveIcon,
  fourIcon,
  keyIcon10,
  keyIcon11,
  keyIcon12,
  keyIcon13,
  keyIcon18,
  oneIcon,
  sixIcon,
  threeIcon,
  twoIcon,
} from "@/features/use-cases/assets";

export const detailsCheckPoints = {
  heading: "Key Features for Wallet Innovation",
  description1: "",
  description2: "",
  points: [
    {
      id: 1,
      title: "Seamless KYC & Identity Verification",
      description: "Speed up onboarding with our bank-verified identity APIs and PSD2 connectivity. Offer frictionless signup while staying compliant with AML, KYC, and regulatory mandates.",
    },
    {
      id: 2,
      title: "Unified Account Access (AIS)",
      description: "Let users connect their bank accounts, see real-time balances, and track spending — all from your app. Support multiple accounts and banks with a single integration.",
    },
    {
      id: 3,
      title: "Smart Spend Insights & Budgeting",
      description: "Enrich transaction data with merchant names, categories, payment methods, and location. Help users visualise expenses, set budgets, and receive spend alerts.",
    },
    {
      id: 4,
      title: "Recurring Payment Detection",
      description: "Automatically identify subscriptions, rent, insurance, and other recurring outflows to help users manage commitments and avoid unwanted charges.",
    },
    {
      id: 5,
      title: "Income Stream Classification",
      description: "Highlight salary, freelance, passive, and government income sources — perfect for budget apps, student wallets, and gig economy tools.",
    },
    {
      id: 6,
      title: "Real-Time Categorization & Personalization",
      description: "Tag expenses instantly using over 200+ transaction categories. Let users personalise tags, create custom alerts, and gain behavioural insights.",
    },
    {
      id: 7,
      title: "Net Worth & Cash Flow Tracking",
      description: "Consolidate account balances, incoming funds, and outgoing expenses to show real-time net worth and forecast cash flow trends.",
    },
  ],
};

export const detailsNumberPoints = {
  heading: "Technical Specifications",
  points: [
    {
      id: 1,
      title: "Bank-Verified Account Data (AIS).",
      numberIcon: oneIcon.src,
    },
    {
      id: 2,
      title: "ISO 20022 data parsing.",
      numberIcon: twoIcon.src,
    },
    {
      id: 3,
      title: "Real-time updates via webhooks (every 4 to 6 hours).",
      numberIcon: threeIcon.src,
    },
    {
      id: 4,
      title: "Fully GDPR and PSD2 compliant.",
      numberIcon: fourIcon.src,
    },
    {
      id: 5,
      title: "JSON-based RESTful APIs.",
      numberIcon: fiveIcon.src,
    },
    {
      id: 6,
      title: "Seamless integration with payment service providers.",
      numberIcon: sixIcon.src,
    },
  ],
};

export const detailsKeyPoints = {
  heading: "Why Prime Money?",
  points: [
    {
      id: 1,
      title: "Faster Time-to-Market",
      description: "Launch powerful financial products in just weeks — saving you months of costly development and integration time.",
      keyIcon: keyIcon10.src,
    },
    {
      id: 2,
      title: "Secure by Design",
      description: "Enjoy peace of mind with bank-grade security infrastructure protecting every transaction and user interaction.",
      keyIcon: keyIcon11.src,
    },
    {
      id: 3,
      title: "Flexible & Modular",
      description: "Choose only the features that fit your product vision. Build smarter by selecting the modules that matter most to you.",
      keyIcon: keyIcon12.src,
    },
    {
      id: 4,
      title: "User-Centric",
      description: "Keep your users informed and in control at every step. Empower their financial decisions with real-time insights and clarity.",
      keyIcon: keyIcon18.src,
    },
    {
      id: 5,
      title: "Built for Scale",
      description: "Whether you have 10 users or 1 million, our architecture scales effortlessly. Built for performance, it supports fast-growing apps without compromise.",
      keyIcon: keyIcon13.src,
    },
  ],
};