import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../../config/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  articleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
  },
  tabContainer: {
    backgroundColor: '#EC644B',
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    overflow: 'scroll',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  divider: {
    backgroundColor: '#fff',
    width: 2,
    height: 20,
  },
  headerContainer: {
    padding: 10,
    gap: 10,
  },
  headingFirst: {
    color: 'grey',
  },
  headingSecond: {
    color: 'brown',
    textAlign: 'center',
  },
  headingThird: {
    color: 'red',
    textAlign: 'center',
  },
  shortNewsContainer: {
    overflow: 'hidden',
    padding: 10,
  },
  shortNews: {
    color: '#5B5757',
  },
  imageContainer: {
    maxHeight: 350,
    minHeight: 210,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  articleStyle: {
    width: '100%',
  },
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomTab: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  reporterImageBox: {
    backgroundColor: theme.colors.bar,
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 1,
    margin: 3,
  },
  reporterImage: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  userInteractionTab: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconTab: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 6,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shotContainer: {
    // flex: 1,
    position: 'relative',
    // height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
});
