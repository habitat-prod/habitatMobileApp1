import React, { FunctionComponent, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import WomanSearching from '../../../assets/Illustration/WomanSearching';
import { IPageInfo } from '../../../commonModels/pageInfo';
import IMBottomSheet from '../../IMBottomSheet';
import IMCheckList, { ICheckBoxListData } from '../../IMCheckBoxList';
import IMSearchInput from '../../IMInput/IMSearchInput';
import IMBasePicker, { IPickerOption } from '../IMBasePicker';
import { convertToMultiPickerOptions, convertToValueLabelForm, filterSelectedOptions } from '../helper';
import { useStyles } from './styles';

interface IMMultiPickerStyleProps {
  rootContainer?: StyleProp<ViewStyle>;
  pickerContainer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  checkBoxContentContainer?: ViewStyle;
  labelContainer?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
  value?: StyleProp<TextStyle>;
  error?: StyleProp<TextStyle>;
  helperText?: StyleProp<TextStyle>;
  chipContainer?: ViewStyle;
  chipLabel?: TextStyle;
}

export interface IMMultiPickerOptions {
  id: string;
  name: string;
  index: number;
  label?: string;
  isSelected: boolean;
  subLabel?: string;
}

interface IMMultiPickerProps {
  testId: string;
  name: string;
  values: Array<IPickerOption>;
  onChange: (name: string, selectedOptions?: Array<IPickerOption>) => void;
  pickerOptions: Array<IPickerOption>;
  label: string;
  searchNeeded?: boolean;
  onFocus?: (fieldName: string) => void;
  onSearch?: (val?: string) => void;
  onBlur?: () => void;
  onGetPickerData?: (searchString?: string, cursor?: string | number, pageSize?: number) => void;
  placeholder?: string;
  hideLabel?: boolean;
  primaryBtnTitle?: string;
  helperText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  pageInfo?: IPageInfo;
  required?: boolean;
  delayInMilliSec?: number;
  startAdornment?: JSX.Element;
  showError?: boolean;
  errorText?: string;
  bottomSheetTitle?: string;
  styles?: IMMultiPickerStyleProps;
}

const IMMultiPicker: FunctionComponent<IMMultiPickerProps> = (props: IMMultiPickerProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('common');

  const [selectedOptions, setSelectedOptions] = useState(filterSelectedOptions(props.pickerOptions, props.values));
  const [searchValue, setSearchValue] = useState('');
  const [showBottomsheet, setShowBottomsheet] = useState<boolean>(false);
  const [pickerOptions, setPickerOptions] = useState(convertToMultiPickerOptions(props.pickerOptions, props.values));

  useEffect(() => {
    setSelectedOptions(filterSelectedOptions(props.pickerOptions, props.values));
    setPickerOptions(convertToMultiPickerOptions(props.pickerOptions, props.values));
  }, [props.pickerOptions, props.values]);

  const applybutton = () => {
    const array = [] as Array<IMMultiPickerOptions>;
    pickerOptions?.map((item) => {
      if (item.isSelected) {
        array.push(item);
      }
    });
    props.onChange(props.name, convertToValueLabelForm(array));
  };

  const clearButtonAction = () => {
    pickerOptions?.forEach((item) => (item.isSelected = false));
    setShowBottomsheet(false);
    props.onChange(props.name, []);
  };

  const onItemRemove = (item: ICheckBoxListData) => {
    pickerOptions[item.index].isSelected = false;
    const newSelectedOptions = selectedOptions.filter((object) => object.id != item.id);
    props.onChange(props.name, convertToValueLabelForm(newSelectedOptions));
  };

  const handleDropdownClick = () => {
    setShowBottomsheet(true);
    setSearchValue('');
    props.onFocus?.(props.name);
    props.onGetPickerData?.('');
  };

  const handleRefresh = () => props.onGetPickerData && (setSearchValue(''), props.onGetPickerData?.());

  const handleEndReached = () => props.onGetPickerData?.(searchValue, props.pageInfo?.cursor);

  const renderEmptyView = () => (
    <>{!props.isLoading && isEmpty(props.pickerOptions) && <WomanSearching style={styles.emptyView} />}</>
  );

  const bottomSheetBody = () => {
    return (
      <View style={styles.bottomSheetBody}>
        {props.searchNeeded && (
          <IMSearchInput
            name="searchBar"
            testId="searchBar"
            label={t('search')}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearch={props.onSearch}
            delayInMilliSeconds={props.delayInMilliSec ?? 200}
          />
        )}
        <IMCheckList
          id="Checklist"
          name={'pickerOptionChecklist'}
          data={pickerOptions ?? []}
          onChange={(item, index) => {
            const tempData = [...pickerOptions];
            tempData[index].isSelected = !tempData[index].isSelected;
            setPickerOptions(tempData);
          }}
          handleEndReached={handleEndReached}
          handleRefresh={handleRefresh}
          isLoading={props.isLoading}
          isError={props.isError}
          hasNext={props.pageInfo?.hasNext}
          listEmptyComponent={renderEmptyView()}
          styles={{
            checkBoxListContainer: styles.checkListContainer,
            checkBoxStyles: {
              contentContainer: [styles.checkBoxContentContainer, props.styles?.checkBoxContentContainer],
              textContainer: props.styles?.labelContainer,
              checkBoxContainer: styles.checkBoxContainer,
              label: styles.checkBoxLabelStyle,
            },
          }}
        />
      </View>
    );
  };

  const renderBottomSheet = () => {
    return (
      <IMBottomSheet
        id={`${props.bottomSheetTitle} Bottomsheet`}
        open={showBottomsheet}
        title={props.bottomSheetTitle ?? props.label}
        footer={{
          id: 'multiselectbottomsheet',
          primaryBtnTitle: props.primaryBtnTitle ?? t('done'),
          primaryBtnAction: () => {
            applybutton();
            setShowBottomsheet(false);
          },
          primaryBtnVariant: 'tertiary',
          primaryBtnDisabled: !props.pickerOptions.length,
          secondaryButtonTitle: t('clearAll'),
          secondaryBtnAction: clearButtonAction,
          secondaryVariant: 'button',
          secondaryBtnDisabled: !props.pickerOptions.length,
          styles: { container: styles.footerContainer, primaryBtnContainer: styles.footerPrimaryBtnContainer },
        }}
        onClose={() => {
          setShowBottomsheet(false);
          applybutton();
        }}
        styles={{
          container: styles.bottomSheetContainer,
          contentArea: styles.bottomSheetContentStyle,
        }}
        enableBackDropDismiss
      >
        {bottomSheetBody()}
      </IMBottomSheet>
    );
  };

  return (
    <View testID={`${props.testId}-IMMultiPicker`} accessibilityLabel={`${props.testId}-IMMultiPicker`}>
      <IMBasePicker
        value={selectedOptions}
        testId={`${props.testId}-IMMultiPicker`}
        label={props.label}
        onPickerClick={handleDropdownClick}
        placeholder={props.placeholder}
        showPickerOptions={showBottomsheet}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
        errorText={props.errorText}
        helperText={props.helperText}
        required={props.required}
        styles={props.styles}
        isMultiPicker
        startAdornment={props.startAdornment}
        onItemRemove={onItemRemove}
      />
      {showBottomsheet && renderBottomSheet()}
    </View>
  );
};

export default IMMultiPicker;
