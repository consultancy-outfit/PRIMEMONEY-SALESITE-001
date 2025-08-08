"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection4Image } from "@/features/use-cases/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import {
  detailsCheckPoints,
  detailsKeyPoints,
  detailsNumberPoints,
} from "./StartupsAndSMEs.data";

export const StartupsAndSMEs = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" fontWeight={600}>
            Scalable Finance Automation for Startups & SMEs
          </Typography>
          <Typography variant="body1">
            Startups and SMEs often face the dual challenge of limited resources
            and increasing operational complexity. Managing finances — from cash
            flow tracking to account reconciliation — can be time-consuming and
            error-prone. Manual processes stall growth, cause inefficiencies,
            and make it harder to stay compliant.
          </Typography>
          <Typography variant="body1">
            Prime Money solves this by offering a plug-and-play Finance
            Automation suite that allows small and growing businesses to
            digitise and scale their finance operations — without the overhead
            of building internal finance tools or teams. Through a unified API,
            startups can automate workflows like reconciliation, reporting,
            expense categorisation, and risk management using real-time,
            bank-verified data.
          </Typography>
          <Image
            src={HeroSection4Image}
            alt="HeroSection4"
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
