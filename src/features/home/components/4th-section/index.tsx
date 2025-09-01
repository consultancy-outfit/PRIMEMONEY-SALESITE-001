import { oneImage, threeImage, twoImage } from "@/assets/images/features/home";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const UseCasesHome = () => {
  const useCases = [
    {
      id: 1,
      icon: oneImage,
      title: (
        <>
          Transforming Fintech <br /> Startups
        </>
      ),
      description:
        "From smart data to secure payments, we help fintechs, neobanks, and digital wallets build faster.",
    },
    {
      id: 2,
      icon: twoImage,
      title: (
        <>
          Scaling Smarter with <br />
          Data Intelligence
        </>
      ),
      description:
        "Our credit scoring models improved by 40% with Prime Money's enriched bank data.",
    },
    {
      id: 3,
      icon: threeImage,
      title: (
        <>
          Trusted by Leading <br /> Fintech Brands
        </>
      ),
      description:
        "We moved from legacy systems to Prime Money’s API-first stack — seamless and reliable",
    },
  ];
  return (
    <Box sx={{ px: { xs: 2, md: 10, lg: 15 }, pt: 8, pb: 5 }}>
      <Typography
        color="#222222"
        fontSize="2.8rem"
        fontFamily="Manrope"
        textAlign="center"
        fontWeight={700}
        py={4}
        sx={{ fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" } }}
      >
        Built for Visionaries. Backed by Innovation
      </Typography>
      <Grid container spacing={5}>
        {useCases.map((item, idx) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={item.id}>
            <Stack flexDirection={"row"} gap={3}>
              <Box>
                <Image
                  src={item.icon}
                  alt={String(idx + 1)}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography
                  color="#646464"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UseCasesHome;
