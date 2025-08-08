"use client";
import {
  CoreAdvantagesHome,
  GetStartedHome,
  Hero,
} from "@/features/home/components";
import OurServicesHome from "@/features/home/components/2nd-section";
import HomeThirdSection from "@/features/home/components/3rd-section";
import UseCasesHome from "@/features/home/components/4th-section";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack textAlign="center">
        <Hero />
        <OurServicesHome />
        <HomeThirdSection />
        <UseCasesHome />
        <GetStartedHome />
        <CoreAdvantagesHome />
      </Stack>
    </>
  );
}
