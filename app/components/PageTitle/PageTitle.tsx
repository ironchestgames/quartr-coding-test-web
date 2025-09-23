import React from "react";
import styles from "./PageTitle.module.css";

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => (
  <h2 className={styles.title}>{children}</h2>
);

export default PageTitle;
