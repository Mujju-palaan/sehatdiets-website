import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import Card from '../../../../components/planscard/Card';
// import './HomeSwiper.css'

const HomeSwiper = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          centeredSlides: 1,
          // spaceBetween: 20,
          freeMode: true,
          coverflowEffect:{
            stretch:0
          },
          autoplay:{
            delay:1000
          }
        },
        400: {
          width: 400,
          slidesPerView: 0,
          centeredSlides: true,
          spaceBetween: 0,
        },
        639: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 3,
        },
        1700: {
          slidesPerView: 3,
        },
      }}
        autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        initialSlide={2}
        spaceBetween={0}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 20,
          stretch: 50,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Card
        title="Fitness Plan"
        content={`Elevate Your Performance with Our Custom Fitness Programs.`}
        Images="./prog_fastfit.jpg"
        link="FitnessPerformance"
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
        <SwiperSlide>
        <Card
        title="Fitness Plan"
        content={`Elevate Your Performance with Our Custom Fitness Programs.`}
        Images="./prog_fastfit.jpg"
        link="FitnessPerformance"
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
        <SwiperSlide>
        <Card
        title="Fitness Plan"
        content={`Elevate Your Performance with Our Custom Fitness Programs.`}
        Images="./prog_fastfit.jpg"
        link="FitnessPerformance"
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
        <SwiperSlide>
        <Card
        title="Fitness Plan"
        content={`Elevate Your Performance with Our Custom Fitness Programs.`}
        Images="./prog_fastfit.jpg"
        link="FitnessPerformance"
        />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default HomeSwiper;