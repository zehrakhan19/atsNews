/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../../../../config/theme';
import {Divider} from 'react-native-paper';
import {Appbar} from '../../../../../libs/ats-native-components/src';

const Comments = ({visible, onClose}: any) => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([
    {
      comment: 'Hello Reporter',
      type: 'get',
    },
    {
      comment: 'Hello Customer',
      type: 'post',
    },
    {
      comment: `In this very sped-up artist's impression showing a collection of distant galaxies, the occasional supernova can be seen. Each of these exploding stars briefly rivals the brightness of its host galaxy. One class of supernovae.`,
      type: 'get',
    },
    {
      comment: `In this very sped-up artist's impression showing a collection of distant galaxies, the occasional supernova can be seen. Each of these exploding stars briefly rivals the brightness of its host galaxy. One class of supernovae, expansion of the Universe and was awarded with the 2011 Nobel Prize for Physics.`,
      type: 'post',
    },
  ]);

  const handleSendComment = () => {
    const updatedComments = [
      ...allComments,
      {
        comment: comment,
        type: 'post',
      },
    ];
    setAllComments(updatedComments);
    setComment('');
  };
  // console.log(allComments, 'allComments');

  return (
    <View>
      <Modal visible={visible} onRequestClose={() => onClose()}>
        <Appbar title="Chat" backAction={() => onClose()} />
        <View style={styles.container}>
          <View style={{gap: 10, paddingVertical: 10}}>
            {allComments?.map((item, id) => (
              <View
                key={id}
                style={{
                  paddingHorizontal: 10,
                  alignItems: item.type === 'get' ? 'flex-start' : 'flex-end',
                }}>
                <View
                  style={[
                    styles.chatContainer,
                    {
                      flexDirection:
                        item.type === 'get' ? 'row' : 'row-reverse',
                    },
                  ]}>
                  <Image
                    source={require('../../../assets/reporter.png')}
                    style={styles.avatar}
                  />
                  <View
                    style={[
                      styles.chat,
                      {
                        justifyContent:
                          item.type === 'get' ? 'flex-start' : 'flex-end',
                      },
                    ]}>
                    <Text style={{flexWrap: 'wrap'}}>{item.comment}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <Divider />
          <View style={styles.containerInput}>
            <Image
              source={require('../../../assets/reporter.png')}
              style={styles.avatar}
            />
            <TextInput
              style={styles.input}
              value={comment}
              onChangeText={e => setComment(e)}
            />
            <Icon
              name="arrow-up-circle"
              color={theme.colors.primary}
              size={24}
              onPress={() => handleSendComment()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerInput: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: 'lightgrey',
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  chatContainer: {
    width: '80%',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  chat: {
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 'auto',
    maxWidth: '80%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
});
export default Comments;
