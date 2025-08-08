import {
  fourIcon,
  oneIcon,
  threeIcon,
  twoIcon,
} from "@/features/use-cases/assets";

export const detailsCheckPoints = {
  heading: "What This Enables for Your Business",
  description: "What This Enables for Your Business",
  description2: "From onboarding a freelancer to monitoring high-risk transactions, Prime Money helps platforms stay compliant and secure with reliable bank-sourced data.",
  points: [
    {
      id: 1,
      title: "Identity Verification via Bank Login",
      description: "Let users prove their identity by logging into their trusted bank account. Instantly fetch legal name, account ownership, address, and date of birth — all verified by the financial institution.",
    },
    {
      id: 2,
      title: "KYB for Sole Traders & SMEs",
      description: "Verify business accounts, directors, and signatories in real time using data directly from business banking platforms. No need to scan documents or chase certificates.",
    },
    {
      id: 3,
      title: "Sanctions & Watchlist Screening",
      description: "Screen users automatically against global sanctions, PEPs (Politically Exposed Persons), and adverse media databases. Stay aligned with FCA, FATF, and EU standards.",
    },
    {
      id: 4,
      title: "Age & Residency Confirmation",
      description: "Ensure regulatory thresholds like age-based service restrictions and UK/EU residency checks using official account data. Fully PSD2 compliant.",
    },
    {
      id: 5,
      title: "Ongoing Monitoring & Triggers",
      description: "Set custom triggers for changes in account activity, suspicious patterns, or risk flags. Automatically initiate re-KYC if needed.",
    },
  ],
};

export const detailsNumberPoints = {
  heading: "Why Its More Secure",
  points: [
    {
      id: 1,
      title: "Bank-Sourced Identity: More trustworthy than ID uploads or selfies.",
      numberIcon: oneIcon.src,
    },
    {
      id: 2,
      title: "No Sensitive Storage: We do not store credentials; all data is accessed via secure, temporary tokens.",
      numberIcon: twoIcon.src,
    },
    {
      id: 3,
      title: "Built-in Consent Control: Granular user permissions with audit trails for regulatory audits.",
      numberIcon: threeIcon.src,
    },
    {
      id: 4,
      title: "ISO 27001 & GDPR Compliant: Infrastructure and processes designed with privacy-first principles.",
      numberIcon: fourIcon.src,
    },
  ],
};