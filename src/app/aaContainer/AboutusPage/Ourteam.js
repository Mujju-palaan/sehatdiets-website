"use client";
import React from "react";
import "./Ourteam.module.css";
import KitsimgCard from "../../../../components/Kits/KitsimgCard";
import styles from "./Ourteam.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Ourteam = () => {
  return (
    <div className={styles.teamcontainer}>
      <h1>Our Health</h1>
      <h1 style={{ color: "#609a33" }}>Specialist Team</h1>
      <div className="container">
        <Swiper 
        // install Swiper modules
        breakpoints={{
          0: {
            width: 400,
            slidesPerView: 1,
          },
          400: {
            width: 400,
            slidesPerView: 1,
          },
          639: {
            width: 639,
            slidesPerView: 2,
          },
          865: {
            width: 865,
            slidesPerView: 3,
          },
          1000: {
            width: 1000,
            slidesPerView: 3,
          },
          1500: {
            width: 1500,
            slidesPerView: 3,
          },
          1700: {
            width: 1700,
            slidesPerView: 3,
          },
        }}
        scrollbar={{ draggable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          style={{ overflow: "hidden"}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            watchOverflow: "visible",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide style={{marginRight:'0'}}>
            <KitsimgCard
              image="./aboutus_team.png"
              title={`Oliver`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team1.jpg"
              title={`James`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team2.jpg"
              title={`Sophia`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team3.jpg"
              title={`Sebastian`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team4.jpg"
              title={`Lily`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team5.jpg"
              title={`Eliana`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team6.jpg"
              title={`Scarlett`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KitsimgCard
              image="./aboutus_team7.jpg"
              title={`Emilia`}
              role={`Sr. Nutrition`}
            />
          </SwiperSlide>

          {/* <div className="slider-controler" style={{ paddingTop: "0" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}

          
        </Swiper>
      </div>
    </div>
  );
};

export default Ourteam;

//   {/* ********************OUR TEAM ************************* */}
//   <div className={styles.teamcontainer}>
//   <h1>Our Health</h1>
//   <h1 style={{color:'#609a33'}}>Specialist Team</h1>
//   {/* <ReactCardSlider slides={slides}/> */}
//   <div style={{textAlign:'center', display:'flex', gap:'4rem', justifyContent:'center'}}>
//     <KitsimgCard
//     image=""
//     title={`Yoga speciliest`}
//     />
//     <KitsimgCard
//     image=""
//     title={`Yoga speciliest`}
//     />
//     <KitsimgCard
//     image=""
//     title={`Yoga speciliest`}
//     />
//   </div>
// </div>
// {/* <Profilecorusel/> */}
// {/* ********************OUR TEAM ************************* */}
