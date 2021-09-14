import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Message from './Message';

describe('<Message />', () => {
  test('it should mount', () => {
    render(<Message />);
    
    const message = screen.getByTestId('Message');

    expect(message).toBeInTheDocument();
  });
});