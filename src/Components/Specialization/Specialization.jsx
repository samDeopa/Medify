import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { IconCard } from "../IconCard/IconCard";
import icon1 from "../Assets/dentistry.png";
import icon2 from "../Assets/Care.png";
import icon3 from "../Assets/Cardiology.png";
import icon4 from "../Assets/mri-resonance.png";
import icon5 from "../Assets/blood-test.png";
import icon6 from "../Assets/pychologist.png";
import icon7 from "../Assets/Labs.png";
import icon8 from "../Assets/xray.png";

export const Specialization = () => {
  const data = [
    { img: icon1, title: "Dentistry" },
    { img: icon2, title: "Primary Care" },
    { img: icon3, title: "Cardiology" },
    { img: icon4, title: "MRI Resonance" },
    { img: icon5, title: "Blood Test" },
    { img: icon6, title: "Piscologist" },
    { img: icon7, title: "Laboratory" },
    { img: icon8, title: "X-Ray" },
  ];
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item.title}>
              <IconCard
                img={item.img}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
};
