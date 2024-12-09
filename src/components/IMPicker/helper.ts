import { IMRadioButtonProps } from '../IMRadioButton';
import { IPickerOption } from './IMBasePicker';
import { IMMultiPickerOptions } from './IMMultiPicker';

export const convertToRadioButtonList = (
  pickerOptionList: Array<IPickerOption>,
  renderChild: (title: string, subTitle?: string) => void,
  selectedValue?: string,
  styles?: any,
) => {
  const radioButtonList = pickerOptionList?.map((pickerOption) => {
    return {
      ...pickerOption,
      id: pickerOption.value?.toString(),
      name: pickerOption.label,
      isSelected: pickerOption.value?.toString() === selectedValue,
      label: '',
      isDisabled: pickerOption.disabled,
      children: renderChild(pickerOption.label, pickerOption.description),
      style: {
        container: styles?.radioButtonContainer,
        innerContainer: styles?.radioButtonInnerContainer,
        labelText: styles?.radioButtonLabelText,
        contentContainer: styles?.radioButtonContentContainer,
      },
    } as IMRadioButtonProps;
  });
  return radioButtonList;
};

export const convertToMultiPickerOptions = (
  pickeroptionList: Array<IPickerOption>,
  selectedOptionList: Array<IPickerOption>,
) => {
  const newPickerOptionList = pickeroptionList?.map((item, index) => {
    return {
      id: item.value,
      name: item.value,
      index: index,
      label: item.label,
      isSelected: selectedOptionList?.some((selectedItem) => selectedItem.value === item.value) ?? false,
      subLabel: item.description,
    };
  }) as Array<IMMultiPickerOptions>;

  return newPickerOptionList;
};

export const filterSelectedOptions = (
  pickeroptionList: Array<IPickerOption>,
  selectedOptionList: Array<IPickerOption>,
) => {
  const newPickerOptionList = convertToMultiPickerOptions(pickeroptionList, selectedOptionList);
  return newPickerOptionList?.filter((item) => item.isSelected);
};

export const convertToValueLabelForm = (selectedOptionsList?: Array<IMMultiPickerOptions>) => {
  const selectedOptionsInValueLabelForm = selectedOptionsList?.map((item, index) => {
    return {
      value: item.id,
      label: item.label,
      description: item.subLabel,
    };
  }) as Array<IPickerOption>;
  return selectedOptionsInValueLabelForm;
};
