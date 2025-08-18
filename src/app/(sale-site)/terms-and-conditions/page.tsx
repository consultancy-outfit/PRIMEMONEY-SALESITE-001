"use client";
import { Stack, Typography } from "@mui/material";

export default function TermsAndConditionsPolicy() {
  const accountRegistration = [
    "Providing accurate, current information.",
    "Maintaining the confidentiality of your account credentials.",
    "Notifying us immediately of any unauthorised use.",
  ];
  const useOfServices = [
    "Violate any intellectual property or proprietary rights.",
    "Distribute harmful or malicious software.",
    "Attempt to gain unauthorised access to our systems.",
  ];
  const disclaimers = [
    "Continuous or secure access to our services.",
    "That the information is accurate, complete, or up to date.",
    "That our services will be free from viruses or other harmful components.",
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
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4.25rem" },
            lineHeight: 1.2,
          }}
        >
          Terms & Conditions
        </Typography>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={700}
            textAlign="left"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem" } }}
          >
            Welcome to Prime Money
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            align="justify"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            {` Welcome to Prime Money. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and digital platforms operated by Prime Money ("we," "us," or "our"). By using our services, you agree to be bound by these Terms.`}
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
            Acceptance of Terms
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            By accessing or using our website or services, you confirm that you
            have read, understood, and agree to these Terms. If you do not
            agree, you must not use our services.
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
            Account Registration
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            To access certain features, you may be required to create an
            account. You are responsible for:{" "}
          </Typography>
          {accountRegistration?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              key={items}
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
            Use of Services{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            You agree to use our services only for lawful purposes and in
            compliance with all applicable laws. You must not:
          </Typography>
          {useOfServices?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              key={items}
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
            Intellectual Property{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            All content on our site and services—including text, graphics,
            logos, software, and trademarks—is the property of Prime Money or
            its licensors and is protected by intellectual property laws. You
            may not copy, distribute, or use it without prior written
            permission.
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
            Privacy
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            Your use of our services is also governed by our Privacy Policy,
            which explains how we collect and use your information.
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
            Disclaimers{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            Our services are provided “as is” and “as available” without
            warranties of any kind. We do not guarantee:
          </Typography>
          {disclaimers?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              key={items}
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
            Limitation of Liability
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            To the maximum extent permitted by law, Prime Money shall not be
            liable for any indirect, incidental, special, or consequential
            damages, or loss of data, arising from your use of our services.
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
            Modifications
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
          >
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page and become effective immediately. Continued
            use after changes indicates your acceptance.
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
            Governing Law
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
          >
            These Terms are governed by the laws of United Kingdom, without
            regard to its conflict of law principles. Any disputes will be
            handled in the courts of UK.
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
            If you have any questions or concerns about these Terms of Service,
            please reach out to us at info@primemoney.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
