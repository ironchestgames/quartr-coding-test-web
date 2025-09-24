import React from "react";
import styles from "./CompanyLogo.module.css";

type CompanyLogoProps = {
  iconUrl: string;
  companyName: string;
  iconBackgroundColor: string | undefined;
};

const CompanyLogo = ({
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
      loading="lazy"
      onError={(e) => {
        // Fallback for broken images
        e.currentTarget.style.display = "none";
      }}
    />
  </div>
);

export default CompanyLogo;
