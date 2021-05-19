import { render, screen } from "@testing-library/react";
import Header from '../Header';

describe("Header component", () => {
  test("Renders Header component", () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', { name: `Hogwarts School of Witchcraft and Wizardry` });
    expect(headingElement).toBeInTheDocument();
  });
});
