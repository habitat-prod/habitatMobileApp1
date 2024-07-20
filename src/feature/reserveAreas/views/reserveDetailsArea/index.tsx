import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { ReserveCommonAreaList } from '../../navigation';
import { MaintainanceAreasScreens } from '../../../../constants/screens';
import useStyles from './styles';

export interface IMaintainanceCardDetails {
  navigation: StackNavigationProp<ReserveCommonAreaList>;
  route: RouteProp<ReserveCommonAreaList, MaintainanceAreasScreens.ReserveDetailsArea>;
}

const ReserveDetailsArea: React.FC<IMaintainanceCardDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

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
      {/* <Image
        source={require('../../../../assets/png/basketball.png')}
        style={styles.imageContainer}
      /> */}
       <IMIcon
        testId={''}
        disabled
        iconSvg={props.route.params.iconSvg}
        containerStyle={styles.imageContainer}
      />
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <Text style={styles.textStyle}>Component will be rendered soon.....</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveDetailsArea;
