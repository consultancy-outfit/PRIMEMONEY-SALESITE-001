"use client";
import { CheckedIcon } from "@/assets/icons/common";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProductDetailPagesCommon = (props: any) => {
  const { PageTitle, PageDescription, gridContent } = props;
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={15}
          pb={5}
          m={2}
          sx={{ px: { xs: 0, sm: 2, md: 10, lg: 15 } }}
        >
          <Typography
            color="black"
            fontWeight={900}
            textAlign={"center"}
            my={2}
            sx={{ fontSize: { xs: 32, sm: 40, md: 48, lg: 60 } }}
          >
            {PageTitle}
          </Typography>
          <Typography
            color="grey"
            sx={{
              mb: 2,
              textAlign: "center",
              fontSize: { xs: 16, sm: 18, md: 20, lg: 24 },
            }}
          >
            {PageDescription}
          </Typography>
        </Box>
      </Stack>

      <Grid container sx={{ py: 5, px: { xs: 2, sm: 5, md: 10, lg: 15 } }}>
        {gridContent.map((item: any) => (
          <React.Fragment key={item?.id}>
            {/* Text first, then image */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={600}>
                  {item.title}
                </Typography>
              </Box>
              <Typography
                fontWeight={800}
                mb={3}
                sx={{ fontSize: { xs: 30, sm: 34, md: 42 } }}
              >
                {item.subtitle}
              </Typography>
              <Typography mb={3} sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                {item.description}
              </Typography>
              <Image
                src={item.sectionImage}
                alt="HeroSection"
                style={{
                  width: "100%",
                  height: "500px",
                }}
              />
            </Grid>
            {/* <Grid size={{ xs: 12 }}>
              <Image
                src={item.sectionImage}
                alt="HeroSection"
                style={{
                  width: "100%",
                  height: "660px",
                }}
              />
            </Grid> */}
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={2}>
                {item.innerValues &&
                  item.innerValues.map((val: any, idx: number) => (
                    <Grid size={{ xs: 12, md: 6 }} key={idx}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" fontWeight={600}>
                          {val.liTitle}
                        </Typography>
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
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default ProductDetailPagesCommon;
