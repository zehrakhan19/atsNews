import React from 'react';
import { render } from '@testing-library/react-native';

import RadioButton from './radioButton';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { container } = render(<RadioButton />);
    expect(container).toBeTruthy();
  });
});
