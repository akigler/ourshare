import React from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
const Product = () => {
  return (
    <section id="product" className={styles.container}>
      <div className={styles.flexRow}>
        <p className={styles.paragragh}>
          95% of startups <i>fail</i> Take <i>control</i> of your life.
          <i> Maximize</i> your security. Venture into diversified capital.
        </p>
        <Image
          src="/images/PORTFOLIO.svg"
          alt="Portfolio"
          width={500}
          height={500}
          className={styles.portImage}
        />
      </div>
    </section>
  );
};

export default Product;
