import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/user";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_items}>
        <Link href="/">
          <p className={styles.navbar_item}>
            <a>Home</a>
          </p>
        </Link>
        <Link href="/user/dashboard">
          <p className={styles.navbar_item}>
            <a>Dashboard</a>
          </p>
        </Link>
        {user.status === false ? (
          <Link href="/user/login">
            <p className={styles.navbar_item}>
              <a>Login</a>
            </p>
          </Link>
        ) : (
          <p
            className={styles.navbar_item}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
