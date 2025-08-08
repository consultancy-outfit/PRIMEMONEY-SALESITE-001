"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Box, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <SlideUpInView>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        p={2}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          fontSize={"60px"}
          width={"70%"}
          textAlign={"center"}
        >
          Powering Real-World Finance with Flexible Scalable Infrastructure
        </Typography>
        <Typography
          fontWeight={300}
          fontSize={"15px"}
          width={"70%"}
          textAlign={"center"}
        >
          From frictionless onboarding to real-time payments and intelligent
          data enrichment — Prime Money enables innovative financial experiences
          through tailored use cases. Whether you are building a wallet, lending
          platform, accounting tool, or compliance-first fintech product, our
          modular services adapt to your needs. Explore how our solutions drive
          security, speed, and scalability across every corner of digital
          finance.
        </Typography>
      </Box>
    </SlideUpInView>
  );
};
