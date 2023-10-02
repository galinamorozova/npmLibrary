import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonL from './ButtonL';

describe('<ButtonL />', () => {
  test('it should mount', () => {
    render(<ButtonL/>);
    
    const buttonL = screen.getByTestId('ButtonL');

    expect(buttonL).toBeInTheDocument();
  });
});