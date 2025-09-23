import React from "react";
import styles from "./TrendingListItem.module.css";

import { CompanyInfo } from "../../types";
import { CompanyLogo } from "./internals/CompanyLogo";
import { CompanyTitle } from "./internals/CompanyTitle";

type TrendingListItemProps = {
  companyInfo: CompanyInfo;
};

const TrendingListItem = ({ companyInfo }: TrendingListItemProps) => (
  <div className={styles.container}>
    <CompanyLogo
      iconUrl={companyInfo.iconUrl || companyInfo.logoLightUrl}
      companyName={companyInfo.companyName}
      iconBackgroundColor={companyInfo.colorSettings.brandColor}
    />
    <div className={styles.titleContainer}>
      <CompanyTitle
        name={companyInfo.companyName || companyInfo.displayName}
        ticker={companyInfo.companyTicker}
        country={companyInfo.companyCountry}
      />
      <p style={{ fontSize: 12, color: "#999999", flex: 1 }}>
        {companyInfo.description}
      </p>
    </div>
  </div>
);

export default TrendingListItem;
