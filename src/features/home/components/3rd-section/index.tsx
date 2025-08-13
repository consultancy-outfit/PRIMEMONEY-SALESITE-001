import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { WhoWeAreImage } from "../../assets";
import Link from "next/link";

const HomeThirdSection = () => {
  return (
    <SlideUpInView initialY={-80}>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        spacing={{ lg: 8, xs: 5 }}
        sx={{ width: { xl: "70%", lg: "85%", xs: "80%" }, m: "auto" }}
      >
        <Image
          src={WhoWeAreImage}
          alt="WhoWeAreImage"
          style={{ width: "100%", height: "auto" }}
        />
        <Stack justifyContent="center" spacing={{ lg: 2, xs: 1 }}>
          <Typography
            color="#646464"
            fontSize="1.2rem"
            fontFamily="Manrope"
            fontWeight={500}
            textAlign="left"
          >
            WHO WE ARE
          </Typography>
          <Stack spacing={2}>
            <Typography
              color="#222222"
              // fontSize="2.8rem"
              fontFamily="Manrope"
              textAlign="left"
              fontWeight={700}
              sx={{ fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" } }}
            >
              Empowering Innovation In Financial Services
            </Typography>
            <Typography
              color="#646464"
              fontSize="1.5rem"
              fontFamily="Manrope"
              textAlign="left"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" } }}
            >
              From smart data to secure payments, we help fintechs, neobanks,
              and digital wallets build faster.
            </Typography>
          </Stack>
          <Link href="/about-us" passHref >
            <Button
              variant="contained"
              component="a" 
              sx={{
                color: "#fff",
                background: "#000",
                width: "fit-content",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              About us
            </Button>
          </Link>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default HomeThirdSection;
