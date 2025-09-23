import React from "react";

const countryCodeToFlag = (code: string): string => {
  if (code.length !== 2) return code; // fallback if not 2 letters

  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};

type CompanyTitleProps = {
  name: string;
  ticker: string;
  country: string;
};

export const CompanyTitle = ({ name, ticker, country }: CompanyTitleProps) => (
  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <h3 style={{ color: "#010101", flex: 1 }}>
      {name} ({ticker}) {country && countryCodeToFlag(country)}
    </h3>
  </div>
);
