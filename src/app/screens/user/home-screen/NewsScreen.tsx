import * as React from 'react';
import {Divider} from 'react-native-paper';
import CarouselArticle from '../article/CarouselArticle';
// import Article from '../article/Article';

export default function NewsScreen() {
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
  const CardOne = {
    headingFirst: `వినోదం`,
    headingSecond: `ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి`,
    headingThird: `సమంత`,
    shortNews: `ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి.. ఎంతో బాధపడ్డాను '' అని నటి సమంత అన్నారు. స్టార్‌ హీరోయిన్‌ సమంత ప్రస్తుతం సినిమాలకు విరామం ప్రకటించి పూర్తి సమయాన్ని ఆరోగ్య సంరక్షణకు కేటాయించారు. తాజాగా ఆమె ఓ ఆంగ్ల మీడియా సంస్థతో మాట్లాడుతూ ... తన విడాకులు, వరుస ఫ్లాప్‌లు, ఆరోగ్య సమస్యలు అన్నీ ఒకేసారి చుట్టుముట్టడంతో తాను ఎంతో కుంగిపోయినట్లు తెలిపారు.`,
    articleImage: require('../../../assets/articleStyle1.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 1,
  };
  const CardTwo = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `గజ్వేల్, కామారెడ్డిలో సీఎం కేసీఆర్`,
    headingThird: `నామినేషన్`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle2.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 2,
  };
  const CardThree = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `కాంగ్రెసులోకి`,
    headingThird: `తీన్మార్ మల్లన్న`,
    headerForth: `ఠాక్రే సమక్షంలో చేరిక ఈసారి పోటీకి దూరమేనా ?`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle3.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 3,
  };
  const CardFour = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `గజ్వేల్, కామారెడ్డిలో సీఎం కేసీఆర్`,
    headingThird: `నామినేషన్`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    shortNews2: `“తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. “`,
    articleImage: require('../../../assets/articleStyle2.png'),
    articleImage2: require(''),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 2,
  };
  const CardFive = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `కేంద్రానికి వినతిలోనూ జాప్యమే !`,
    points: [
      `ఇంకా సిద్ధం కాని మెమోరాండం`,
      `ప్రకటించిందే తక్కువ మండలాలు`,
      `కరువు సహాయ చర్యలకు నిధులడగలేని స్థితి`,
      `కరువు సహాయ నిధులడగలేని`,
    ],
    shortNews: `యావత్‌ రాష్ట్రాన్నీ దుర్భిక్షం పీడిస్తున్న సమయాన, కరువు మండలాల గుర్తింపే లోపభూయిష్టంకాగా, ప్రకటించిన మేరకైనా కేంద్రాన్ని సకాలంలో నిధులడిగే విషయంలో రాష్ట్ర ప్రభుత్వం తాత్సారం చేస్తోంది. కేంద్ర కరువు మాన్యువల్‌ ప్రకారం కరువును ప్రకటిస్తూ గెజిట్‌ విడుదల చేసిన వారంలో కేంద్రాన్ని సహాయం కోరుతూ రాష్ట్ర సర్కారు సమగ్ర విజ్ఞాపన పత్రం సమర్పించాలి.`,
    articleImage: require('../../../assets/articleStyle3.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 2,
  };
  const CardSix = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `కాంగ్రెసులోకి`,
    headingThird: `తీన్మార్ మల్లన్న`,
    headerForth: `ఠాక్రే సమక్షంలో చేరిక ఈసారి పోటీకి దూరమేనా ?`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle3.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 2,
  };
  const CardSeven = {
    headingFirst: `రాజకీయం.`,
    headingSecond: `కాంగ్రెసులోకి`,
    headingThird: `తీన్మార్ మల్లన్న`,
    headerForth: `ఠాక్రే సమక్షంలో చేరిక ఈసారి పోటీకి దూరమేనా ?`,
    shortNews: `తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.`,
    articleImage: require('../../../assets/articleStyle3.png'),
    like: '230',
    dislike: '10',
    comment: '43',
    style: 2,
  };
  const NewsArray = [
    {article: {...CardOne}},
    {article: {...CardTwo}},
    {article: {...CardThree}},
    {article: {...CardFour}},
    {article: {...CardFive}},
    {article: {...CardSix}},
    {article: {...CardSeven}},
  ];

  const RenderHomeScreenView = () => (
    <>
      <CarouselArticle data={NewsArray} />
      {/* <Article article={ARTICLES} /> */}
    </>
  );
  return (
    <>
      <RenderHomeScreenView />
      <Divider />
    </>
  );
}