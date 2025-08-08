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
  heading: "Core Capabilities",
  description1: "",
  description2: "",
  points: [
    {
      id: 1,
      title: "Bank-Verified Identity (Know Your Customer - KYC)",
      description: "Access verified user identity data directly from their bank, including full name, date of birth, address, and account ownership. Eliminate fake profiles, reduce fraud risk, and accelerate onboarding.",
    },
    {
      id: 2,
      title: "Consent Management Framework",
      description: "Collect, manage, and monitor customer consent for data usage, access, and sharing in a fully PSD2- and GDPR-compliant way. Get timestamped audit trails and permission logs per user.",
    },
    {
      id: 3,
      title: "Reauthentication & Dynamic Consent",
      description: "Enable users to update, revoke, or extend their consent in real time — reducing drop-offs and helping you remain compliant even as relationships evolve.",
    },
    {
      id: 4,
      title: "Transparent Data Access Logs",
      description: "Offer users a record of what data was accessed, when, and for what purpose — increasing transparency and digital trust.",
    },
    {
      id: 5,
      title: "Identity Enrichment APIs",
      description: "Complement bank identity with transaction-level context — e.g., verify job status, residence stability, or consistent income streams.",
    },
  ],
};

export const detailsNumberPoints = {
  heading: "Technical Highlights",
  points: [
    {
      id: 1,
      title: "Fully compliant with PSD2, GDPR, and FCA Open Banking frameworks.",
      numberIcon: oneIcon.src,
    },
    {
      id: 2,
      title: "Bank-level identity validation via AIS (Account Information Services).",
      numberIcon: twoIcon.src,
    },
    {
      id: 3,
      title: "Consent tokens with expiration, scope, and usage limitations.",
      numberIcon: threeIcon.src,
    },
    {
      id: 4,
      title: "JSON-based APIs with webhook support.",
      numberIcon: fourIcon.src,
    },
    {
      id: 5,
      title: "Works across all major UK & EU banks.",
      numberIcon: fiveIcon.src,
    },
    {
      id: 6,
      title: "Audit-ready logging and reporting APIs for regulators.",
      numberIcon: sixIcon.src,
    },
  ],
};

export const detailsKeyPoints = {
  heading: "Ideal For",
  points: [
    {
      id: 1,
      title: "Regulated Fintech Platforms",
      description: "Automate KYC and user authentication without external databases or document uploads.",
      keyIcon: keyIcon1.src,
    },
    {
      id: 2,
      title: "Lending & BNPL Providers",
      description: "Verify identity and payment source to approve users faster and reduce credit fraud.",
      keyIcon: keyIcon7.src,
    },
    {
      id: 3,
      title: "InsurTech & WealthTech",
      description: "Confirm user identity and account details before initiating policies, payouts, or investments.",
      keyIcon: keyIcon2.src,
    },
    {
      id: 4,
      title: "eCommerce & Marketplaces",
      description: "Prevent fake buyer/seller accounts, streamline onboarding, and build transaction trust.",
      keyIcon: keyIcon3.src,
    },
    {
      id: 5,
      title: "HealthTech & GovTech",
      description: "Use verified identity and consent tools to access sensitive data with confidence. Ensure every interaction is secure, compliant, and fully user-authorised.",
      keyIcon: keyIcon3.src,
    },
  ],
};