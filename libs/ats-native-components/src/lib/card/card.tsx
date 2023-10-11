import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Divider, Card as PaperCard } from 'react-native-paper';
import { ElevationLevels } from 'react-native-paper/lib/typescript/types';
import { human, iOSUIKit } from 'react-native-typography';

export interface CardProps {
  key?: string | number;
  elevation?: ElevationLevels;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
  title?: string | ReactNode;
  bgColor?: string;
  onPress?: () => void;
}

export function Card({
  key = 0,
  elevation = 0,
  children,
  style,
  fullWidth,
  title,
  bgColor,
  onPress = () => null
}: CardProps) {
  return (
    <PaperCard
      key={key}
      elevation={elevation}
      onPress={() => onPress()}
      style={[
        style,
        {
          padding: 10,
          backgroundColor: bgColor || 'white',
          borderRadius: 6,
          ...(fullWidth && { width: '100%' })
        }
      ]}
    >
      {title && (
        <>
          <PaperCard.Title
            title={title}
            titleStyle={iOSUIKit.title3Emphasized}
          />
          <Divider />
        </>
      )}

      {children}
    </PaperCard>
  );
}

export default Card;
