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
import {List} from 'react-native-paper';
import {Card} from '../../../../../libs/ats-native-components/src';

const SideBarView = () => {
  const {t} = useTranslation();
  const [visible, setvisible] = useState(false);
  const changeLng = (lang: any) => {
    i18next.changeLanguage(lang);
    setvisible(false);
  };
  const handleLanguageChange = () => setvisible(true);
  const renderChangeLanguageModal = () => (
    <Modal visible={visible} onRequestClose={() => setvisible(false)}>
      <View style={{flex: 1, padding: 10, backgroundColor: theme.colors.bar}}>
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
              <Text style={{color: theme.colors.ash}}>
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
    },
    {
      id: '1',
      title: 'Select your Content Language',
      discription: `${t('selected-language')}`,
      onPress: null,
    },
    {
      id: '2',
      title: 'Your selected location',
      discription: 'Syamala Residancy, Manikonda (Change)',
      onPress: null,
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <List.Item
        title={item.title}
        description={item.discription}
        descriptionStyle={{color: theme.colors.primary}}
        left={props => <List.Icon {...props} icon="folder" />}
        onPress={item.onPress}
      />
    );
  };
  return (
    <View>
      <Card>
        <FlatList
          data={OptionList}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item?.id}
        />
      </Card>
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
