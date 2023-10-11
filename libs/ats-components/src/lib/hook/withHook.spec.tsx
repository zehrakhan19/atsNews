import React from 'react';
import { render } from '@testing-library/react';
import { withHook } from './withHook';

describe('withHook', () => {
  it('calls the hook with the correct props', () => {
    const props = { prop1: 'value1', prop2: 'value2' };
    const mockHook = jest.fn().mockReturnValue({});
    const ComponentToWrap = () => <div>Test Component</div>;
    const ComponentWithHook = withHook(mockHook, ComponentToWrap);
    render(<ComponentWithHook {...props} />);
    expect(mockHook).toHaveBeenCalledWith(props);
  });
});
