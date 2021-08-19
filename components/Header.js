import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_items}>
        <Link href="/">
          <p className={styles.navbar_item}>
            <a>Home</a>
          </p>
        </Link>
        <Link href="/user/profile">
          <p className={styles.navbar_item}>
            <a>Profile</a>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
