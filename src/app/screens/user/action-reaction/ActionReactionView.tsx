/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef} from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import {Appbar} from '../../../../../libs/ats-native-components/src';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Article from '../article/Article';
import {Divider} from 'react-native-paper';
import {material} from 'react-native-typography';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/Feather';
import ReportIcon from 'react-native-vector-icons/Feather';
import ClockIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './ActionReaction.styles';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';

const ActionReactionView = ({navigation}: any) => {
  const action = {
    url: require('../../../assets/article1.png'),
    type: 'action',
    topic: 'NATIONAL',
    heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
        `,
    content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
        `,
  };
  const reaction = {
    url: require('../../../assets/article1.png'),
    topic: 'NATIONAL',
    type: 'reaction',
    heading: `చంద్రబాబు ఆరోగ్యంపై జైళ్ల శాఖ క్లారిటీ-బరువు వివాదంపైనా...
        `,
    content: `ఏపీలో స్కిల్ డెవలప్మెంట్ కేసులో అరెస్టు అయి రాజమండ్రి జైల్లో రిమాండ్ ఖైదీగా ఉంటున్న టీడీపీ అధినేత చంద్రబాబు ఆరోగ్యంపై నిన్నటి నుంచి మీడియాలో అనేక ఊహాగానాలు చక్కర్లు కొట్టాయి. ఈ మధ్య ఆయన్ను కలిసిన టీడీపీ నేతలు, కుటుంబ సభ్యులు చెబుతున్న మాటల్ని బట్టి చంద్రబాబు జైల్లో ఎండవేడిమి కారణంగా డీహైడ్రేషన్ కు గురైనట్లు, అనంతరం ఆయనకు స్కిన్ అలర్జీ కూడా సోకినట్లు ప్రచారం జరిగింది. దీంతో ఇవాళ చంద్రబాబు ఆరోగ్యంపై టీడీపీ నేతలు తీవ్ర ఆందోళన వ్యక్తం చేశారు
        `,
  };
  const shotRef = useRef();
  const myCustomShare = async (headline: any, uri: any) => {
    const shareOptions = {
      url: uri,
      message: headline,
    };
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (err) {
      console.log('Error => ', err);
    }
  };
  const renderActionReactionView = () => {
    return <>{renderTabComponent()}</>;
  };

  const Tab = createMaterialTopTabNavigator();
  const renderTabComponent = () => (
    <Tab.Navigator
      initialRouteName={'Action'}
      screenOptions={{
        tabBarGap: 0,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: Dimensions.get('window').width / 2},
        tabBarLabelStyle: {color: theme.colors.accent},
        tabBarStyle: {backgroundColor: theme.colors.bar},
        tabBarIndicatorStyle: {backgroundColor: theme.colors.primary},
      }}>
      <Tab.Screen name="Action">{() => <DataView data={action} />}</Tab.Screen>
      <Tab.Screen name="Reaction">
        {() => <DataView data={reaction} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
  const DataView = ({data}: any) => {
    return (
      <View>
        <View style={styles.mainContainer}>
          <ViewShot
            style={styles.shotContainer}
            ref={shotRef}
            options={{fileName: 'NewsArticle', format: 'jpg', quality: 0.9}}>
            <>
              <View style={{flex: 2}}>
                <Image source={data?.url} style={styles.image} />
              </View>
              <View style={styles.article}>
                <View style={styles.iconTab}>
                  <View style={[styles.iconContainer, styles.elevation]}>
                    <Icon name="like2" color={'gray'} size={20} />
                  </View>
                  <View style={[styles.iconContainer, styles.elevation]}>
                    <Icon name="dislike2" color={'gray'} size={20} />
                  </View>
                  <View style={[styles.iconContainer, styles.elevation]}>
                    <CommentIcon
                      name="comment-multiple-outline"
                      color={'gray'}
                      size={20}
                    />
                  </View>
                  <View style={[styles.iconContainer, styles.elevation]}>
                    <ShareIcon
                      name="share-2"
                      color={'gray'}
                      size={20}
                      onPress={() => {
                        shotRef.current
                          .capture()
                          .then(async (uri: any) => {
                            // console.log(uri, 'uri');
                            myCustomShare(data?.heading, uri);
                          })
                          .catch(({err}: any) => console.log(err));
                        console.log('share clicked');
                      }}
                    />
                  </View>
                  <View style={[styles.iconContainer, styles.elevation]}>
                    <ReportIcon
                      name="alert-triangle"
                      color={'gray'}
                      size={20}
                    />
                  </View>
                </View>
                <View>
                  <Text style={material.title}>{data?.heading}</Text>
                  <Text style={material.body1}>{data?.content}</Text>
                </View>
              </View>
            </>
          </ViewShot>
          <View style={styles.bottomTab}>
            <View style={{flexDirection: 'row', gap: 3}}>
              <View style={styles.reporterImageBox}>
                <Image
                  source={require('../../../assets/reporter.png')}
                  style={styles.reporterImage}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={[material.body2, {color: 'gray'}]}>
                  Reporter Name
                </Text>
                <Text style={material.caption}>Sr.Reporter, hyderabad</Text>
              </View>
            </View>
            <View
              style={[
                styles.iconImageBox,
                {
                  backgroundColor:
                    data.type === 'action' ? '#EC414A' : '#4BB236',
                },
              ]}>
              {data.type === 'action' ? (
                <Image
                  source={require('../../../assets/action.png')}
                  style={styles.iconImage}
                />
              ) : (
                <Image
                  source={require('../../../assets/reaction.png')}
                  style={styles.iconImage}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                alignItems: 'center',
              }}>
              <ClockIcon name="av-timer" color={'gray'} size={24} />
              <Text style={[material.body2, {color: 'gray'}]}>05: 50 PM</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderAppBar = () => {
    return (
      <Appbar title={'Home screen'} backAction={() => navigation.goBack()} />
    );
  };

  return (
    <>
      {/* {renderAppBar()} */}
      {renderActionReactionView()}
      <Divider />
    </>
  );
};

export default ActionReactionView;
