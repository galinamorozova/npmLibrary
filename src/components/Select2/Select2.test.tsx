import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select2 from './Select2';

describe('<Select2 />', () => {
  test('it should mount', () => {
    render(<Select2 />);
    
    const select2 = screen.getByTestId('Select2');

    expect(select2).toBeInTheDocument();
  });
});