/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ThemeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowIcon from 'react-native-vector-icons/SimpleLineIcons';
import ReloadIcon from 'react-native-vector-icons/AntDesign';
import {theme} from '../../../../config/theme';
import {useTranslation} from 'react-i18next';

const TopNavigation = ({index, setIndex}) => {
  const {t} = useTranslation();
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.bar}}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          {/* <Text style={{...styles.text, color: 'lightgrey'}}>
            <ThemeIcon
              name="theme-light-dark"
              size={24}
              color={theme.colors.primary}
            />
          </Text> */}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <ArrowIcon name="arrow-left" size={15} color={theme.colors.primary} />
          <Text style={{...styles.text, color: 'lightgrey'}}>
            {t('discover')}
          </Text>
        </TouchableOpacity>
      )}
      <Text style={{...styles.center, color: '#fff'}}>
        {index ? `${t('all-news')}` : `${t('discover')}`}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <ReloadIcon name="reload1" size={24} color={theme.colors.primary} />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: 'lightgrey'}}>
            {t('all-news')}
          </Text>
          <ArrowIcon
            name="arrow-right"
            size={15}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
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
});

export default TopNavigation;
