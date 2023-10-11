import React from 'react';
import { render } from '@testing-library/react-native';

import ImageViewer from './image-viewer';

describe('ImageViewer', () => {
  it('should render successfully', () => {
    const { container } = render(<ImageViewer />);
    expect(container).toBeTruthy();
  });
});
