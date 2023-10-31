import {StyleSheet} from 'react-native';
import {theme} from '../../../../config/theme';

export const styles = StyleSheet.create({
  fab: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  articleButton: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 4,
    borderBottomRightRadius: 15,
  },
  headingWrapper: {
    flexDirection: 'column',
    padding: 10,
    gap: 10,
    overflow: 'hidden',
    height: 170,
  },
  contentWrapper: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardInner: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    flex: 1,
    flexDirection: 'row',
  },
  bottomSheetHeader: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'left',
    color: 'grey',
  },
  bottomSheetOption: {
    justifyContent: 'center',
    padding: 20,
  },
});
