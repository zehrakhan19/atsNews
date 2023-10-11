import React from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { material } from 'react-native-typography';
import { Button } from '@ats-erp/ats-native-components';
import { SlidesInterface, IntroSliderProps } from './interface';

export function IntroSlider(props: IntroSliderProps) {
  
  const _renderItem = ({item}:{item:SlidesInterface}) => {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <View style={{height: '65%', justifyContent: 'center', alignItems: 'center'}}>
          <item.image />
        </View>
        
        <View style={{padding: 10, height: '35%', paddingTop: 20}}>
          <Text style={[material.title, {color: '#EBA937', fontWeight: 'bold', fontSize: 30, lineHeight: 30}]}>{item.title}</Text>
          <Text style={[material.caption, {fontSize: 16, lineHeight: 21, marginTop: 10}]}>
            {item.text}
          </Text>
        </View>

      </View>
    );
  }
  
  const _onDone = () => {
    props.onDone()
  }

  const _onSkip = () => {
    props.onSkip()
  }

  const _renderSkipButton=()=>{
    return (
      <View >
        <Text style={{marginTop: 10, fontSize: 16, fontWeight: '500', color: '#EBA937'}}>Skip</Text>
      </View>
    );
  };

  const _renderNextButton=()=>{
    return (
      <View style={{backgroundColor: '#EBA937', paddingVertical: 4, paddingHorizontal: 15, borderRadius: 4}}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>Next</Text>
      </View>
    );
  };

  const _renderDoneButton=()=>{
    return (
      <View style={{backgroundColor: '#EBA937', paddingVertical: 4, paddingHorizontal: 15, borderRadius: 4}}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>Get Started</Text>
      </View>
    );
  };


    return(
      <View style={{flex: 1}}>
        <AppIntroSlider 
          activeDotStyle={{backgroundColor: '#EBA937', width: 34}}
          dotStyle={{backgroundColor: 'rgba(0, 0, 0, .2)'}}
          showSkipButton={false}
          data={props.data} 
          dotClickEnabled={false}
          renderItem={_renderItem} 
          renderSkipButton={_renderSkipButton}
          renderNextButton={_renderNextButton} 
          renderDoneButton={_renderDoneButton} 
          onDone={_onDone}
          onSkip={_onSkip}        
        />
      </View>
    ) 
}

export default IntroSlider;