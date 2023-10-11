import React from 'react';
import { StyleSheet } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { TouchableOpacity, View, Text } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
export interface ChipsProps {
  label: string;
  title?: string;
  icon?: IconSource;
  mode?: 'flat' | 'outlined';
  bgColor?: string;
  callback?: any;
  iconColor?: string;
  textColor?: 'black' | 'white';
}

export function Chips({
  label,
  icon,
  mode = 'outlined',
  bgColor,
  iconColor,
  callback = () => null,
  title,
  textColor = 'black'
}: ChipsProps) {
  return (
    <TouchableOpacity onPress={() => callback()}>
      <View
        style={[
          icon ? styles.chipWithIcon : styles.chip,
          mode === 'flat'
            ? {
                backgroundColor: bgColor || 'lightgray'
              }
            : {
                borderWidth: 1,
                borderColor: bgColor || 'lightgray'
              }
        ]}
      >
        {icon && (
          <IconButton
            icon={icon}
            iconColor={iconColor || MD3Colors.secondary40}
            size={18}
            disabled
            onPress={() => callback() || null}
            style={{
              position: 'absolute',
              top: -10,
              left: -8
            }}
          />
        )}
        <View style={styles.rowContainer}>
          <Text style={[styles.boldTitle, { color: bgColor && '#fff' }]}>
            {title}
          </Text>
          <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  chipWithIcon: {
    position: 'relative',
    borderRadius: 50,
    paddingVertical: 4,
    paddingRight: 10,
    paddingLeft: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rowContainer: { flexDirection: 'row' },
  boldTitle: {
    fontWeight: 'bold',
    fontSize: 12
  },
  label: {
    fontSize: 12
  }
});
export default Chips;
