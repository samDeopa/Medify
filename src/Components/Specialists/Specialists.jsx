import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
// import img1 from "../Assets/lesley.png";
import img2 from "../Assets/drahamad.png";
import img3 from "../Assets/drheena.png";
import img4 from "../Assets/drankur.png";
// import img5 from "../Assets/ahmad-stevens.png";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { SpecialistCards } from "./SpecialistCards";

export const Specialists = () => {
  const SpecialistsData = [
    // { img: img1, title: "Dr. Lesley Hull", desc: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", desc: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", desc: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", desc: "Medicine" },
    // { img: img5, title: "Dr. Ahmad Stevens", desc: "Neurologist" },
    // { img: img1, title: "Dr. Lesley Hull", desc: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", desc: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", desc: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", desc: "Medicine" },
    // { img: img5, title: "Dr. Ahmad Stevens", desc: "Neurologist" },
  ];
  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign={"center"} mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {SpecialistsData.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCards
              img={doc.img}
              title={doc.title}
              desc={doc.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
