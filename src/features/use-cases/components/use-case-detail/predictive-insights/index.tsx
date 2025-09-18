"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroSection1Image } from "@/features/use-cases/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { CommonDetail } from "../../common-detail";
import {
  detailsCheckPoints,
  detailsKeyPoints,
  detailsNumberPoints,
} from "./PredictiveInsightsData";

export const PredictiveInsights = () => {
  return (
    <>
      <SlideUpInView>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 20,
          }}
        >
          <Typography variant="h3" fontWeight={500} color="rgba(61, 61, 61, 1)">
            Transform Bank Transactions into Predictive Insights
          </Typography>
          <br />
          <Typography variant="subtitle1" color="rgba(100, 100, 100, 1)">
            In todays data-driven financial landscape, raw transactions alone
            are not enough. Businesses need real-time, enriched, and actionable
            financial intelligence to power smarter decision-making — whether
            for lending, budgeting, expense tracking, or embedded finance
            solutions.
          </Typography>
          <Typography variant="subtitle1" color="rgba(100, 100, 100, 1)">
            Prime Moneys Financial Data Intelligence suite transforms fragmented
            bank data into structured, insightful, and deeply categorized
            financial narratives. From identifying recurring income patterns to
            detecting early signs of financial distress, our tools offer the
            depth, accuracy, and flexibility fintechs need to build
            next-generation digital finance products.
          </Typography>
          <Image
            src={HeroSection1Image}
            alt="HeroSection1"
            style={{
              marginTop: 50,
              width: "100%",
              height: "520px",
            }}
          />
        </Container>
      </SlideUpInView>
      <Box>
        <CommonDetail
          detailsCheckPoints={detailsCheckPoints}
          detailsNumberPoints={detailsNumberPoints}
          detailsKeyPoints={detailsKeyPoints}
        />
      </Box>
    </>
  );
};
