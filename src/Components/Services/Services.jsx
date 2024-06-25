import React, { useMemo } from "react";
import doctorIcon from "../Assets/doctor.png";
import labsIcon from "../Assets/Labs.png";
import hospitalsIcon from "../Assets/hospitals.png";
import medicalStoreIcon from "../Assets/medicalstore.png";
import ambulanceIcon from "../Assets/ambulance.png";
import { Grid, Typography, Box } from "@mui/material";
import { IconCard } from "../IconCard/IconCard";

export const Services = () => {
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: labsIcon, title: "Labs" },
      { img: hospitalsIcon, title: "Hospitals", active: true },
      { img: medicalStoreIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );
  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((Services) => (
          <Grid item key={Services.title} xs={4} md={2.4}>
            <IconCard
              img={Services.img}
              title={Services.title}
              active={Services.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
