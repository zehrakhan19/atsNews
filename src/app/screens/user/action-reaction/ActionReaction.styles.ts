import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../../config/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  shotContainer: {
    flex: 1,
    position: 'relative',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  iconTab: {
    position: 'relative',
    top: -30,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    paddingVertical: 2,
  },
  bottomTab: {
    marginBottom: 130,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  image: {
    flex: 1,
    position: 'relative',
    top: -6,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  reporterImageBox: {
    backgroundColor: theme.colors.bar,
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 1,
    margin: 3,
  },
  iconImageBox: {
    position: 'absolute',
    bottom: 30,
    left: '45%',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    height: 40,
    width: 550,
    resizeMode: 'contain',
  },
  reporterImage: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  article: {
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subHeading: {color: 'red', alignSelf: 'center'},
});
