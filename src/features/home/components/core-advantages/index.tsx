import {
  advantageFiveImage,
  advantageFourImage,
  advantageOneImage,
  advantageSixImage,
  advantageTwoImage,
} from "@/assets/images/features/home";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const CoreAdvantagesHome = () => {
  const advantages = [
    {
      id: 1,
      image: advantageOneImage,
      alt: "Open Banking Platform",
      title: "Open Banking Platform",
      description: (
        <>
          A comprehensive ecosystem integrating all your open banking needs in
          one place.
        </>
      ),
    },
    {
      id: 2,
      image: advantageTwoImage,
      alt: "Financial Intelligence",
      title: "Financial Intelligence",
      description: (
        <>
          Providing clean, enriched data to support smarter financial decisions.
        </>
      ),
    },
    {
      id: 3,
      image: advantageTwoImage,
      alt: "Identity & Compliance",
      title: "Identity & Compliance",
      description: (
        <>
          Advanced verification and compliance tools seamlessly integrated for
          secure operations.
        </>
      ),
    },
    {
      id: 4,
      image: advantageFourImage,
      alt: "Payment Connectivity",
      title: "Payment Connectivity",
      description: (
        <>
          Enable fast and reliable payment integration across multiple
          platforms.
        </>
      ),
    },
    {
      id: 5,
      image: advantageFiveImage,
      alt: "Scalable APIs for Growth",
      title: "Scalable APIs for Growth",
      description: (
        <>
          Support rapid business growth with flexible and scalable API
          solutions.
        </>
      ),
    },
    {
      id: 6,
      image: advantageSixImage,
      alt: "Automation Efficiency",
      title: "Automation Efficiency",
      description: (
        <>
          Streamline operations using powerful automation tools designed to save
          time.
        </>
      ),
    },
  ];

  return (
    <Box sx={{ px: 15, pt: 8, pb: 5 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 5 }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography sx={{ textTransform: "uppercase", color: "#646464" }}>
              Core Advantages
            </Typography>
            <Typography
              color="#222222"
              fontSize="2.8rem"
              fontFamily="Manrope"
              textAlign="left"
              fontWeight={700}
              lineHeight={1}
              pb={4}
              pt={2}
            >
              Powering Smarter, <br /> Safer Financial <br /> Solutions
            </Typography>
            <Typography sx={{ color: "#646464" }}>
              Everything you need to build and grow <br /> with confidence.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }}>
          <Grid container spacing={3}>
            {advantages.map((adv) => (
              <Grid size={{ xs: 12, sm: 6 }} key={adv.id}>
                <Box sx={{ textAlign: "left" }}>
                  <Image src={adv.image} alt={adv.alt} />
                  <Typography variant="h6" fontWeight={600}>
                    {adv.title}
                  </Typography>
                  <Typography sx={{ color: "#646464" }}>
                    {adv.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoreAdvantagesHome;
