'use client'
import React from 'react'
import styles from './HomePlansCard.module.css'
// import Image from 'react/image'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const HomePlansCard = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.card}>
        <img
        src={props.Images}
        className={styles.img}
        />
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
        <div style={{ textAlign: "right", justifyContent: "flex-end", padding:'1rem'}}>
              {/* <div className={styles.btn}>Read More</div> */}
              <Link href={`/${props.link}`} onClick={() => setOpenMenu(false)}>
                <span style={{ textAlign: "right", fontSize: "1.4rem" }}>
                  Read More{" "}
                </span>
                <span>
                  <AiOutlineDoubleRight style={{ paddingTop: "5px" }} />
                </span>
              </Link>
            </div>
        
    </div>
  )
}

export default HomePlansCard