"use client";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { cardData } from "./UseCaseCards.data";
import { LinkButton } from "@/components/buttons/link-button";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const UseCaseCards = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={8}
      p={2}
    >
      {cardData.map((item: any) => (
        <Card
          key={item.id}
          sx={{
            maxWidth: 420,
            minHeight: 600,
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SlideUpInView>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  fontSize="22px"
                  fontWeight={600}
                  color="rgba(34, 34, 34, 1)"
                  gutterBottom
                >
                  {item.heading}
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight={400}
                  color="rgba(100, 100, 100, 1)"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </SlideUpInView>
          <CardActions sx={{ mt: "auto", pb: 2, px: 2 }}>
            <ScaleInView>
              <LinkButton
                link={item.readMoreUrl}
                customStyles={{
                  borderRadius: "5px",
                  backgroundColor: "rgba(34, 34, 34, 1)",
                  color: "white",
                  px: "24px",
                  py: "8px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                }}
                variant="contained"
              >
                Read more
              </LinkButton>
            </ScaleInView>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
