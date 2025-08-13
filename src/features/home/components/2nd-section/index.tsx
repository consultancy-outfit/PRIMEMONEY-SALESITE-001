"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { Grid } from "@mui/material";
import Image from "next/image";
import {
  CardServices1,
  CardServices2,
  CardServices3,
  CardServices4,
} from "../../assets";
import Link from "next/link";

const OurServicesHome = () => {
  const services = [
    {
      id: 1,
      image: CardServices1,
      href: "/products/financial-data-intelligence",
    },
    {
      id: 2,
      image: CardServices2,
      href: "/products/embedded-payments-account-connectivity",
    },
    {
      id: 3,
      image: CardServices3,
      href: "/products/account-help-squad",
    },
    {
      id: 4,
      image: CardServices4,
      href: "/products/centspay",
    },
  ];

  return (
    <ScaleInView initialScale={0.5}>
      <Grid
        container
        spacing={2}
        sx={{
          py: 5,
          px: { xs: 4, sm: 8, md: 5, lg: 10, xl: 30 },
          background: "#f8f8f873",
        }}
      >
        {services.map((service) => (
          <Grid
            key={service.id}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              mt: { xs: "-2px", sm: "10px", md: "-200px", lg: "-200px" },
              zIndex: 10,
            }}
          >
            <Link href={service.href} passHref>
              <Image
                src={service.image}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  boxShadow:
                    "-20px 30px 20px rgba(239, 75, 203, 0.1), 20px 30px 20px rgba(52, 137, 123, 0.1)",
                  borderBottomLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </ScaleInView>
  );
};

export default OurServicesHome;

// "use client";
// import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
// import { Box, Card, Grid, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import {
//   AccountConnectivityIcon,
//   AccountHelpSquadIcon,
//   CentsPayIcon,
//   FinancialDataIcon,
//   emptyCardImage,
// } from "../../assets";

// const OurServicesHome = () => {
//   const data = [
//     {
//       id: 1,
//       icon: FinancialDataIcon,
//       heading: "Financial Data Intelligence",
//       description:
//         "Harness enriched financial data to drive precision, personalisation, and performance.",
//     },
//     {
//       id: 2,
//       icon: AccountConnectivityIcon,
//       heading: "Account Connectivity",
//       description:
//         "Embed seamless payments and connectivity to drive compliance, scale, and user experience.",
//     },
//     {
//       id: 3,
//       icon: AccountHelpSquadIcon,
//       heading: "Account Help Squad",
//       description:
//         "Power smart financial operations with automation tools that simplify invoicing, cash flow, etc.",
//     },
//     {
//       id: 4,
//       icon: CentsPayIcon,
//       heading: "Centspay",
//       description:
//         "Deliver smart, dynamic digital wallet experiences with real-time payments, savings, etc.",
//     },
//   ];
//   return (
//     <ScaleInView initialScale={0.5}>
//       <Stack position="relative" bottom={150} sx={{ width: "90%", m: "auto" }}>
//         <Grid container spacing={2} sx={{ m: "auto" }}>
//           {data?.map((items) => (
//             <Grid size={{ xl: 3, lg: 6, xs: 12 }} key={items?.id}>
//               <Card
//                 sx={{
//                   pt: 8,
//                   px: 2,
//                   boxShadow:
//                     "-20px 30px 20px rgba(239, 75, 203, 0.1), 20px 30px 20px rgba(52, 137, 123, 0.1)",
//                   background:
//                     "linear-gradient(180deg, #FDF9F4 0%, #FAF8FF 100%)",
//                   minHeight: "28rem",
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <Stack spacing={3}>
//                   <Box sx={{ alignItems: "center" }}>
//                     <Image src={items?.icon} alt={items?.heading} />
//                   </Box>
//                   <Typography
//                     fontSize={"1.5rem"}
//                     fontFamily="Manrope"
//                     fontWeight={700}
//                     sx={{
//                       background:
//                         "radial-gradient(circle at top left, #EF4BCB 0%,  #34897B 100%)",
//                       WebkitBackgroundClip: "text",
//                       backgroundClip: "text",
//                       color: "transparent",
//                       textAlign: "left",
//                     }}
//                   >
//                     {items?.heading}
//                   </Typography>
//                   <Typography
//                     color="#646464"
//                     fontSize={"1.2rem"}
//                     fontFamily="Manrope"
//                     textAlign="left"
//                   >
//                     {items?.description}
//                   </Typography>
//                 </Stack>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Stack>
//     </ScaleInView>
//   );
// };

// export default OurServicesHome;
