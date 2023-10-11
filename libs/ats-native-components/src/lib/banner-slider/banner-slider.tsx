import React from 'react';
import { StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export interface BannerSliderProps {
  data: Array<string>
}

export function BannerSlider(props: BannerSliderProps) {
  return (
    <SliderBox
      images={props.data}
      dotColor="#fff"
      inactiveDotColor="#e2e2e2"
      autoplay
      autoplayInterval={10000}
      circleLoop
      resizeMethod={'scale'}
      resizeMode={'contain'}
      sliderBoxHeight={190}
      paginationBoxStyle={styles.paginationBoxStyle}
      dotStyle={styles.dotStyle}
      ImageComponentStyle={{}}
      imageLoadingColor="#2196F3"
    />
  );
}

const styles = StyleSheet.create({
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(1, 1, 1, 0.4)",
    paddingVertical: 3,
    marginBottom: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }
})

export default BannerSlider;
