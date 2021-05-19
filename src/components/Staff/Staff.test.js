import { render, screen } from '@testing-library/react';
import Staff from '../Staff';

describe("Staff component", () => {
  test('Renders Staff table texts', () => {
    render(<Staff />);
    expect(screen.getByText(/Attendance/i)).toBeInTheDocument();
  });

  test('Renders Staff table', () => {
    render(<Staff />);
    const table = screen.getByRole('table', { id: 'employee' });
    expect(table).toBeInTheDocument();
  });

  test('Renders Staff rows', () => {
    render(<Staff />);
    
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Present/i)).toBeInTheDocument();
  });
});
