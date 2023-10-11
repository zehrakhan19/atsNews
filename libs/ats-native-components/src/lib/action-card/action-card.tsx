import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { iOSUIKit, systemWeights, iOSColors } from 'react-native-typography';

interface ActionCardProps {
  mainText: string;
  actionText?: string;
  callback: () => void | null;
  color?: string;
  style?: StyleProp<ViewStyle>;
  error?: boolean;
  customError?: string;
}

export function ActionCard({
  mainText,
  actionText,
  callback,
  color,
  style,
  error,
  customError
}: ActionCardProps) {
  return (
    <TouchableOpacity
      onPress={() => callback()}
      style={{ marginTop: 5, marginBottom: 5 }}
    >
      <View
        style={[
          style,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 4,
            borderWidth: error ? 2 : 1,
            borderColor: error ? '#AF1919' : 'lightgrey',
            minWidth: '30%'
          }
        ]}
      >
        <Text
          style={[
            iOSUIKit.body,
            systemWeights.light,
            { fontSize: 16, fontWeight: '600' }
          ]}
        >
          {mainText}
        </Text>
        {actionText ? (
          <Text
            style={{ color: color || iOSColors.midGray, fontWeight: 'bold' }}
          >
            {actionText}
          </Text>
        ) : (
          <View>
            <TextInput.Icon
              style={{ marginRight: 50 }}
              onPress={() => callback()}
              icon={`chevron-down`}
            />
          </View>
        )}
      </View>
      {error && (
        <HelperText type='error' style={{ color: '#a30000' }}>
          {customError ? customError : 'This Field is required'}
        </HelperText>
      )}
    </TouchableOpacity>
  );
}
