import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Animated, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Article from '../styled-article/article';

const CarouselArticle = ({data, setData}: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const renderItem = ({item, index}) => {
    const translateY = animatedValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [50, 0, -50],
    });

    const rotateX = animatedValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: ['45deg', '0deg', '-45deg'],
    });
    return (
      <View key={index}>
        <Animated.View
          style={[
            styles.slide,
            {
              transform: [{translateY}, {rotateX}],
            },
          ]}>
          <Article style={item?.style} data={item} setData={setData} />
        </Animated.View>
      </View>
    );
  };

  const handleSnapToItem = index => {
    setActiveSlide(index);
  };

  const handleScroll = event => {
    Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {
      useNativeDriver: false,
    })(event);
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={'stack'}
        scrollEnabled
        // ref={carouselRef}
        data={data}
        renderItem={renderItem}
        onSnapToItem={handleSnapToItem}
        sliderHeight={SCREEN_HEIGHT - 50}
        itemHeight={SCREEN_HEIGHT - 50}
        vertical
        // onScroll={handleScroll}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default CarouselArticle;
