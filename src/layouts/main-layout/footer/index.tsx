"use client";
import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { about, products } from "./footer.data";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",

        px: { xs: 5, sm: 10 },
        py: { xs: 3, sm: 5 },
        m: 2,
        borderRadius: "12px",
      }}
    >
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
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
        <Box ml={"auto"}>
          <Stack direction={"row"} gap={{ xs: 3, lg: 9 }} flexWrap={"wrap"}>
            <Stack >
              <Typography
                variant="subtitle1"
                color="#222222"
                fontFamily="Manrope"
                fontWeight={500}
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
            <Stack width={200}>
              <Typography
                variant="subtitle1"
                color="#222222"
                fontFamily="Manrope"
                fontWeight={500}
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
            <Stack>
              <Typography
                variant="subtitle1"
                color="#222222"
                fontFamily="Manrope"
                fontWeight={500}
              >
                Legal
              </Typography>
              <Link
                href="/privacy-policy"
                color="inherit"
                sx={{
                  color: "#646464",
                  fontFamily: "Manrope",
                  fontSize: 16,
                  textDecoration: "none",
                }}
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
                sx={{
                  color: "#646464",
                  fontFamily: "Manrope",
                  fontSize: 16,
                  textDecoration: "none",
                }}
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
          </Stack>
        </Box>
      </Stack>

      <Box
        mt={3}
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
