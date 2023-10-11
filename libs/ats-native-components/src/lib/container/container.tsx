import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ContainerProps {}

export function Container(props: ContainerProps) {
  return (
    <View>
      <Text>Welcome to container!</Text>
    </View>
  );
}

export default Container;
