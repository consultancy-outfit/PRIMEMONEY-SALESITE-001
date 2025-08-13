import { CareersImage } from "@/assets/images/features/home";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          py={10}
          px={2}
          m={2}
        >
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              textAlign: "center",
            }}
          >
            Join the Team. Build the Future.
          </Typography>
          <Typography
            color="grey"
            sx={{
              mb: 3,
              textAlign: "center",
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.5rem" },
              width: { xs: "100%", sm: "90%", md: "80%" },
            }}
          >
            We’re on a mission to redefine finance through smarter connectivity,
            intelligent data, and seamless digital experiences. Our platform
            powers everything from real-time payments to advanced credit
            scoring, and we need bright minds like yours to keep pushing
            boundaries.
          </Typography>
          <Image
            src={CareersImage}
            alt="Home"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Stack>
      <div style={{ height: "80vh", background: "#fff" }}>
        <iframe
          src="https://recruiting.peoplescreed.ai/job-boards?boardName=realmoney-1754286862577&companyId=6890478395179f36a7527d25"
          width="100%"
          height="100%"
          no-border
          title="Jobs Widget"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
