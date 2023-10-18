import {View, Text} from 'react-native';
import React from 'react';

const SideBarView = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
      }}>
      <Text style={{color: '#000'}}>SideBar</Text>
    </View>
  );
};

export default SideBarView;
