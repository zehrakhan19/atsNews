import {StyleSheet} from 'react-native';
import {theme} from '../../../../config/theme';

export const styles = StyleSheet.create({
  text1: {
    color: theme.colors.green,
  },
  text2: {
    color: theme.colors.red,
  },
  heading: {
    color: 'black',
  },
  appbarText: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    gap: 5,
  },
  appbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-around',
    margin: 5,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 10,
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
  },
  fab: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
