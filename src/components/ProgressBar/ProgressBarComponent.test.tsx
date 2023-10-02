import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressBarComponent from './ProgressBarComponent';

describe('<ProgressBarComponent />', () => {
  test('it should mount', () => {
    render(<ProgressBarComponent />);
    
    const progressBarComponent = screen.getByTestId('ProgressBarComponent');

    expect(progressBarComponent).toBeInTheDocument();
  });
});