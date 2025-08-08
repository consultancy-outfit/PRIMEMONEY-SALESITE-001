"use client";

import {
  AccountOwnershipValidationImage,
  BankBasedIdentityVerificationImage,
  ConsentFlowManagementImage,
  PSD2AndFCAComplianceImage,
  SecureIdentityAndKYCAPIsImage,
} from "@/assets/images/features/products";
import ProductDetailPagesCommon from "../product-detail-pages-common";

export const IdentityAccessComplianceFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: BankBasedIdentityVerificationImage,
      subtitle: "Bank-Based Identity Verification",
      description:
        "Forget blurry document scans and long wait times. Prime Money enables instant identity verification by connecting directly to a user’s bank account. With user consent, we securely retrieve identity data directly from their financial institution—such as full name, date of birth, and address—making it easy to verify who they are with high accuracy and sero manual review. This method is faster, more secure, and harder to spoof than traditional ID checks. Plus, it’s already compliant with SCA and PSD2, making it ideal for fintechs, digital banks, lending platforms, and regulated service providers looking to scale with confidence.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Real-time retrieval of verified bank-held identity data.",
            "Secure API-based integration with all major UK/EU banks.",
            "SCA-compliant consent flows.",
            "Strong fraud prevention with bank-level authentication.",
            "No document uploads or manual checks needed.",
            "Works across personal and business accounts.",
            "Optional fallback to traditional KYC if needed.",
            "Full audit trail for verification events.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Speeds up onboarding and boosts conversion.",
            "Drastically reduces KYC processing time.",
            "Stronger fraud protection than scanned documents.",
            "Ensures regulatory compliance across jurisdictions.",
            "Delivers a smoother user experience.",
          ],
        },
      ],
    },
    {
      id: 2,
      sectionImage: AccountOwnershipValidationImage,
      subtitle: "Account Ownership Validation",
      description:
        "Before initiating payments or granting access, it’s critical to know the account belongs to the person claiming it. Prime Money’s account ownership validation service verifies user control over a specific bank account in real time. With user consent, it checks account metadata—including account holder name, IBAN/sort code, and linked identifiers—and compares it against provided inputs. This helps prevent fraud, reduce chargebacks, and ensures payments aren’t misdirected. Ideal for verifying recipients before payouts, settling funds to business accounts, or enforcing user authentication standards across fintech, payroll, and lending applications.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Instant validation of user’s bank account ownership.",
            "Name match against official bank records.",
            "IBAN/sort code and account number verification.",
            "Supports personal and business accounts.",
            "Fully API-driven process.",
            "Secure, encrypted, and FCA-compliant.",
            "Optional flagging of partial or fussy matches.",
            "Audit-ready logs of all validations.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Prevents payment fraud and misrouted transfers.",
            "Essential for loan disbursement, payroll, and fund settlement.",
            "Strengthens overall AML and KYC frameworks.",
            "Reduces manual verification overhead.",
            "Boosts platform trust and transaction security.",
          ],
        },
      ],
    },
    {
      id: 3,
      sectionImage: ConsentFlowManagementImage,
      subtitle: "Consent Flow Management",
      description:
        "Consent is the backbone of open banking. Prime Money helps you manage user permissions clearly, securely, and in full alignment with PSD2 and GDPR. Our consent flow framework gives users transparency and control, allowing them to approve access to their data or payment initiation with confidence. You gain detailed logs, expiry tracking, and consent revocation tools to stay in control. Consent screens can be white-labeled or branded for your product, and easily integrated into your onboarding or transaction workflows. Whether you're accessing account data, verifying identity, or initiating recurring payments, you’ll ensure users are always informed—and regulators always satisfied.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Branded or white-label consent UI flows.",
            "Time-limited and purpose-specific access controls.",
            "Real-time consent capture and status updates.",
            "User-friendly consent revocation.",
            "Works across personal and business accounts.",
            "PSD2, GDPR, and FCA aligned.",
            "Audit trail of all user authorisations.",
            "Easy embedding into apps and web flows.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Builds user trust with transparent permissioning.",
            "Keeps you compliant with evolving regulatory standards.",
            "Centralised consent visibility across your user base.",
            "Reduces legal and audit risk.",
            "Simplifies access management across multiple services.",
          ],
        },
      ],
    },
    {
      id: 4,
      sectionImage: PSD2AndFCAComplianceImage,
      subtitle: "PSD2 & FCA Compliance (UK & EU)",
      description:
        "Compliance isn’t optional—it’s strategic. Prime Money helps you meet and maintain compliance with the European PSD2 directive, Strong Customer Authentication (SCA), and the UK’s FCA requirements. We provide a pre-built regulatory toolkit that includes secure APIs, compliant consent flows, identity verification tools, and audit capabilities—letting you focus on product, not policy. Our infrastructure is continuously updated in line with changes to Open Banking regulations in the UK and EU, ensuring your service remains compliant whether you're onboarding new users, initiating payments, or accessing financial data.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Built-in SCA-compliant authentication.",
            "PSD2-aligned data access and payment initiation.",
            "FCA-recognised frameworks for UK services.",
            "Continuous updates for regulatory changes.",
            "Full audit trail and consent log storage.",
            "Works with sandbox and live environments.",
            "Developer-ready compliance templates.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Peace of mind with always-on regulatory alignment.",
            "Faster time to market for regulated fintech products.",
            "Keeps you ready for audits or certifications.",
            "Enables secure, scalable product innovation.",
          ],
        },
      ],
    },
    {
      id: 5,
      sectionImage: SecureIdentityAndKYCAPIsImage,
      subtitle: "Secure Identity & KYC APIs",
      description:
        "Prime Money’s KYC APIs make it simple to onboard users, verify their identity, and ensure you remain compliant without manual overhead. These APIs combine data from bank-based verification, government registries, and optional document checks—all orchestrated in a single, scalable workflow. Built to support various compliance standards (FCA, PSD2, AMLD5), they help reduce fraud, automate onboarding, and eliminate the friction of outdated KYC processes. With real-time decisions, integration flexibility, and support for multiple verification methods, this is the future of digital identity compliance—faster, safer, and smarter.",
      innerValues: [
        {
          liTitle: "Features:",
          liList: [
            "Real-time identity and address verification.",
            "Benefits and other income stream mapping.",
            "Bank data, document, and registry matching.",
            "Customisable KYC workflows.",
            "Ongoing monitoring and re-verification.",
            "Geo-compliant across UK, EU, and global standards.",
            "Scalable to millions of users.",
            "Webhooks and dashboard reporting.",
          ],
        },
        {
          liTitle: "Key Benefits:",
          liList: [
            "Automates KYC and saves compliance team hours.",
            "Combats identity fraud with layered verification.",
            "Integrates easily with onboarding flows.",
            "Meets global KYC and AMLD5 obligations.",
            "Future-proof identity infrastructure.",
          ],
        },
      ],
    },
  ];

  return (
    <ProductDetailPagesCommon
      PageTitle={<>Identity, Access & Compliance</>}
      PageDescription={
        <>
          In a regulated financial environment, identity verification and
          compliance aren&apos;t just requirements—they’re the foundation of
          trust. Prime Money empowers your platform with secure, bank-level
          identity verification, real-time account ownership checks, seamless
          consent flows, and ongoing compliance with PSD2, FCA, and global KYC
          regulations. Whether you&apos;re onboarding new users, enabling
          payments, or monitoring account access, our APIs reduce friction while
          keeping you audit-ready. Say goodbye to manual document uploads, slow
          verifications, and fragmented compliance workflows—this suite gives
          you control without compromising user experience.
        </>
      }
      gridContent={gridContent}
    />
  );
};

export default IdentityAccessComplianceFeature;
