// src/components/Navbar.tsx
import Image from "next/image";
import styles from "../styles/styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Image
          src="/images/RECT_OURSHARE_BLACK_FULL.svg"
          alt="OurShare Logo"
          width={160}
          height={160}
        />
      </div>
    </nav>
  );
};

export default Navbar;
