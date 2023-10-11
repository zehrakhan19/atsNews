import React from 'react';
import { render } from '@testing-library/react-native';

import Snack from './snack';

describe('Snack', () => {
  it('should render successfully', () => {
    const { container } = render(<Snack />);
    expect(container).toBeTruthy();
  });
});
