// Ourshare.tsx
import React, { useRef } from "react";
import styles from "../styles/Ourshare.module.css"; // Import the CSS module
import Image from "next/image";
import SignUp from "./SignUp";
import { Sign } from "crypto";

const Ourshare = () => {
  return (
    <section id="ourshare" className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.landingFlex}>
          <div className={styles.titleFlex}>
            <h1 className={styles.title1}>Bringing power</h1>
            <h1 className={styles.title2}>{"      "} to your equity</h1>
          </div>
          <Image
            src="/images/PIEW.svg"
            alt="PIE gragh"
            width={380}
            height={380}
            className={styles.pie}
          />
        </div>
        <div className="lowerFlex">
          <p className={styles.paragragh}>
            The best startups in the world use Ourshare to give their employees
            the ultimate perk of investing without boundaries. Allowing you to
            take ownership of fast growing companies through trade-ables.
          </p>
          <SignUp />
        </div>
        <p className={styles.lowerHeader}>Own a Stake in Every Startup</p>
      </div>
    </section>
  );
};

export default Ourshare;
