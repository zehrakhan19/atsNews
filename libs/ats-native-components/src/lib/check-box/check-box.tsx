import * as React from 'react';
import { Checkbox as AtsCheckbox } from 'react-native-paper';

export interface CheckboxProps {
  status: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
  color?: string;
  disabled?: boolean;
}

export function CheckBox({
  status,
  onPress,
  color = '#f86262',
  disabled = false
}: CheckboxProps) {
  return (
    <AtsCheckbox
      status={status}
      onPress={onPress}
      color={color}
      disabled={disabled}
    />
  );
}
export default CheckBox;
