import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Multipledatepicker from './Multipledatepicker';

describe('<Multipledatepicker />', () => {
  test('it should mount', () => {
    render(<Multipledatepicker />);
    
    const multipledatepicker = screen.getByTestId('Multipledatepicker');

    expect(multipledatepicker).toBeInTheDocument();
  });
});