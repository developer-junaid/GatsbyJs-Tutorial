import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};
