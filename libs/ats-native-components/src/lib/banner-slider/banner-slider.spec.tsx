import React from 'react';
import { render } from '@testing-library/react-native';

import BannerSlider from './banner-slider';

describe('BannerSlider', () => {
  it('should render successfully', () => {
    const { container } = render(<BannerSlider />);
    expect(container).toBeTruthy();
  });
});
