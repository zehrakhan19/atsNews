import React from 'react';
import { render } from '@testing-library/react-native';

import IntroSlider from './intro-slider';

describe('IntroSlider', () => {
  it('should render successfully', () => {
    const { container } = render(<IntroSlider />);
    expect(container).toBeTruthy();
  });
});
