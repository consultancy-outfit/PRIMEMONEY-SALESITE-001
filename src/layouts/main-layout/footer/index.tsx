"use client";
import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { about, products } from "./footer.data";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",

        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 3, sm: 5 },
        m: 2,
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack alignItems={"flex-start"} maxWidth={450} gap={2}>
            <LogoAvatar height="auto" isCenter={false} isLight />

            <Typography
              variant="body1"
              sx={{
                color: "#646464",

                fontSize: 32,
                fontWeight: 800,
              }}
            >
              Stay Ahead with Prime Money
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#646464",

                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Build Launch Scale Your All-in-One Open Banking Ecosystem
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, lg: 2 }}>
          <Stack>
            <Typography
              // variant="subtitle1"
              color="#222222"
              fontFamily="Manrope"
              fontWeight={800}
              sx={{ fontSize: { xs: 16, sm: 18, lg: 20 } }}
            >
              Company
            </Typography>
            {about.map((item) => (
              <Typography
                key={item?.id + item?.label}
                variant="body1"
                color="#646464"
                fontFamily="Manrope"
                sx={{ mt: 1.5, cursor: "pointer" }}
                onClick={() => {
                  router.push(item?.link);
                }}
              >
                {item?.label}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, lg: 3 }}>
          <Stack width={200}>
            <Typography
              variant="subtitle1"
              color="#222222"
              fontFamily="Manrope"
              fontWeight={800}
              sx={{ fontSize: { xs: 16, sm: 18, lg: 20 } }}
            >
              Products
            </Typography>
            {products.map((item) => (
              <Typography
                key={item?.id + item?.label}
                variant="body1"
                color="#646464"
                fontFamily="Manrope"
                sx={{ mt: 1.5, cursor: "pointer" }}
                onClick={() => {
                  router.push(item?.link);
                }}
              >
                {item?.label}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 3, lg: 1.5 }}>
          <Stack>
            <Typography
              variant="subtitle1"
              color="#222222"
              fontFamily="Manrope"
              fontWeight={800}
              sx={{ fontSize: { xs: 16, sm: 18, lg: 20 } }}
            >
              Legal
            </Typography>
            <Link
              href="/privacy-policy"
              color="inherit"
            >
              <Typography
                variant="body1"
                sx={{ mt: 1.5, cursor: "pointer" }}
                color="#646464"
                fontFamily="Manrope"
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link
              href="/terms-and-conditions"
              color="inherit"
            >
              <Typography
                variant="body1"
                sx={{ mt: 1.5, cursor: "pointer" }}
                color="#646464"
                fontFamily="Manrope"
              >
                Terms & Conditions
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <Box
        mt={4}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <Typography
          variant="body1"
          sx={{ color: "#646464", fontFamily: "Manrope" }}
        >
          Copyright © {currentYear} Prime Money.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
