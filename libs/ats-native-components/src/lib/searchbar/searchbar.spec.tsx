import React from 'react';
import { render } from '@testing-library/react-native';

import Searchbar from './searchbar';

describe('Searchbar', () => {
  it('should render successfully', () => {
    const { container } = render(<Searchbar />);
    expect(container).toBeTruthy();
  });
});
