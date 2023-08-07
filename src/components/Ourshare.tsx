// Ourshare.tsx
import React, { useRef } from "react";
import styles from "../styles/Ourshare.module.css"; // Import the CSS module
import Image from "next/image";
import SignUpButton from "./SignUpButton";
import { Sign } from "crypto";

const Ourshare = () => {
  const handleSignUp = () => {
    const signUpSection = document.getElementById("signup");
    if (signUpSection) {
      signUpSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="ourshare" className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.landingFlex}>
          <div className={styles.titleFlex}>
            <h1 className={styles.title1}>Diversify your equity</h1>
            <h1 className={styles.title2}>{"      "} Secure your future</h1>
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
            The first modern equity platform allowing you to diversify equity
            holdings giving the opportunity to lower risk and increase gains
          </p>
          <SignUpButton onClick={handleSignUp} />
        </div>
        <p className={styles.lowerHeader}>Build strategic ownership</p>
      </div>
    </section>
  );
};

export default Ourshare;
