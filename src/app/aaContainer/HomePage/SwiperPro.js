"use client";
import React from "react";
// import './SwiperPro.module.css'
// import styles from "./SwiperPro.module.css"
import HomePlansCard from '../../../../components/planscard/HomePlansCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Ourteam = () => {
  return (
    <div >
      
      <div className="container">
        <Swiper 
        // install Swiper modules
        breakpoints={{
          0: {
            // width: 400,
            slidesPerView: 1,
            centeredSlides: true
          },
          400: {
            // width: 400,
            slidesPerView: 1,
          },
          639: {
            // width: 639,
            slidesPerView: 2,
          },
          865: {
            // width: 865,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },
          1500: {
            // width: 1500,
            slidesPerView: 4,
          },
          1700: {
            // width: 1700,
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
          <SwiperSlide style={{marginLeft:'2.5rem'}}>
            <HomePlansCard 
                title="Weight Loss"
                // content={`Transform Your Life with Our Personalized Weight Loss Program.`}
                Images="./prog_weightloss.jpg"
                link="WeightLossPrograms"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Weight Gain"
                // content={`Achieve Healthy Weight Gain with Our Personalized Program.`}
                Images="./prog_weightgain.jpg"
                link="WeightGainPrograms"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Diabetes"
                // content={`Expertly Crafted Diabetes Diet Plans for Optimal Health.`}
                Images="./prog_diabeties.jpg"
                link="DiabetesDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="PCOD/PCOS"
                // content={`Empowering Women with Our Comprehensive PCOD/PCOS Management Program.`}
                Images="./prog_pcod.jpg"
                link="PCOD"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Wedding"
                // content={`Achieve Your Dream Wedding Look with Our Specialized Wedding Diet Program.`}
                Images="./prog_wedding.jpg"
                link="WeddingDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Menopause"
                // content={`Embrace Menopause with Vitality: Our Personalized Menopause Diet Program.`}
                Images="./prog_monopause.jpg"
                link="MenopauseDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Kids Nutrition"
                // content={`Nurturing Healthy Futures: Our Specialized Kids Nutrition Program.`}
                Images="./prog_kidsdiet.jpg"
                link="KidsNutrition"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePlansCard 
                title="Fitness Plan"
                // content={`Elevate Your Performance with Our Custom Fitness Programs.`}
                Images="./prog_fastfit.jpg"
                link="FitnessPerformance"
            />
          </SwiperSlide>

          {/* <div className="slider-controler" style={{ paddingTop: "0rem" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}

        {/* <div className="slider-controler">
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

