import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {OrdinarySelect} from './OrdinarySelect';

describe('<OrdinarySelect />', () => {
  test('it should mount', () => {
    render(<OrdinarySelect />);
    
    const ordinarySelect = screen.getByTestId('Select3');

    expect(ordinarySelect).toBeInTheDocument();
  });
});