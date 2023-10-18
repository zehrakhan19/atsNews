/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {styles} from './HomeScreen.styles';
import {TabView, SceneMap} from 'react-native-tab-view';
import SideBarView from './SideBarView';
import NewsScreenView from './NewsScreenView';
import TopNavigation from './TopNavigation';

const renderScene = SceneMap({
  sideBar: SideBarView,
  newsScreen: NewsScreenView,
});
export default function HomeScreenView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'sideBar', title: 'Discover'},
    {key: 'newsScreen', title: 'News'},
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      />
    </View>
  );
}
