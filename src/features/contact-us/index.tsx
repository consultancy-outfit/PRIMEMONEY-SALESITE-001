"use client";

import Image from "next/image";
import { ContactForm } from "./components";
import { Box } from "@mui/material";
import { HeadingText } from "@/components/text/heading-text";
import { CustomText } from "@/components/text/custom-text";
import { CommonCard } from "@/components/cards/common-card";
import { shadowImage1, shadowImage2 } from "@/assets/images/common/ui-states";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const ContactUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "#010101",
          overflow: "hidden",
          minHeight: { xxl: "80dvh", lg: "110dvh", xs: "80dvh" },
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
            position: "absolute",
            bottom: { lg: 210, md: 400, xs: "unset" },
            top: { lg: "unset", xs: 250 },
            left: 0,
            right: 0,
            zIndex: 2,
            p: { lg: 15, md: 10, xs: 1 },
            display: "flex",
            alignItems:"flex-end",
            justifyContent: { lg: "space-between", xs: "center" },
            flexDirection: { lg: "row", xs: "column" },
            textAlign: { lg: "left", xs: "center" },
          }}
        >
          <ScaleInView>
            <HeadingText
              color={"common.white"}
              customStyles={{
                width: { lg: "60%", xs: "100%" },
                textAlign: "start",
                fontSize: {
                  xl: "4.5rem",
                  lg: "4rem",
                  md: "3rem",
                  xs: "2.2rem",
                },
                lineHeight: { lg: 1.2, xs: 1.3 },
              }}
            >
              Let’s Build the Future of Finance—Together
            </HeadingText>
          </ScaleInView>

          <ScaleInView>
            <CustomText
              variant="subtitle1"
              color={"grey.400"}
              customStyles={{
                width: { lg: "80%", xs: "100%" },
              }}
            >
              Have questions? We’re here to help. Reach out and let’s connect.
            </CustomText>
          </ScaleInView>
        </Box>
      </Box>
      <CommonCard
        borderRadius={8}
        customStyles={{
          position: "relative",
          zIndex: 2,
          mt: { xs: -20, md: -25, lg: -20 },
          px: { xs: 2, md: 6 },
          width: "90%",
          mx: "auto",
          boxShadow: "0px 10px 40px rgba(239, 75, 203, 0.3)",
          mb: 10,
        }}
      >
        <SlideUpInView>
          <ContactForm />
        </SlideUpInView>
      </CommonCard>
    </>
  );
};
