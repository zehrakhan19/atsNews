/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef, useState} from 'react';
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
import {Divider, IconButton, TouchableRipple} from 'react-native-paper';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/Feather';
import ReportIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';

const ArticleView = ({style, data, navigation, setData}: any) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [commented, setCommented] = useState(false);

  const updateNewsItem = (indexToUpdate: any, actionType: string) => {
    setData((prevNewsArray: any) => {
      const updatedNewsArray = [...prevNewsArray];
      const currentNewsItem = {...updatedNewsArray[indexToUpdate]};
      switch (actionType) {
        case 'like':
          currentNewsItem.like = (
            parseInt(currentNewsItem.like) + 1
          ).toString();
          break;
        case 'dislike':
          currentNewsItem.dislike = (
            parseInt(currentNewsItem.dislike) + 1
          ).toString();
          break;
        case 'comment':
          currentNewsItem.comment = (
            parseInt(currentNewsItem.comment) + 1
          ).toString();
          break;
        default:
          break;
      }

      updatedNewsArray[indexToUpdate] = currentNewsItem;
      return updatedNewsArray;
    });
  };
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
          {id !== tabs.length - 1 && <View style={styles.divider} />}
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
        {headingThird && (
          <Text style={[material.display1, styles.headingThird]}>
            {headingThird}
          </Text>
        )}
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
      {filePath && (
        <Image
          source={filePath}
          resizeMethod="resize"
          resizeMode="contain"
          style={
            style === 1
              ? styles.articleStyle
              : style === 3
              ? styles.articleStyleThird
              : styles.default
          }
        />
      )}
    </View>
  );
  const NewsWithPoints = ({points, filePath}: any) => {
    return (
      <>
        {(points || filePath) && (
          <View style={styles.newsWithPointsContainer}>
            <View style={styles.pointsContainer}>
              {points?.map((item: string, idx: number) => (
                <View key={idx} style={styles.pointsList}>
                  <View style={styles.bullets} />
                  <Text style={styles.points}>{item}</Text>
                </View>
              ))}
            </View>
            <View>
              <Image
                source={filePath}
                resizeMode="contain"
                style={styles.default}
              />
            </View>
          </View>
        )}
      </>
    );
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
  const BottomTab = ({index, likesCount, dislikeCount, commentCount}: any) => (
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
            <Text style={material.caption}>Sr.Reporter, Hyderabad</Text>
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
            <Icon.Button
              name="like2"
              color={liked ? 'blue' : 'gray'}
              size={20}
              backgroundColor={'transparent'}
              onPress={e => {
                e.preventDefault();
                setLiked(!liked);
                updateNewsItem(index, 'like');
              }}>
              <Text>{likesCount}</Text>
            </Icon.Button>
          </View>
          <View style={styles.iconContainer}>
            <Icon.Button
              name="dislike2"
              color={disliked ? 'blue' : 'gray'}
              size={20}
              backgroundColor={'transparent'}
              onPress={() => {
                setDisliked(!disliked);
                updateNewsItem(index, 'dislike');
              }}>
              <Text>{dislikeCount}</Text>
            </Icon.Button>
          </View>
          <View style={styles.iconContainer}>
            <CommentIcon.Button
              name="comment-multiple-outline"
              color={commented ? 'blue' : 'gray'}
              size={20}
              backgroundColor={'transparent'}
              onPress={() => {
                setCommented(!commented);
                updateNewsItem(index, 'comment');
              }}>
              <Text>{commentCount}</Text>
            </CommentIcon.Button>
          </View>
        </View>
        <View style={styles.iconTab}>
          <View style={styles.iconContainer}>
            <ShareIcon.Button
              name="share-2"
              color={'gray'}
              size={20}
              backgroundColor={'transparent'}
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
            <ReportIcon.Button
              name="alert-triangle"
              color={'gray'}
              size={20}
              backgroundColor={'transparent'}
            />
          </View>
        </View>
      </View>
    </View>
  );
  const ShortNewsTwoSection = ({filePath, shortNews2}: any) => {
    return (
      <>
        {(filePath || shortNews2) && (
          <View style={styles.shortNewsTwoSection}>
            <View style={styles.imageContainer2}>
              <Image
                source={filePath}
                // resizeMethod="resize"
                resizeMode="contain"
              />
            </View>
            <View style={styles.shortNewsContainer2}>
              <Text style={[material.subheading, styles.shortNews2]}>
                {shortNews2?.split(' ')?.slice(0, 8)?.join(' ') + '...'}
              </Text>
            </View>
          </View>
        )}
      </>
    );
  };
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
        <NewsWithPoints
          points={data?.points}
          filePath={data?.articlePointsImage}
        />
        <ShortNews shortNews={data?.shortNews} />
        <ShortNewsTwoSection
          filePath={data?.articleImage2}
          shortNews2={data?.shortNews2}
        />
        <ArticleImage filePath={data?.articleImage} />
      </ViewShot>
      <BottomTab
        index={data?.id}
        likesCount={data?.like}
        dislikeCount={data?.dislike}
        commentCount={data?.comment}
      />
    </View>
  );
};

export default ArticleView;
