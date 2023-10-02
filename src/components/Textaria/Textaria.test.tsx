import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Textaria from './Textaria';

describe('<Textaria />', () => {
  test('it should mount', () => {
    render(<Textaria />);
    
    const textaria = screen.getByTestId('Textaria');

    expect(textaria).toBeInTheDocument();
  });
});