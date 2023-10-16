/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
// import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './ReporterDashboard.styles';
import {Appbar, Card} from 'react-native-paper';
import {iOSUIKit} from 'react-native-typography';
import {Fab} from '../../../../../libs/ats-native-components/src';
// import newspaper from 'react-native-vector-icons/Ionicons';

const ReporterDashboardView = ({navigation, handleNavigateToAddNews}: any) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        {/* <Appbar.BackAction onPress={() => null} /> */}
        <Appbar.Content
          title={
            <View style={styles.appbar}>
              <View>
                <Image source={require('../../../assets/publishedPost.png')} />
              </View>
              <View style={styles.appbarText}>
                <Text style={[iOSUIKit.bodyEmphasized, {color: 'black'}]}>
                  Hello
                </Text>
                <Text style={[iOSUIKit.bodyEmphasized, {color: 'black'}]}>
                  Reporter
                </Text>
              </View>
            </View>
          }
        />
      </Appbar.Header>
      <ScrollView style={{padding: 10}}>
        <View>
          <View style={styles.main}>
            <Card style={styles.card}>
              <View>
                <Text style={[styles.heading, iOSUIKit.bodyEmphasized]}>
                  Published Post
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={[iOSUIKit.bodyEmphasized, styles.text1]}>70</Text>
                <Image source={require('../../../assets/publishedPost.png')} />
              </View>
            </Card>
            <Card style={styles.card}>
              <View>
                <Text style={[styles.heading, iOSUIKit.bodyEmphasized]}>
                  UnPublished Post
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={[iOSUIKit.bodyEmphasized, styles.text2]}>20</Text>
                <Image
                  source={require('../../../assets/unPublishedPost.png')}
                />
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
      <Fab
        icon="file-plus"
        color="white"
        style={styles.fab}
        callback={() => {
          handleNavigateToAddNews();
        }}
      />
    </>
  );
};

export default ReporterDashboardView;
