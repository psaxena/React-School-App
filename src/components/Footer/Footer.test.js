import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("Renders Footer component", () => {
    render(<Footer />);
    const footerText = screen.getByText("Copyright @2021");
    expect(footerText).toBeInTheDocument();
  });
});
