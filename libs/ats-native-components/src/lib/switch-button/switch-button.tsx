import * as React from 'react';
import {Text, Switch as PaperSwitch} from 'react-native-paper';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {material} from 'react-native-typography';

export interface SwitchButtonProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  label?: string;
  labelLeft?: string;
}

export function SwitchButton({
  value,
  onValueChange,
  color = '#ffffff',
  style,
  disabled = false,
  label = '',
  labelLeft = '',
}: SwitchButtonProps) {
  return (
    <View style={styles.gstSwitchConainer}>
      {labelLeft && <Text style={material.body1}>{labelLeft}</Text>}
      <PaperSwitch
        value={value}
        onValueChange={onValueChange}
        color={color}
        style={[style, styles.container]}
        disabled={disabled}
        trackColor={{false: '#767577', true: '#ffe599'}}
        thumbColor={value ? '#ffc000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
      {label && <Text style={material.body1}>{label}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  gstSwitchConainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 5,
  },
});
export default SwitchButton;
