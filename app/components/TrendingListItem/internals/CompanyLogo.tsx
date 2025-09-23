import React from "react";
import styles from "./CompanyLogo.module.css";

type CompanyLogoProps = {
  iconUrl: string;
  companyName: string;
  iconBackgroundColor: string | undefined;
};

export const CompanyLogo = ({
  iconUrl,
  companyName,
  iconBackgroundColor,
}: CompanyLogoProps) => (
  <div className={styles.container}>
    <img
      src={iconUrl}
      alt={`${companyName} logo`}
      className={styles.logoImage}
      style={{ backgroundColor: iconBackgroundColor || "#ffffff" }}
    />
  </div>
);
