import React from 'react';
import { render } from '@testing-library/react-native';

import DataTable from './dataTable';

describe('DataTable', () => {
  it('should render successfully', () => {
    const { container } = render(<DataTable />);
    expect(container).toBeTruthy();
  });
});
