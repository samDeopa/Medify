import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Hero } from "../Hero/Hero";
import { SearchHospital } from "../SearchHospital/SearchHospital";
import { Container, Box, Stack } from "@mui/material";
import { Services } from "../Services/Services";
import { OfferSlider } from "../Sections/OfferSlider";
import { Specialization } from "../Specialization/Specialization";
import { Specialists } from "../Specialists/Specialists";
import { PatientCaring } from "../Sections/PatientCaring/PatientCaring";
import { Blogs } from "../Sections/Blogs/Blogs";
import { OurFamilies } from "../Sections/OurFamilies/OurFamilies";
import { FAQs } from "../Sections/FAQs/FAQs";

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <Hero />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <Services />
          </Stack>
        </Container>
      </Box>
      <OfferSlider />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </Box>
  );
};
