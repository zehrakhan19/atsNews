import React, {useState, useRef} from 'react';
import {Text, View, SafeAreaView, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Article from '../styled-article/article';

const CarouselArticle = ({data}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  const carouselRef = useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Article style={item.article.style} data={item.article} />
      </View>
    );
  };

  const onSnapToItem = index => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Carousel
          layout={'default'}
          scrollEnabled
          ref={carouselRef}
          data={data}
          sliderWidth={387}
          itemWidth={387}
          // sliderHeight={SCREEN_HEIGHT - 115}
          // itemHeight={SCREEN_HEIGHT - 110}
          // vertical
          renderItem={renderItem}
          onSnapToItem={onSnapToItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselArticle;
