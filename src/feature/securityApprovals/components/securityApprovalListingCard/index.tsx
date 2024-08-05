/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

import Close from '../../../../assets/svgv1/Close';
import IMIcon from '../../../../components/IMIcon';
import Correct from '../../../../assets/svgv1/Correct';
import useStyles from './styles';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from '../../../../reducers/rootReducer';
// import {fetchBooks} from '../../../../actions/userActions';

interface ISecurityApprovalListingCardProps {
  title: string;
  imageUri: string;
  onReject: () => void;
  onApprove: () => void;
  selectedTab: string;
}

const SecurityApprovalListingCard: React.FC<
  ISecurityApprovalListingCardProps
> = props => {
  const theme = useTheme();
  const styles = useStyles(theme);

  // const dispatch = useDispatch();
  // const books = useSelector((state: RootState) => state.user.books);
  // useEffect(() => {
  //   if (books.length === 0) {
  //     dispatch(fetchBooks());
  //   }
  // }, [dispatch, books.length]);

  // const firstBook = books[0];
  // // console.log('First book:', firstBook);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/png/reserveCommonAreas.png')}
        style={styles.imageContainer}
      />
      <Text style={styles.textStyle}>{props.title}</Text>
      {props.selectedTab === 'Pending' && (
        <View style={styles.iconContainer}>
          <IMIcon testId="Close" iconSvg={<Close />} onClick={props.onReject} />
          <IMIcon
            testId="Correct"
            iconSvg={<Correct />}
            onClick={props.onApprove}
          />
        </View>
      )}
    </View>
  );
};

export default SecurityApprovalListingCard;
