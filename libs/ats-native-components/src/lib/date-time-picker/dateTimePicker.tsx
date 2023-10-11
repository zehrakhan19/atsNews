import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native';
import DatePickerIcon from 'react-native-vector-icons/EvilIcons';

export interface DateTimePickerProps {
  callback: (value: any) => void;
  showDatePicker?: boolean;
  hideDatePickerCallback?: () => null;
}
export function DateAndTimePicker({
  callback,
  showDatePicker,
  hideDatePickerCallback
}: DateTimePickerProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [show, setShow] = useState(false);

  // const handleChange = (event: any, selectedDate: string | undefined) => {
  //   if (selectedDate) {
  //     // console.log({ selectedDate });
  //     setShow(false);
  //     setDate(new Date(selectedDate));
  //     callback(selectedDate);
  //   }
  // };

  const handleChange = (event: any, selectedDate: string | undefined) => {
    if (selectedDate) {
      setShow(false);
      // hideDatePickerCallback();
      const parsedDate = new Date(selectedDate);
      setDate(parsedDate);
      callback(parsedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
    if (!date) {
      setDate(new Date());
    }
  };

  // console.log(date?.toDateString(), 'DATE');

  return (
    <SafeAreaView>
      <DatePickerIcon
        name='calendar'
        size={30}
        onPress={() => showDatepicker()}
      />
      {(showDatePicker || show) && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date || new Date()}
          is24Hour={true}
          onChange={(e, selectedDate) =>
            handleChange(e, selectedDate?.toISOString())
          }
        />
      )}
    </SafeAreaView>
  );
}
export default DateAndTimePicker;
