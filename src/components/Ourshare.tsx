// Ourshare.tsx
import React, { useRef } from "react";
import styles from "../styles/Ourshare.module.css"; // Import the CSS module
import Image from "next/image";

const Ourshare = () => {
  const handleSignUp = () => {
    // Replace this function with your actual logic to handle the sign-up process
    // For now, let's just show an alert when the button is clicked
    alert("Sign up button clicked!");
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
        <p className={styles.paragragh}>
          The first modern equity platform allowing employes to diversify their
          equity assets to lower risk and increase gains
        </p>
        <button className={styles.signUpButton} onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      {/* Add a pop-up form here when the "Sign Up" button is clicked */}
    </section>
  );
};

export default Ourshare;
