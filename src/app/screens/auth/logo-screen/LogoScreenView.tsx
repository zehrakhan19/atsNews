/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {View, Text, ScrollView} from 'react-native';

function LogoScreenView({navigation}: any) {
  const navigate = () => {
    navigation.navigate('main');
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 700,
          }}>
          <Image
            source={require('../../../assets/kaburllu.png')}
            style={{
              width: 450,
              height: 300,
              resizeMode: 'contain',
            }}
          />
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Text style={{color: 'red', fontSize: 16, fontWeight: '600'}}>
          Local News App
        </Text>
      </View>
    </>
  );
}

export default LogoScreenView;
