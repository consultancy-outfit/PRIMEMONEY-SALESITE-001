import { USE_CASE_DETAIL_ROUTES } from "@/constants/routes";
import {
  Card1Image,
  Card2Image,
  Card3Image,
  Card4Image,
  Card5Image,
  Card6Image,
} from "../../assets";

export const cardData = [
  {
    id: 1,
    heading: "Transform Bank Transactions into Predictive Insights",
    description:
      "Prime Moneys Data Intelligence suite turns raw financial transactions into enriched, structured, and highly actionable insights. Its ideal for credit scoring, budgeting apps, expense trackers, and embedded finance products where decision-making is key.",
    image: Card1Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.PREDICTIVE_INSIGHTS,
  },
  {
    id: 2,
    heading: "Build Seamless Payment Journeys with Direct Bank Integration",
    description:
      "Todays users expect instant, intuitive, and secure payments — without detours through third-party apps or outdated interfaces. Thats where embedded finance makes the difference. With Prime Moneys Embedded Payments & Account Connectivity,",
    image: Card2Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.DIRECT_BANK_INTEGRATION,
  },
  {
    id: 3,
    heading: "Bank-Verified Identity and Compliance in One API",
    description:
      "Simplify and accelerate user onboarding by using bank-level identity data. Prime Money helps you ensure only legitimate users access your services—cutting fraud and ensuring compliance without costly KYC teams.",
    image: Card3Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.ONE_API,
  },
  {
    id: 4,
    heading: "Scalable Finance Automation for Startups & SMEs",
    description:
      "Accountant HelpSquad provides intelligent financial management tools tailored for modern businesses. With plug-and-play modules for payable/receivable automation, cash flow predictions, and expense control, it replaces manual spreadsheets with AI-driven finance infrastructure.",
    image: Card4Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.STARTUPS_AND_SMES,
  },
  {
    id: 5,
    heading: "Powering Next-Gen Wallets for the Everyday User",
    description:
      "Centspay enables you to build smart, flexible, and secure wallets with native multi-currency, micro-transactions, P2P features, and savings tools. Its modular APIs help you launch standalone wallets or embed wallet tech inside your fintech product.",
    image: Card5Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.EVERYDAY_USER,
  },
  {
    id: 6,
    heading:
      "Redefining Digital Trust: Seamless Identity Verification & Consent Control",
    description:
      "In todays digital financial ecosystem, trust is currency. Customers demand secure, seamless, and compliant onboarding experiences — and regulators  move fast, without breaking trust.",
    image: Card6Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.CONSENT_CONTROL,
  },
];
