/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {material} from 'react-native-typography';
import {Divider} from 'react-native-paper';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

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
    };
  }
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
                <View style={{flex: 2, backgroundColor: '#000'}}>
                  <Image
                    source={this.props.article[i].url}
                    style={styles.image}
                  />
                </View>
                <View style={styles.article}>
                  <Text style={[material.title, {color: 'red'}]}>
                    {item?.serial}
                  </Text>
                  <Text style={[material.body1, {color: '#000'}]}>
                    {item?.news}
                  </Text>
                  <Divider style={styles.divider} />
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
                <View style={{flex: 2, backgroundColor: '#000'}}>
                  <Image
                    source={this.props.article[i].url}
                    style={styles.image}
                  />
                </View>
                <View style={styles.article}>
                  <Text style={[material.title, {color: 'red'}]}>
                    {item?.serial}
                  </Text>
                  <Text style={[material.body1, {color: '#000'}]}>
                    {item?.news}
                  </Text>
                  <Divider style={styles.divider} />
                </View>
              </View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={item?.id}>
              <View style={styles.mainContainer}>
                <View style={{flex: 2, backgroundColor: '#000'}}>
                  <Image
                    source={this.props.article[i].url}
                    style={styles.image}
                  />
                </View>
                <View style={styles.article}>
                  <Text style={[material.title, {color: 'red'}]}>
                    {item?.serial}
                  </Text>
                  <Text style={[material.body1, {color: '#000'}]}>
                    {item?.news}
                  </Text>
                  <Divider style={styles.divider} />
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
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  article: {
    flex: 3,
    padding: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  divider: {
    backgroundColor: '#000',
    height: 1,
    width: '100%',
    marginVertical: 5,
  },
});

export default Article;
