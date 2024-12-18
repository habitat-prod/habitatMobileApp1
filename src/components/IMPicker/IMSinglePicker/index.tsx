import React, { FunctionComponent, useEffect, useState } from 'react';
import { isEmpty, startCase } from 'lodash';
import { useTranslation } from 'react-i18next';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import WomanSearching from '../../../assets/Illustration/WomanSearching';
import AddFilled from '../../../assets/svg/AddFilled';
import { IPageInfo } from '../../../commonModels/pageInfo';
import IMBottomSheet from '../../IMBottomSheet';
import IMButton from '../../IMButton';
import IMSearchInput from '../../IMInput/IMSearchInput';
import IMLabelPair from '../../IMLabelPair';
import { IMRadioButtonProps } from '../../IMRadioButton';
import IMRadioButtonList from '../../IMRadioButtonList';
import IMBasePicker, { IMPickerStyleProps, IPickerOption } from '../IMBasePicker';
import { convertToRadioButtonList } from '../helper';
import { useStyles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

interface ISearchProps {
  onSearch?: (val?: string) => void;
  label?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}

interface IAddButtonProps {
  label: string;
  onClick?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

interface IMSinglePickerProps {
  testId: string;
  pickerOptions: Array<IPickerOption>;
  name: string;
  label: string;
  value: IPickerOption;
  bottomSheetHeader?: string;
  placeholder?: string;
  required?: boolean;
  showDescription?: boolean;
  onChange?: (fieldName: string, val: IPickerOption) => void;
  onFocus?: (fieldName: string) => void;
  onBlur?: () => void;
  onGetPickerData?: (searchString?: string, cursor?: string | number, pageSize?: number) => void;
  searchProps?: ISearchProps;
  addButtonProps?: IAddButtonProps;
  startAdornment?: JSX.Element;
  isLoading?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  pageInfo?: IPageInfo;
  errorText?: string;
  helperText?: string;
  styles?: IMPickerStyleProps;
}

const IMSinglePicker: FunctionComponent<IMSinglePickerProps> = (props: IMSinglePickerProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('common');

  const [radioButtonList, setRadioButtonList] = useState<Array<IMRadioButtonProps>>([{} as IMRadioButtonProps]);
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setRadioButtonList(
      convertToRadioButtonList(props.pickerOptions, renderListItem, props.value.value?.toString(), styles),
    );
  }, [props.pickerOptions, props.value.value?.toString()]);

  const toggleShowBottomSheet = () => {
    showBottomSheet && setSearchValue('');
    setShowBottomSheet((showBottomSheet) => !showBottomSheet);
  };

  const getLabel = () => {
    if (props.value.value) {
      return `${props.value.label || '-'}${
        props.showDescription && !!props.value.description ? ` - ${startCase(props.value.description)}` : ''
      }`;
    }
    return '';
  };

  const handleDropdownClick = () => {
    toggleShowBottomSheet();
    props.onFocus?.(props.name);
    props.onGetPickerData?.(searchValue);
  };

  const handleRadioButtonListChange = (value: any, index?: number) => {
    if (index !== undefined) {
      const selectedValue = radioButtonList?.[index].id;
      setRadioButtonList(convertToRadioButtonList(props.pickerOptions, renderListItem, selectedValue, styles));
      props.onChange?.(
        props.name,
        props.pickerOptions.find((pickerOption) => pickerOption.value.toString() === selectedValue) ??
          ({} as IPickerOption),
      );
      props.onBlur?.();
      toggleShowBottomSheet();
    }
  };

  const handleAddButtonClick = () => {
    toggleShowBottomSheet();
    props.addButtonProps?.onClick?.();
  };

  const handleSearch = (val: string) => {
    setSearchValue(val);
    props.onGetPickerData?.(val);
    props.searchProps?.onSearch?.(val);
  };

  const handleRefresh = () => props.onGetPickerData && (setSearchValue(''), props.onGetPickerData?.());

  const handleEndReached = () => props.onGetPickerData?.(searchValue, props.pageInfo?.cursor);

  const renderListItem = (title: string, subtitle?: string) => (
    <IMLabelPair
      primaryText={title}
      secondaryText={subtitle}
      variant="vertical"
      styles={{
        container: styles.listItemContainer,
        primaryText: styles.listItemTitle,
        secondaryText: styles.listItemSubtitle,
      }}
    />
  );

  const renderEmptyView = () => (
    <>{!props.isLoading && isEmpty(props.pickerOptions) && <WomanSearching style={styles.emptyView} />}</>
  );

  const renderRadioButtonList = () => (
    <IMRadioButtonList
      id={`${props.testId}-IMSinglePicker-IMRadioButtonList`}
      name="radioButtonList"
      data={radioButtonList}
      onChange={handleRadioButtonListChange}
      handleEndReached={handleEndReached}
      handleRefresh={handleRefresh}
      isLoading={props.isLoading}
      isError={props.isError}
      hasNext={props.pageInfo?.hasNext}
      listEmptyComponent={renderEmptyView()}
      styles={{ container: [styles.radioButtonListContainer, props.styles?.radioButtonListContainer ] }}
    />
  );

  const renderBottomSheetBody = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}
      >
      <View>
        {!!props.searchProps && (
          <IMSearchInput
            name="searchBar"
            testId={`${props.testId}-IMSinglePicker-searchBar`}
            label={props.searchProps.label ?? t('search')}
            hideLabel
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearch={handleSearch}
            styles={{ searchBarWrapper: [styles.searchBarWrapper, props.searchProps.wrapperStyle] }}
          />
        )}
        {!!props.addButtonProps && (
          <IMButton
            id={`${props.testId}-IMSinglePicker-addButton`}
            title={props.addButtonProps.label}
            variant="text"
            leftIcon={<AddFilled color={theme.Palette.IMPrimary.main} style={styles.addButtonIcon} />}
            onClick={handleAddButtonClick}
            styles={{
              container: [styles.addButtonContainer, props.addButtonProps.containerStyle],
              title: [styles.addButtonTitle, props.addButtonProps.titleStyle],
            }}
          />
        )}
        {renderRadioButtonList()}
      </View>
      </ScrollView> 
    );
  };

  const renderBottomSheet = () => (
    <IMBottomSheet
      id={`${props.testId}-IMSinglePicker-IMBottomSheet`}
      open={showBottomSheet}
      title={props.bottomSheetHeader ?? `${t('select')} ${props.label}`}
      onClose={toggleShowBottomSheet}
      enableBackDropDismiss
      styles={{ contentArea: styles.bottomSheetContentArea, container: styles.bottomSheetDefaultContainer }}
    >
      {renderBottomSheetBody()}
    </IMBottomSheet>
  );

  return (
    <View testID={`${props.testId}-IMSinglePicker`} accessibilityLabel={`${props.testId}-IMSinglePicker`}>
      <IMBasePicker
        testId={`${props.testId}-IMSinglePicker`}
        label={props.label}
        value={getLabel()}
        onPickerClick={handleDropdownClick}
        placeholder={props.placeholder}
        startAdornment={props.startAdornment}
        showPickerOptions={showBottomSheet}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
        errorText={props.errorText}
        helperText={props.helperText}
        required={props.required}
        styles={props.styles}
      />
      {renderBottomSheet()}
    </View>
  );
};
export default IMSinglePicker;
