/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ClockIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Article.styles';
import {iOSUIKit, material} from 'react-native-typography';
import {Divider} from 'react-native-paper';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/Feather';
import ReportIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';

const ArticleView = ({style, data, navigation}: any) => {
  const tabs = [
    'సంపుటిక : 1 ',
    'సంచిక : 3',
    'కామారెడ్డి',
    'గురువారం',
    '9/11/2023',
  ];
  const TabBars = () => (
    <View style={styles.tabContainer}>
      {tabs?.map((tab, id) => (
        <View key={id} style={styles.tab}>
          <Text style={styles.tabText}>{tab}</Text>
          {id !== tabs.length - 1 && <View style={styles.divider}></View>}
        </View>
      ))}
    </View>
  );
  const Headers = ({
    headingFirst,
    headingSecond,
    headingThird = null,
    headerForth = null,
  }: any) => (
    <View>
      <View style={styles.headerContainer}>
        <Text style={[material.title, styles.headingFirst]}>
          {headingFirst}
        </Text>
        <Text style={[material.subheading, styles.headingSecond]}>
          {headingSecond}
        </Text>
        <Text style={[material.display1, styles.headingThird]}>
          {headingThird}
        </Text>
        {headerForth && (
          <View style={styles.tabContainer}>
            <View style={styles.tab}>
              <Text style={styles.tabText}>{headerForth}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
  const ShortNews = ({shortNews}: any) => (
    <View style={styles.shortNewsContainer}>
      <Text style={[material.subheading, styles.shortNews]}>
        {shortNews?.split(' ').slice(0, 20).join(' ') + '...'}
      </Text>
    </View>
  );
  const ArticleImage = ({filePath}: any) => (
    <View style={styles.imageContainer}>
      <Image
        source={filePath}
        resizeMethod="resize"
        style={(style === 1 || style === 3) && styles.articleStyle}
      />
    </View>
  );
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
  const BottomTab = ({likesCount, dislikeCount, commentCount}: any) => (
    <View style={styles.bottomTabContainer}>
      <View style={styles.bottomTab}>
        <View style={{flexDirection: 'row', gap: 3}}>
          <View style={styles.reporterImageBox}>
            <Image
              source={require('../../../../assets/reporter.png')}
              style={styles.reporterImage}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={[material.body2, {color: 'gray'}]}>Reporter Name</Text>
            <Text style={material.caption}>Sr.Reporter, hyderabad</Text>
          </View>
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
      <Divider />
      <View style={styles.userInteractionTab}>
        <View style={styles.iconTab}>
          <View style={styles.iconContainer}>
            <Icon name="like2" color={'gray'} size={20} />
            <Text>{likesCount}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="dislike2" color={'gray'} size={20} />
            <Text>{dislikeCount}</Text>
          </View>
          <View style={styles.iconContainer}>
            <CommentIcon
              name="comment-multiple-outline"
              color={'gray'}
              size={20}
            />
            <Text>{commentCount}</Text>
          </View>
        </View>
        <View style={styles.iconTab}>
          <View style={styles.iconContainer}>
            <ShareIcon
              name="share-2"
              color={'gray'}
              size={20}
              onPress={() => {
                shotRef.current
                  .capture()
                  .then(async (uri: any) => {
                    // console.log(uri, 'uri');
                    myCustomShare('Article', uri);
                  })
                  .catch(({err}: any) => console.log(err));
                console.log('share clicked');
              }}
            />
          </View>
          <View style={styles.iconContainer}>
            <ReportIcon name="alert-triangle" color={'gray'} size={20} />
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.articleContainer}>
      <TabBars />
      <ViewShot
        style={styles.shotContainer}
        ref={shotRef}
        options={{fileName: 'NewsArticle', format: 'jpg', quality: 0.9}}>
        <Headers
          headingFirst={data?.headingFirst}
          headingSecond={data?.headingSecond}
          headingThird={data?.headingThird}
          headerForth={data?.headerForth}
        />
        <ShortNews shortNews={data?.shortNews} />
        <ArticleImage filePath={data?.articleImage} />
      </ViewShot>
      <BottomTab
        likesCount={data?.like}
        dislikeCount={data?.dislike}
        commentCount={data?.comment}
      />
    </View>
  );
};

export default ArticleView;
