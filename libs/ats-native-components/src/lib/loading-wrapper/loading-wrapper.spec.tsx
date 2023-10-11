import React from 'react';
import { render } from '@testing-library/react-native';

import LoadingWrapper from './loading-wrapper';

describe('LoadingWrapper', () => {
  it('should render successfully', () => {
    const { container } = render(<LoadingWrapper />);
    expect(container).toBeTruthy();
  });
});
