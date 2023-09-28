import React from "react";
import Card from "../../../../components/planscard/Card";
import "./Homeslider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
// import "swiper/css/breakpoints";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const HomeSlider = () => {
  return (
    <div>
      <div className="container">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              width: 400,
              slidesPerView: 2,
            },
            639: {
              width: 639,
              slidesPerView: 2,
            },
            865: {
              width: 865,
              slidesPerView: 4,
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
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          spaceBetween={150}
          style={{ overflow: "hidden" }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          slidesPerView={3}
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
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
          <SwiperSlide>
            <Card
              title="Weight Loss"
              content={`Transform Your Life with Our Personalized Weight Loss Program.`}
              Images="./prog_weightloss.jpg"
              link="WeightLossPrograms"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Weight Gain"
              content={`Achieve Healthy Weight Gain with Our Personalized Program.`}
              Images="./prog_weightgain.jpg"
              link="WeightGainPrograms"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Diabetes"
              content={`Expertly Crafted Diabetes Diet Plans for Optimal Health.`}
              Images="./prog_diabeties.jpg"
              link="DiabetesDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="PCOD/PCOS"
              content={`Empowering Women with Our Comprehensive PCOD/PCOS Management Program.`}
              Images="./prog_pcod.jpg"
              link="PCOD"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Wedding"
              content={`Achieve Your Dream Wedding Look with Our Specialized Wedding Diet Program.`}
              Images="./prog_wedding.jpg"
              link="WeddingDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Menopause"
              content={`Embrace Menopause with Vitality: Our Personalized Menopause Diet Program.`}
              Images="./prog_monopause.jpg"
              link="MenopauseDeitProgram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Kids Nutrition"
              content={`Nurturing Healthy Futures: Our Specialized Kids Nutrition Program.`}
              Images="./prog_kidsdiet.jpg"
              link="KidsNutrition"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Fitness Plan"
              content={`Elevate Your Performance with Our Custom Fitness Programs.`}
              Images="./prog_fastfit.jpg"
              link="FitnessPerformance"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
