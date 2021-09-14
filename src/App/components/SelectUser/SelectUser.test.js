import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectUser from './SelectUser';

describe('<SelectUser />', () => {
  test('it should mount', () => {
    render(<SelectUser />);
    
    const selectUser = screen.getByTestId('SelectUser');

    expect(selectUser).toBeInTheDocument();
  });
});