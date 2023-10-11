import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SwitchButton from './switch-button';

describe('SwitchButton', () => {
  it('should render SwitchButton with default props', () => {
    const { getByTestId } = render(
      <SwitchButton value={false} onValueChange={() => null} />
    );
    const switchButton = getByTestId('switchButton');
    expect(switchButton.props.value).toBe(false);
    expect(switchButton.props.color).toBe('#ffffff');
    expect(switchButton.props.disabled).toBe(false);
  });

  it('should render SwitchButton with custom color', () => {
    const { getByTestId } = render(
      <SwitchButton value={true} onValueChange={() => null} color='#00ff00' />
    );
    const switchButton = getByTestId('switchButton');
    expect(switchButton.props.color).toBe('#00ff00');
  });

  it('should render SwitchButton with custom style', () => {
    const customStyle = { backgroundColor: 'blue', padding: 10 };
    const { getByTestId } = render(
      <SwitchButton
        value={false}
        onValueChange={() => null}
        style={customStyle}
      />
    );
    const switchButton = getByTestId('switchButton');
    expect(switchButton.props.style).toEqual([
      customStyle,
      { flex: 1, alignItems: 'center', justifyContent: 'center' }
    ]);
  });

  it('should render disabled SwitchButton', () => {
    const { getByTestId } = render(
      <SwitchButton value={true} onValueChange={() => null} disabled />
    );
    const switchButton = getByTestId('switchButton');
    expect(switchButton.props.disabled).toBe(true);
  });

  it('should call onValueChange when SwitchButton is toggled', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <SwitchButton value={false} onValueChange={onValueChangeMock} />
    );
    const switchButton = getByTestId('switchButton');

    fireEvent(switchButton, 'valueChange', true);
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });
});
