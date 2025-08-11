"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  AccountConnectivityIcon,
  AccountHelpSquadIcon,
  CentsPayIcon,
  FinancialDataIcon,
} from "../../assets";

const OurServicesHome = () => {
  const data = [
    {
      id: 1,
      icon: FinancialDataIcon,
      heading: "Financial Data Intelligence",
      description:
        "Harness enriched financial data to drive precision, personalisation, and performance.",
    },
    {
      id: 2,
      icon: AccountConnectivityIcon,
      heading: "Account Connectivity",
      description:
        "Embed seamless payments and connectivity to drive compliance, scale, and user experience.",
    },
    {
      id: 3,
      icon: AccountHelpSquadIcon,
      heading: "Account Help Squad",
      description:
        "Power smart financial operations with automation tools that simplify invoicing, cash flow, etc.",
    },
    {
      id: 4,
      icon: CentsPayIcon,
      heading: "Centspay",
      description:
        "Deliver smart, dynamic digital wallet experiences with real-time payments, savings, etc.",
    },
  ];
  return (
    <ScaleInView initialScale={0.5}>
      <Stack position="relative" bottom={150} sx={{ width: "90%", m: "auto" }}>
        <Grid container spacing={2} sx={{ m: "auto" }}>
          {data?.map((items) => (
            <Grid size={{ xl: 3, lg: 6, xs: 12 }} key={items?.id}>
              <Card
                sx={{
                  pt: 8,
                  px: 2,
                  boxShadow: "0px 4px 20px rgba(239, 75, 203, 0.8), 0px 4px 20px rgba(52, 137, 123, 0.8)",
                  background: "linear-gradient(180deg, #FDF9F4 0%, #FAF8FF 100%)",
                  minHeight: "28rem",
                  borderRadius: "1.5rem",
                }}
              >
                <Stack spacing={3}>
                  <Box sx={{ alignItems: "center" }}>
                    <Image src={items?.icon} alt={items?.heading} />
                  </Box>
                  <Typography
                    fontSize={"1.5rem"}
                    fontFamily="Manrope"
                    fontWeight={700}
                    sx={{
                      background:
                        "radial-gradient(circle at top left, #EF4BCB 0%,  #34897B 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "left",
                    }}
                  >
                    {items?.heading}
                  </Typography>
                  <Typography
                    color="#646464"
                    fontSize={"1.2rem"}
                    fontFamily="Manrope"
                    textAlign="left"
                  >
                    {items?.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
          
        </Grid>
      </Stack>
    </ScaleInView>
  );
};

export default OurServicesHome;
