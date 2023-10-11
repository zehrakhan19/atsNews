import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CheckBoxComponent from './check-box';

describe('CheckBoxComponent', () => {
  it('should render unchecked checkbox by default', () => {
    const { getByTestId } = render(
      <CheckBoxComponent status='unchecked' onPress={() => null} />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.status).toEqual('unchecked');
  });

  it('should change the status to checked on clicking the checkbox', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CheckBoxComponent status='unchecked' onPress={onPressMock} />
    );
    const checkbox = getByTestId('checkbox');

    fireEvent.press(checkbox);
    expect(checkbox.props.status).toEqual('checked');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should change the status to indeterminate on clicking the checkbox when status is checked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CheckBoxComponent status='checked' onPress={onPressMock} />
    );
    const checkbox = getByTestId('checkbox');

    fireEvent.press(checkbox);
    expect(checkbox.props.status).toEqual('indeterminate');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should change the status to unchecked on clicking the checkbox when status is indeterminate', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CheckBoxComponent status='indeterminate' onPress={onPressMock} />
    );
    const checkbox = getByTestId('checkbox');

    fireEvent.press(checkbox);
    expect(checkbox.props.status).toEqual('unchecked');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should render checkbox with custom color', () => {
    const { getByTestId } = render(
      <CheckBoxComponent
        status='unchecked'
        onPress={() => null}
        color='#00ff00'
      />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.color).toEqual('#00ff00');
  });

  it('should render disabled checkbox', () => {
    const { getByTestId } = render(
      <CheckBoxComponent status='unchecked' onPress={() => null} disabled />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.disabled).toBe(true);
  });
});
