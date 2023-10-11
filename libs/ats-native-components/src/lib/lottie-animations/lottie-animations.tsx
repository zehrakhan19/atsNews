import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { material } from 'react-native-typography';
import * as Animatable from 'react-native-animatable';

import loading from './lottie/loading-animation.json';
import loadingRound from './lottie/loading-round.json';
import PackageLoader from './lottie/package-loader.json';
import Empty from './lottie/empty-box.json';

const deviceWidth = Dimensions.get('window').width;

export type AvailableAnimations = 'loading' | 'package' | 'empty';
export interface LottieAnimationsProps {
  type?: AvailableAnimations;
  title?: string;
  subTitle?: string;
  loop?: boolean;
}

/**
 *
 * @param type type of loading animation
 * @param title loading tilte text
 * @param subTitle loading sub title
 * @param loop
 */
export function Loading({
  type,
  title,
  subTitle,
  loop = true
}: LottieAnimationsProps) {
  const getLottieSource = () => {
    switch (type) {
      case 'loading':
        return loadingRound;
      case 'package':
        return PackageLoader;
      case 'empty':
        return Empty;
      default:
        return loading;
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LottieView
        source={getLottieSource()}
        autoPlay
        loop={loop}
        style={{
          zIndex: -1,
          height: deviceWidth * 0.6,
          width: deviceWidth - 10,
          alignSelf: 'center'
        }}
        speed={0.8}
      />

      <Animatable.View animation='fadeIn' delay={100}>
        <Text style={[material.title, { textAlign: 'center' }]}>{title}</Text>
        <Text style={[material.caption, { textAlign: 'center', marginTop: 5 }]}>
          {subTitle}
        </Text>
      </Animatable.View>
    </View>
  );
}
