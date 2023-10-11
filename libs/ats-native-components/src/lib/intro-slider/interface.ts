type KEY = string;

export interface SlidesInterface {
  key: KEY;
  image: React.ComponentElement;
  title: string;
  text: string;
  highlighted: string;
}

export interface IntroSliderProps {
  data: SlidesInterface[];
  style: object;
  activeDotStyle: object;
  dotStyle: object;
  showSkipButton: boolean;
  onDone: () => void;
  onSkip: () => void;
  dotClickEnabled: boolean;
}
