import React from 'react';
import {Button as PaperButton} from 'react-native-paper';

export interface ButtonProps {
  label: string;
  size?: string;
  callback: () => void;
  filled?: boolean;
  disabled?: boolean;
  half?: boolean;
  mode?:
    | 'text'
    | 'contained'
    | 'outlined'
    | 'elevated'
    | 'contained-tonal'
    | undefined;
  borderRadius?: number;
  color?: string;
}

export function Button({
  label,
  disabled,
  mode,
  filled,
  half,
  size = 'large',
  callback,
  borderRadius = 6,
  color,
}: ButtonProps) {
  return (
    <PaperButton
      onPress={() => callback()}
      mode={mode || 'contained'}
      disabled={disabled || false}
      labelStyle={{
        ...(!mode && {color: disabled ? '#777' : '#fff'}),
        // fontWeight: 'bold',
      }}
      style={{
        borderRadius: borderRadius,
        ...(filled && {backgroundColor: '#fff'}),
        width: half ? '50%' : '100%',
        borderColor: mode === 'outlined' ? color : '#000',
      }}
      contentStyle={{
        ...(size === 'large' && {height: 50}),
        justifyContent: 'center',
      }}>
      {label}
    </PaperButton>
  );
}

export default Button;
