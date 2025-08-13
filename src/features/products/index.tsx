"use client";
import {
  AccountHelpSquadProductImage,
  CentsPayProductImage,
  EmbeddedPaymentsAccountConnectivityProductImage,
  FinancialDataIntelligenceProductImage,
  IdentityAccessComplianceProductImage,
} from "@/assets/images/features/products";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ServicesFeature = () => {
  const gridContent = [
    {
      id: 1,
      sectionImage: FinancialDataIntelligenceProductImage,
      title: "Smarter Data. Sharper Insights.",
      subtitle: "Financial Data Intelligence",
      hrefLink: "/products/financial-data-intelligence",
      description: (
        <>
          Unlock the power of enriched financial data to fuel precision,
          personalisation, and performance. With Prime Money’s Financial Data
          Intelligence suite, raw bank feeds are transformed into meaningful,
          categorised, and contextualised insights—enabling you to build more
          responsive, relevant, and responsible financial products. Whether
          you’re building a PFM app, credit engine, or financial planning tool,
          our APIs give you the clarity and context needed to act decisively. Go
          beyond balances. Detect trends, behaviors, and opportunities in real
          time. Our tools help you assess risk faster, personalise customer
          journeys, and unlock deeper customer understanding with every
          transaction. Built for speed, accuracy, and insight at scale.
        </>
      ),
    },
    {
      id: 2,
      sectionImage: EmbeddedPaymentsAccountConnectivityProductImage,
      title: "Simplify payments. Boost conversion. Delight users.",
      subtitle: "Embedded Payments & Account Connectivity",
      hrefLink: "/products/embedded-payments-account-connectivity",
      description: (
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
      ),
    },
    {
      id: 3,
      sectionImage: IdentityAccessComplianceProductImage,
      title: "Verify trust. Prove control. Stay compliant.",
      subtitle: "Identity, Access & Compliance",
      hrefLink: "/products/identity-access-and-compliance",
      description: (
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
      ),
    },
    {
      id: 4,
      sectionImage: AccountHelpSquadProductImage,
      title: "The back-office backbone for smarter business operations.",
      subtitle: "Account HelpSquad",
      hrefLink: "/products/account-help-squad",
      description: (
        <>
          Prime Money’s Account HelpSquad provides the essential tools and
          automation layers your platform needs to deliver smart, modern
          financial operations. Whether you&apos;re serving SMEs, freelancers,
          or embedded finance ecosystems, this stack simplifies the messy middle
          of money movement—from invoicing to expense tracking to forecasting.
          Automate the most time-consuming processes in accounts payable and
          receivable, generate real-time cash flow insights, and offer your
          users intuitive tools to manage spend, predict funding needs, and stay
          in control of their business finances. With plug-and-play APIs, this
          suite powers finance functions within accounting platforms, business
          banking apps, and SaaS ecosystems—so your users can work smarter, not
          harder.
        </>
      ),
    },
    {
      id: 5,
      sectionImage: CentsPayProductImage,
      title:
        "Build the wallet of the future with micro, multi, and real-time features.",
      subtitle: "Centspay",
      hrefLink: "/products/centspay",
      description: (
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
      ),
    },
  ];
  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Stack alignItems="center">
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            pt={15}
            pb={5}
            m={2}
            sx={{ px: { xs: 0, sm: 3, md: 10, lg: 15 } }}
          >
            <Typography
              color="black"
              fontWeight={900}
              textAlign={"center"}
              my={3}
              sx={{
                fontSize: { xs: 34, sm: 38, md: 48, lg: 72 },
                lineHeight: { xs: "38px", sm: "40px", md: "48px", lg: "72px" },
                maxWidth: {
                  xs: "100%",
                  sm: "95%",
                  md: "90%",
                  lg: "80%",
                  xl: "60%",
                },
                margin: "0 auto",
              }}
            >
              Unlock the Power of Financial Precision
            </Typography>
            <Typography
              color="grey"
              sx={{
                my: 3,
                textAlign: "center",
                fontSize: { xs: 16, sm: 18, md: 20, lg: 24 },
                mt: 3,
              }}
            >
              At Prime Money, we don’t just offer financial services we deliver
              purpose built tools that accelerate growth, automate finance, and
              empower both businesses and individuals. Whether you&apos;re
              navigating compliance, optimising payments, or enriching financial
              data, our services are designed to work seamlessly together or
              stand strong on their own.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Grid
        container
        spacing={5}
        sx={{
          backgroundColor: "#F2F5F7",
          px: { xs: 2, sm: 3, md: 4, lg: 15 },
          py: 5,
        }}
      >
        {gridContent.map((item: any, idx: number) => (
          <React.Fragment key={item?.id}>
            {idx % 2 === 0 ? (
              <>
                {/* Text first, then image */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ mb: 8 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ textTransform: "uppercase" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="h3" fontWeight={600} mb={3}>
                    {item.subtitle}
                  </Typography>
                  <Typography mb={3}>{item.description}</Typography>
                  <Link href={item.hrefLink}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "black", color: "white", py: 1 }}
                    >
                      Explore
                    </Button>
                  </Link>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ mb: 8 }}>
                  <Image
                    src={item.sectionImage}
                    alt="HeroSection"
                    style={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </>
            ) : (
              <>
                {/* Image first, then text */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ mb: 8 }}>
                  <Image
                    src={item.sectionImage}
                    alt="HeroSection"
                    style={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ mb: 8 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ textTransform: "uppercase" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="h3" fontWeight={600} mb={3}>
                    {item.subtitle}
                  </Typography>
                  <Typography mb={3}>{item.description}</Typography>
                  <Link href={item.hrefLink}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "black", color: "white", py: 1 }}
                    >
                      Explore
                    </Button>
                  </Link>
                </Grid>
              </>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default ServicesFeature;
