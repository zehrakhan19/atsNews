import { render } from '@testing-library/react';

import AtsNextComponents from './ats-next-components';

describe('AtsNextComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtsNextComponents />);
    expect(baseElement).toBeTruthy();
  });
});
