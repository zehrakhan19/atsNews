import {useEffect, useState} from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-6776917395508348~4639599533';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

function InterstitialAds({index}: any) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loaded && index !== 0 && index % 3 === 0) {
      interstitial.show();
    }
  }, [loaded, index]);

  useEffect(() => setLoaded(true), [index]);
  if (!loaded) {
    return null;
  }

  return null; // You can return null or other JSX if needed
}

export default InterstitialAds;
