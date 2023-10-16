/* eslint-disable react-native/no-inline-styles */
import React, {Component, useRef} from 'react';
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
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/Feather';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Article extends Component {
  static propTypes: {article: PropTypes.Requireable<any[]>};
  position: Animated.ValueXY;
  swipedCardPosition: Animated.ValueXY;
  PanResponder: any;

  constructor(props: any) {
    super(props);
    this.position = new Animated.ValueXY();
    this.swipedCardPosition = new Animated.ValueXY({x: 0, y: -SCREEN_HEIGHT});
    this.state = {
      currentIndex: 0,
      imageUri: '',
    };
  }
  ref = React.createRef();
  myCustomShare = async (message: any, uri: any) => {
    const shareOptions = {
      url: uri,
      message: `This article is about ${message}.`,
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
  renderArticles = () => {
    return this.props.article
      ?.map((item: any, i: number) => {
        if (i === this.state.currentIndex - 1) {
          return (
            <Animated.View
              key={item?.id}
              style={this.swipedCardPosition.getLayout()}
              {...this.PanResponder.panHandlers}>
              <View style={styles.mainContainer}>
                <View style={{flex: 2}}>
                  <Image
                    source={this.props.article[i].url}
                    style={styles.image}
                  />
                </View>
                <View style={styles.article}>
                  <View>
                    <Text style={[material.title, styles.subHeading]}>
                      {item?.topic}
                    </Text>
                    <Text style={material.title}>{item?.heading}</Text>
                    <Text style={[material.body1, {color: '#000'}]}>
                      {item?.content}
                    </Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          );
        } else if (i < this.state.currentIndex) {
          return null;
        }
        if (i === this.state.currentIndex) {
          return (
            <Animated.View
              key={item?.id}
              style={this.position.getLayout()}
              {...this.PanResponder.panHandlers}>
              <View style={styles.mainContainer}>
                <ViewShot style={styles.shotContainer} ref={this.ref}>
                  <View style={{flex: 2}}>
                    <Image
                      source={this.props.article[i].url}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.article}>
                    <View>
                      {/* <Text style={[material.title, styles.subHeading]}>
                        {item?.topic}
                      </Text> */}
                      <Text style={material.title}>{item?.heading}</Text>
                      <Text style={[material.body1, {color: '#000'}]}>
                        {item?.content}
                      </Text>
                    </View>
                  </View>
                </ViewShot>

                <View style={{marginBottom: 120}}>
                  <Text style={[material.body1, {color: 'gray', margin: 4}]}>
                    5: 50 PM
                  </Text>
                  <Divider />
                  <View style={styles.bottomTab}>
                    <View style={styles.iconContainer}>
                      <Icon name="like2" color={'gray'} size={24} />
                      <Text style={[material.body1, {color: 'gray'}]}>30</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <Icon name="dislike2" color={'gray'} size={24} />
                      <Text style={[material.body1, {color: 'gray'}]}>30</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <CommentIcon
                        name="comment-multiple-outline"
                        color={'gray'}
                        size={24}
                      />
                      <Text style={[material.body1, {color: 'gray'}]}>30</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          this.ref.current.capture().then(uri => {
                            this.myCustomShare(item?.topic, uri);
                          });
                        }}>
                        <ShareIcon name="share-2" color={'gray'} size={24} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={item?.id}>
              <View style={styles.mainContainer}>
                <View style={{flex: 2}}>
                  <Image
                    source={this.props.article[i].url}
                    style={styles.image}
                  />
                </View>
                <View style={styles.article}>
                  <View>
                    <Text style={[material.title, styles.subHeading]}>
                      {item?.topic}
                    </Text>
                    <Text style={material.title}>{item?.heading}</Text>
                    <Text style={[material.body1, {color: '#000'}]}>
                      {item?.content}
                    </Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          );
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
    height: SCREEN_HEIGHT - 20,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  bottomTab: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 8,
  },
  iconContainer: {flexDirection: 'row', gap: 5},
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  article: {
    flex: 3,
    padding: 10,
    justifyContent: 'space-between',
  },
  subHeading: {color: 'red', alignSelf: 'center'},
});

export default Article;
