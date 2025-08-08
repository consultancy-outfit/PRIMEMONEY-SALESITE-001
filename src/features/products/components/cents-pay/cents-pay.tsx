"use client";

import {
  CentspayImage,
  CurrencyExchangeFXConversionImage,
  MultiCurrencyWalletImage,
  PeerToPeerTransfersImage,
  RealTimeMicroPaymentsImage,
  SavingsWithCentsImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const CentsPayFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: CentspayImage,
      subtitle: "Centspay (Smart Payments Engine)",
      description:
        "Centspay is a smart payment engine that powers all core wallet activity across your app. It lets users send, receive, save, and split payments in real time—across currencies and accounts. With flexible architecture and API-first design, Centspay supports payment triggers, automation (like round-ups or spend limits), transaction tagging, and user-specific rules. Whether you're supporting social payments, shopping features, or financial automation, Centspay works as a modular backbone that powers everything seamlessly. With embedded controls, you can tailor user journeys and ensure each transaction is instant, traceable, and secure.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Modular payment orchestration.",
            "Rules-based payment automation.",
            "Embedded tagging and spend categorisation.",
            "Integration with other wallet modules.",
            "Supports both internal and external transfers.",
            "Full transaction history and analytics.",
            "Developer-friendly APIs with SDKs.",
            "Scalable to millions of users.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Centralises all wallet operations in one engine.",
            "Enables customised payment flows.",
            "Drives smarter user engagement and retention.",
            "Boosts operational visibility and control.",
            "Speeds up time-to-market for new features.",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: MultiCurrencyWalletImage,
      subtitle: "Multi-Currency Wallet",
      description:
        "The Multi-Currency Wallet allows users to hold, manage, and transact in multiple currencies within a single wallet interface. Users can switch between GBP, EUR, USD (and more) instantly, view live balances, and avoid traditional FX fees by converting at real-time market rates. Whether users are traveling, paying international vendors, or managing savings in different currencies, this wallet puts complete control in their hands. Built with global scalability and compliance in mind, it’s perfect for platforms aiming to serve international or cross-border audiences with a seamless, secure solution.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Supports major and minor currencies.",
            "Instant currency switching and balances.",
            "Live FX conversion at mid-market rates.",
            "Local IBANs and wallets for supported regions.",
            "Transparent fees and full transaction logs.",
            "Works across all payment and saving modules.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Attracts global users with a single wallet.",
            "Reduces FX fees and improves transparency.",
            "Encourages frequent international usage.",
            "Boosts user trust with clear conversion controls.",
            "Attracts global users with a single wallet.",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: RealTimeMicroPaymentsImage,
      subtitle: "Real-Time Micro-Payments",
      description:
        "Real-Time Micro-Payments lets users send and receive extremely small value transactions—instantly and securely. Whether you're enabling tipping, rewards, content monetisation, or pay-as-you-go models, micro-payments unlock entirely new revenue experiences. This engine supports high volumes, low latency, and granular control. It also allows instant reconciliation, webhook notifications, and activity tracking. Designed for platforms with high transaction frequency and low ticket size, it’s trusted for reliability, scalability, and regulatory alignment in sub-penny economies.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Instant execution for payments under £1.",
            "Sub-penny support (e.g., £0.001).",
            "High-frequency transaction handling.",
            "Webhook triggers for real-time actions.",
            "Bulk payouts and user batching.",
            "Full ledger and reconciliation tools.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Ideal for content, media, rewards, and tipping.",
            "Enables new monetisation models.",
            "Reduces reliance on delayed or aggregated payouts.",
            "Scales to millions of events with precision.",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: CurrencyExchangeFXConversionImage,
      subtitle: "Currency Exchange & FX Conversion",
      description:
        "Enable users to convert currency in real-time at mid-market FX rates directly within the wallet. With this feature, you eliminate the hidden costs and delays of traditional banking. Whether your user wants to convert EUR to GBP before travel or USD to save in foreign accounts, the FX Conversion engine provides fast execution, live pricing, and transparent breakdowns. Built-in safeguards and compliance checks ensure all conversions meet local and international regulations.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Instant execution for payments under £1.",
            "Sub-penny support (e.g., £0.001).",
            "High-frequency transaction handling.",
            "Webhook triggers for real-time actions.",
            "Bulk payouts and user batching.",
            "Full ledger and reconciliation tools.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Ideal for content, media, rewards, and tipping.",
            "Enables new monetisation models.",
            "Reduces reliance on delayed or aggregated payouts.",
            "Scales to millions of events with precision.",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: SavingsWithCentsImage,
      subtitle: "Savings with Cents (Round-Up Engine)",
      description:
        "This feature lets users round up each purchase to the nearest pound (or set amount) and move the difference into a savings pot. For example, a £3.60 spend becomes £4.00, and £0.40 goes to savings. It’s effortless saving, gamified and automated. Users can choose to set round-up multipliers, triggers, or time-based boosts (e.g., double round-ups on Fridays). Every saving action is visible via in-app logs, with options to pause, withdraw, or boost funds anytime. Perfect for users who struggle to save manually but want daily micro-discipline.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Instant conversion at live FX rates.",
            "Real-time rate display before confirmation.",
            "Multi-leg transaction support.",
            "Integrated with Multi-Currency Wallet.",
            "Transparent breakdowns with no hidden markups.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Reduces friction for cross-border activity.",
            "Protects users from poor exchange rates.",
            "Builds trust through transparency.",
            "Complements multi-currency and P2P features.",
            "Strengthens wallet utility in global scenarios.",
          ],
        },
      ],
    },
    {
      id: 6,
      sectionImage: PeerToPeerTransfersImage,
      subtitle: "Peer-to-Peer Transfers",
      description:
        "Let users send money to friends, family, or groups instantly—within your platform. P2P transfers are sero-cost, fast, and secure. Ideal for splitting bills, sharing gifts, or paying back borrowed cash, they’re fully embedded in the wallet experience. Users can search via phone/email/username, attach notes or emojis, and even schedule recurring sends. With real-time notifications, balance updates, and optional verification, this system provides the seamless feel of modern mobile money apps while staying fully compliant.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Automatic round-ups on each transaction.",
            "Custom saving triggers and multipliers.",
            "Linked savings pots within the wallet.",
            "Real-time activity logs.",
            "Pause/resume and withdraw anytime.",
            "Optional saving challenges and badges.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Encourages healthy saving habits.",
            "Works passively—no manual input required.",
            "Increases app engagement and stickiness.",
            "Adds real value without feeling like a cost.",
            "Turns spending into long-term saving.",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={<>Centspay</>}
      PageDescription={
        <>
          Centspay gives your platform the tools to deliver next-gen digital
          wallet experiences—designed to be fast, flexible, and financially
          smart. Whether you’re launching a consumer-facing app or enhancing
          existing financial capabilities, Centspay covers everything from
          real-time micro-payments and round-up savings to seamless
          multi-currency transactions and peer-to-peer transfers. Empower users
          to control spending, track behavior, convert currencies instantly, and
          grow their money with every tap. All services are deeply integrated,
          mobile-friendly, and built for compliance. With Centspay, your wallet
          isn’t just digital—it’s dynamic, intelligent, and future-ready.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default CentsPayFeature;
