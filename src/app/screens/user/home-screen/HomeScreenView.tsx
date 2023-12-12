/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useWindowDimensions, View, BackHandler} from 'react-native';
import {styles} from './HomeScreen.styles';
import {TabView, SceneMap} from 'react-native-tab-view';
import SideBarView from './SideBar/index';
import NewsScreen from './NewsScreen';
import TopNavigation from './TopNavigation';

export default function HomeScreenView({navigation}: any) {
  const renderScene = SceneMap({
    sideBar: () => <SideBarView navigation={navigation} />,
    newsScreen: () => <NewsScreen navigation={navigation} />,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'sideBar', title: 'Discover'},
    {key: 'newsScreen', title: 'News'},
  ]);
  React.useEffect(() => {
    const backAction = () => {
      if (navigation.goBack) {
        BackHandler.exitApp();
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={() => (
          <TopNavigation
            index={index}
            setIndex={setIndex}
            // navigation={navigation}
          />
        )}
      />
    </View>
  );
}
