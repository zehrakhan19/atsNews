// Import the necessary libraries and modules for testing
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputText } from './input-text';

// Test cases
describe('InputText', () => {
  it('renders without crashing', () => {
    render(<InputText value='' onChangeText={() => null} />);
  });

  it('displays the correct placeholder', () => {
    const placeholder = 'Enter text here';
    const { getByPlaceholderText } = render(
      <InputText placeholder={placeholder} value='' onChangeText={() => null} />
    );
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeTruthy();
  });

  it('displays the correct value', () => {
    const value = 'Hello, world!';
    const { getByDisplayValue } = render(
      <InputText value={value} onChangeText={() => null} />
    );
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeTruthy();
  });

  it('triggers onChangeText callback', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        onChangeText={onChangeTextMock}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    const inputValue = 'New text';
    fireEvent.changeText(inputElement, inputValue);
    expect(onChangeTextMock).toHaveBeenCalledWith(inputValue);
  });

  it('renders as multiline when the multiline prop is true', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        multiline
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.multiline).toBe(true);
  });

  it('renders as single-line when the multiline prop is false', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        multiline={false}
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.multiline).toBe(false);
  });

  it('renders with error style when error prop is true', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        error
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.style).toHaveProperty('borderColor', 'red');
  });

  it('renders without error style when error prop is false', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        error={false}
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.style).not.toHaveProperty('borderColor', 'red');
  });

  it('renders as disabled when the disabled prop is true', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        disabled
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.editable).toBe(false);
  });

  it('renders as enabled when the disabled prop is false', () => {
    const { getByPlaceholderText } = render(
      <InputText
        placeholder='Type here'
        value=''
        disabled={false}
        onChangeText={() => null}
      />
    );
    const inputElement = getByPlaceholderText('Type here');
    expect(inputElement.props.editable).toBe(true);
  });
});
