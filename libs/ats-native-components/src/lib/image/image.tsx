import React from 'react';
import { View, Image as AtsImage } from 'react-native';
export interface ImageProps {
  source: any;
  style?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
export function Image({ source, style, resizeMode }: ImageProps) {
  return (
    <View>
      {typeof source === 'string' ? (
        <AtsImage
          source={{ uri: source || '' }}
          style={style}
          resizeMode={resizeMode || 'cover'}
        />
      ) : (
        { source }
      )}
    </View>
  );
}

export default Image;
