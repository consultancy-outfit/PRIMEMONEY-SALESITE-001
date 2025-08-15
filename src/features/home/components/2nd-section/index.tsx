"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  AccountConnectivityIcon,
  AccountHelpSquadIcon,
  CentsPayIcon,
  FinancialDataIcon,
  emptyCardImage,
} from "../../assets";
import Link from "next/link";

const StyledCard = ({ title, description, imageIcon, linkHref }: any) => {
  return (
    <Link href={linkHref} passHref>
      <Box
        sx={{
          width: { xs: 330, sm: 330, md: 300, lg: 300 },
          height: { xs: 480, sm: 480, md: 434, lg: 434 },
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow:
            "-20px 30px 20px rgba(239, 75, 203, 0.1), 20px 30px 20px rgba(52, 137, 123, 0.1)",
          position: "relative",
          pt: 4,
        }}
      >
        {/* Background Image */}
        <Image
          src={emptyCardImage}
          alt="Card background"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
            px: 2,
            color: "text.primary",
          }}
        >
          <Stack spacing={3}>
            <Box sx={{ alignItems: "center" }}>
              <Image src={imageIcon} alt={"Icon"} />
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
              {title}
            </Typography>
            <Typography
              color="#646464"
              // fontSize={"1.2rem"}
              fontFamily="Manrope"
              textAlign="left"
              sx={{ fontSize: { xs: "14px", sm: "14px", md: "16px" } }}
            >
              {description}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

const OurServicesHome = () => {
  return (
    <ScaleInView initialScale={0.5}>
      <Stack
        position="relative"
        bottom={150}
        sx={{ width: { lg: "95%", md: "70%", xs: "100%" }, m: "auto" }}
      >
        <Grid container spacing={2} sx={{ m: "auto" }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledCard
                linkHref="/products/financial-data-intelligence"
                imageIcon={FinancialDataIcon}
                title="Financial Data Intelligence"
                description="Harness enriched financial data to drive precision, personalisation, and performance."
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledCard
                linkHref="/products/embedded-payments-account-connectivity"
                imageIcon={AccountConnectivityIcon}
                title="Account Connectivity"
                description="Embed seamless payments and connectivity to drive compliance, scale, and user experience."
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledCard
                linkHref="/products/account-help-squad"
                imageIcon={AccountHelpSquadIcon}
                title="Account Help Squad"
                description="Power smart financial operations with automation tools that simplify invoicing, cash flow, etc."
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledCard
                linkHref="/products/centspay"
                imageIcon={CentsPayIcon}
                title="Cents Pay"
                description="Deliver smart, dynamic digital wallet experiences with real-time payments, savings, etc."
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </ScaleInView>
  );
};

export default OurServicesHome;

// "use client";
// import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
// import { Grid } from "@mui/material";
// import Image from "next/image";
// import {
//   CardServices1,
//   CardServices2,
//   CardServices3,
//   CardServices4,
// } from "../../assets";
// import Link from "next/link";

// const OurServicesHome = () => {
//   const services = [
//     {
//       id: 1,
//       image: CardServices1,
//       href: "/products/financial-data-intelligence",
//     },
//     {
//       id: 2,
//       image: CardServices2,
//       href: "/products/embedded-payments-account-connectivity",
//     },
//     {
//       id: 3,
//       image: CardServices3,
//       href: "/products/account-help-squad",
//     },
//     {
//       id: 4,
//       image: CardServices4,
//       href: "/products/centspay",
//     },
//   ];

//   return (
//     <ScaleInView initialScale={0.5}>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           pt: 5,
//           pb: 15,
//           px: { xs: 4, sm: 8, md: 5, lg: 10, xl: 30 },
//           background: {xs: "#f8f8f873", md: "#fff"},
//         }}
//       >
//         {services.map((service) => (
//           <Grid
//             key={service.id}
//             size={{ xs: 12, sm: 6, md: 3 }}
//             sx={{
//               mt: { xs: "-2px", sm: "10px", md: "-200px", lg: "-200px" },
//               zIndex: 10,
//             }}
//           >
//             <Link href={service.href} passHref>
//               <Image
//                 src={service.image}
//                 alt=""
//                 style={{
//                   height: "100%",
//                   width: "100%",
//                   boxShadow:
//                     "-20px 30px 20px rgba(239, 75, 203, 0.1), 20px 30px 20px rgba(52, 137, 123, 0.1)",
//                   borderBottomLeftRadius: "1.5rem",
//                   borderBottomRightRadius: "1.5rem",
//                 }}
//               />
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     </ScaleInView>
//   );
// };

// export default OurServicesHome;
