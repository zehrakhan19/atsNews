import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, List, Surface, Divider } from 'react-native-paper';
export interface AutoCompletePickerOption {
  label: string;
  value: string;
}

export interface AutoCompletePickerProps {
  /**
   * Placeholder of Input
   */
  placeholder?: string;

  /**
   * autocomplete options
   */
  options: Array<AutoCompletePickerOption>;

  /**
   * @returns value of selected option
   */
  callback: (value: string) => void;

  /**
   * @returns label of selected option
   */
  valueSelected: (label: string) => void;

  /**
   * boolean value that tells whether the search function is server side or client side
   */
  serverSide?: boolean;

  /**
   * Shows down arrow on the right side
   */
  showRightDownArrow?: boolean;

  /**
   * Tells if you want anything as end-adornment or not
   */
  right?: boolean;

  /**
   * freemode allows to added custom options
   */
  freemode?: boolean;
}

export function AutoCompletePicker({
  options,
  callback,
  placeholder = 'Select',
  valueSelected,
  serverSide = false,
  showRightDownArrow = false,
  right = false,
  freemode = false
}: AutoCompletePickerProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState('');
  const [data, setData] = useState(options);
  const [createText, setCreateText] = useState(false);

  // const handleInputFocus = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleCreateText = (text: string) => {
    const newItem = { label: text, value: text };
    setData((prevData) => [...prevData, newItem]);
  };
  const handleInputChange = (txt: string) => {
    setText(txt);
    if (!serverSide) {
      let newData;
      const filterableText = txt.toUpperCase();
      if (txt.length > 0) {
        setCreateText(true);
        newData = options.filter((item) =>
          Object.values(item).join('').includes(filterableText)
        );
      } else {
        setCreateText(false);
        newData = options;
      }
      setData(newData);
    }
  };
  const handleSelection = (label: string, value: string) => {
    callback(value);
    setText(value);
    setIsOpen(false);
    valueSelected(label);
  };

  return (
    <View>
      <View style={[styles.inputContainer, { zIndex: 999 }]}>
        <View>
          <TextInput
            autoFocus
            label={placeholder}
            value={text}
            style={{ backgroundColor: 'white', marginTop: 5 }}
            mode='outlined'
            onChangeText={(text) => handleInputChange(text)}
            right={
              showRightDownArrow && (
                <TextInput.Icon
                  // onPress={() => handleInputFocus()}
                  icon={`chevron-${isOpen ? 'up' : 'down'}`}
                />
              )
            }
            // onFocus={() => setIsOpen(true)}
            // onBlur={() => setIsOpen(false)}
          />
          {freemode && createText && (
            <TouchableOpacity
              onPress={() => {
                handleCreateText(text);
                handleSelection(text, text);
              }}
            >
              <View style={styles.createTextConatiner}>
                <Text
                  style={styles.createText}
                >{`Click to use "${text}"`}</Text>
              </View>
            </TouchableOpacity>
          )}

          {isOpen && (
            <Surface
              style={{
                backgroundColor: '#fff',
                marginTop: 15,
                width: '100%',
                flex: 1
              }}
              elevation={4}
            >
              {data?.map((i, idx) => {
                return (
                  <View key={idx}>
                    <List.Item
                      onPress={() => handleSelection(i.label, i.value)}
                      title={i?.label}
                      right={() => right && <Text>{i?.value}</Text>}
                    />
                    <Divider />
                  </View>
                );
              })}
            </Surface>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10
  },
  createTextConatiner: {
    padding: 10,
    borderColor: '#9d9595',
    borderWidth: 0.5,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    marginHorizontal: 2,
    borderStyle: 'dashed'
  },
  createText: {
    fontWeight: 'bold'
  }
});

export default AutoCompletePicker;
