import {Text, TouchableOpacity, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {iOSColors, iOSUIKit, material} from 'react-native-typography';
import {StyleSheet} from 'react-native';

export interface InputTextProps {
  placeholder?: string;
  value?: string;
  multiline?: boolean;
  textColor?: string;
  error?: boolean;
  disabled?: boolean;
  label?: string;
  inFieldLabel?: boolean;
  defaultValue?: string;
  onChangeText?: (value: any) => void;
  onFocus?: any;
  onBlur?: () => void;
  style?: any;
  rightAddornmentType?: 'text' | 'icon';
  right?: any;
  left?: any;
  leftIcon?: IconSource;
  rightIcon?: IconSource;
  keyboardType?: 'number-pad';
  small?: boolean;
  maxLength?: number;
  labelRight?: string;
  labelRightPress?: any;
  autoFocus?: boolean;
  rightIconPres?: any;
  leftIconPres?: any;
  required?: boolean;
  editable?: boolean;
  customError?: string;
  helperText?: string;
}

export function InputText({
  placeholder,
  label,
  inFieldLabel,
  defaultValue,
  onFocus = () => null,
  onBlur = () => null,
  style,
  maxLength,
  right,
  left,
  leftIcon,
  rightIcon,
  value,
  multiline,
  textColor,
  error,
  disabled,
  onChangeText,
  keyboardType,
  small,
  labelRight,
  labelRightPress,
  autoFocus,
  rightIconPres,
  leftIconPres,
  required = false,
  editable,
  customError,
  helperText,
}: InputTextProps) {
  return (
    <View>
      {!inFieldLabel && label && (
        <View style={styles.labelContainer}>
          <Text
            style={[
              material.body1,
              iOSUIKit.subheadEmphasized,
              {paddingTop: 12, paddingBottom: 6},
            ]}>
            {label}
            {required && <Text style={{color: 'red'}}> * </Text>}
          </Text>
          {labelRight && (
            <TouchableOpacity onPress={labelRightPress}>
              <Text style={{color: 'red'}}>{labelRight}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <TextInput
        mode="outlined"
        label={inFieldLabel ? label : undefined}
        style={[
          style,
          {
            backgroundColor: 'white',
            height: small && 35,
          },
        ]}
        outlineColor="lightgrey"
        activeOutlineColor={iOSColors.gray}
        activeUnderlineColor={iOSColors.gray}
        placeholderTextColor={iOSColors.gray}
        onFocus={() => onFocus()}
        textColor={textColor || '#000'}
        defaultValue={defaultValue || ''}
        left={
          leftIcon ? (
            <TextInput.Icon icon={leftIcon} onPress={leftIconPres} />
          ) : (
            left && <TextInput.Affix text={left} />
          )
        }
        right={
          rightIcon ? (
            <TextInput.Icon icon={rightIcon} onPress={rightIconPres} />
          ) : (
            right && <TextInput.Affix text={right} />
          )
        }
        value={value}
        onChangeText={text => onChangeText && onChangeText(text)}
        multiline={multiline || false}
        numberOfLines={4}
        placeholder={placeholder || ''}
        error={error || false}
        disabled={disabled || false}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoFocus={autoFocus || false}
        editable={editable}
        onBlur={() => onBlur()}
      />
      {error && (
        <HelperText type="error" style={{color: '#a30000'}}>
          {customError ? customError : 'This Field is required'}
        </HelperText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
});
