import {
  fiveIcon,
  fourIcon,
  keyIcon6,
  keyIcon7,
  keyIcon8,
  keyIcon9,
  oneIcon,
  sixIcon,
  threeIcon,
  twoIcon,
} from "@/features/use-cases/assets";

export const detailsCheckPoints = {
  heading: "What Does Finance Automation Deliver?",
  description1: "What Does Finance Automation Deliver?",
  description2: "With Prime Money, startups can now embed financial logic into their systems, automating key processes that are vital for operational efficiency and growth.",
  points: [
    {
      id: 1,
      title: "Real-Time Bank Feeds",
      description: "Connect to all your business bank accounts in the UK & EU, and fetch up-to-date transactions, balances, and account data through secure APIs.",
    },
    {
      id: 2,
      title: "Smart Transaction Categorisation",
      description: "Use AI-driven models to label expenses, income, fees, and refunds — instantly. No spreadsheets or manual sorting needed.",
    },
    {
      id: 3,
      title: "Auto-Reconciliation",
      description: "Match payments to invoices, sales, or employee reimbursements. Prime Money helps reduce human error and speeds up month-end closures.",
    },
    {
      id: 4,
      title: "Recurring Payments Detection",
      description: "Identify subscriptions, rent, and vendor contracts — helping businesses manage predictable cash flow and avoid missed renewals.",
    },
    {
      id: 5,
      title: "Cash Flow Forecasting",
      description: "With enriched historical and current data, generate insights into future liquidity, helping startups stay financially healthy and avoid surprises.",
    },
    {
      id: 6,
      title: "Embedded Financial Analytics",
      description: "Pull enriched data into your dashboards, tools, or internal reports. Help founders and finance teams visualise spend trends and growth metrics.",
    },
    {
      id: 7,
      title: "Regulatory Reporting & Audit Trails",
      description: "Generate audit-ready transaction histories, VAT summaries, and documentation required by HMRC or other regulators — all in one place.",
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
  heading: "Who Is It Built For?",
  points: [
    {
      id: 1,
      title: "Startups",
      description: "Founders and small teams can focus on product and growth while staying in control of finances without hiring full finance teams.",
      keyIcon: keyIcon6.src,
    },
    {
      id: 2,
      title: "Accounting & Bookkeeping Tools",
      description: "Supercharge software with automated bank feeds, enrichment, and reconciliation logic tailored to small business workflows.",
      keyIcon: keyIcon7.src,
    },
    {
      id: 3,
      title: "SMEs with Hybrid Systems",
      description: "Integrate Prime Money into ERP, CRM, or payroll tools to automate tedious finance functions and unify reporting across business units.",
      keyIcon: keyIcon8.src,
    },
    {
      id: 4,
      title: "E-commerce & Retail",
      description: "Manage daily sales, supplier payments, returns, and reconciliations with better visibility and less effort.",
      keyIcon: keyIcon9.src,
    },
  ],
};