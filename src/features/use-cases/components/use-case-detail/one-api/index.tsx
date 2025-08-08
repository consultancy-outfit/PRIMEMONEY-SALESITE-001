"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection3Image } from "@/features/use-cases/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import { detailsCheckPoints, detailsNumberPoints } from "./OneAPI.data";

export const OneAPI = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" fontWeight={600}>
            Bank-Verified Identity and Compliance in One API
          </Typography>
          <Typography variant="body1">
            Regulatory compliance and user verification are no longer just
            checkboxes — they are critical to trust, operational integrity, and
            market expansion. With increasing pressure from regulators and
            customer expectations around privacy and security, businesses need
            reliable, frictionless tools to verify users, validate bank
            accounts, and meet compliance standards — all without disrupting the
            user experience.
          </Typography>
          <Typography variant="body1">
            Prime Moneys Bank-Verified Identity & Compliance API offers a
            seamless way to connect, verify, and screen users in real time using
            their bank-verified information. It simplifies Know Your Customer
            (KYC), Know Your Business (KYB), and Anti-Money Laundering (AML)
            workflows — all from a single API.
          </Typography>
          <Image
            src={HeroSection3Image}
            alt="HeroSection3"
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
      />
    </>
  );
};
