"use client";

import { AccountInformationImage } from "@/assets/images/features/products";
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
            "Multi-bank account aggregation",
            "Real-time balance and transaction retrieval",
            "Consent-driven, PSD2-compliant access",
            "Seamless integration with personal and business finance tools",
            "Support for all major UK and EU banks",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Improve financial forecasting with live data",
            "Reduce manual data entry and reconciliation",
            "Enable personalised insights for your users",
            "Stay compliant with open banking standards",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={
        <>
          Seamless, Secure Access to <br /> What Matters Most
        </>
      }
      PageDescription={
        <>
          Empower users to control their financial data with precision and
          trust. Our access tools are <br />
          designed for real-time bank connectivity, secure authorisations, and
          consent-first <br />
          experiences — all under full regulatory compliance.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default FinancialDataIntelligenceFeature;
