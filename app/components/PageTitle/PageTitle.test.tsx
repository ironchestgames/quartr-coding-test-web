import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("PageTitle Component", () => {
  it("renders correctly", () => {
    const testText = "Test Title";
    const { getByRole } = render(<PageTitle>{testText}</PageTitle>);

    const heading = getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(testText);
  });
});
