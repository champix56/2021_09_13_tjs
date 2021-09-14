import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageList from './MessageList';

describe('<MessageList />', () => {
  test('it should mount', () => {
    render(<MessageList />);
    
    const MessageList = screen.getByTestId('MessageList');

    expect(MessageList).toBeInTheDocument();
  });
});