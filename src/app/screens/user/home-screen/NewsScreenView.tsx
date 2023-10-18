/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {View} from 'react-native';
import {Appbar} from '../../../../../libs/ats-native-components/src';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Article from '../article/Article';
import {Divider} from 'react-native-paper';

const NewsScreenView = ({navigation}: any) => {
  const renderHomeScreenView = () => {
    return (
      <>
        <Article article={ARTICLES} />
        {/* {renderTabComponent()} */}
      </>
    );
  };
  const ARTICLES = [
    {
      id: 0,
      url: require('../../../assets/article1.png'),
      topic: 'NATIONAL',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 1,
      url: require('../../../assets/article2.png'),
      topic: 'BUSINESS',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 2,
      url: require('../../../assets/article3.png'),
      topic: 'SPORTS',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 3,
      url: require('../../../assets/article4.png'),
      topic: 'ENTERTAINMENT',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
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

export default NewsScreenView;
