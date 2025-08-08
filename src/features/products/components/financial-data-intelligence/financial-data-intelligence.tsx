"use client";

import {
  AccountInformationImage,
  BankDataAggregationImage,
  DataEnrichmentImage,
  RiskCreditScoringImage,
  TransactionCategorisationImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";
export const FinancialDataIntelligenceFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: AccountInformationImage,
      subtitle: "Account Information Services",
      description:
        "AIS gives you secure, regulated access to users’ financial data—across banks, accounts, and geographies. From current account balances to detailed transaction history, our AIS API unlocks deep financial visibility in real time. Designed for frictionless user consent and fast onboarding, it helps you power PFM apps, budgeting tools, lending workflows, and account-based services. We provide structured, consistent data across institutions, reducing integration headaches. Fully PSD2 and FCA compliant, Prime Money’s AIS is built for scale and speed, with enterprise-grade uptime and bank coverage. Use it to fuel smarter credit decisions, drive real-time account verification, and personalise user experiences with live data at the core.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Secure access to account balances and transactions.",
            "Cross-bank, cross-account connectivity.",
            "Standardised data formatting.",
            "Consent management tools.",
            "Real-time refresh and sync.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Speed up onboarding with verified data.",
            "Drive real-time insights across accounts.",
            "Lower fraud and error through verified financials.",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: BankDataAggregationImage,
      subtitle: "Bank Data Aggregation",
      description:
        "Unify financial data from multiple bank accounts into one centralised stream. Prime Money’s Aggregation API simplifies how you access, normalise, and use data across retail banks, challenger banks, e-wallets, and credit institutions. Whether you’re building a neobank, lending solution, or accounting app, you’ll get a complete financial picture—no more stitching together inconsistent sources. Our API intelligently handles bank formats, transaction timelines, and account types, ensuring your backend always receives clean, usable data. Real-time updates and historical depth allow for deeper behavioral analytics and customer profiling. It's plug-and-play infrastructure for multi-account clarity.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Pan-bank aggregation support.",
            "Multi-account and multi-user capabilities.",
            "Unified data structure.",
            "Historical and real-time sync.",
            "Seamless reconnection support.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Reduce engineering overhead.",
            "Offer users a unified view of their finances.",
            "Improve customer retention through visibility.",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: TransactionCategorisationImage,
      subtitle: "Transaction Categorisation",
      description:
        "Turn confusing transaction strings into intuitive, categorised records your users can instantly understand. Prime Money’s categorisation engine uses AI and natural language processing to detect merchants, classify spend types, and organise financial data in real time. With over 1,000 category types and custom tagging support, your app becomes instantly more usable and insight-driven. Recurring payments are automatically flagged, while duplicate or unusual activity is highlighted. Whether you’re building spending breakdowns, budgeting tools, or alerts, categorised data makes everything clearer. This service lays the foundation for behavioral insights, personalised nudges, and smart financial coaching.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "AI-driven transaction classification.",
            "Merchant name recognition and tagging.",
            "Support for custom category taxonomies.",
            "Detection of subscriptions and recurring activity.",
            "Works across personal and business accounts.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Help users track and manage spending.",
            "Power better dashboards and financial tools.",
            "Reduce manual tagging and improve UX.",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: DataEnrichmentImage,
      subtitle: "Data Enrichment",
      description:
        "Enrichment transforms plain transaction data into detailed, contextual insights. We add merchant names, logos, categories, location info, and more—making every financial record cleaner, friendlier, and far more useful. Whether a user spent at “TESCO PLC 3948/09” or “UBER *EATS,” we return a recognisable, branded experience. This helps power visual dashboards, budgeting tools, fraud detection, and customer intelligence engines. Enriched data also supports machine learning models and improves categorisation precision. Add real-world clarity to raw data and deliver customer experiences that feel personal, visual, and intuitive—every time.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Merchant enrichment (name, logo, category, URL).",
            "Geolocation and mapping support.",
            "Spend context tagging.",
            "Duplicate resolution and anomaly flags.",
            "Industry-standard taxonomy.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Improve financial clarity and user trust.",
            "Power cleaner dashboards and analytics.",
            "Build stronger brand engagement through data.",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: RiskCreditScoringImage,
      subtitle: "Risk & Credit Scoring",
      description:
        "Move beyond outdated credit checks with dynamic, data-driven scoring. Prime Money helps you build custom risk models using up-to-date account and transaction data—giving you clearer, more timely insights into creditworthiness, affordability, and financial behavior. Our models consider account inflows/outflows, regularity of income, expense consistency, and behavioral signals to build trustable profiles. This enables you to score thin-file or underbanked users, reduce fraud, and boost approval rates without compromising safety. Flexible enough for lending, leasing, insurance, and tenant checks, it’s credit scoring for the open banking era.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Real-time affordability checks.",
            "Behavioral credit scoring APIs.",
            "Combine with traditional credit data.",
            "Custom rule-based scoring models.",
            "Alerts for financial stress indicators.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Expand your addressable customer base.",
            "Reduce loan default risk with fresher data.",
            "Make faster, fairer credit decisions.",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={<>Financial Data Intelligence</>}
      PageDescription={
        <>
          Unlock the power of enriched financial data to fuel precision,
          personalisation, and performance. With Prime Money’s Financial Data
          Intelligence suite, raw bank feeds are transformed into meaningful,
          categorised, and contextualised insights—enabling you to build more
          responsive, relevant, and responsible financial products. Whether
          you’re building a PFM app, credit engine, or financial planning tool,
          our APIs give you the clarity and context needed to act decisively. Go
          beyond balances. Detect trends, behaviors, and opportunities in real
          time. Our tools help you assess risk faster, personalise customer
          journeys, and unlock deeper customer understanding with every
          transaction. Built for speed, accuracy, and insight at scale.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default FinancialDataIntelligenceFeature;
