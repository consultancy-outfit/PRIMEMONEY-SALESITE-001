"use client";
import { CheckedIcon } from "@/assets/icons/common";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProductDetailPagesCommon = (props: any) => {
  const { PageTitle, PageDescription, PageHeaderImage, gridContent } = props;
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={10}
          px={2}
          m={2}
          pb={20}
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight={600}
            textAlign={"center"}
          >
            {PageTitle}
          </Typography>
          <Typography
            variant="body1"
            color="grey"
            sx={{ mb: 3, textAlign: "center" }}
          >
            {PageDescription}
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Image
          src={PageHeaderImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "660px",
            position: "relative",
            bottom: "200px",
          }}
        />
      </Box>

      <Grid container sx={{ backgroundColor: "#F2F5F7", px: 15, py: 5 }}>
        {gridContent.map((item: any) => (
          <React.Fragment key={item?.id}>
            {/* Text first, then image */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="h3" fontWeight={600} mb={3}>
                {item.subtitle}
              </Typography>
              <Typography mb={3}>{item.description}</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Image
                src={item.sectionImage}
                alt="HeroSection"
                style={{
                  width: "100%",
                  height: "660px",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              {item.innerValues &&
                item.innerValues.map((val: any, idx: number) => (
                  <Box key={idx} sx={{ mb: 3 }}>
                    <Typography fontWeight={600}>{val.liTitle}</Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                      {val.liList.map((value: string, i: number) => (
                        <Typography
                          component="li"
                          sx={{
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                          key={i}
                        >
                          <CheckedIcon style={{ fontSize: 20 }} />
                          {value}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default ProductDetailPagesCommon;
