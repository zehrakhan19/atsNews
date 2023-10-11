import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FAB as AtsFAB } from 'react-native-paper';

export interface FabProps {
  icon: string;
  callback: () => void;
  label?: string;
  color?: string;
  disabled?: boolean;
  style?: any;
  mode?: 'flat' | 'elevated';
  loading?: boolean;
  customSize?: number;
}

export function Fab({
  icon,
  callback,
  label = '',
  color = '#ffffff',
  disabled = false,
  style,
  mode = 'flat',
  loading = false,
  customSize
}: FabProps) {
  return (
    <View>
      <AtsFAB
        label={label}
        icon={icon}
        style={[style, { borderRadius: 30 }]}
        onPress={callback}
        color={color}
        uppercase={false}
        accessibilityLabel={''}
        animated={true}
        rippleColor={''}
        disabled={disabled}
        size={'medium'}
        mode={mode}
        variant={'primary'}
        loading={loading}
        customSize={customSize}
      />
    </View>
  );
}

export default Fab;
