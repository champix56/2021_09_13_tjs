import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormMessage from './FormMessage';

describe('<FormMessage />', () => {
  test('it should mount', () => {
    render(<FormMessage />);
    
    const FormMessage = screen.getByTestId('FormMessage');

    expect(FormMessage).toBeInTheDocument();
  });
});