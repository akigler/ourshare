// src/components/Navbar.tsx
import Image from "next/image";
import styles from "../styles/styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Image
          src="/images/LOGO_NO_BOX.svg"
          alt="OurShare Logo"
          width={165}
          height={165}
        />
      </div>
    </nav>
  );
};

export default Navbar;
