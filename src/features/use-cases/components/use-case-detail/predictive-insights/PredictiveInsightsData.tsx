import {
  fiveIcon,
  fourIcon,
  keyIcon1,
  keyIcon2,
  keyIcon3,
  keyIcon7,
  oneIcon,
  sixIcon,
  threeIcon,
  twoIcon,
} from "@/features/use-cases/assets";

export const detailsCheckPoints = {
  heading: "What You Can Do with Financial Intelligence",
  description1:
  "Whether you're assessing borrower risk, automating budget suggestions, or enhancing user experience with contextual finance insights, our suite offers unmatched granularity and performance:",
  description2: "",
  points: [
    {
      id: 1,
      title: "Account Information Services (AIS)",
      description:
        "Secure, real-time access to users account balances, transaction histories, and standing orders — directly from regulated banks. Supports multi-account aggregation and refresh every 4 to 6 hours.",
    },
    {
      id: 2,
      title: "Transaction Categorization",
      description:
        "Automatically classify transactions into 200+ smart categories using AI-based recognition systems. Tags cover merchant type, industry verticals, usage context (e.g., “grocery,” “rideshare,” “utilities”), and personal finance relevance.",
    },
    {
      id: 3,
      title: "Enrichment Engine",
      description:
        "Add powerful metadata to raw transactions — including merchant name, location, type of purchase, payment method, logo, and channel (in-store vs online) — transforming unlabelled data into an intuitive ledger.",
    },
    {
      id: 4,
      title: "Income Stream Detection",
      description:
        "Identify income from various sources like salaries, freelancing platforms, government benefits, pensions, rental earnings, and dividend payouts. Helps validate financial stability and earning diversity.",
    },
    {
      id: 5,
      title: "Subscription & Recurring Payment Detection",
      description:
        "Detect repeat patterns and flag subscriptions (e.g., Netflix, Spotify), loan repayments, instalments, utility bills, and insurance premiums. Ideal for managing budgeting insights and identifying financial obligations.",
    },
    {
      id: 6,
      title: "Cash Flow & Liquidity Insight",
      description:
        "Evaluate user liquidity using dynamic balance tracking, real-time income-to-expense ratios, and average net flow calculations. Use this data to assess solvency, offer real-time credit decisions, or guide users to better financial choices.",
    },
    {
      id: 7,
      title: "Risk & Credit Scoring APIs",
      description:
        "Access prebuilt financial behaviour models or deploy your own logic on our data layer. Features include missed payments detection, income stability, debt ratio estimations, and expense volatility checks — all vital for risk profiling.",
    },
  ],
};

export const detailsNumberPoints = {
  heading: "Technical Specifications",
  points: [
    {
      id: 1,
      title: "Regulatory Framework: PSD2-compliant (UK & EU).",
      numberIcon: oneIcon.src,
    },
    {
      id: 2,
      title: "Data Format: JSON-based API with webhook support.",
      numberIcon: twoIcon.src,
    },
    {
      id: 3,
      title: "Parsing Standard: ISO 20022-based transaction structure.",
      numberIcon: threeIcon.src,
    },
    {
      id: 4,
      title: "Security: Bank-level encryption with consented access.",
      numberIcon: fourIcon.src,
    },
    {
      id: 5,
      title: "Refresh Frequency: 4 to 6 hours, configurable.",
      numberIcon: fiveIcon.src,
    },
    {
      id: 6,
      title: "Authentication: OAuth2 + Consent Management Layer.",
      numberIcon: sixIcon.src,
    },
  ],
};

export const detailsKeyPoints = {
  heading: "Use Cases in the Wild",
  points: [
    {
      id: 1,
      title: "Lending Platforms",
      description:
        "Use enriched data to reduce underwriting friction, validate income sources, and score creditworthiness without waiting for paperwork.",
      keyIcon: keyIcon1.src,
    },
    {
      id: 2,
      title: "Accounting & Bookkeeping Tools",
      description:
        "Offer clients automatically categorized ledgers, smart forecasting, and simplified reconciliation features powered by bank-verified data.",
      keyIcon: keyIcon7.src,
    },
    {
      id: 3,
      title: "Personal Finance Management (PFM) Apps",
      description:
        "Provide users with clear overviews of where their money goes, budgeting suggestions, alerts for unusual expenses, & spending trend breakdowns",
      keyIcon: keyIcon2.src,
    },
    {
      id: 4,
      title: "Income Verification for Gig Workers",
      description:
        "Capture diverse income streams across accounts to simplify onboarding for freelancers, ride share drivers, and other non-salaried workers.",
      keyIcon: keyIcon3.src,
    },
  ],
};
