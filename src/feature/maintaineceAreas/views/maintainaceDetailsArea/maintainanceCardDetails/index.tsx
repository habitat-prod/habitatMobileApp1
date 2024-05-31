import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import IMIcon from '../../../../../components/IMIcon';
import ArrowBackFilled from '../../../../../assets/svgv1/ArrowBackFilled';
import { HBStackParamList } from '../../../../../navigation/rootNavigation';
import { MaintainaceAreaList } from '../../../navigation';
import { MaintainanceAreasScreens } from '../../../../../constants/screens';
import useStyles from './styles';

export interface IMaintainanceCardDetails {
  navigation: StackNavigationProp<MaintainaceAreaList>;
  route: RouteProp<MaintainaceAreaList, MaintainanceAreasScreens.MaintainanceCardDetails>;
}

const MaintainanceCardDetails: React.FC<IMaintainanceCardDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const renderLabelPair = () => (
    <View style={styles.textContainer}>
      <Text style={styles.primaryText}> Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum </Text>
      <Text style={styles.secondaryText}>20th March 2024</Text>
    </View>
  );

  return (
    <View>
      <IMIcon
        testId='icon'
        onClick={defaultNavigation.goBack}
        size='large'
        iconSvg={<ArrowBackFilled style={styles.iconSvg} />}
        containerStyle={styles.iconContainer}
      />
      <Image
        source={{ uri: props.route.params.imageUrl }}
        style={styles.imageContainer}
      />
      <Text style={styles.titleContainer}>{props.route.params.title}</Text>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
        {renderLabelPair()}
      </ScrollView>
    </View>
  );
};

export default MaintainanceCardDetails;
