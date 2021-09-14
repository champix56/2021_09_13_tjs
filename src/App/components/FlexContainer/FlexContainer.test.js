import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexContainer from './FlexContainer';

describe('<FlexContainer />', () => {
  test('it should mount', () => {
    render(<FlexContainer />);
    
    const flexContainer = screen.getByTestId('FlexContainer');

    expect(flexContainer).toBeInTheDocument();
  });
});