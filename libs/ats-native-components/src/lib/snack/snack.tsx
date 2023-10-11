import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface SnackProps {}

export function Snack(props: SnackProps) {
  return (
    <View>
      <Text>Welcome to snack!</Text>
    </View>
  );
}

export default Snack;
