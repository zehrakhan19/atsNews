import React from 'react';
import { render } from '@testing-library/react-native';

import StatusBar from './status-bar';

describe('StatusBar', () => {

  it('should should match snapshot', () => {
    const { container } = render(<StatusBar backgroundColor='#fff' />);
    expect(container).toMatchSnapshot();
  });
  it('should render successfully', () => {
    const { container } = render(<StatusBar backgroundColor='#000' />);
    expect(container).toBeTruthy();
  });
});
