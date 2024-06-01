import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon
          testId='icon'
          onClick={defaultNavigation.goBack}
          size='medium'
          iconSvg={<ArrowBackFilled style={styles.iconSvg} />}
        />
        <Text style={styles.titleContainer}>{props.route.params.title}</Text>
      </View>
      <Image
        source={require('../../../../../assets/png/reserveCommonAreas.png')}
        style={styles.imageContainer}
      />
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
    </SafeAreaView>
  );
};

export default MaintainanceCardDetails;
