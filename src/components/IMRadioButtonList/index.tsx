import React from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMPagedFlatList from '../IMPagedFlatList';
import IMRadioButton, { IMRadioButtonProps } from '../IMRadioButton';
import useStyles from './styles';

interface IStyleProps {
  container?: StyleProp<ViewStyle>;
  contentContainer?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  helperText?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
}
interface IMRadioButtonListProps {
  id: string;
  name: string;
  data: Array<IMRadioButtonProps>;
  onChange: (value: any, index?: number) => void;
  title?: string;
  selectedIndex?: number;
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

const IMRadioButtonList: React.FC<IMRadioButtonListProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const onChange = (name: string, selected: boolean, index?: number) => {
    props.onChange?.(props.name, index);
  };

  const renderRadioButtonItem = (data: { item: IMRadioButtonProps; index: number }) => (
    <IMRadioButton
      id={`${data.item.id}_item_${data.index}`}
      name={data.item.name}
      key={`${data.item.id}_item_${data.index}`}
      isSelected={data.index === props.selectedIndex || data.item.isSelected}
      label={data.item.label}
      title={data.item.title}
      style={data.item.style}
      index={data.index}
      onChange={onChange}
      isDisabled={props.disabled || data.item.isDisabled}
    >
      {data.item.children}
    </IMRadioButton>
  );

  const renderHeaderComponent = () => (
    <>{!!props.title && <Text style={[styles.radioButtonTitle, props.styles?.titleStyle]}>{props.title} </Text>}</>
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
      renderItem={renderRadioButtonItem}
      headerComponent={renderHeaderComponent()}
      listFooterComponent={renderFooterComponent()}
      listEmptyComponent={props.listEmptyComponent}
      isLoading={props.isLoading}
      isError={props.isError}
      hasNext={props.hasNext}
      onEndReached={props.handleEndReached}
      onRefresh={props.handleRefresh}
      useScrollToTopButton
      horizontal={props.showHorizontal}
      styles={{
        containerStyle: [styles.container, props.styles?.container],
        contentContainerStyle: props.styles?.contentContainer,
      }}
    />
  );
};

export default IMRadioButtonList;
