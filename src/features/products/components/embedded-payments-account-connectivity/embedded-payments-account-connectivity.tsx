"use client";

import {
  PaymentInitiationServicesImage,
  RecurringSubscriptionPaymentSupportImage,
  SmartBankDataLayerImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const EmbeddedPaymentsAccountConnectivityFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: PaymentInitiationServicesImage,
      subtitle: "Payment Initiation Services",
      description:
        "Payment Initiation Services allow users to authorise payments from their bank accounts directly from within your application. With PIS, you can offer fast, low-cost, and secure bank-to-bank transfers that bypass traditional card networks. Transactions are executed through licensed APIs and authenticated using Strong Customer Authentication (SCA). Whether you're collecting payments, disbursing loans, enabling peer-to-peer transfers, or accepting checkout payments, PIS improves success rates and reduces fees. All actions are logged, traceable, and compliant under FCA and PSD2 standards. With instant or near-instant execution and support for single and future-dated payments, your platform can reduce churn, increase speed, and boost reliability.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Real-time or scheduled bank transfers.",
            "SCA-compliant user authentication.",
            "Instant confirmation of successful initiation.",
            "One-time and recurring payment support.",
            "Full traceability and audit logs.",
            "API-first design with easy integration.",
            "Direct access to all major UK and EU banks.",
            "Optional branded consent and redirect flows.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Eliminates reliance on costly card networks.",
            "Faster settlements and reduced payment delays.",
            "Increases conversion at checkout and lowers abandonment.",
            "Perfect for e-commerce, lending, and financial platforms.",
            "Maintains full compliance with FCA and PSD2 regulations.",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: PaymentInitiationServicesImage,
      subtitle: "SmartBank Data Layer (Connectivity + Routing)",
      description:
        "The SmartBank Data Layer is the intelligent infrastructure that connects your app to the banking system. Instead of managing dosens of integrations across UK and EU banks, you get a single, smart API that handles connections, routing, health checks, and consent. It automatically determines the optimal path for data access and payment initiation, applying fallback routes if a bank is down. You get fast, resilient connectivity and always-on access to user financial accounts. It also includes features like real-time session refresh, permission management, and bank status monitoring. Built to scale with your platform, this layer abstracts away complexity so your team can move fast without sacrificing security or stability.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Bank-level API connections across UK & Europe.",
            "Dynamic routing and fallback for high availability.",
            "Consent management and session handling.",
            "Automatic reconnection and session refresh.",
            "Monitoring of bank API uptime & reliability.",
            "Unified access to account data + PIS endpoints.",
            "Developer-friendly documentation and SDKs.",
            "Plug-and-play integration for any financial app.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Speeds up development and reduces integration time.",
            "Ensures maximum uptime and payment reliability.",
            "One API for all supported banks—simplifies scaling.",
            "Minimises failed connections and user frustration.",
            "Provides peace of mind with fallback and monitoring.",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: SmartBankDataLayerImage,
      subtitle: "SmartBank Data Layer (Connectivity + Routing)",
      description:
        "The SmartBank Data Layer is the intelligent infrastructure that connects your app to the banking system. Instead of managing dosens of integrations across UK and EU banks, you get a single, smart API that handles connections, routing, health checks, and consent. It automatically determines the optimal path for data access and payment initiation, applying fallback routes if a bank is down. You get fast, resilient connectivity and always-on access to user financial accounts. It also includes features like real-time session refresh, permission management, and bank status monitoring. Built to scale with your platform, this layer abstracts away complexity so your team can move fast without sacrificing security or stability.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Bank-level API connections across UK & Europe.",
            "Dynamic routing and fallback for high availability.",
            "Consent management and session handling.",
            "Automatic reconnection and session refresh.",
            "Monitoring of bank API uptime & reliability.",
            "Unified access to account data + PIS endpoints.",
            "Developer-friendly documentation and SDKs.",
            "Plug-and-play integration for any financial app.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Speeds up development and reduces integration time.",
            "Ensures maximum uptime and payment reliability.",
            "One API for all supported banks—simplifies scaling.",
            "Minimises failed connections and user frustration.",
            "Provides peace of mind with fallback and monitoring.",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: RecurringSubscriptionPaymentSupportImage,
      subtitle: "Recurring / Subscription Payment Support",
      description:
        "Prime Money’s recurring payment support lets you set up and manage recurring bank payments using open banking protocols. Unlike card-based subscriptions, which can expire or fail due to card loss, bank-direct subscriptions remain stable and cost-effective. Users can approve a mandate once, and the platform will automatically initiate future payments based on your schedule—whether weekly, monthly, or custom intervals. You also gain full visibility into mandate status, with control to pause, resume, or cancel. Built-in SCA ensures user trust and regulatory alignment. Ideal for SaaS, digital subscriptions, rental payments, gym memberships, donations, or loan repayment models, it keeps your revenue predictable and your users happy.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Setup of repeat payments via open banking.",
            "One-time SCA approval for recurring use.",
            "Supports monthly, weekly, or flexible intervals.",
            "Mandate dashboard with pause/resume options.",
            "Real-time failure alerts and retry logic.",
            "Complete user control for mandate cancellation.",
            "Dashboard and webhook access for billing events.",
            "Integrated with PIS and SmartBank for seamless execution.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Increases payment reliability and user retention.",
            "Reduces support requests for failed/expired payments.",
            "Ideal for any recurring revenue business model.",
            "Compliant with PSD2 & SCA—fully secure.",
            "Simplifies subscription and billing workflows.",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={<>Embedded Payments & Account Connectivity</>}
      PageDescription={
        <>
          Prime Money’s Embedded Payments & Account Connectivity tools allow you
          to embed frictionless, compliant, and secure payment infrastructure
          directly into your digital experience. Instead of routing through
          cards or third-party processors, you gain the power to connect to user
          bank accounts, initiate bank-to-bank payments, and manage
          subscriptions through one unified platform. With built-in regulatory
          compliance (PSD2, FCA, SCA), low latency APIs, and smart fallback
          mechanisms, you can build with confidence while focusing on user
          experience and scale. Ideal for platforms with high transaction
          volumes, recurring revenue models, or custom payment workflows.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default EmbeddedPaymentsAccountConnectivityFeature;
