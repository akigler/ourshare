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
      <p>90% of all startups fail</p>
      <p>Leverage your assets to become you own VC</p>
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
                src="/images/EVAL1.svg"
                alt="Portfolio"
                width={30}
                height={30}
              />
              <p className={styles.productTitle}>Evaluate Assets</p>
            </div>
            <p>Find your dream assets. Asses your risk tolerance. </p>
          </div>
          <div className={styles.productBullet}>
            <Image
              src="/images/SCAN.svg"
              alt="Portfolio"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.productBullet}>
            <Image
              src="/images/SWAP.svg"
              alt="Portfolio"
              width={30}
              height={30}
            />
          </div>
        </div>
        <Image
          src="/images/PORTFOLIO.svg"
          alt="Portfolio"
          width={500}
          height={500}
          className={styles.portImage}
        />
      </div>
      <div className={styles.flexCOL2}>
        <SignUpButton onClick={handleSignUp} />
        <p className={styles.paragraph}>
          <span> Maximize</span> security
          <br />
          Venture into diversified capital
        </p>
      </div>
    </section>
  );
};

export default Product;
