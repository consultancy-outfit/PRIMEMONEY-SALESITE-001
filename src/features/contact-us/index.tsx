"use client";

import Image from "next/image";
import { ContactForm } from "./components";
import { Box } from "@mui/material";
import { HeadingText } from "@/components/text/heading-text";
import { CustomText } from "@/components/text/custom-text";
import { CommonCard } from "@/components/cards/common-card";
import { shadowImage1, shadowImage2 } from "@/assets/images/common/ui-states";

export const ContactUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "#010101",
          overflow: "hidden",
          minHeight: { md: "90dvh", xs: "70dvh" },
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Image src={shadowImage1} alt="Background Decoration" fill priority />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Image src={shadowImage2} alt="Background Decoration" fill priority />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
            p: { lg: 15, md: 6, xs: 2 },
            flexWrap: "wrap",
          }}
        >
          <HeadingText
            variant="h1"
            color={"common.white"}
            customStyles={{
              width: { xl: "45%", lg: "60%", xs: "100%" },
            }}
          >
            Let’s Build the Future of Finance—Together
          </HeadingText>
          <CustomText
            variant="subtitle1"
            color={"grey.400"}
            customStyles={{
              width: { xl: "25%", lg: "35%", xs: "100%" },
              textAlign: "right",
              mt: { lg: 20, xs: 2 },
            }}
          >
            Have questions? We’re here to help. Reach out and let’s connect.
          </CustomText>
        </Box>
      </Box>
      <CommonCard
        borderRadius={8}
        customStyles={{
          position: "relative",
          zIndex: 2,
          mt: { lg: -20, md: -30, sm: -30, xs: -20 },
          px: { xs: 2, md: 6 },
          width: "90%",
          mx: "auto",
          boxShadow: "0px 10px 40px rgba(239, 75, 203, 0.3)",
          mb: 10,
        }}
      >
        <ContactForm />
      </CommonCard>
    </>
  );
};
