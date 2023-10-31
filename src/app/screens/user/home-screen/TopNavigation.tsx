/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ArrowIcon from 'react-native-vector-icons/SimpleLineIcons';
import {theme} from '../../../../config/theme';
import {useTranslation} from 'react-i18next';
import {material} from 'react-native-typography';
import {
  Appbar,
  Card,
  IconButton,
} from '../../../../../libs/ats-native-components/src';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, List} from 'react-native-paper';

const TopNavigation = ({index, setIndex}) => {
  const {t} = useTranslation();
  const [visibleSetting, setvisibleSetting] = useState(false);
  const [notification, setNotification] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [clearCash, setClearCash] = useState(false);

  const options = [
    {
      title: 'About us',
      icon: <FeatherIcon name={'info'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: 'Contact with us',
      icon: <FeatherIcon name={'phone-call'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: 'Feedback',
      icon: <FeatherIcon name={'star'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: 'Terms & Conditions',
      icon: <FeatherIcon name={'file-text'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: 'Privacy Policy',
      icon: <AntDesignIcon name={'profile'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
  ];
  const cardOneOptions = [
    {
      title: 'Notifications',
      color: notification ? theme.colors.primary : 'grey',
      onPress: () => setNotification(!notification),
      icon: notification ? (
        <FeatherIcon name={'bell'} color={theme.colors.primary} size={20} />
      ) : (
        <FeatherIcon name={'bell-off'} color="grey" size={20} />
      ),
    },
    {
      title: 'AutoPay Video',
      color: autoPlay ? theme.colors.primary : 'grey',
      onPress: () => setAutoPlay(!autoPlay),
      icon: autoPlay ? (
        <FeatherIcon
          name={'pause-circle'}
          color={theme.colors.primary}
          size={20}
        />
      ) : (
        <FeatherIcon name={'play-circle'} color="grey" size={20} />
      ),
    },
  ];
  const cardTwoOptions = [
    {
      title: 'Bookmark',
      color: bookmark ? theme.colors.primary : 'grey',
      onPress: () => setBookmark(!bookmark),
      icon: (
        <FeatherIcon
          name={'bookmark'}
          color={bookmark ? theme.colors.primary : 'grey'}
          size={20}
        />
      ),
    },
    {
      title: 'Clear Cash',
      color: clearCash ? theme.colors.primary : 'grey',
      onPress: () => setClearCash(!clearCash),
      icon: (
        <MaterialCommunityIcon
          name={'broom'}
          color={clearCash ? theme.colors.primary : 'grey'}
          size={20}
        />
      ),
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <>
        <List.Item
          title={item?.title}
          left={() => (
            <View style={{justifyContent: 'center'}}>{item?.icon}</View>
          )}
          right={() => (
            <IconButton
              icon={'chevron-right'}
              size={20}
              iconColor="grey"
              containerColor="transparent"
              onPress={item?.onPress}
            />
          )}
          onPress={item.onPress}
        />
        <Divider />
      </>
    );
  };
  const renderSettings = () => (
    <Modal
      visible={visibleSetting}
      onRequestClose={() => setvisibleSetting(false)}
      animationType="slide">
      <Appbar title="Settings" backAction={() => setvisibleSetting(false)} />
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <Text
          style={[
            material.caption,
            {textAlign: 'right', paddingHorizontal: 20, paddingVertical: 10},
          ]}>
          App Version 8.43
        </Text>
        <View style={styles.cards}>
          <View style={styles.cardContainer}>
            {cardOneOptions?.map((item, id) => (
              <TouchableOpacity
                key={id}
                onPress={item?.onPress}
                style={styles.innerContainer}>
                <View>{item?.icon}</View>
                <Text style={[material.body2, {color: item.color}]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.cardContainer}>
            {cardTwoOptions?.map((item, id) => (
              <TouchableOpacity
                key={id}
                onPress={item?.onPress}
                style={styles.innerSecondContainer}>
                <View>{item?.icon}</View>
                <Text style={[material.body2, {color: item.color}]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <Text style={[material.title, {padding: 10}]}>Contact Us</Text>
          <FlatList data={options} renderItem={item => renderItem(item)} />
        </View>
      </View>
    </Modal>
  );
  return (
    <View style={{...styles.container, backgroundColor: '#fff'}}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{...styles.text, color: '#000'}}>
            <AntDesignIcon
              name="setting"
              size={24}
              color="#000"
              onPress={() => setvisibleSetting(true)}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <ArrowIcon name="arrow-left" size={15} color={theme.colors.primary} />
          <Text style={{...styles.text, color: '#000'}}>{t('discover')}</Text>
        </TouchableOpacity>
      )}
      <Text style={{...styles.center, color: '#000'}}>
        {index ? `${t('all-news')}` : `${t('discover')}`}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesignIcon name="reload1" size={24} color="#000" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: '#000'}}>{t('all-news')}</Text>
          <ArrowIcon
            name="arrow-right"
            size={15}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
      {renderSettings()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 14,
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  cards: {
    gap: 10,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    width: '49%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,

    shadowColor: '#52006A',
    elevation: 10,
  },
  innerSecondContainer: {
    width: '49%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#52006A',
    elevation: 10,
  },
});

export default TopNavigation;
