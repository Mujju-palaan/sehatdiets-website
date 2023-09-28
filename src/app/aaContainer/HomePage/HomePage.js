import HealthgoalCard from "./HealthgoalCard";
import Homepage1 from "./Homepage1";
import "./HomePage.css";
import React from "react";
import KitsCom from "../../../../components/Kits/KitsCom";
import HomeSlider from "./HomeSlider";
import Challenge from "./Challenge";
import HomeSwiper from './HomeSwiper'
import Card from "../../../../components/planscard/Card";
import SwiperPro from './SwiperPro'

const HomePage = () => {
  return (
    <>
      <Homepage1></Homepage1>
      <h2 style={{ textAlign: "center" }}>Achieve Your Health Goals</h2>
      <div style={{ padding: "5rem 0 5rem 0" }}>
        <HealthgoalCard></HealthgoalCard>
      </div>
      <div
        className="Kits"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <KitsCom image="home_applekit.png" title="Apple Kit" link="pricing" />
        <KitsCom image="home_applekit.png" title="Samsung Kit" link="pricing" />
      </div>

      <h1
        style={{ textAlign: "center", fontSize: "3rem", paddingTop: "4srem" }}
      >
        Our Programs
      </h1>

      {/* ********************SLIDERS************************************ */}
      {/* <HomeSwiper /> */}
      {/* <HomeSlider /> */}
      <SwiperPro />
      {/* ********************SLIDERS************************************ */}

      <Challenge />
    </>
  );
};

export default HomePage;
