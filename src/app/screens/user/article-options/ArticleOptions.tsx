/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  BottomSheet,
  Button,
  InputText,
  RadioButton,
} from '../../../../../libs/ats-native-components/src';
import {theme} from '../../../../config/theme';
import {Divider, List} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {material} from 'react-native-typography';

const ArticleOptions = ({visible, onClose}: any) => {
  const {t} = useTranslation();
  const [reportVisible, setReportVisible] = useState(false);

  const handleReportStory = () => {
    setReportVisible(true);
  };
  const handleSubmitReport = () => {
    setReportVisible(false);
  };
  const renderReportStory = () => (
    <View>
      <BottomSheet
        isOpen={reportVisible}
        onClose={() => setReportVisible(false)}
        height={460}>
        <View style={styles.reportHeader}>
          <Text style={material.title}>Report Mistake</Text>
          <AntDesignIcon
            name="close"
            color={'grey'}
            size={24}
            onPress={() => setReportVisible(false)}
          />
        </View>
        <Divider />
        <View>
          <FlatList
            data={reportOptionList}
            renderItem={item => renderReportItem(item)}
            keyExtractor={item => item?.id}
          />
        </View>
        <View style={styles.comment}>
          <InputText placeholder="Type here..." multiline />
        </View>
        <Button
          label="Report a mistake"
          callback={() => handleSubmitReport()}
        />
      </BottomSheet>
    </View>
  );
  const handleDownload = () => null;
  const handleBookmark = () => null;
  const handleReportSelect = (item: any) => {
    const updatedOptions = reportOptionList?.map(option => {
      if (option.id === item.id) {
        return {...option, selected: true};
      } else {
        return {...option, selected: false};
      }
    });

    setReportOptionList(updatedOptions);
  };
  const OptionList = [
    {
      id: '0',
      icon: (
        <Icon
          name="alert-triangle"
          color={'#000'}
          size={24}
          onPress={() => null}
        />
      ),
      title: `${t('report-story')}`,
      discription: 'Help us improve better',
      onPress: handleReportStory,
    },
    {
      id: '1',
      icon: (
        <Icon name="download" color={'#000'} size={24} onPress={() => null} />
      ),
      title: `${t('download')}`,
      discription: 'Save to Local Directory',
      onPress: handleDownload,
    },
    {
      id: '2',
      icon: (
        <Icon name="bookmark" color={'#000'} size={24} onPress={() => null} />
      ),
      title: `${t('bookmark')}`,
      discription: 'Save to read offline',
      onPress: handleBookmark,
    },
  ];
  const [reportOptionList, setReportOptionList] = useState([
    {
      id: '0',
      title: 'Mistake observed',
      selected: false,
    },
    {
      id: '1',
      title: 'Wrong content',
      selected: false,
    },
    {
      id: '2',
      title: 'Hateful statements',
      selected: false,
    },
    {
      id: '3',
      title: 'Biased story',
      selected: false,
    },
    {
      id: '4',
      title: 'Copyright violation',
      selected: false,
    },
  ]);
  const renderReportItem = ({item}: any) => {
    return (
      <>
        <List.Item
          key={item.id}
          title={item.title}
          onPress={() => handleReportSelect(item)}
          left={() => (
            <View style={styles.iconContainer}>
              <RadioButton
                selected={item?.selected}
                onSelect={() => handleReportSelect(item)}
              />
            </View>
          )}
        />
        <Divider />
      </>
    );
  };
  const renderItem = ({item}: any) => {
    return (
      <List.Item
        key={item.id}
        title={item.title}
        onPress={item.onPress}
        description={item.discription}
        descriptionStyle={{color: theme.colors.accent}}
        left={() => <View style={styles.iconContainer}>{item.icon}</View>}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    );
  };
  return (
    <View>
      <BottomSheet isOpen={visible} onClose={() => onClose()} height={260}>
        <FlatList
          data={OptionList}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item?.id}
        />
      </BottomSheet>
      {renderReportStory()}
    </View>
  );
};
export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    paddingLeft: 30,
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  comment: {
    padding: 10,
  },
});
export default ArticleOptions;
