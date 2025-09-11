"use client";
import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-section";
import { UseCaseCards } from "./components/use-case-cards";
import { UseCaseBanner } from "./components/use-case-banner";

export const UseCases = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={6} my={4} mt={10}>
      <HeroSection />
      <UseCaseCards />
      <UseCaseBanner />
    </Box>
  );
};
