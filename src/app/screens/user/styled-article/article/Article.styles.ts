import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../../config/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT - 134,
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    alignItems: 'center',
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
    fontFamily: 'AnekTelugu_Condensed-ExtraBold',
  },
  headingSecond: {
    color: 'brown',
    textAlign: 'center',
    fontFamily: 'AnekTelugu_Medium',
  },
  headingThird: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'AnekTelugu_Regular',
  },
  shortNewsTwoSection: {
    position: 'absolute',
    top: 200,
    right: 0,
    width: '50%',
    overflow: 'hidden',
  },
  shortNewsContainer: {
    overflow: 'hidden',
    padding: 10,
  },
  shortNewsContainer2: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  shortNews: {
    color: '#5B5757',
    lineHeight: 25,
    letterSpacing: 1,
    fontFamily: 'AnekTelugu_Light',
  },
  shortNews2: {
    color: '#5B5757',
    fontFamily: 'AnekTelugu_Light',
  },
  points: {
    color: '#305CFA',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 25,
    letterSpacing: 1,
    fontFamily: 'AnekTelugu_Regular',
  },
  bullets: {
    backgroundColor: '#305CFA',
    borderRadius: 50,
    height: 10,
    width: 10,
  },
  pointsList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
  },
  pointsContainer: {
    padding: 10,
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 9,
    width: '70%',
  },
  imageContainer: {
    maxHeight: 340,
    minHeight: 210,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 30,
  },
  newsWithPointsContainer: {
    maxHeight: 300,
    minHeight: 210,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer2: {
    maxHeight: 140,
    minHeight: 110,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  default: {
    height: 295,
    marginBottom: 60,
    alignSelf: 'flex-start',
  },
  articleStyle: {
    width: '100%',
    height: 240,
  },
  articleStyleThird: {
    alignSelf: 'flex-end',
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
    zIndex: 9,
  },
  shotContainer: {
    position: 'relative',
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
});
