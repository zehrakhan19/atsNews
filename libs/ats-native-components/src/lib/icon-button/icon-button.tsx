import React from 'react';
import { IconButton as AtsIconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface IconButtonProps {
  icon: IconSource;
  iconColor?: string;
  onPress?: () => void;
  containerColor?: string;
  size?: number;
  mode?: 'outlined' | 'contained' | 'contained-tonal';
  disabled?: boolean;
  rippleColor?: string;
  noBorderRadius?: boolean;
}

export function IconButton({
  icon,
  iconColor = '#ffffff',
  onPress = () => null,
  containerColor = '#305CFA',
  size = 24,
  mode = 'contained',
  disabled,
  rippleColor,
  noBorderRadius
}: IconButtonProps) {
  return (
    <AtsIconButton
      icon={icon}
      iconColor={iconColor}
      onPress={onPress}
      containerColor={containerColor}
      size={size}
      mode={mode}
      rippleColor={rippleColor || iconColor}
      selected={false}
      disabled={disabled}
      animated={false}
      style={{
        margin: 0,
        ...(iconColor && { borderColor: iconColor }),
        ...(noBorderRadius && { borderRadius: 0 })
      }}
    />
  );
}

export default IconButton;
