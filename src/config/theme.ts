import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#FFC000',
    primary: '#BE0808',
    secondary: '#F1F1F1',
    accent: '#A6A6A6',
    statusbarBackgroundColor: '#EBA937',
    red: '#f86262',
    green: '#38A91B',
    danger: '#f98f7f',
    bar: '#2a2929', //282c35
    success: '#62bd62',
    greenAlfa: 'rgba(56, 169, 27, 0.24)',
    ascent: '#16312d',
    white: '#ffffff',
    grey: '#e2e2e2',
    ash: '#f2eeee',
    black: '#16312d',
    blue: '#16312d',
    bgGradient: ['#16312d', '#16312d'],
    lightBlue: '#16312d',
    purple: '#9e64d2',
  },
  background: '#fff',
};
