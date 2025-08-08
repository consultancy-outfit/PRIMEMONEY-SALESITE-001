"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { Card, Grid, Stack, Typography } from "@mui/material";
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
      <Stack position="relative" bottom={150} sx={{ width: "80%", m: "auto" }}>
        <Grid container spacing={5} sx={{ m: "auto" }}>
          {data?.map((items) => (
            <Grid size={{ lg: 3, md: 6, xs: 12 }} key={items?.id}>
              <Card
                sx={{
                  height: "27.125rem",
                  pt: 12,
                  pb: 1,
                  px: 3,
                  //           boxShadow: `
                  //   5px 8px 16px rgba(52, 137, 123, 100),
                  //   -5px 4px 8px rgba(239, 75, 203, 100)
                  // `,
                  boxShadow: 10,
                }}
              >
                <Stack alignItems="center" spacing={3}>
                  <Image src={items?.icon} alt={items?.heading} />
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
