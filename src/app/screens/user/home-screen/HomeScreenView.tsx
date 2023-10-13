/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {View} from 'react-native';
import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './HomeScreen.styles';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Article from '../article/Article';
import {Divider} from 'react-native-paper';

const HomeScreenView = ({navigation}: any) => {
  const renderHomeScreenView = () => {
    return <>{renderTabComponent()}</>;
  };
  const ARTICLES = [
    {
      id: 0,
      url: require('../../../assets/article1.png'),
      serial: 'FIRST ARTICLE',
      news: `The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” 
      The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. 
      The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. The definite article is the word the.`,
    },
    {
      id: 1,
      url: require('../../../assets/article2.png'),
      serial: 'SECOND ARTICLE',
      news: `The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?”
      The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. 
      The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. The definite article is the word the.`,
    },
    {
      id: 2,
      url: require('../../../assets/article3.png'),
      serial: 'THIRD ARTICLE',
      news: `The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” 
      The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. 
      The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. The definite article is the word the.`,
    },
    {
      id: 3,
      url: require('../../../assets/article4.png'),
      serial: 'FORTH ARTICLE',
      news: `The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” 
      The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. 
      The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you already know about. The definite article can be used with singular, plural, or uncountable nouns. The definite article is the word the.`,
    },
  ];
  const Tab = createMaterialTopTabNavigator();
  const renderTabComponent = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarGap: 0,
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen name="Latest News">
        {() => <DataView data={ARTICLES} />}
      </Tab.Screen>
      <Tab.Screen name="Viral News">{() => <DataView data={[]} />}</Tab.Screen>
      <Tab.Screen name="Trending News">
        {() => <DataView data={[]} />}
      </Tab.Screen>
      <Tab.Screen name="Local News">{() => <DataView data={[]} />}</Tab.Screen>
    </Tab.Navigator>
  );
  const DataView = ({data}: any) => {
    return <Article article={data} />;
  };

  const renderAppBar = () => {
    return (
      <Appbar title={'Home screen'} backAction={() => navigation.goBack()} />
    );
  };

  return (
    <>
      {/* {renderAppBar()} */}
      {renderHomeScreenView()}
      <Divider />
    </>
  );
};

export default HomeScreenView;
