import { Box, Container } from "@mui/material";
import React from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import offerImg1 from "../Assets/offer1.png";
import offerImg2 from "../Assets/offer2.png";

export const OfferSlider = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{ 767: { slidesPerView: 3 } }}
        >
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg1}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg2}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg1}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg2}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg1}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImg2}
              sx={{ width: "100%", height: "auto", maxHeight: "250px" }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};
