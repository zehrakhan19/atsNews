import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { container } = render(<Text />);
    expect(container).toBeTruthy();
  });
});
