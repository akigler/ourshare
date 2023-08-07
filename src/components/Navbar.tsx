// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/">
          <Image
            src="/images/RECT_OURSHARE_BLACK_FULL.svg"
            alt="OurShare Logo"
            width={125}
            height={75}
          />
        </Link>
        <Link className={styles.navbarItem} href="#ourshare">
          <span>Home</span>
        </Link>
        <Link className={styles.navbarItem} href="#product">
          <span>Products</span>
        </Link>
      </div>
      <Link className={styles.navbarItem} href="#signup">
        {/* <span className={styles.sign}>SignUp</span> */}
        <span className={styles.sign}>SignUp</span>
      </Link>
    </nav>
  );
};

export default Navbar;
