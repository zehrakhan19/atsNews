import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit, material, human } from 'react-native-typography';
import { 
  materialType,
  humanType,
  iOSUIKitType,
} from './text.interface';

export function IosText({text, font, styles}:{text: string, font: iOSUIKitType, styles?: object}) {
  return (
    <Text style={[iOSUIKit[font], {...styles}]}>
      {text}
    </Text>
  );
}

export function MaterialText({text, font, styles}:{text: string, font: materialType, styles?: object}) {
  return (
    <Text style={[material[font], {...styles}]}>
      {text}
    </Text>
  );
}

export function HumanText({text, font, styles}:{text: string, font: humanType, styles?: object}) {
  return (
    <Text style={[human[font], {...styles}]}>
      {text}
    </Text>
  );
}

export default { IosText, MaterialText, HumanText };
