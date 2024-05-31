import React, { FunctionComponent, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import IMIcon from '../IMIcon';
import IMBaseInput from '../IMInput/IMBaseInput';
import CalenderTodayFilled from '../../assets/svg/CalenderTodayFilled';
import { convertToDateString } from '../../utils/common';
import useToggle from '../../customHooks/useToggle';
import useStyles from './styles';

export type DateTimeType = 'time' | 'date' | 'datetime';

interface IMDateTimePickerModalStyles {
  container?: StyleProp<ViewStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  inputRootContainer?: StyleProp<ViewStyle>;
  inputTextStyle?: StyleProp<ViewStyle>;
  iconStyle?: ViewStyle;
}

interface IMDateTimePickerModalProps {
  name: string;
  label: string;
  value: number;
  mode?: DateTimeType;
  placeHolder?: string;
  onChange?: (name: string, val: number) => void;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  errorText?: string;
  isDisabled?: boolean;
  hideCalendarIcon?: boolean;
  testId?: string;
  styles?: IMDateTimePickerModalStyles;
}

const IMDateTimePickerModal: FunctionComponent<IMDateTimePickerModalProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.isDisabled);
  const testId = props.testId || 'imDateTimePickerModal';

  const [showDateTimePicker, toggleShowDateTimePicker] = useToggle(false);
  const [date, setDate] = useState(!!props.value ? new Date(props.value * 1000) : new Date());

  const hideDatePicker = () => {
    toggleShowDateTimePicker(false);
  };

  const onConfirm = (selectedDate: Date) => {
    toggleShowDateTimePicker(false);
    setDate(selectedDate);
    props.onChange?.(props.name, selectedDate.getTime() / 1000);
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
      <DateTimePickerModal
        isVisible={showDateTimePicker}
        mode={props.mode ?? 'date'}
        date={date}
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
        onConfirm={onConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default IMDateTimePickerModal;
