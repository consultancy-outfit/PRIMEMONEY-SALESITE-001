"use client";
import { Stack, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  const infoWeCollect = [
    "Personal Information: Name, email address, phone number, company name, job title.",
    "Financial Data: Bank account information, transaction history (if applicable to our services).",
    "Technical Information: IP address, browser type, device details, and cookies.",
    "Usage Data: Pages visited, actions taken, and preferences on our site.",
  ];
  const howWeUseYourInfo = [
    "Provide and manage our products and services.",
    "Communicate with you regarding updates or support.",
    "Improve our website functionality and user experience",
    "Ensure legal and regulatory compliance.",
    "Market relevant offers or updates (only with your consent).",
  ];
  const dataProtection = [
    "Trusted third-party service providers (e.g., hosting, analytics, CRM).",
    "Regulators or legal authorities if required by law.",
    "Affiliates or subsidiaries under  prime Money  for internal operations.",
  ];
  const yourRights = [
    "Access or correct your personal data.",
    "Request deletion of your data.",
    "Withdraw consent for marketing.",
    "File a complaint with a data protection authority.",
  ];
  return (
    <Stack
      sx={{ color: "#03020C" }}
      alignItems="center"
      px={{ lg: 4, xs: 3 }}
      py={{ lg: 10, xs: 8 }}
    >
      <Stack sx={{ width: { lg: "80%", xs: "100%" } }} spacing={4}>
        <Typography
          color="#000"
          fontFamily="Manrope"
          fontWeight={700}
          textAlign="center"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            lineHeight: 1.2,
          }}
        >
          Privacy Policy
        </Typography>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Introduction
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            At prime Money, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, store, and protect your personal
            information when you visit our website or use our services.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Information We Collect
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We may collect the following types of information:
          </Typography>
          {infoWeCollect?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            How We Use Your Information
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We use your information to:
          </Typography>
          {howWeUseYourInfo?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Data Protection & Security{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We do not sell your personal data. However, we may share it
            with:{" "}
          </Typography>
          {dataProtection?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Your Rights
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            Depending on your location, you may have the right to:
          </Typography>
          {yourRights?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Third-Party Services{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            Our site may include links to third-party sites. We are not
            responsible for their privacy practices and encourage you to review
            their policies.{" "}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Data Retention{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We retain your data only as long as necessary to fulfil the purposes
            stated or as required by law.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Policy Updates{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We may update this Privacy Policy periodically. You’ll be notified
            of significant changes via email or a prominent site notice.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Contact Us{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            If you have any questions or concerns regarding your privacy, please
            contact us at info@primemoney.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
