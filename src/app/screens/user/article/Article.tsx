/* eslint-disable react-native/no-inline-styles */
import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {material} from 'react-native-typography';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import Icon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/Feather';
import ReportIcon from 'react-native-vector-icons/Feather';
import ClockIcon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../../../config/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Article extends Component {
  static propTypes: {article: PropTypes.Requireable<any[]>};
  position: Animated.ValueXY;
  swipedCardPosition: Animated.ValueXY;
  PanResponder: any;
  shotRef: React.RefObject<unknown>;

  constructor(props: any) {
    super(props);
    this.position = new Animated.ValueXY();
    this.swipedCardPosition = new Animated.ValueXY({x: 0, y: -SCREEN_HEIGHT});
    this.shotRef = createRef();
    this.state = {
      currentIndex: 0,
      imageUri: '',
    };
  }
  // ref = React.createRef();
  myCustomShare = async (headline: any, uri: any) => {
    const shareOptions = {
      url: uri,
      message: headline,
    };
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0 && this.state.currentIndex > 0) {
          this.swipedCardPosition.setValue({
            x: 0,
            y: -SCREEN_HEIGHT + gestureState.dy,
          });
        } else {
          this.position.setValue({x: 0, y: gestureState.dy});
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (
          this.state.currentIndex > 0 &&
          gestureState.dy > 50 &&
          gestureState.vy > 0.7
        ) {
          Animated.timing(this.swipedCardPosition, {
            toValue: {x: 0, y: 0},
            duration: 400,
            useNativeDriver: false,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex - 1});
            this.swipedCardPosition.setValue({x: 0, y: -SCREEN_HEIGHT});
          });
        } else if (
          -gestureState.dy > 50 &&
          -gestureState.vy > 0.7 &&
          this.state.currentIndex < this.props.article.length - 1
        ) {
          Animated.timing(this.position, {
            toValue: {x: 0, y: -SCREEN_HEIGHT},
            duration: 400,
            useNativeDriver: false,
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1});
            this.position.setValue({x: 0, y: 0});
          });
        } else {
          Animated.parallel([
            Animated.spring(this.position, {
              toValue: {x: 0, y: 0},
              useNativeDriver: false,
            }),
            Animated.spring(this.swipedCardPosition, {
              toValue: {x: 0, y: -SCREEN_HEIGHT},
              useNativeDriver: false,
            }),
          ]).start();
        }
      },
    });
  }
  renderCurrentArticle = (item: any, index: number) => (
    <Animated.View
      key={item?.id}
      style={this.position.getLayout()}
      {...this.PanResponder.panHandlers}>
      <View style={styles.mainContainer}>
        <ViewShot
          style={styles.shotContainer}
          ref={this.shotRef}
          // options={{fileName: 'NewsArticle', format: 'jpg', quality: 0.9}}
        >
          <>
            <View style={{flex: 2}}>
              <Image
                source={this.props.article[index].url}
                style={styles.image}
              />
            </View>
            <View style={styles.article}>
              <View style={styles.iconTab}>
                <View style={[styles.iconContainer, styles.elevation]}>
                  <Icon name="like2" color={'gray'} size={20} />
                </View>
                <View style={[styles.iconContainer, styles.elevation]}>
                  <Icon name="dislike2" color={'gray'} size={20} />
                </View>
                <View style={[styles.iconContainer, styles.elevation]}>
                  <CommentIcon
                    name="comment-multiple-outline"
                    color={'gray'}
                    size={20}
                  />
                </View>
                <View style={[styles.iconContainer, styles.elevation]}>
                  <ShareIcon
                    name="share-2"
                    color={'gray'}
                    size={20}
                    onPress={() => {
                      this.shotRef.current
                        .capture()
                        .then(async (uri: any) => {
                          console.log(uri, 'uri');
                          return this.myCustomShare(item?.heading, uri);
                        })
                        .catch(({err}: any) => console.log(err));
                      console.log('share clicked');
                    }}
                  />
                </View>
                <View style={[styles.iconContainer, styles.elevation]}>
                  <ReportIcon name="alert-triangle" color={'gray'} size={20} />
                </View>
              </View>
              <View>
                <Text style={material.title}>{item?.heading}</Text>
                <Text style={material.body1}>{item?.content}</Text>
              </View>
            </View>
          </>
        </ViewShot>
        <View style={styles.bottomTab}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <View style={styles.reporterImageBox}>
              <Image
                source={require('../../../assets/reporter.png')}
                style={styles.reporterImage}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={[material.body2, {color: 'gray'}]}>
                Reporter Name
              </Text>
              <Text style={material.caption}>Sr.Reporter, hyderabad</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
            }}>
            <ClockIcon name="av-timer" color={'gray'} size={24} />
            <Text style={[material.body2, {color: 'gray'}]}>05: 50 PM</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
  renderPreviousArticle = (item: any, index: number) => (
    <Animated.View
      key={item?.id}
      style={this.swipedCardPosition.getLayout()}
      {...this.PanResponder.panHandlers}>
      <View style={styles.mainContainer}>
        <View style={{flex: 2}}>
          <Image source={this.props.article[index].url} style={styles.image} />
        </View>
        <View style={styles.article}>
          <View style={styles.iconTab}>
            <View style={[styles.iconContainer, styles.elevation]}>
              <Icon name="like2" color={'gray'} size={20} />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <Icon name="dislike2" color={'gray'} size={20} />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <CommentIcon
                name="comment-multiple-outline"
                color={'gray'}
                size={20}
              />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <TouchableOpacity>
                <ShareIcon name="share-2" color={'gray'} size={20} />
              </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <ReportIcon name="alert-triangle" color={'gray'} size={20} />
            </View>
          </View>
          <View>
            <Text style={material.title}>{item?.heading}</Text>
            <Text style={[material.body1, {color: '#000'}]}>
              {item?.content}
            </Text>
          </View>
        </View>
        <View style={styles.bottomTab}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <View style={styles.reporterImageBox}>
              <Image
                source={require('../../../assets/reporter.png')}
                style={styles.reporterImage}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={[material.body2, {color: 'gray'}]}>
                Reporter Name
              </Text>
              <Text style={material.caption}>Sr.Reporter, hyderabad</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
            }}>
            <ClockIcon name="av-timer" color={'gray'} size={24} />
            <Text style={[material.body2, {color: 'gray'}]}>05: 50 PM</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
  renderNextArticle = (item: any, index: number) => (
    <Animated.View key={item?.id}>
      <View style={styles.mainContainer}>
        <View style={{flex: 2}}>
          <Image source={this.props.article[index].url} style={styles.image} />
        </View>
        <View style={styles.article}>
          <View style={styles.iconTab}>
            <View style={[styles.iconContainer, styles.elevation]}>
              <Icon name="like2" color={'gray'} size={20} />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <Icon name="dislike2" color={'gray'} size={20} />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <CommentIcon
                name="comment-multiple-outline"
                color={'gray'}
                size={20}
              />
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <TouchableOpacity>
                <ShareIcon name="share-2" color={'gray'} size={20} />
              </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, styles.elevation]}>
              <ReportIcon name="alert-triangle" color={'gray'} size={20} />
            </View>
          </View>
          <View>
            <Text style={material.title}>{item?.heading}</Text>
            <Text style={[material.body1, {color: '#000'}]}>
              {item?.content}
            </Text>
          </View>
        </View>
        <View style={styles.bottomTab}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <View style={styles.reporterImageBox}>
              <Image
                source={require('../../../assets/reporter.png')}
                style={styles.reporterImage}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={[material.body2, {color: 'gray'}]}>
                Reporter Name
              </Text>
              <Text style={material.caption}>Sr.Reporter, hyderabad</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
            }}>
            <ClockIcon name="av-timer" color={'gray'} size={24} />
            <Text style={[material.body2, {color: 'gray'}]}>05: 50 PM</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
  renderArticles = () => {
    return this.props.article
      ?.map((item: any, i: number) => {
        if (i === this.state.currentIndex - 1) {
          return <View>{this.renderPreviousArticle(item, i)}</View>;
        } else if (i < this.state.currentIndex) {
          return null;
        }
        if (i === this.state.currentIndex) {
          return <View>{this.renderCurrentArticle(item, i)}</View>;
        } else {
          return <View>{this.renderNextArticle(item, i)}</View>;
        }
      })
      .reverse();
  };
  render() {
    return <View style={{flex: 1}}>{this.renderArticles()}</View>;
  }
}
Article.propTypes = {
  article: PropTypes.array,
};

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
    paddingVertical: 8,
    paddingHorizontal: 3,
    margin: 5,
  },
  reporterImage: {
    height: 30,
    width: 40,
    resizeMode: 'contain',
  },
  article: {
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subHeading: {color: 'red', alignSelf: 'center'},
});

export default Article;
