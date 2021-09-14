import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tchat from './Tchat';

describe('<Tchat />', () => {
  test('it should mount', () => {
    render(<Tchat />);
    
    const tchat = screen.getByTestId('Tchat');

    expect(tchat).toBeInTheDocument();
  });
});