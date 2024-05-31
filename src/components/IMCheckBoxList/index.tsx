import React, { FunctionComponent } from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMCheckbox, { IStyleProps as ICheckBoxStyleProps } from '../IMCheckBox';
import IMPagedFlatList from '../IMPagedFlatList';
import useStyles from './styles';

interface IStyleProps {
  checkBoxListContainer?: ViewStyle;
  checkBoxListContentContainer?: ViewStyle;
  title?: TextStyle;
  helperText?: TextStyle;
  errorText?: TextStyle;
  checkBoxStyles?: ICheckBoxStyleProps;
}

export interface ICheckBoxListData {
  id: string;
  isSelected: boolean;
  index: number;
  name: string;
  label?: string;
  subLabel?: string;
  title?: string;
  isDisabled?: boolean;
}

interface IMCheckBoxListProps {
  id: string;
  name: string;
  data: Array<ICheckBoxListData>;
  onChange: (value: string, index: number) => void;
  title?: string;
  showHorizontal?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  hasNext?: boolean;
  listEmptyComponent?: JSX.Element;
  handleEndReached?: () => void;
  handleRefresh?: () => void;
  helperText?: string;
  errorText?: string;
  styles?: IStyleProps;
}

const IMCheckList: FunctionComponent<IMCheckBoxListProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const onChange = (name: string, selected: boolean, index: number) => {
    props.onChange?.(props.name, index);
  };

  const renderCheckBoxItem = (data: { item: ICheckBoxListData; index: number }) => {
    return (
      <IMCheckbox
        id={data.item.id}
        name={data.item.name}
        key={data.index}
        isSelected={data.item.isSelected}
        label={data.item.label}
        subLabel={data.item.subLabel}
        title={data.item.title}
        index={data.index}
        onChange={onChange}
        isDisabled={props.disabled || data.item.isDisabled}
        styles={props.styles?.checkBoxStyles}
      />
    );
  };

  const renderHeaderComponent = () => (
    <>{!!props.title && <Text style={[styles.title, props.styles?.title]}>{props.title} </Text>}</>
  );

  const renderFooterComponent = () => (
    <>
      {!!props.helperText && <Text style={[styles.helperText, props.styles?.helperText]}>{props.helperText} </Text>}
      {!!props.errorText && <Text style={[styles.errorText, props.styles?.errorText]}>{props.errorText} </Text>}
    </>
  );

  return (
    <IMPagedFlatList
      testId={props.id}
      uniqueKey={'id'}
      listData={props.data}
      renderItem={renderCheckBoxItem}
      headerComponent={renderHeaderComponent()}
      listFooterComponent={renderFooterComponent()}
      isLoading={props.isLoading}
      isError={props.isError}
      hasNext={props.hasNext}
      listEmptyComponent={props.listEmptyComponent}
      onEndReached={props.handleEndReached}
      onRefresh={props.handleRefresh}
      useScrollToTopButton
      horizontal={props.showHorizontal}
      styles={{
        containerStyle: [styles.defaultContainer, props.styles?.checkBoxListContainer],
        contentContainerStyle: props.styles?.checkBoxListContentContainer,
      }}
    />
  );
};
export default IMCheckList;
