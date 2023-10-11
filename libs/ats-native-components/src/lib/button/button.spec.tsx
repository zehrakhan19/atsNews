import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './button';

describe('Button', () => {
  it('renders correctly with the correct label', () => {
    const label = 'Test Label';
    const { getByText } = render(<Button callback={() => null} label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  it('calls the callback function when pressed', () => {
    const callback = jest.fn();
    const { getByText } = render(<Button label={'Test'} callback={callback} />);
    fireEvent.press(getByText('Test'));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    const { getByTestId } = render(<Button callback={() => null} label={'Test'} disabled />);
    expect(getByTestId('button-text').props.disabled).toBe(true);
  });

  it('sets the correct mode for the given mode prop', () => {
    const { getByTestId } = render(<Button callback={() => null} label={'Test'} mode='outlined' />);
    expect(getByTestId('button-text').props.mode).toBe('outlined');
  });

  it('sets the correct background color for the given filled prop', () => {
    const { getByTestId } = render(<Button callback={() => null} label={'Test'} filled />);
    expect(getByTestId('button-text').props.style.backgroundColor).toBe('#fff');
  });

  it('sets the correct width for the given half prop', () => {
    const { getByTestId } = render(<Button callback={() => null} label={'Test'} half />);
    expect(getByTestId('button-text').props.style.width).toBe('50%');
  });

  it('sets the correct size for the given size prop', () => {
    const { getByTestId } = render(<Button callback={() => null} label={'Test'} size='large' />);
    expect(getByTestId('button-text').props.contentStyle.height).toBe(48);
  });
});