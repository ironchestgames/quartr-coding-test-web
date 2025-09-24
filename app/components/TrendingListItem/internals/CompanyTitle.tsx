import React from "react";
import { countryCodeToFlag } from "../../../utils/countryCodeToFlag";

type CompanyTitleProps = {
  name: string;
  ticker: string;
  country: string;
};

const CompanyTitle = ({ name, ticker, country }: CompanyTitleProps) => (
  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <h3 style={{ color: "#010101", flex: 1 }}>
      <span>{name}</span>{" "}
      <span aria-label={`Ticker symbol ${ticker}`}>({ticker})</span>{" "}
      <span role="img" aria-label={`Country: ${countryCodeToFlag(country)}`}>
        {countryCodeToFlag(country)}
      </span>
    </h3>
  </div>
);

export default CompanyTitle;
