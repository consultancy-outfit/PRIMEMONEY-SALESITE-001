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
        "From smart data to secure payments, we help fintechs, neobanks, and digital wallets build faster.",
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
        "From smart data to secure payments, we help fintechs, neobanks, and digital wallets build faster.",
    },
  ];
  return (
    <Box sx={{ px: 15, pt: 8, pb: 5 }}>
      <Typography
        color="#222222"
        fontSize="2.8rem"
        fontFamily="Manrope"
        textAlign="center"
        fontWeight={700}
        py={4}
      >
        Built for Visionaries. Backed by Innovation
      </Typography>
      <Grid container spacing={5}>
        {useCases.map((item, idx) => (
          <Grid size={{ xs: 12, sm: 4 }} key={item.id}>
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
                <Typography color="#646464">{item.description}</Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UseCasesHome;
