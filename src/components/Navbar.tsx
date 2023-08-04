// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/images/RECT_OURSHARE_BLACK.svg"
          alt="OurShare Logo"
          width={125}
          height={75}
        />
      </Link>
      <Link className={styles.navbarItem} href="/">
        <span>Home</span>
      </Link>
      <Link className={styles.navbarItem} href="/products">
        <span>Products</span>
      </Link>
      <Link className={styles.navbarItem} href="/signup">
        <span>Sign Up</span>
      </Link>
    </nav>
  );
};

export default Navbar;
