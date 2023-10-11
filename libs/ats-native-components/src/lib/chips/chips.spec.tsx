import React from 'react';
import { render } from '@testing-library/react-native';
import Chips from './Chips';

describe('Chips Component', () => {
  it('renders with the provided label', () => {
    const label = 'Test Label';
    const { getByText } = render(<Chips label={label} />);
    const labelElement = getByText(label);
    expect(labelElement).toBeTruthy();
  });

  it('renders with the provided icon', () => {
    const label = 'Test Label';
    const icon = 'test-icon';
    const { getByText } = render(<Chips label={label} icon={icon} />);
    const labelElement = getByText(label);
    const iconElement = getByText(icon);
    expect(labelElement).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });

  it('renders in flat mode when "mode" prop is "flat"', () => {
    const label = 'Test Label';
    const { getByTestId } = render(<Chips label={label} mode='flat' />);
    const chip = getByTestId('chip-component');
    expect(chip.props.mode).toBe('flat');
  });

  it('renders in outlined mode when "mode" prop is "outlined"', () => {
    const label = 'Test Label';
    const { getByTestId } = render(<Chips label={label} mode='outlined' />);
    const chip = getByTestId('chip-component');
    expect(chip.props.mode).toBe('outlined');
  });

  it('renders with the provided background color when "bgColor" prop is provided', () => {
    const label = 'Test Label';
    const bgColor = 'blue';
    const { getByTestId } = render(<Chips label={label} bgColor={bgColor} />);
    const chip = getByTestId('chip-component');
    expect(chip.props.style).toEqual(
      expect.objectContaining({ backgroundColor: bgColor })
    );
  });

  it('renders with a default background color when "bgColor" prop is not provided', () => {
    const label = 'Test Label';
    const { getByTestId } = render(<Chips label={label} />);
    const chip = getByTestId('chip-component');
    expect(chip.props.style).toEqual(
      expect.objectContaining({ backgroundColor: 'white' })
    );
  });
});
