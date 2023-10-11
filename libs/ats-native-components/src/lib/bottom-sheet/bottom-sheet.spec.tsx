import React from 'react';
import { render } from '@testing-library/react-native';

import BottomSheet from './bottom-sheet';

describe('BottomSheet', () => {
  it('should render successfully', () => {
    const { container } = render(<BottomSheet />);
    expect(container).toBeTruthy();
  });
});
