import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Url from './Url';

describe('<Url />', () => {
  test('it should mount', () => {
    render(<Url />);
    
    const url = screen.getByTestId('Url');

    expect(url).toBeInTheDocument();
  });
});