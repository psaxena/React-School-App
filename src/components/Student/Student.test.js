import { render, screen } from '@testing-library/react';
import Student from '../Student';

describe("Student component", () => {
  test('Renders Student table texts', () => {
    render(<Student />);
    expect(screen.getByText(/Current Schedule/i)).toBeInTheDocument();
  });

  test('Renders Student table', () => {
    render(<Student />);

    const table = screen.getByRole('table', { id: 'student' });
    expect(table).toBeInTheDocument();
  });

  test('Renders Student rows', () => {
    render(<Student />);
    
    expect(screen.getByText(/Student/i)).toBeInTheDocument();
    expect(screen.getByText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByText(/Teacher/i)).toBeInTheDocument();
  });
});
