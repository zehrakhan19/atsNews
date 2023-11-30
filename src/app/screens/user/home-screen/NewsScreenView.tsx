/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {Appbar} from '../../../../../libs/ats-native-components/src';
// import Article from '../article/Article';
import {Divider} from 'react-native-paper';
import Article from '../styled-article/article';
import {Text, View} from 'react-native';
const NewsScreenView = ({navigation}: any) => {
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
    {
      id: 4,
      url: require('../../../assets/article1.png'),
      topic: 'NATIONAL',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 5,
      url: require('../../../assets/article2.png'),
      topic: 'BUSINESS',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 6,
      url: require('../../../assets/article3.png'),
      topic: 'SPORTS',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
    {
      id: 7,
      url: require('../../../assets/article4.png'),
      topic: 'ENTERTAINMENT',
      heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
      `,
      content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
      `,
    },
  ];
  const NewsOne = {
    headingFirst: `వినోదం`,
    headingSecond: `ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి`,
    headingThird: `సమంత`,
    shortNews: `ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి.. ఎంతో బాధపడ్డాను '' అని నటి సమంత అన్నారు. స్టార్‌ హీరోయిన్‌ సమంత ప్రస్తుతం సినిమాలకు విరామం ప్రకటించి పూర్తి సమయాన్ని ఆరోగ్య సంరక్షణకు కేటాయించారు. తాజాగా ఆమె ఓ ఆంగ్ల మీడియా సంస్థతో మాట్లాడుతూ ... తన విడాకులు, వరుస ఫ్లాప్‌లు, ఆరోగ్య సమస్యలు అన్నీ ఒకేసారి చుట్టుముట్టడంతో తాను ఎంతో కుంగిపోయినట్లు తెలిపారు.`,
    articleImage: require('../../../assets/articleStyle1.png'),
    like: '230',
    dislike: '10',
    comment: '43',
  };
  const NewsTwo = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `గజ్వేల్, కామారెడ్డిలో సీఎం కేసీఆర్`,
    headingThird: `నామినేషన్`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle2.png'),
    like: '230',
    dislike: '10',
    comment: '43',
  };
  const NewsThree = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `కాంగ్రెసులోకి`,
    headingThird: `తీన్మార్ మల్లన్న`,
    headerForth: `ఠాక్రే సమక్షంలో చేరిక ఈసారి పోటీకి దూరమేనా ?`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle3.png'),
    like: '230',
    dislike: '10',
    comment: '43',
  };
  const renderAppBar = () => {
    return (
      <Appbar title={'Home screen'} backAction={() => navigation.goBack()} />
    );
  };
  const renderHomeScreenView = () => {
    return (
      <>
        {/* ______________IMPORT FROM ../styled-article/article________________ */}

        <Article style={1} data={NewsOne} />
        {/* <Article style={2} data={NewsTwo} /> */}
        {/* <Article style={3} data={NewsThree} /> */}

        {/* ______________IMPORT FROM ../article/Article________________ */}
        {/* <Article article={ARTICLES} /> */}
      </>
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
