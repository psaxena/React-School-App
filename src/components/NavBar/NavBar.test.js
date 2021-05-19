import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("Nav component", () => {
  test("Renders Schedule Page", () => {
    render(<App />);
    expect(screen.getByText(/Schedule Today/i)).toBeInTheDocument();
  });

  test("Renders Teams Page", () => {
    render(<App />);
    expect(screen.getByText(/Schedule Today/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Staff/i), leftClick);

    // check that the content changed to the new page
    expect(screen.getByText(/Team at Hogwarts/i)).toBeInTheDocument();
  });

  test("Renders Not Found", () => {
    render(<App />);
    expect(screen.getByText(/Schedule Today/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Contact Us/i), leftClick);

    // check that the content changed to the new page
    expect(screen.getByText(/404 - Not Found!/i)).toBeInTheDocument();
  });
});
