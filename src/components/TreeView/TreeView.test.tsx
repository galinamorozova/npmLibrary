import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TreeView from './TreeView';

describe('<TreeView />', () => {
  test('it should mount', () => {
    render(<TreeView />);
    
    const treeView = screen.getByTestId('TreeView');

    expect(treeView).toBeInTheDocument();
  });
});