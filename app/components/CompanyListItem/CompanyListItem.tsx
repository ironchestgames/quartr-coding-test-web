import React from "react";
import styles from "./CompanyListItem.module.css";

import type { CompanyInfo } from "../../types";
import { countryCodeToFlag } from "../../utils/countryCodeToFlag";
import Chevron from "../Chevron/Chevron";
import CompanyLogo from "./internals/CompanyLogo";
import CompanyTitle from "./internals/CompanyTitle";

type CompanyListItemProps = {
  companyInfo: CompanyInfo;
};

const CompanyListItem = ({ companyInfo }: CompanyListItemProps) => (
  <article
    className={styles.container}
    role="listitem"
    tabIndex={0}
    aria-label={`Company: ${companyInfo.companyName} (${companyInfo.companyTicker}) from ${countryCodeToFlag(companyInfo.companyCountry)}`}
  >
    <CompanyLogo
      iconUrl={companyInfo.iconUrl || companyInfo.logoLightUrl}
      companyName={companyInfo.companyName}
      iconBackgroundColor={companyInfo.colorSettings.brandColor}
    />
    <div className={styles.textContainer}>
      <CompanyTitle
        name={companyInfo.companyName || companyInfo.displayName}
        ticker={companyInfo.companyTicker}
        country={companyInfo.companyCountry}
      />
      <p className={styles.description}>{companyInfo.description}</p>
    </div>
    <Chevron />
  </article>
);

export default CompanyListItem;
