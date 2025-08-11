"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection2Image } from "@/features/use-cases/assets";
import { Box, Typography } from "@mui/material";
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
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6} mt={10}>
          <Typography variant="h2" fontWeight={600} color="rgba(34, 34, 34, 1)">
            Build Seamless Payment Journeys with Direct Bank Integration
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            Todays users expect instant, intuitive, and secure payments —
            without detours through third-party apps or outdated interfaces.
            Thats where embedded finance makes the difference. With Prime Moneys
            Embedded Payments & Account Connectivity, you can build beautifully
            integrated payment flows, offer account-to-account transfers, and
            allow customers to pay or get paid directly through your application
            — all under your brand.
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
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
        </Box>
      </SlideUpInView>
      <CommonDetail
        detailsCheckPoints={detailsCheckPoints}
        detailsNumberPoints={detailsNumberPoints}
        detailsKeyPoints={detailsKeyPoints}
      />
    </>
  );
};
