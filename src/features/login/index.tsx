"use client";

import Image from "next/image";
import { LoginForm } from "./components";
import { Box } from "@mui/material";
import { CommonCard } from "@/components/cards/common-card";
import { shadowImage1, shadowImage2 } from "@/assets/images/common/ui-states";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const Login = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "#010101",
          overflow: "hidden",
          minHeight: { xxl: "60dvh", xs: "75dvh" },
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
      </Box>
      <CommonCard
        borderRadius={8}
        customStyles={{
          position: "absolute",
          top: 220,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          px: { xs: 2 },
          boxShadow: "0px 10px 40px rgba(239, 75, 203, 0.3)",
          mb: 10,
          width: { md: "50%", xs: "90%" },
          maxWidth: "100%",
        }}
      >
        <ScaleInView>
        <LoginForm />
        </ScaleInView>
      </CommonCard>
    </>
  );
};
