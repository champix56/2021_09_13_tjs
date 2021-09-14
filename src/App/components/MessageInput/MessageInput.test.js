import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageInput from './MessageInput';

describe('<MessageInput />', () => {
  test('it should mount', () => {
    render(<MessageInput />);
    
    const messageInput = screen.getByTestId('MessageInput');

    expect(messageInput).toBeInTheDocument();
  });
});