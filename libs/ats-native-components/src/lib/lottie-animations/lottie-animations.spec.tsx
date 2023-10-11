import React from 'react';
import { render } from '@testing-library/react-native';

import LottieAnimations from './lottie-animations';

describe('LottieAnimations', () => {
  it('should render successfully', () => {
    const { container } = render(<LottieAnimations />);
    expect(container).toBeTruthy();
  });
});
