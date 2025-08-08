"use client";
import { banner1, hb1, hb2, hb3 } from "@/assets/images/about-us";
import {
  CoreAdvantagesHome,
  GetStartedHome,
  Hero,
} from "@/features/home/components";
import OurServicesHome from "@/features/home/components/2nd-section";
import HomeThirdSection from "@/features/home/components/3rd-section";
import UseCasesHome from "@/features/home/components/4th-section";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// or only core styles
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function Home() {
  return (
    <>
      <Stack textAlign="center">
        <Hero />
        <OurServicesHome />
        <HomeThirdSection />
        <UseCasesHome />
        <GetStartedHome />
        <CoreAdvantagesHome />
        <Container maxWidth="xl" sx={{ my: 4, textAlign: "left" }}>
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack gap={1}>
                <Typography fontSize={40} fontWeight={800} color="#222222">
                  What Our Partners Say About Us
                </Typography>
                <Typography fontSize={20} fontWeight={400} color="#646464">
                  Hear from our trusted partners on how our solutions have
                  helped them innovate, grow, and deliver exceptional financial
                  experiences.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box px={3}>
                <Splide
                  aria-label="My Favorite Images"
                  options={{
                    type: "loop",
                    arrows: false,
                    pagination: false,
                  }}
                >
                  <SplideSlide>
                    <Box
                      sx={{
                        width: "100%",
                        minWidth: 200,
                        height: "auto",
                        backgroundImage: `url(${banner1.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: 5,
                        boxShadow: 8,
                        display: "block",
                        py: 2,
                        mt: 4,
                        px: 2,
                      }}
                    >
                      <Stack gap={2}>
                        <Typography
                          fontSize={20}
                          fontWeight={700}
                          color="#ffff"
                        >
                          Hear from our trusted partners on how our solutions
                          have helped them innovate, grow, and deliver
                          exceptional financial experiences.
                        </Typography>
                        <Stack>
                          <Typography
                            fontSize={20}
                            fontWeight={700}
                            color="#ffff"
                          >
                            James Wallace
                          </Typography>
                          <Typography
                            fontSize={14}
                            fontWeight={400}
                            color="#646464"
                          >
                            CTO
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </SplideSlide>
                  <SplideSlide>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundImage: `url(${banner1.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: 5,
                        boxShadow: 8,
                        display: "block",
                        py: 2,
                        mt: 4,
                        px: 2,
                      }}
                    >
                      <Stack gap={2}>
                        <Typography
                          fontSize={20}
                          fontWeight={700}
                          color="#ffff"
                        >
                          The payments API integration was seamless, with clear
                          and thorough documentation that made the process quick
                          and hassle-free.
                        </Typography>
                        <Stack>
                          <Typography
                            fontSize={20}
                            fontWeight={700}
                            color="#ffff"
                          >
                            Bessie Cooper
                          </Typography>
                          <Typography
                            fontSize={14}
                            fontWeight={400}
                            color="#646464"
                          >
                            Product Manager
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </SplideSlide>
                </Splide>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ my: 4, textAlign: "left" }}>
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, md: 10 }}>
              <Stack gap={1}>
                <Typography fontSize={40} fontWeight={800} color="#222222">
                  Powering Real-World Financial Innovation
                </Typography>
                <Typography fontSize={20} fontWeight={400} color="#646464">
                  From onboarding to payments and data enrichment, Prime Money’s
                  modular infrastructure empowers you to build scalable,
                  compliant, and next-gen financial products.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Stack gap={1} alignItems={"flex-end"}>
                <a href="/use-cases">
                  <Button
                    variant="contained"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    disableTouchRipple
                    sx={{
                      bgcolor: "#222222",
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: 600,
                      borderRadius: 2,
                      mt: 9,
                      p: 1.8,
                    }}
                  >
                    Browse All Use Cases
                  </Button>
                </a>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 260 },
                    backgroundImage: `url(${hb1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={700} color="#222222">
                  Transform Bank Transactions into Predictive Insights
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#646464">
                  Prime Money’s Data Intelligence suite turns raw financial
                  transactions into enriched, structured, and highly actionable
                  insights. It’s ideal for credit scoring, budgeting apps,
                  expense trackers, and embedded finance products where
                  decision-making is key.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 260 },
                    backgroundImage: `url(${hb2.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={700} color="#222222">
                  Build Seamless Payment Journeys with Direct Bank Integration
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#646464">
                  Today’s users expect instant, intuitive, and secure payments —
                  without detours through third-party apps or outdated
                  interfaces. That’s where embedded finance makes the
                  difference. With Prime Money’s Embedded Payments & Account
                  Connectivity,
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 260 },
                    backgroundImage: `url(${hb3.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={700} color="#222222">
                  Bank-Verified Identity and Compliance in One API
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#646464">
                  Simplify and accelerate user onboarding by using bank-level
                  identity data. Prime Money helps you ensure only legitimate
                  users access your services—cutting fraud and ensuring
                  compliance without costly KYC teams.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: `url(${banner1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 0,
            boxShadow: 3,
            display: "block",
            py: 2,
            mt: 4,
          }}
        >
          <Stack textAlign={"center"} gap={2} mt={4} mb={4} p={4}>
            <Typography fontSize={62} fontWeight={800} color="#FFFFFF">
              Let’s Build Something Better Together
            </Typography>
            <Typography fontSize={20} fontWeight={400} color="#A7A7A7">
              Talk to our team and explore how Prime Money can fuel your next
              product.
            </Typography>
            <a href="/contact-us">
              <Button variant="contained" color="primary" size="large">
                Contact Us
              </Button>
            </a>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
