import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export function RadioButton({ label, selected, onSelect }: RadioButtonProps) {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <View
        style={[
          styles.container,
          { borderColor: selected ? '#ffc000' : '#000' }
        ]}
      >
        {selected && <View style={styles.radioButton} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  radioButton: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#ffc000'
  }
});
export default RadioButton;
