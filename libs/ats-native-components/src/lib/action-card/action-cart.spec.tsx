import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ActionCard } from './action-card';

test('renders ActionCard with mainText and actionText', () => {
  const mainText = 'Main Text';
  const actionText = 'Action Text';
  const { getByText } = render(
    <ActionCard mainText={mainText} actionText={actionText} />
  );

  const mainTextElement = getByText(mainText);
  const actionTextElement = getByText(actionText);

  expect(mainTextElement).toBeTruthy();
  expect(actionTextElement).toBeTruthy();
});

test('renders ActionCard with only mainText', () => {
  const mainText = 'Main Text';
  const { getByText, queryByText } = render(<ActionCard mainText={mainText} />);

  const mainTextElement = getByText(mainText);
  const actionTextElement = queryByText('Action Text');

  expect(mainTextElement).toBeTruthy();
  expect(actionTextElement).toBeNull();
});

test('calls the callback function when pressed', () => {
  const mainText = 'Main Text';
  const callbackMock = jest.fn();
  const { getByText } = render(
    <ActionCard mainText={mainText} callback={callbackMock} />
  );

  const cardContainer = getByText(mainText).parent; // Get the parent container of the mainText element (TouchableOpacity)
  fireEvent.press(cardContainer);

  expect(callbackMock).toHaveBeenCalled();
});
