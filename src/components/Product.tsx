import React from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import SignUpButton from "../components/SignUpButton";
import Link from "next/link";

const Product = () => {
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
    <section id="product" className={styles.container}>
      {/* <div className={styles.paragraphBottom}>
        <p>90% of all startups fail</p>
        <p>Leverage your assets</p>
        <p>Become your own VC</p>
      </div> */}
      <div className={styles.flexRow}>
        {/* <div className={styles.flexCOL}>
          <p className={styles.paragraph}>
            95% of startups <span> fail</span>
            <br />
            Take <span>control</span> of your life
          </p>
        </div> */}
        <div className={styles.flexCOL}>
          <div className={styles.productBullet}>
            <div className={styles.bulletRow}>
              <Image
                src="/images/SCAN.svg"
                alt="Portfolio"
                width={30}
                height={30}
              />
              <p className={styles.productTitle}>Find Assets</p>
            </div>
            <p></p>
            <p>Curated startup portfolios</p>
            <p>Find high growth startup funds</p>
          </div>
          <div className={styles.productBullet}>
            <div className={styles.bulletRow}>
              <Image
                src="/images/EVAL1.svg"
                alt="Portfolio"
                width={30}
                height={30}
              />
              <p className={styles.productTitle}>AI Compliance</p>
            </div>
            <p>AI asset assesment</p>
            <p>Legal compliance engine</p>
          </div>
          <div className={styles.productBullet}>
            <div className={styles.bulletRow}>
              <Image
                src="/images/SWAP.svg"
                alt="Portfolio"
                width={40}
                height={40}
              />
              <p className={styles.productTitle}>Enter Fund</p>
            </div>
            <p>Pool assets</p>
            <p>Secure your future</p>
          </div>
        </div>
        <Image
          src="/images/ALL2.png"
          alt="Portfolio"
          width={700}
          height={700}
          className={styles.portImage}
        />
      </div>
      <div className={styles.flexCOL2}>
        <p className={styles.paragraph}>
          <span> Diversify</span> your shares
          <br />
          Unlock <span>unlimited</span> potential
        </p>
      </div>
    </section>
  );
};

export default Product;
