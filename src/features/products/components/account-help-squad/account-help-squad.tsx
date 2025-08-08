"use client";

import {
  AccountsPayableImage,
  AccountsReceivableImage,
  CashFlowForecastingImage,
  CustomerAssistanceHubImage,
  ExpenseManagementImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";
export const AccountHelpSquadFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: AccountsPayableImage,
      subtitle: "Accounts Payable",
      description:
        "The Accounts Payable solution streamlines the end-to-end process of paying suppliers, contractors, and bills. It integrates directly with banking rails to automate approval workflows, execute payments, and manage payables across multiple currencies and vendors. With real-time visibility into due dates, payment status, and liquidity impact, users can reduce manual errors, avoid late fees, and build better vendor relationships. Approvals can be customised by role or rule, and payment execution is tracked with instant confirmation. Designed for embedded use in accounting platforms, business finance tools, or banking apps, it reduces admin overhead and improves trust in cash outflows.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Role-based approval workflows.",
            "Automated due date alerts.",
            "Multi-currency support for global vendors.",
            "Bulk or individual payment scheduling.",
            "Direct bank payment execution via APIs.",
            "Integrated invoice capture and reconciliation.",
            "Real-time payment tracking and status updates.",
            "Customisable payment rules and caps.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Minimises late payments and associated penalties.",
            "Automates manual AP processes to reduce workload.",
            "Strengthens vendor relationships with on-time payouts.",
            "Offers real-time control over outgoing cash flow.",
            "Fully integrates into finance or ERP systems.",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: AccountsReceivableImage,
      subtitle: "Accounts Receivable",
      description:
        "Accounts Receivable tools help your platform's users collect money faster and with less friction. From generating smart invoices to setting reminders and enabling one-click payment options, every step is optimised for faster collections. Integrated with open banking rails, users can embed payment links, monitor bank confirmations, and even reconcile payments automatically. Flexible customer communications and intelligent retry logic reduce missed payments and speed up working capital cycles. Ideal for accounting platforms, freelancer apps, or embedded finance tools that want to reduce collection times and improve user cash flow.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Smart invoicing with embedded pay links.",
            "Payment tracking via bank APIs.",
            "Automated reminders and follow-ups.",
            "Real-time settlement confirmations.",
            "Customer communication logs.",
            "Auto-reconciliation of payments and invoices.",
            "Integration with AR ledgers and CRMs.",
            "Payment plan and installment support.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Accelerates cash collection cycles.",
            "Reduces missed or delayed payments.",
            "Increases visibility into receivables pipeline.",
            "Cuts down on manual tracking and reconciliation.",
            "Improves liquidity for small business users.",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: CashFlowForecastingImage,
      subtitle: "Cash Flow & Forecasting",
      description:
        "Our Cash Flow & Forecasting engine gives your users clear visibility into their current and future financial position. By combining real-time bank data, transaction categorisation, and scheduled payments or invoices, the tool generates accurate short- and long-term forecasts. Users can simulate different scenarios—like adding a new hire, securing a loan, or losing a major client—and see the financial impact instantly. Designed to reduce surprises and improve financial decisions, this tool is invaluable for startups, SMEs, and solo entrepreneurs managing uncertain cash cycles. Integration-ready via APIs, it works beautifully with accounting software, neobanks, or treasury apps.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Real-time cash inflow/outflow tracking.",
            "Forward-looking forecasting models.",
            "Scenario planning & sensitivity analysis.",
            "AI-enhanced trend detection.",
            "Integration with AP/AR and bank feeds.",
            "Automated alerts for cash shortfalls.",
            "Visual dashboards with historical comparisons.",
            "Exportable reports and stakeholder sharing.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Empowers users to make proactive financial decisions.",
            "Reduces the risk of cash shortfalls or surprises.",
            "Helps businesses prepare for growth or downturns.",
            "Provides clarity and confidence in cash planning.",
            "Adds value to digital banking and accounting platforms.",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: ExpenseManagementImage,
      subtitle: "Expense Management",
      description:
        "Expense Management brings order and automation to business spend. Users can capture receipts, submit expense claims, assign categories, and gain policy compliance—all in one intuitive interface. With real-time syncing to bank feeds, corporate cards, or employee wallets, the system offers full transparency and control over team-wide spending. It can flag out-of-policy items, auto-categorise transactions, and provide both managers and finance teams with powerful oversight. Whether for small businesses or large teams, this service saves time, reduces fraud, and simplifies reimbursement flows.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Receipt capture via app or web.",
            "Automated categorisation & tagging.",
            "Policy enforcement and alerts.",
            "Multi-user/team access and controls.",
            "Integration with bank data and corporate cards.",
            "Real-time reporting and export options.",
            "Approval chains and reimbursement workflows.",
            "Budget tracking per category or project.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Reduces manual tracking and paper receipts.",
            "Flags spend anomalies and policy violations.",
            "Saves time on monthly reconciliations.",
            "Empowers team members with mobile submissions.",
            "Enhances spend visibility for finance leaders.",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: CustomerAssistanceHubImage,
      subtitle: "Customer Assistance Hub (Smart Support Layer)",
      description:
        "The Customer Assistance Hub is your intelligent support engine for user finance queries. Whether embedded in your app or delivered via API, this service provides automated and human-assisted help for everything from missing payments to expense disputes. Built with context-aware workflows, it can pull relevant account data, flag suspicious transactions, or suggest helpful next steps. This layer not only reduces support workload but also boosts user satisfaction with faster and smarter issue resolution. It’s especially valuable for platforms that need to offer financial support at scale—without scaling a support team.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "AI-powered financial support chatbot.",
            "AI-powered financial support chatbot.",
            "Integration with user transaction history.",
            "Real-time status of payments and balances.",
            "Pre-built resolution workflows (e.g., failed payment, dispute).",
            "Contextual help based on user actions.",
            "EscalationBranded experience inside your platform.",
            "Analytics on support trends and pain points.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Reduces support costs with automation.",
            "Speeds up issue resolution for end users.",
            "Improves trust and retention through fast answers.",
            "Scales with your business—without hiring more agents.",
            "Deepens user engagement with contextual help.",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={<>Account HelpSquad</>}
      PageDescription={
        <>
          Prime Money’s Account HelpSquad provides the essential tools and
          automation layers your platform needs to deliver smart, modern
          financial operations. Whether you&#39;re serving SMEs, freelancers, or
          embedded finance ecosystems, this stack simplifies the messy middle of
          money movement—from invoicing to expense tracking to forecasting.
          Automate the most time-consuming processes in accounts payable and
          receivable, generate real-time cash flow insights, and offer your
          users intuitive tools to manage spend, predict funding needs, and stay
          in control of their business finances. With plug-and-play APIs, this
          suite powers finance functions within accounting platforms, business
          banking apps, and SaaS ecosystems—so your users can work smarter, not
          harder.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default AccountHelpSquadFeature;
