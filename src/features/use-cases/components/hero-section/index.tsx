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
        pt={15}
        pb={5}
        m={2}
        sx={{ px: { xs: 0, sm: 3, md: 5, lg: 8, xl: 15 } }}
      >
        <Typography
          color="black"
          fontWeight={900}
          textAlign={"center"}
          my={3}
          sx={{
            fontSize: { xs: 34, sm: 38, md: 48, lg: 72 },
            lineHeight: { xs: "38px", sm: "40px", md: "48px", lg: "72px" },
            maxWidth: {
              xs: "100%",
              sm: "95%",
              md: "90%",
              lg: "80%",
            },
            margin: "0 auto",
          }}
        >
          Powering Real-World Finance with Flexible Scalable Infrastructure
        </Typography>
        <Typography
          color="grey"
          sx={{
            my: 3,
            textAlign: "center",
            fontSize: { xs: 16, sm: 18, md: 20, lg: 24 },
            mt: 3,
          }}
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
