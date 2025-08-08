"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection6Image } from "@/features/use-cases/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import {
  detailsCheckPoints,
  detailsKeyPoints,
  detailsNumberPoints,
} from "./ConsentControl.data";

export const ConsentControl = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" fontWeight={600} color="rgba(34, 34, 34, 1)">
            Redefining Digital Trust: Seamless Identity Verification & Consent
            Control
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            In an increasingly digital economy, identity is everything. But
            traditional verification methods are outdated — slow, prone to
            fraud, and often frustrating for users. Whether you're onboarding
            new customers, verifying identities for compliance, or managing
            consent in regulated sectors, Prime Money offers a powerful,
            bank-verified solution through a single API.
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            We enable businesses to verify users using bank data, ensuring the
            identity is real, verified, and trusted — without friction. At the
            same time, our consent management framework helps platforms stay
            compliant with data-sharing regulations like PSD2, GDPR, and Open
            Banking mandates.
          </Typography>
          <Typography variant="body1" color="rgba(100, 100, 100, 1)">
            From fintechs and insurers to lenders and marketplaces, our tools
            power seamless onboarding, robust compliance, and user-centric trust
            models — all without slowing down your growth.
          </Typography>
          <Image
            src={HeroSection6Image}
            alt="HeroSection6"
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
