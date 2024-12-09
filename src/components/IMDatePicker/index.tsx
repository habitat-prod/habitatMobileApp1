import React, { FunctionComponent, useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import CalenderTodayFilled from '../../assets/svg/CalenderTodayFilled';
import useToggle from '../../customHooks/useToggle';
import { convertToDateString } from '../../utils/common';
import IMIcon from '../IMIcon';
import IMBaseInput from '../IMInput/IMBaseInput';
import useStyles from './styles';

interface IMDateTimePickerStyles {
  container?: StyleProp<ViewStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  inputRootContainer?: StyleProp<ViewStyle>;
  inputTextStyle?: StyleProp<ViewStyle>;
  iconStyle?: ViewStyle;
}

interface IMDateTimePickerProps {
  name: string;
  label: string;
  value: number;
  placeHolder?: string;
  onChange?: (name: string, val: number) => void;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  errorText?: string;
  isDisabled?: boolean;
  hideCalendarIcon?: boolean;
  testId?: string;
  styles?: IMDateTimePickerStyles;
}

const IMDateTimePicker: FunctionComponent<IMDateTimePickerProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.isDisabled);
  const testId = props.testId || 'imDateTimePicker';

  const [showDateTimePicker, toggleShowDateTimePicker] = useToggle(false);
  const [date, setDate] = useState(!!props.value ? new Date(props.value * 1000) : new Date());

  const onChangeDatePicker = (event: DateTimePickerEvent, selectedDate?: Date) => {
    toggleShowDateTimePicker();
    if (event.type !== 'dismissed' && !!selectedDate) {
      setDate(selectedDate);
      props.onChange?.(props.name, selectedDate.getTime() / 1000);
    }
  };

  return (
    <View testID={testId} accessibilityLabel={testId} style={[styles.container, props.styles?.container]}>
      <IMBaseInput
        label={props.label}
        disabled={true}
        placeholder={props.placeHolder}
        errorText={props.errorText}
        name={props.name}
        testId={`${testId}Input`}
        value={convertToDateString(props.value, props.dateFormat || 'dd/mm/yyyy')}
        style={{
          rootContainer: props.styles?.inputRootContainer,
          container: [styles.inputContainer, props.styles?.inputContainer],
          inputText: props.styles?.inputTextStyle,
        }}
        endAdornment={
          !props?.hideCalendarIcon && (
            <IMIcon
              testId={`${testId}CalenderIcon`}
              onClick={toggleShowDateTimePicker}
              iconSvg={<CalenderTodayFilled style={props.styles?.iconStyle} />}
              disabled={props.isDisabled}
            />
          )
        }
      />
      {showDateTimePicker && (
        <DateTimePicker
          testID={testId}
          accessibilityLabel={testId}
          value={date}
          minimumDate={props.minDate}
          maximumDate={props.maxDate}
          onChange={onChangeDatePicker}
        />
      )}
    </View>
  );
};

export default IMDateTimePicker;
