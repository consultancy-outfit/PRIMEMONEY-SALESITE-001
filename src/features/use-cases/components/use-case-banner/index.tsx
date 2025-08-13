import { Box, Typography } from "@mui/material";
import { Elipse } from "../../assets";

export const UseCaseBanner = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      py={12}
      px={1}
      gap={3}
      bgcolor={"rgba(34, 34, 34, 1)"}
      sx={{
        backgroundImage: `url(${Elipse.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        fontWeight={800}
        fontSize={"60px"}
        color="white"
        textAlign={"center"}
        sx={{
          fontSize: { xs: 36, sm: 48, md: 60, lg: 72 },
          lineHeight: { xs: "44px", sm: "54px", md: "72px", lg: "82px" },
          maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "80%" },
          margin: "0 auto",
        }}
      >
        Build Launch Scale Your All-in-One Open Banking Ecosystem
      </Typography>
      <Typography fontWeight={400} fontSize={"20px"} color="white">
        Our solutions power fintech leaders globally.
      </Typography>
    </Box>
  );
};
