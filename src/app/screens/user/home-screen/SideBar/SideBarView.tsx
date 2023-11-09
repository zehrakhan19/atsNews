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
  Platform,
  Alert,
} from 'react-native';
import {
  Button,
  IconButton,
} from '../../../../../../libs/ats-native-components/src';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React, {useEffect, useState} from 'react';
import i18next, {languageResources} from '../../../../services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../../../../services/languagesList.json';
import {theme} from '../../../../../config/theme';
import {Divider, List} from 'react-native-paper';
import {material} from 'react-native-typography';
import RNUpiPayment from 'react-native-upi-payment';
import {SafeAreaView} from 'react-native';
// import {
//   GooglePay,
//   RequestDataType,
//   AllowedCardNetworkType,
//   AllowedCardAuthMethodsType,
// } from 'react-native-google-pay';

// const allowedCardNetworks: AllowedCardNetworkType[] = ['VISA', 'MASTERCARD'];
// const allowedCardAuthMethods: AllowedCardAuthMethodsType[] = [
//   'PAN_ONLY',
//   'CRYPTOGRAM_3DS',
// ];

// const gatewayRequestData: RequestDataType = {
//   cardPaymentMethod: {
//     tokenizationSpecification: {
//       type: 'PAYMENT_GATEWAY',
//       gateway: 'example',
//       gatewayMerchantId: 'exampleGatewayMerchantId',
//     },
//     allowedCardNetworks,
//     allowedCardAuthMethods,
//   },
//   transaction: {
//     totalPrice: '123',
//     totalPriceStatus: 'FINAL',
//     currencyCode: 'USD',
//   },
//   merchantName: 'Example Merchant',
// };
const SideBarView = ({navigation}: any) => {
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     GooglePay?.setEnvironment(GooglePay?.ENVIRONMENT_TEST);
  //   }
  // });
  const {t} = useTranslation();
  const [visibleAppLang, setVisibleAppLang] = useState(false);
  const [visibleNewsLang, setVisibleNewsLang] = useState(false);
  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'brown'];
  const [selectedAppLang, setselectedAppLang] = useState('en');
  const [selectedNewsLang, setselectedNewsLang] = useState('te');

  const handleAppLanguageChange = () => setVisibleAppLang(true);
  const handleNewsLanguageChange = () => setVisibleNewsLang(true);

  // const payWithGooglePay = (requestData: RequestDataType) => {
  //   // Check if Google Pay is available
  //   GooglePay?.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods).then(
  //     ready => {
  //       if (ready) {
  //         // Request payment token
  //         GooglePay?.requestPayment(requestData)
  //           .then(handleSuccess)
  //           .catch(handleError);
  //       }
  //     },
  //   );
  // };

  // const handleSuccess = (token: string) => {
  //   // Send a token to your payment gateway
  //   Alert.alert('Success', `token: ${token}`);
  // };

  // const handleError = (error: any) =>
  //   Alert.alert('Error', `${error.code}\n${error.message}`);
  const paymentGateway = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: '8887765012@ybl',
        payeeName: 'Zehra Khan',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn',
      },
      successCallback,
      failureCallback,
    );
  };
  function successCallback(data: any) {
    console.log(data, 'Payment Successful');
  }
  function failureCallback(data: any) {
    console.log(data, 'Payment Failed');
  }
  const changeLng = (lang: any) => {
    setselectedAppLang(lang);
    i18next.changeLanguage(lang);
    setVisibleAppLang(false);
  };
  const renderChangeAppLanguageModal = () => (
    <Modal
      visible={visibleAppLang}
      onRequestClose={() => setVisibleAppLang(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 2,
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <Text style={material.body1}>
          Choose your preferred <Text style={material.body2}>Language</Text> to
          access the <Text style={material.body2}>App</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 30,
          gap: 40,
        }}>
        <FlatList
          data={Object.keys(languageResources)}
          renderItem={({item, index}) => {
            console.log(item);

            return (
              <TouchableOpacity
                onPress={() => changeLng(item)}
                style={{
                  padding: 20,
                  borderBottomWidth: 2,
                  borderColor: colors[index],
                  flexDirection: 'row',
                  width: '98%',
                  justifyContent: 'space-between',
                }}>
                <Text style={[material.title, {color: colors[index]}]}>
                  {languagesList[item]?.nativeName}
                </Text>
                <View style={{flexDirection: 'row', gap: 20}}>
                  {selectedAppLang === item && (
                    <IconButton
                      icon={'check'}
                      containerColor={theme.colors.success}
                      size={20}
                    />
                  )}
                  <Text style={[material.body2, {color: 'grey'}]}>
                    {languagesList[item]?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
  const renderChangeNewsLanguageModal = () => (
    <Modal
      visible={visibleNewsLang}
      onRequestClose={() => setVisibleNewsLang(false)}
      animationType="slide"
      presentationStyle="pageSheet">
      <View
        style={{
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 2,
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <Text style={material.body1}>
          Choose your preferred <Text style={material.body2}>Language</Text> to
          read the <Text style={material.body2}>News</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 30,
          gap: 40,
        }}>
        <FlatList
          data={Object.keys(languageResources).slice(1)}
          renderItem={({item, index}) => {
            console.log(item);

            return (
              <TouchableOpacity
                onPress={() => {
                  setselectedNewsLang(item);
                  setVisibleNewsLang(false);
                }}
                style={{
                  padding: 20,
                  borderBottomWidth: 2,
                  borderColor: colors[index],
                  flexDirection: 'row',
                  width: '98%',
                  justifyContent: 'space-between',
                }}>
                <Text style={[material.title, {color: colors[index]}]}>
                  {languagesList[item]?.nativeName}
                </Text>
                <View style={{flexDirection: 'row', gap: 20}}>
                  {selectedNewsLang === item && (
                    <IconButton
                      icon={'check'}
                      containerColor={theme.colors.success}
                      size={20}
                    />
                  )}
                  <Text style={[material.body2, {color: 'grey'}]}>
                    {languagesList[item]?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
  const OptionList = [
    {
      id: '0',
      title: `${t('change-language')}`,
      discription: `${t('selected-language')}`,
      onPress: handleAppLanguageChange,
      icon: require('../../../../assets/language.png'),
    },
    {
      id: '1',
      title: `${t('change-content-language')}`,
      discription:
        languagesList[selectedNewsLang]?.nativeName +
        ' ' +
        languagesList[selectedNewsLang]?.name,
      onPress: handleNewsLanguageChange,
      icon: require('../../../../assets/contentLanguage.png'),
    },
    {
      id: '2',
      title: `${t('selected-location')}`,
      discription: 'Syamala Residancy, Manikonda (Change)',
      onPress: null,
      icon: require('../../../../assets/selectedLocation.png'),
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
  const renderBelowItem = ({item}: any) => {
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
  const options = [
    {
      title: t('reporter'),
      icon: <FeatherIcon name={'user'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: t('viral'),
      icon: <FeatherIcon name={'eye'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
    {
      title: t('contact'),
      icon: <FeatherIcon name={'phone-call'} size={20} onPress={() => null} />,
      onPress: () => null,
    },
  ];
  return (
    <View>
      <View style={styles.guest}>
        <View style={{flexDirection: 'row', gap: 6}}>
          <View style={styles.guestImageBox}>
            <Image
              source={require('../../../../assets/reporter.png')}
              style={styles.guestImage}
            />
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => navigation.navigate('Login with mobile number')}>
            <Text style={material.title}>{t(`guest`)}</Text>
            <Text style={material.caption}>
              <Text style={{color: theme.colors.primary}}>Click here </Text> to
              select mobile number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
        }}>
        <SafeAreaView>
          <FlatList
            data={OptionList}
            renderItem={item => renderItem(item)}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      </View>
      <View style={styles.categoriesContainer}>
        {/* <Button label="UPI Payment" callback={() => paymentGateway()} />
        <Button
          label="Card Payment"
          callback={
            () => null //payWithGooglePay(gatewayRequestData)
          }
        /> */}
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
                source={require('../../../../assets/categoryImg.png')}
                style={styles.iconImage}
              />
              <Text>ABC</Text>
            </View>
          ))}
        </View>
        <FlatList data={options} renderItem={item => renderBelowItem(item)} />
      </View>
      {renderChangeAppLanguageModal()}
      {renderChangeNewsLanguageModal()}
    </View>
  );
};

export const styles = StyleSheet.create({
  categoriesContainer: {
    padding: 10,
    paddingTop: 20,
    gap: 20,
    position: 'relative',
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
  guest: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  guestImageBox: {
    backgroundColor: theme.colors.accent,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 3,
    margin: 5,
  },
  guestImage: {
    height: 30,
    width: 40,
    resizeMode: 'contain',
  },
});

export default SideBarView;
