import { render } from "@testing-library/react";
import type { CompanyInfo } from "../../types";
import CompanyListItem from "./CompanyListItem";

const mockCompanyInfo: CompanyInfo = {
  companyId: 1,
  companyName: "Apple Inc.",
  displayName: "Apple Inc.",
  companyTicker: "AAPL",
  companyCountry: "US",
  description:
    "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
  iconUrl: "https://example.com/apple-icon.png",
  logoLightUrl: "https://example.com/apple-logo-light.png",
  logoDarkUrl: "https://example.com/apple-logo-dark.png",
  colorSettings: {
    brandColor: "#000000",
  },
  events: [],
  infoUrl: "https://example.com/apple-info",
  isins: ["US0378331005"],
  liveUrl: "https://example.com/apple-live",
  reportingCurrency: "USD",
};

describe("CompanyListItem Component", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = render(
      <CompanyListItem companyInfo={mockCompanyInfo} />
    );

    const logo = document.querySelector('img[alt*="Apple Inc."]');
    expect(logo).toBeInTheDocument();

    const title = getByRole("heading", { level: 3 });
    expect(title).toHaveTextContent("Apple Inc.");
    expect(title).toHaveTextContent("AAPL");

    expect(getByText(mockCompanyInfo.description)).toBeInTheDocument();
  });

  it("has proper semantic structure for accessibility", () => {
    const { container } = render(
      <CompanyListItem companyInfo={mockCompanyInfo} />
    );

    const article = container.querySelector("article");
    expect(article).toHaveAttribute("role", "listitem");
  });

  it("is keyboard focusable", () => {
    const { container } = render(
      <CompanyListItem companyInfo={mockCompanyInfo} />
    );

    const article = container.querySelector("article");
    expect(article).toHaveAttribute("tabIndex", "0");
  });

  it("has descriptive aria-label", () => {
    const { container } = render(
      <CompanyListItem companyInfo={mockCompanyInfo} />
    );

    const article = container.querySelector("article");
    expect(article).toHaveAttribute(
      "aria-label",
      "Company: Apple Inc. (AAPL) from 🇺🇸"
    );
  });
});
