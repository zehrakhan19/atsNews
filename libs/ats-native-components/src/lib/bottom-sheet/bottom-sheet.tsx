import React, { ReactNode, useEffect, useRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

/* eslint-disable-next-line */
export interface BottomSheetProps {
  isOpen: boolean;
  animationType?: 'none' | 'fade' | 'slide';
  height?: number;
  children: ReactNode;
  onClose: () => void | null;
  style?: StyleProp<ViewStyle>;
}

export function BottomSheet({
  isOpen,
  animationType,
  height,
  children,
  onClose,
  style
}: BottomSheetProps) {
  const refRBSheet = useRef<any>(null);

  useEffect(() => {
    if (isOpen) refRBSheet.current.open();
    else refRBSheet.current.close();
  }, [isOpen]);

  return (
    <RBSheet
      ref={refRBSheet}
      animationType={animationType || 'none'}
      height={height || 200}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={() => onClose()}
      openDuration={200}
      closeDuration={200}
      customStyles={{
        container: {
          borderRadius: 10
        }
      }}
      style={[
        style,
        {
          wrapper: {
            backgroundColor: 'transparent'
          },
          draggableIcon: {
            backgroundColor: '#000'
          }
        }
      ]}
    >
      {children}
    </RBSheet>
  );
}

export default BottomSheet;
