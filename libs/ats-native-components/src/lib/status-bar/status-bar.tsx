import React from 'react';

import { StatusBar as NativeStatusBar } from 'react-native';

export interface StatusBarProps {
  translucent?: boolean;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  backgroundColor: string;
  hidden?: boolean;
}

export function StatusBar(props: StatusBarProps) {
  return (
    <NativeStatusBar
      translucent={props.translucent}
      barStyle={props.barStyle}
      backgroundColor={props.backgroundColor}
      animated={true}
      hidden={props.hidden}
    />
  );
}

export default StatusBar;

