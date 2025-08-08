import { getStartedHomeImage } from "@/assets/images/features/home";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const GetStartedHome = () => {
  return (
    <Box sx={{ px: 15, pt: 8, pb: 5 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography sx={{ textTransform: "uppercase", color: "#646464" }}>
              Get Started
            </Typography>
            <Typography
              color="#222222"
              fontSize="2.8rem"
              fontFamily="Manrope"
              textAlign="left"
              fontWeight={700}
              lineHeight={1}
              pb={4}
              mt={2}
            >
              Register with <br /> Prime Money Today
            </Typography>
            <Typography sx={{ color: "#646464" }}>
              Join our platform to access powerful APIs and launch next-gen
              financial <br /> products.
            </Typography>
            <Link href="/get-started">
              <Button
                variant="contained"
                sx={{ backgroundColor: "black", color: "white", py: 1, mt: 3 }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Image
            src={getStartedHomeImage}
            alt="Get Started Img"
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetStartedHome;
