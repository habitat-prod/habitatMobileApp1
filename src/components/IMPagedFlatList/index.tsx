import React, { FunctionComponent, useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { isEmpty } from 'lodash';
import { FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import ArrowUpwardOutlined from '../../assets/svg/ArrowUpwardOutlined';
import { defaultPageSize } from '../../constants/strings';
import IMButton from '../IMButton';
import IMErrorCard from '../IMErrorCard';
import IMLoader from '../IMLoader';
import useStyles from './styles';

interface IIMPagedFlatListStyleProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  activityIndicatorStyle?: StyleProp<ViewStyle>;
  scrollLoaderStyle?: StyleProp<ViewStyle>;
  refreshIconStyle?: StyleProp<ViewStyle>;
  scrollToTopButtonContainerStyle?: StyleProp<ViewStyle>;
  scrollToTopButtonTextStyle?: StyleProp<ViewStyle>;
}

interface IIMPagedFlatListProps {
  listData: Array<Record<string, any>>;
  renderItem: ListRenderItem<any>;
  isLoading?: boolean;
  isError?: boolean;
  hasNext?: boolean;
  headerComponent?: JSX.Element;
  listEmptyComponent?: JSX.Element;
  listFooterComponent?: JSX.Element;
  onRefresh?: () => void;
  onEndReached?: () => void;
  backToTopButtonText?: string;
  maxToRenderPerBatch?: number;
  initialNumToRender?: number;
  onEndReachedThreshold?: number;
  viewAreaCoveragePercentThreshold?: number;
  scrollToTopButtonVisibiliyThreshold?: number;
  windowSize?: number;
  uniqueKey?: string;
  useScrollToTopButton?: boolean;
  horizontal?: boolean;
  testId?: string;
  styles?: IIMPagedFlatListStyleProps;
}

const IMPagedFlatList: FunctionComponent<IIMPagedFlatListProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const testId = props.testId || 'IMPagedFlatList';

  const refreshing = false;
  const scrollToTopButtonVisibiliyThreshold = props.scrollToTopButtonVisibiliyThreshold ?? 7;
  const [scrollToTopButtonVisible, setShowScrollToTopButton] = useState(false);

  const [pagedFlatListRef, setPagedFlatListRef] = useState<FlatList<Record<string, any>> | null>();
  const onViewRef = React.useRef(
    (viewableItems: any) =>
      viewableItems.changed[0].isViewable &&
      setShowScrollToTopButton(viewableItems.changed[0].index > scrollToTopButtonVisibiliyThreshold),
  );

  useFocusEffect(
    useCallback(() => {
      return () => setShowScrollToTopButton(false);
    }, [props.listData]),
  );

  const goToTop = () => {
    pagedFlatListRef?.scrollToIndex({ animated: true, index: 0 });
  };

  const handleEndReached = () => {
    if (!props.isLoading && !props.isError && props.hasNext) {
      props.onEndReached?.();
    }
  };

  const renderFooter = () =>
    props.isLoading ? (
      <IMLoader loaderStyle={[styles.loaderStyle, props.styles?.scrollLoaderStyle]} />
    ) : props.isError && !isEmpty(props.listData) ? (
      <IMErrorCard
        id={testId}
        errorMessageText="Something went wrong. Please try again."
        buttonProps={props.onEndReached && { onButtonPress: props.onEndReached }}
      />
    ) : (
      props.listFooterComponent
    );

  return (
    <View testID={testId} accessibilityLabel={testId} style={[styles.container, props.styles?.containerStyle]}>
      <FlatList
        data={props.listData}
        renderItem={props.renderItem}
        ref={setPagedFlatListRef}
        keyExtractor={(item, index) => (props.uniqueKey ? item[props.uniqueKey] : `${index}`)}
        maxToRenderPerBatch={props.maxToRenderPerBatch ?? defaultPageSize}
        initialNumToRender={props.initialNumToRender ?? defaultPageSize}
        refreshing={refreshing}
        removeClippedSubviews={false}
        bounces={false}
        windowSize={props.windowSize ?? 41}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: props.viewAreaCoveragePercentThreshold ?? 95,
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={props.onEndReachedThreshold ?? 0.2}
        onRefresh={props.onRefresh}
        ListHeaderComponent={props.headerComponent}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={props.listEmptyComponent}
        horizontal={props.horizontal}
        contentContainerStyle={props.styles?.contentContainerStyle}
      />
      {props.useScrollToTopButton && scrollToTopButtonVisible && (
        <IMButton
          id={`${testId}BackToTopBtn`}
          onClick={goToTop}
          size="xLarge"
          styles={{
            container: [styles.scrollToTopContainerStyle, props.styles?.scrollToTopButtonContainerStyle],
            title: [styles.scrollToTopTextStyle, props.styles?.scrollToTopButtonTextStyle],
          }}
          title={props.backToTopButtonText || 'Back to Top'}
          leftIcon={<ArrowUpwardOutlined style={styles.scrollToTopIconStyle} color={theme.Palette.background} />}
        />
      )}
    </View>
  );
};

export default IMPagedFlatList;
