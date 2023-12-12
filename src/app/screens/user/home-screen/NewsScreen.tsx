import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import CarouselArticle from '../article/CarouselArticle';
interface NewsItem {
  id: string;
  headingFirst?: string;
  headingSecond?: string;
  headingThird?: string;
  headerForth?: string;
  shortNews?: string;
  shortNews2?: string;
  articleImage?: string;
  articleImage2?: string;
  articlePointsImage?: string;
  like?: string;
  dislike?: string;
  comment?: string;
  style?: number;
  points?: any;
}
const NewsScreen = ({navigation}: any) => {
  const NewsArray: NewsItem[] = [
    {
      id: '1',
      headingFirst: 'వినోదం',
      headingSecond: 'ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి',
      headingThird: 'సమంత',
      shortNews:
        "ఒకేసారి మూడు రకాల సమస్యలు చుట్టుముట్టాయి.. ఎంతో బాధపడ్డాను '' అని నటి సమంత అన్నారు. స్టార్‌ హీరోయిన్‌ సమంత ప్రస్తుతం సినిమాలకు విరామం ప్రకటించి పూర్తి సమయాన్ని ఆరోగ్య సంరక్షణకు కేటాయించారు. తాజాగా ఆమె ఓ ఆంగ్ల మీడియా సంస్థతో మాట్లాడుతూ ... తన విడాకులు, వరుస ఫ్లాప్‌లు, ఆరోగ్య సమస్యలు అన్నీ ఒకేసారి చుట్టుముట్టడంతో తాను ఎంతో కుంగిపోయినట్లు తెలిపారు.",
      articleImage: require('../../../assets/articleStyle1.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 1,
    },
    {
      id: '2',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'గజ్వేల్, కామారెడ్డిలో సీఎం కేసీఆర్',
      headingThird: 'నామినేషన్',
      shortNews:
        'తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.',
      articleImage: require('../../../assets/articleStyle2.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 2,
    },
    {
      id: '3',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'కాంగ్రెసులోకి',
      headingThird: 'తీన్మార్ మల్లన్న',
      headerForth: 'ఠాక్రే సమక్షంలో చేరిక ఈసారి పోటీకి దూరమేనా ?',
      shortNews:
        'తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.',
      articleImage: require('../../../assets/articleStyle3.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 1,
    },
    {
      id: '4',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'గజ్వేల్, కామారెడ్డిలో సీఎం కేసీఆర్',
      headingThird: 'నామినేషన్',
      shortNews:
        'తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. అటు, మంత్రి కేటీఆర్ సిరిసిల్లలో, మంత్రి హరీష్ రావు సిద్ధిపేటలో నామినేషన్ వేశారు.',
      shortNews2:
        '“తెలంగాణ సీఎం కేసీఆర్ గజ్వేల్, కామారెడ్డి నియోజక వర్గాల్లో నామినేషన్ దాఖలు చేశారు. “',
      articleImage: require('../../../assets/articleStyle2.png'),
      articleImage2: require('../../../assets/articleStyle4.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 2,
    },
    {
      id: '5',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'కేంద్రానికి వినతిలోనూ జాప్యమే !',
      points: [
        'ఇంకా సిద్ధం కాని మెమోరాండం',
        'ప్రకటించిందే తక్కువ మండలాలు',
        'కరువు సహాయ చర్యలకు నిధులడగలేని స్థితి',
        'కరువు సహాయ నిధులడగలేని',
        'ఇంకా సిద్ధం కాని మెమోరాండం',
        'ప్రకటించిందే తక్కువ మండలాలు',
        'కరువు సహాయ చర్యలకు నిధులడగలేని స్థితి',
        'కరువు సహాయ నిధులడగలేని',
      ],
      shortNews:
        'యావత్‌ రాష్ట్రాన్నీ దుర్భిక్షం పీడిస్తున్న సమయాన, కరువు మండలాల గుర్తింపే లోపభూయిష్టంకాగా, ప్రకటించిన మేరకైనా కేంద్రాన్ని సకాలంలో నిధులడిగే విషయంలో రాష్ట్ర ప్రభుత్వం తాత్సారం చేస్తోంది. కేంద్ర కరువు మాన్యువల్‌ ప్రకారం కరువును ప్రకటిస్తూ గెజిట్‌ విడుదల చేసిన వారంలో కేంద్రాన్ని సహాయం కోరుతూ రాష్ట్ర సర్కారు సమగ్ర విజ్ఞాపన పత్రం సమర్పించాలి.',
      articlePointsImage: require('../../../assets/articleStyle5.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 1,
    },
    {
      id: '6',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'కేంద్రానికి వినతిలోనూ జాప్యమే !',
      shortNews:
        'యావత్‌ రాష్ట్రాన్నీ దుర్భిక్షం పీడిస్తున్న సమయాన, కరువు మండలాల గుర్తింపే లోపభూయిష్టంకాగా, ప్రకటించిన మేరకైనా కేంద్రాన్ని సకాలంలో నిధులడిగే విషయంలో రాష్ట్ర ప్రభుత్వం తాత్సారం చేస్తోంది. కేంద్ర కరువు మాన్యువల్‌ ప్రకారం కరువును ప్రకటిస్తూ గెజిట్‌ విడుదల చేసిన వారంలో కేంద్రాన్ని సహాయం కోరుతూ రాష్ట్ర సర్కారు సమగ్ర విజ్ఞాపన పత్రం సమర్పించాలి.',
      articleImage: require('../../../assets/articleStyle6.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 3,
    },
    {
      id: '7',
      headingFirst: 'రాజకీయం.',
      headingSecond: 'కేంద్రానికి వినతిలోనూ జాప్యమే !',
      shortNews:
        'యావత్‌ రాష్ట్రాన్నీ దుర్భిక్షం పీడిస్తున్న సమయాన, కరువు మండలాల గుర్తింపే లోపభూయిష్టంకాగా, ప్రకటించిన మేరకైనా కేంద్రాన్ని సకాలంలో నిధులడిగే విషయంలో రాష్ట్ర ప్రభుత్వం తాత్సారం చేస్తోంది. కేంద్ర కరువు మాన్యువల్‌ ప్రకారం కరువును ప్రకటిస్తూ గెజిట్‌ విడుదల చేసిన వారంలో కేంద్రాన్ని సహాయం కోరుతూ రాష్ట్ర సర్కారు సమగ్ర విజ్ఞాపన పత్రం సమర్పించాలి.',
      articleImage: require('../../../assets/articleStyle7.png'),
      like: '230',
      dislike: '10',
      comment: '43',
      style: 1,
    },
  ];
  const [newsArray, setNewsArray] = useState(NewsArray);

  return (
    <View>
      <CarouselArticle data={newsArray} setData={setNewsArray} />
    </View>
  );
};

export default NewsScreen;
