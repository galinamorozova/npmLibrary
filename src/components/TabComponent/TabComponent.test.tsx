import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabComponent from './TabComponent';

describe('<TabComponent />', () => {
  test('it should mount', () => {
    render(<TabComponent />);
    
    const tabComponent = screen.getByTestId('TabComponent');

    expect(tabComponent).toBeInTheDocument();
  });
});