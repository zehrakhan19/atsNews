import React from 'react';
import { render } from '@testing-library/react-native';

import OtpInput from './otp-input';

describe('OtpInput', () => {
  it('should render successfully', () => {
    const { container } = render(<OtpInput />);
    expect(container).toBeTruthy();
  });
});
