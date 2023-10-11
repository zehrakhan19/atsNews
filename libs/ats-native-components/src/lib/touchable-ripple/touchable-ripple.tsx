import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableRipple as PaperTouchableRipple } from 'react-native-paper';

interface TouchableRippleProps {
  children: ReactNode;
  callback: () => void;
  style?: StyleProp<ViewStyle>;
}
export function TouchableRipple({
  children,
  callback,
  style
}: TouchableRippleProps) {
  return (
    <PaperTouchableRipple
      onPress={() => callback()}
      rippleColor='rgba(0, 0, 0, .32)'
      style={[style]}
    >
      {children}
    </PaperTouchableRipple>
  );
}
