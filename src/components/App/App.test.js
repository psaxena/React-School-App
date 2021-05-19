import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'
import App from '../App';

describe("App component", () => {
  test('Renders Main Page', () => {
    render(<App />);
    
    //Validate Nav links presence
    expect(screen.getByText(/Schedule Today/i)).toBeInTheDocument();
    expect(screen.getByText(/Staff/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    //Validate presence of left and right tables
    expect(screen.getByTestId('left-pane')).toBeInTheDocument();
    expect(screen.getByTestId('right-pane')).toBeInTheDocument();
  });
});



