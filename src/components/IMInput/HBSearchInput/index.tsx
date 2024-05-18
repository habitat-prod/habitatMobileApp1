import React, { useEffect } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { debounce } from 'lodash';

import useToggle from '../../../customHooks/useToggle';
import Close from '../../../assets/svg/Close';
import Search from '../../../assets/svg/Search';
import IMBaseInput from '../HBBaseInput';
import useStyles from './styles';

interface IStyleProps {
  searchBarWrapper?: StyleProp<ViewStyle>;
  searchContainerStyle?: ViewStyle;
}

interface ISearchBarProps {
  testId: string;
  name: string;
  label: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch?: (val: string) => void;
  delayInMilliSeconds?: number;
  iconSize?: number;
  minLength?: number;
  hideLabel?: boolean;
  placeholder?: string;
  errorText?: string;
  styles?: IStyleProps;
}

const IMSearchInput: React.FunctionComponent<ISearchBarProps> = (props: ISearchBarProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const [isActive, toggleIsActive] = useToggle(false);

  const debouncedSearch = debounce((value) => {
    if (isActive && (props.searchValue.length === 0 || props.searchValue.length >= 3)) props.onSearch?.(value);
  }, props.delayInMilliSeconds ?? 250);

  const onChangeText = (fieldName: string, val?: string) => {
    props.setSearchValue(val || '');
  };

  const onClearSearch = () => {
    props.setSearchValue('');
  };

  useEffect(() => {
    debouncedSearch(props.searchValue);
    return () => {
      debouncedSearch.cancel();
    };
  }, [props.searchValue]);

  return (
    <IMBaseInput
      testId={props.testId}
      value={props.searchValue}
      name={props.name}
      onChange={onChangeText}
      numberOfLines={1}
      onFocus={toggleIsActive}
      onBlur={toggleIsActive}
      placeholder={props.placeholder}
      hideLabel={props.hideLabel}
      style={{
        container: [styles.searchContainer, props.styles?.searchContainerStyle],
        rootContainer: [styles.wrapper, props.styles?.searchBarWrapper],
      }}
      label={props.label}
      startAdornment={<Search style={styles.searchImg} />}
      endAdornment={
        !!props.searchValue && (
          <TouchableOpacity onPress={onClearSearch}>
            <Close style={styles.searchImg} />
          </TouchableOpacity>
        )
      }
      errorText={props.errorText}
    />
  );
};

export default IMSearchInput;
