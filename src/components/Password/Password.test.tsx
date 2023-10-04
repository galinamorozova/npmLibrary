import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Password from './Password';

describe('<Password />', () => {
  test('it should mount', () => {
    render(<Password />);
    
    const password = screen.getByTestId('Password');

    expect(password).toBeInTheDocument();
  });
});