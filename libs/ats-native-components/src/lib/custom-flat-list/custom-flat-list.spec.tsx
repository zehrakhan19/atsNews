import React from 'react';
import { render } from '@testing-library/react-native';

import { CustomFlatList } from './custom-flat-list';

describe('FlatList', () => {
  it('should render successfully', () => {
    const { container } = render(<CustomFlatList />);
    expect(container).toBeTruthy();
  });
});
