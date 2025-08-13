import {
  abs1,
  abs2,
  absSub1,
  absSub2,
  absSub3,
  absSub4,
  banner1,
} from "@/assets/images/about-us";
import IconAB1 from "@/assets/images/about-us/icon-ab1";
import IconAb10 from "@/assets/images/about-us/icon-ab10";
import IconAb11 from "@/assets/images/about-us/icon-ab11";
import IconAB2 from "@/assets/images/about-us/icon-ab2";
import IconAb3 from "@/assets/images/about-us/icon-ab3";
import IconAb4 from "@/assets/images/about-us/icon-ab4";
import IconAb5 from "@/assets/images/about-us/icon-ab5";
import IconAb6 from "@/assets/images/about-us/icon-ab6";
import IconAb8 from "@/assets/images/about-us/icon-ab8";
import IconAB9 from "@/assets/images/about-us/icon-ab9";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";

function AboutUsNewFeature() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Stack gap={2} textAlign={"center"}>
          <Typography
            fontWeight={800}
            color="#222222"
            sx={{
              fontSize: { xs: 32, sm: 50, md: 72 },
              lineHeight: 1.2,
              maxWidth: { xs: "100%", sm: "95%", md: "90%" },
              margin: "0 auto",
            }}
          >
            We are building the next generation of payment connectivity
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={400}
            color="#646464"
            sx={{
              maxWidth: { xs: "100%", sm: "95%", md: "85%" },
              fontSize: { xs: 16, sm: 18, md: 22 },
              lineHeight: 1.5,
              margin: "0 auto",
            }}
          >
            By connecting directly to banks and financial institutions, we
            remove friction from traditional systems and make finance faster,
            safer, and more transparent.{" "}
          </Typography>
          <Grid container spacing={4} mt={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: "14px 0px 0px 14px",
                }}
              >
                <Stack gap={2} flexDirection={"row"}>
                  <Stack gap={2} textAlign={"left"} pl={3} pt={3}>
                    <Typography fontSize={32} fontWeight={800} color="#222222">
                      Vision
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      color="text.secondary"
                    >
                      Secure, real-time access to financial data and payments –
                      creating a more connected, innovative, and inclusive
                      financial ecosystem.
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 288 },
                      backgroundImage: `url(${abs1.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "0px 14px 14px 0px",
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                      ml: "auto",
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: "14px 0px 0px 14px",
                }}
              >
                <Stack gap={2} flexDirection={"row"}>
                  <Stack gap={2} textAlign={"left"} pl={3} pt={3}>
                    <Typography fontSize={32} fontWeight={800} color="#222222">
                      Mission
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      color="text.secondary"
                    >
                      We envision an ecosystem where businesses and individuals
                      can interact with their financial data and payments
                      effortlessly, unlocking innovation and building trust
                      through open technology.
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 288 },
                      backgroundImage: `url(${abs2.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "0px 14px 14px 0px",
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                      ml: "auto",
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={4} textAlign={"left"}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: 8,
                  p: 3,
                }}
              >
                <Stack gap={2}>
                  <IconAB1 sx={{ fontSize: 35 }} />
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    color="text.secondary"
                  >
                    Secure access to financial data & payments
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: 8,
                  p: 3,
                }}
              >
                <Stack gap={2}>
                  <IconAB2 sx={{ fontSize: 35 }} />
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    color="text.secondary"
                  >
                    Power the future of open finance.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: 8,
                  p: 3,
                }}
              >
                <Stack gap={2}>
                  <IconAb3 sx={{ fontSize: 35 }} />
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    color="text.secondary"
                  >
                    Businesses with smart, scalable solutions.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  bgcolor: "#F7F5F9",
                  borderRadius: 8,
                  p: 3,
                  height: "100%",
                }}
              >
                <Stack gap={2}>
                  <IconAb4 sx={{ fontSize: 35 }} />
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    color="text.secondary"
                  >
                    Automate, optimise, and grow.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={5}>
            {/* <Typography fontSize={40} fontWeight={800} color="#222222">
             */}
            <Typography
              fontWeight={800}
              color="#222222"
              sx={{
                fontSize: { xs: 28, sm: 32, md: 36, lg: 48 },
                lineHeight: 1.2,
                maxWidth: { xs: "100%", sm: "95%", md: "90%" },
                margin: "0 auto",
              }}
            >
              The principles that guide how we build, innovate, and deliver
              trusted financial solutions.
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={400}
              color="#646464"
              sx={{
                fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
                lineHeight: 1.2,
                maxWidth: { xs: "100%", sm: "95%", md: "90%" },
                margin: "20px auto",
              }}
            >
              {` Whether you're building a neobank or lending app, our services adapt to your business needs.`}
            </Typography>
            <Grid container spacing={4} mt={5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAb5
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Security First
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      We safeguard every connection with bank‑grade protection
                      and regulatory compliance.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAb6
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Transparency
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      Open technology, open standards, and communication guide
                      everything we build
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAb8
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Customer Focus
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      Every feature is designed to solve real-world challenges
                      for our clients and their users.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAB9
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Collaboration
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      We grow by listening to our users and working alongside
                      them.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAb10
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Innovation-Driven
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      We continuously push boundaries with evolving AI
                      capabilities.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack direction={"row"} gap={2} textAlign={"left"}>
                  <IconAb11
                    sx={{
                      fontSize: 90,
                    }}
                  />
                  <Stack gap={2}>
                    <Typography fontSize={32} fontWeight={700} color="#222222">
                      Reliability{" "}
                    </Typography>
                    <Typography fontSize={20} fontWeight={400} color="#646464">
                      From account linking to transaction processing, you can
                      count on our tools to deliver.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={2} mt={5}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <Typography
                fontSize={40}
                fontWeight={800}
                color="#222222"
                sx={{
                  // alignItems: "left",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: 30, sm: 34, md: 40 },
                  lineHeight: 1.2,
                  maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "40%" },
                }}
              >
                Meet the Minds Behind Viora
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <Typography
                fontSize={20}
                fontWeight={400}
                color="#646464"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: 18, sm: 18, md: 22 },
                  lineHeight: 1.2,
                  maxWidth: { xs: "100%", sm: "95%" },
                }}
              >
                From research to real-world impact—meet the talent powering
                Viora’s evolution.
              </Typography>
            </Grid>
          </Grid>

          <Stack
            direction={{ xs: "column", xl: "row" }}
            width={"100%"}
            alignItems={"center"}
            mt={4}
          >
            {/* <Box pr={{ xs: 0, xl: 35 }}>
              <Typography fontSize={40} fontWeight={800} color="#222222">
                Meet the Minds Behind Viora
              </Typography>
            </Box>
            <Box ml={"auto"} pl={{ xs: 0, xl: 35 }}>
              <Typography
                fontSize={20}
                fontWeight={400}
                color="#646464"
                sx={{ ml: "auto" }}
              >
                From research to real-world impact—meet the talent powering
                Viora’s evolution.
              </Typography>
            </Box> */}
          </Stack>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 450 },
                    backgroundImage: `url(${absSub1.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={800} color="#222222">
                  Noah Veldman
                </Typography>
                <Typography fontSize={14} fontWeight={400} color="#646464">
                  Head of Compliance & Risk
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 450 },
                    backgroundImage: `url(${absSub2.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={800} color="#222222">
                  Felix Romero
                </Typography>
                <Typography fontSize={14} fontWeight={400} color="#646464">
                  Chief Product Officer (CPO)
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 450 },
                    backgroundImage: `url(${absSub3.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={800} color="#222222">
                  Darian Lee
                </Typography>
                <Typography fontSize={14} fontWeight={400} color="#646464">
                  Chief Technology Officer
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Stack gap={1}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 450 },
                    backgroundImage: `url(${absSub4.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                    ml: "auto",
                  }}
                />
                <Typography fontSize={24} fontWeight={800} color="#222222">
                  Isla Tanaka
                </Typography>
                <Typography fontSize={14} fontWeight={400} color="#646464">
                  UI/UX Designer
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
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
          <Typography
            fontWeight={800}
            color="#FFFFFF"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.5rem", md: "4.5rem" },
            }}
          >
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
    </>
  );
}

export default AboutUsNewFeature;
