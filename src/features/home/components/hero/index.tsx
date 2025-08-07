import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Button, Card, Stack, Typography } from "@mui/material";
import { HeroSectionCover } from "../../assets";

const Hero = () => {
  return (
    <SlideUpInView>
      <Card
        sx={{
          backgroundImage: `url(${HeroSectionCover.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 0,
          height: "46.75rem",
          px: { lg: 15, xs: 7 },
          py:10
        }}
      >
        <Stack
          direction={{ lg: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
          height="100%"
          m="auto"
        >
          <Typography
            color="#ffffff"
            fontFamily="Manrope"
            fontSize={{ lg: "4.75rem", xs: "2.5rem" }}
            fontWeight={700}
            textAlign={{ lg: "left", xs: "center" }}
          >
            Powering Tomorrow’s Digital Finance Products
          </Typography>
          <Stack alignItems="flex-end" spacing={2}>
            <Typography
              color="#DBDBDB"
              fontFamily="Manrope"
              fontSize="1.25rem"
              textAlign="right"
            >
              Launch, scale, and future-proof your fintech with Prime Money’s
              full-stack open banking infrastructure.{" "}
            </Typography>
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#ffffff",
                width: "fit-content",
                px: 2,
                py: 1,
                fontFamily:"Manrope",
                fontSize:"1.125rem"
              }}
            >
              Explore our products
            </Button>
          </Stack>
        </Stack>
      </Card>
    </SlideUpInView>
  );
};

export default Hero;
