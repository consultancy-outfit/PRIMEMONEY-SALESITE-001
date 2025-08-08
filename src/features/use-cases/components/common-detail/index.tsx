import { Avatar, Box, Grid, Typography } from "@mui/material";
import { CheckCircleIcon } from "../../assets";
import { AVATAR_VARIANTS } from "@/constants/ui";

export const CommonDetail = (props: any) => {
  const { detailsKeyPoints, detailsNumberPoints, detailsCheckPoints } = props;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={6} mt={8}>
      <Box  px={6}>
        <Typography fontWeight={700} fontSize={"32px"}>
          {detailsCheckPoints.heading}
        </Typography>
        <Typography fontWeight={400} fontSize={"20px"}>
          {detailsCheckPoints.description1}
        </Typography>
        <Typography fontWeight={400} fontSize={"20px"} mb={4}>
          {detailsCheckPoints.description2}
        </Typography>
        {detailsCheckPoints.points.map((item: any) => (
          <Box
            display={"flex"}
            gap={1}
            mb={3}
            flexDirection={"column"}
            key={item.id}
          >
            <Box display={"flex"} alignItems={"center"} gap={1.5}>
              <Avatar
                src={CheckCircleIcon.src}
                sx={{
                  width: "auto",
                  height: "auto",
                }}
                variant={AVATAR_VARIANTS?.CIRCULAR}
                alt={"CheckCircleIcon"}
              />
              <Typography fontWeight={700} fontSize={"24px"}>
                {item.title}
              </Typography>
            </Box>
            <Typography fontWeight={400} fontSize={"20px"}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box px={6}>
        <Typography fontWeight={700} fontSize={"32px"} mb={4}>
          {detailsNumberPoints.heading}
        </Typography>
        <Grid container spacing={2}>
          {detailsNumberPoints.points.map((item: any) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={item.id}
              display={"flex"}
              alignItems={"center"}
              gap={3}
              mb={5}
            >
              <Avatar
                src={item.numberIcon}
                sx={{
                  width: "auto",
                  height: "auto",
                }}
                variant={AVATAR_VARIANTS?.SQUARE}
                alt={item.title}
              />
              <Typography fontWeight={400} fontSize={"18px"}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {detailsKeyPoints && (
        <Box px={6}>
          <Typography fontWeight={700} fontSize={"32px"} mb={2}>
            {detailsKeyPoints.heading}
          </Typography>
          <Grid container spacing={2}>
            {detailsKeyPoints.points.map((item: any) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={item.id}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
                gap={1}
                mb={5}
              >
                <Avatar
                  src={item.keyIcon}
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                  variant={AVATAR_VARIANTS?.SQUARE}
                  alt={item.title}
                />
                <Typography fontWeight={700} fontSize={"24px"}>
                  {item.title}
                </Typography>
                <Typography fontWeight={400} fontSize={"20px"}>
                  {item.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
