import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonM from './ButtonM';

describe('<ButtonM />', () => {
  test('it should mount', () => {
    render(<ButtonM />);
    
    const buttonM = screen.getByTestId('ButtonM');

    expect(buttonM).toBeInTheDocument();
  });
});