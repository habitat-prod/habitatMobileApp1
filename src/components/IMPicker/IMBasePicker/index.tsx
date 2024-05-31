import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import ArrowDropDownFilled from '../../../assets/svg/ArrowDropDownFilled';
import Close from '../../../assets/svg/Close';
import IMChip from '../../IMChip';
import IMIcon from '../../IMIcon';
import IMLoader from '../../IMLoader';
import { IMMultiPickerOptions } from '../IMMultiPicker';
import { useStyles } from './styles';

export interface IPickerOption {
  label: string;
  value: number | string;
  description?: string;
  disabled?: boolean;
}

export interface IMPickerStyleProps {
  rootContainer?: StyleProp<ViewStyle>;
  pickerContainer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  labelContainer?: StyleProp<ViewStyle>;
  dropdownIconContainer?: StyleProp<ViewStyle>;
  closeIconContainer?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
  value?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
  helperText?: StyleProp<TextStyle>;
  chipContainer?: ViewStyle;
  chipLabel?: TextStyle;
  titleContainer?: ViewStyle;
  radioButtonListContainer?: ViewStyle;
}

interface IMBasePickerProps {
  testId: string;
  label: string;
  value: string | Array<IMMultiPickerOptions>;
  onPickerClick: () => void;
  onClearAllValues?: () => void;
  onItemRemove?: (item: any) => void;
  placeholder?: string;
  startAdornment?: JSX.Element;
  isMultiPicker?: boolean;
  showPickerOptions?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  styles?: IMPickerStyleProps;
}

const IMBasePicker: React.FC<IMBasePickerProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderLabel = () => `${props.label}${props.required ? '*' : ''}`;

  const renderChips = (data: Array<IMMultiPickerOptions>) => {
    return (
      <View style={styles.chipsContainerStyle}>
        {data.map((item: IMMultiPickerOptions, index: number) => (
          <IMChip
            key={index}
            title={item.label ?? ''}
            type="secondary"
            variant="outline"
            id="selectedItemChip"
            size="small"
            styles={{
              containerStyle: [styles.chipStyle, props.styles?.chipContainer],
              textStyle: props.styles?.chipLabel,
            }}
            showCloseIcon
            onClose={() => props.onItemRemove?.(item)}
          />
        ))}
      </View>
    );
  };

  const onPickerClick = () => {
    !props.isDisabled && props.onPickerClick();
  };

  return (
    <View
      style={[styles.rootContainer, props.styles?.rootContainer]}
      testID={`${props.testId}-IMBasePicker`}
      accessibilityLabel={`${props.testId}-IMBasePicker`}
    >
      <TouchableOpacity
        onPress={onPickerClick}
        disabled={props.isLoading || props.isDisabled}
        style={[
          styles.pickerContainer,
          props.styles?.pickerContainer,
          props.showPickerOptions && styles.focusedPickerContainer,
          (props.isDisabled || props.isLoading) && styles.disabledPickerContainer,
        ]}
      >
        {!!props.value.length && !!props.label && (
          <View style={[styles.labelContainer]}>
            <Text
              numberOfLines={1}
              style={[styles.labelText, props.styles?.labelText, !!props.errorText && styles.errorLabelText]}
            >
              {renderLabel()}
            </Text>
          </View>
        )}
        <View style={[styles.contentContainer, props.styles?.container]}>
          {props.startAdornment}
          {props.isMultiPicker ? (
            // TODO: the value display based on multi or single selection
            props.value?.length ? (
              renderChips(props.value)
            ) : (
              <Text
                style={[styles.value, props.styles?.value, !props.value?.length && styles.placeholder]}
                numberOfLines={1}
              >
                {props.placeholder ?? renderLabel()}
              </Text>
            )
          ) : (
            <Text style={[styles.value, props.styles?.value, !props.value && styles.placeholder]} numberOfLines={1}>
              {!!props.value ? props.value : props.placeholder ?? renderLabel()}
            </Text>
          )}
          {!!props.value && !!props.onClearAllValues && (
            <IMIcon
              testId={`${props.testId}-closeIcon-IMBasePicker`}
              iconSvg={<Close />}
              onClick={props.onClearAllValues}
              containerStyle={[styles.iconContainer, props.styles?.closeIconContainer]}
            />
          )}
          <IMIcon
            testId={`${props.testId}-arrowDropDownIcon-IMBasePicker`}
            iconSvg={<ArrowDropDownFilled />}
            onClick={props.onPickerClick}
            disabled={props.isDisabled}
            containerStyle={[styles.arrowIconContainer, props.styles?.dropdownIconContainer]}
            iconStyle={styles.iconStyle}
          />
        </View>
        {props.isLoading && <IMLoader containerStyle={styles.loaderStyle} />}
      </TouchableOpacity>
      {!!props.helperText && <Text style={[styles.helperText, props.styles?.helperText]}>{props.helperText}</Text>}
      {!!props.errorText && <Text style={[styles.errorText, props.styles?.errorText]}>{props.errorText}</Text>}
    </View>
  );
};
export default IMBasePicker;
