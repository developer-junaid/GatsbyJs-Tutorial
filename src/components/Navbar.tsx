import React from "react";
import styles from "./navbar.module.css";
import { Link } from "gatsby";

// Navbar Containing Links to pages
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
