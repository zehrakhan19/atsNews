/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import i18next, {languageResources} from '../../../services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../../../services//languagesList.json';
import {theme} from '../../../../config/theme';
import {Divider, List} from 'react-native-paper';
import {Card, IconButton} from '../../../../../libs/ats-native-components/src';
import {material} from 'react-native-typography';

const SideBarView = () => {
  const {t} = useTranslation();
  const [visibleLang, setvisibleLang] = useState(false);
  const changeLng = (lang: any) => {
    i18next.changeLanguage(lang);
    setvisibleLang(false);
  };
  const handleLanguageChange = () => setvisibleLang(true);
  const renderChangeLanguageModal = () => (
    <Modal
      visible={visibleLang}
      onRequestClose={() => setvisibleLang(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 30,
          gap: 40,
        }}>
        <Text style={material.title}>Select Language</Text>
        <FlatList
          data={Object.keys(languageResources)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => changeLng(item)}
              style={{
                padding: 10,
                borderBottomWidth: 2,
                borderColor: theme.colors.primary,
              }}>
              <Text style={{color: '#000'}}>
                {languagesList[item]?.nativeName}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
  const OptionList = [
    {
      id: '0',
      title: `${t('change-language')}`,
      discription: `${t('selected-language')}`,
      onPress: handleLanguageChange,
      icon: require('../../../assets/language.png'),
    },
    {
      id: '1',
      title: 'Select your Content Language',
      discription: `${t('selected-language')}`,
      onPress: null,
      icon: require('../../../assets/contentLanguage.png'),
    },
    {
      id: '2',
      title: 'Your selected location',
      discription: 'Syamala Residancy, Manikonda (Change)',
      onPress: null,
      icon: require('../../../assets/selectedLocation.png'),
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <>
        <List.Item
          title={item.title}
          description={item.discription}
          descriptionStyle={{color: theme.colors.primary}}
          left={() => (
            <View>
              <Image source={item.icon} />
            </View>
          )}
          right={() => (
            <IconButton
              icon={'chevron-right'}
              size={18}
              onPress={item.onPress}
            />
          )}
          onPress={item.onPress}
        />
        <Divider />
      </>
    );
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 8,
          paddingHorizontal: 16,
        }}>
        <FlatList
          data={OptionList}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item?.id}
        />
      </View>
      {renderChangeLanguageModal()}
      <View style={styles.container}>
        <Text style={styles.heading}>{t('categories')}</Text>
        <View style={styles.wrapper}>
          {[1, 2, 3, 4, 5, 6, 7].map((i, id) => (
            <View
              key={id}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/categoryImg.png')}
                style={styles.iconImage}
              />
              <Text>ABC</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    gap: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
  },
  wrapper: {
    flexDirection: 'row',
    width: 40,
    gap: 12,
  },
  iconImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});

export default SideBarView;
