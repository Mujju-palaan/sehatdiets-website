"use client";
import React from "react";
import styles from "./KitsimgCard.module.css";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


const KitsimgCard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.container1}>
      {/* <Image 
        className={styles.imgsize1} 
        src={props.image} 
        /> */}
        <img className={styles.imgsize1} src={props.image}></img>
        <h2
          style={{
            textAlign: "center",
            padding: "1rem 0 0 0",
            fontWeight: "normal",
            marginBottom: "0rem",
          }}
        >
          {props.title}
        </h2>
        <p style={{ color: "gray", textAlign: "center", padding: "0" }}>
          {props.role}
        </p>
      </div>
    </>
  );
};

export default KitsimgCard;
