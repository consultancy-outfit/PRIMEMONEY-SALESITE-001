"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection2Image } from "@/features/use-cases/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import {
  detailsCheckPoints,
  detailsKeyPoints,
  detailsNumberPoints,
} from "./DirectBankIntegration.data";

export const DirectBankIntegration = () => {
  return (
    <>
        <Container maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 20,
          }}
        >
          <Typography variant="h3" fontWeight={500} color="rgba(61, 61, 61, 1)">
            Build Seamless Payment Journeys with Direct Bank Integration
          </Typography>
          <br />
          <Typography variant="subtitle1" color="rgba(101, 101, 101, 1)">
            Todays users expect instant, intuitive, and secure payments —
            without detours through third-party apps or outdated interfaces.
            Thats where embedded finance makes the difference. With Prime Moneys
            Embedded Payments & Account Connectivity, you can build beautifully
            integrated payment flows, offer account-to-account transfers, and
            allow customers to pay or get paid directly through your application
            — all under your brand.
          </Typography>
          <Typography variant="subtitle1" color="rgba(101, 101, 101, 1)">
            Whether you're launching a digital wallet, enabling supplier
            payouts, or embedding checkout into your SaaS platform, our tools
            give you the infrastructure to move money, authenticate users, and
            access account data — without the need to become a bank.
          </Typography>
          <Image
            src={HeroSection2Image}
            alt="HeroSection2"
            style={{
              marginTop: 50,
              width: "100%",
              height: "520px",
            }}
          />
        </Container>
      <Box px={7}>
        <CommonDetail
          detailsCheckPoints={detailsCheckPoints}
          detailsNumberPoints={detailsNumberPoints}
          detailsKeyPoints={detailsKeyPoints}
        />
      </Box>
    </>
  );
};
