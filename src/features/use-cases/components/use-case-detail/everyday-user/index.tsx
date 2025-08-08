"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection5Image } from "@/features/use-cases/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import {
  detailsCheckPoints,
  detailsKeyPoints,
  detailsNumberPoints,
} from "./EverydayUser.data";

export const EverydayUser = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" fontWeight={600} color="rgba(34, 34, 34, 1)">
            Powering Next-Gen Wallets for the Everyday User
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            In a world where digital interactions define convenience, modern
            users demand more than just a place to store money — they expect
            intelligent, personalised, and frictionless wallet experiences. The
            rise of neobanks, fintech apps, and embedded financial products
            means your digital wallet must go beyond balance checks and basic
            transfers.
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            Prime Money helps wallet providers power next-generation digital
            wallet solutions tailored for todays mobile-first users. Our suite
            of APIs and data intelligence tools supports everything from KYC
            onboarding and payment connectivity to advanced financial insights,
            budgeting, and multi-account management — all within one simple
            platform.
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            Whether you are building a personal wallet, a loyalty-driven spend
            app, or a multifunctional finance hub, Prime Money provides the
            building blocks to create a truly engaging and secure user
            experience.
          </Typography>
          <Image
            src={HeroSection5Image}
            alt="HeroSection5"
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
