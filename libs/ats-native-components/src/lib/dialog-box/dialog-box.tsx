import React from 'react';
import { View } from 'react-native';
import { Dialog, Portal, Paragraph } from 'react-native-paper';
import { Button } from '../button/button';
import { iOSUIKit } from 'react-native-typography';

export interface CustomDialogBoxProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  onConfirm: () => void;
  onReject: () => void;
}

/**
 *
 * @param visible is dialog box open or not
 * @param onClose callback function that will execute on dialog box close
 * @param title (optional) header text for the dialog box
 * @param content (optional) content for the dialog box
 * @param onConfirm callback function that will execute when Yes button clicked
 * @param onReject callback function that will execute when No button clicked
 * @returns
 */

export function CustomDialogBox({
  visible,
  title,
  content,
  onClose,
  onConfirm,
  onReject = () => null
}: CustomDialogBoxProps) {
  return (
    <View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={() => onClose()}
          style={{ borderRadius: 5, backgroundColor: 'white' }}
        >
          {title && (
            <Dialog.Title style={iOSUIKit.title3}>{title}</Dialog.Title>
          )}
          {content && (
            <Dialog.Content>
              <Paragraph>{content}</Paragraph>
            </Dialog.Content>
          )}
          <Dialog.Actions>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ paddingHorizontal: 5 }}>
                <Button
                  label='Yes'
                  callback={() => onConfirm()}
                  mode='text'
                  borderRadius={10}
                  size='small'
                />
              </View>
              <View style={{ paddingHorizontal: 5 }}>
                <Button
                  label='No'
                  callback={() => onReject()}
                  size='small'
                  borderRadius={15}
                />
              </View>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
