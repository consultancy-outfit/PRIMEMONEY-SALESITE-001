import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { WhoWeAreImage } from "../../assets";

const HomeThirdSection = () => {
  return (
    <SlideUpInView initialY={-80}>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        spacing={{ lg: 8, xs: 5 }}
        sx={{ width: { lg: "70%", xs: "80%" }, m: "auto" }}
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
              fontSize="2.8rem"
              fontFamily="Manrope"
              textAlign="left"
              fontWeight={700}
            >
              Empowering Innovation In Financial Services
            </Typography>
            <Typography
              color="#646464"
              fontSize="1.5rem"
              fontFamily="Manrope"
              textAlign="left"
            >
              From smart data to secure payments, we help fintechs, neobanks,
              and digital wallets build faster.
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              color: "#fff",
              background: "#000",
              width: "fit-content",
              px: 3,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            About us
          </Button>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default HomeThirdSection;
