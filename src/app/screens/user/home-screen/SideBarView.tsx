/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import i18next, {languageResources} from '../../../services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../../../services//languagesList.json';
import {theme} from '../../../../config/theme';

const SideBarView = () => {
  const {t} = useTranslation();
  const [visible, setvisible] = useState(false);
  const changeLng = lang => {
    i18next.changeLanguage(lang);
    setvisible(false);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
      }}>
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
      <Text style={{color: '#000'}}>{t('welcome')}</Text>
      <TouchableOpacity
        onPress={() => setvisible(true)}
        style={{backgroundColor: 'red', padding: 10}}>
        <Text>{t('change-language')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideBarView;
