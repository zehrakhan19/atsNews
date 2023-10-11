import React from 'react';
import { render } from '@testing-library/react-native';

import DateAndTimePicker from './dateTimePicker';

describe('DateTimePicker', () => {
  it('should render successfully', () => {
    const { container } = render(<DateAndTimePicker />);
    expect(container).toBeTruthy();
  });
});
