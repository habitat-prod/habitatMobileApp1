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
import { IMSinglePicker } from '../../../../../components/IMPicker';
import IMTextInput from '../../../../../components/IMInput/IMTextInput';
import IMButton from '../../../../../components/IMButton';
import useStyles from './styles';

const locationDropdownList = [
  { label: 'Location 1', value: 'location1' },
  { label: 'Location 2', value: 'location2', },
  { label: 'Location 3', value: 'location3', },
  { label: 'Location 4', value: 'location4', },
  { label: 'Location 5', value: 'location5', },
  { label: 'Location 6', value: 'location6', },
];

const locationOfTowerDropdownList = [
  { label: 'Location of tower', value: 'location' },
  { label: 'Keshav Vyas', value: 'keshav' },
];

const locationOfFloorDropdownList = [
  { label: 'Location of floor', value: 'floor' },
  { label: 'Shreyas', value: 'location' },
];

const problemDropdownList = [
  { label: 'Problem', value: 'problem' },
  { label: 'Vishwas', value: 'location' },
];

export interface IMaintainanceListDetails {
  navigation: StackNavigationProp<MaintainaceAreaList>;
  route: RouteProp<MaintainaceAreaList, MaintainanceAreasScreens.MaintainanceListDetails>;
}

const MaintainanceListDetails: React.FC<IMaintainanceListDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const routeParams = props.route.params.title;
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const showConditionalDropdownList = () => {
    if (routeParams === 'Stairs') return true;
    if (routeParams === 'Elevators') return true;
    if (routeParams === 'Waiting area') return true;
  }

  return (
    <SafeAreaView style={styles.container}>
      <IMIcon
        testId='icon'
        onClick={defaultNavigation.goBack}
        size='large'
        iconSvg={<ArrowBackFilled style={styles.iconSvg} />}
        containerStyle={styles.iconContainer}
      />
      <Image
        source={require('../../../../../assets/png/reserveCommonAreas.png')}
        style={styles.imageContainer}
      />
      <Text style={styles.titleContainer}>{props.route.params.title}</Text>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <IMSinglePicker
          testId="singlePicker"
          name="status"
          label=""
          bottomSheetHeader={showConditionalDropdownList() ? 'Select Location of tower' : 'Select Location'}
          pickerOptions={showConditionalDropdownList() ? locationOfTowerDropdownList : locationDropdownList}
          value={showConditionalDropdownList() ? locationOfTowerDropdownList[0] : locationDropdownList[0]}
          // onChange={formikData.setFieldValue}
          // onFocus={formikData.setFieldTouched}
          styles={{ pickerContainer: styles.pickerContainer }}
        // errorText={
        //   formikData.touched.status?.value && formikData.errors.status?.value ? t('deal:errorMessage.status') : ''
        // }
        />
        {showConditionalDropdownList() && (
          <IMSinglePicker
            testId="singlePicker"
            name="status"
            label=""
            bottomSheetHeader='Select Location of floor'
            pickerOptions={locationOfFloorDropdownList}
            value={locationOfFloorDropdownList[0]}
            // onChange={formikData.setFieldValue}
            // onFocus={formikData.setFieldTouched}
            styles={{ pickerContainer: styles.pickerContainer }}
          // errorText={
          //   formikData.touched.status?.value && formikData.errors.status?.value ? t('deal:errorMessage.status') : ''
          // }
          />
        )}
        <IMSinglePicker
          testId="singlePicker"
          name="status"
          bottomSheetHeader='Select Problem'
          label=""
          pickerOptions={problemDropdownList}
          value={problemDropdownList[0]}
          // onChange={formikData.setFieldValue}
          // onFocus={formikData.setFieldTouched}
          styles={{ pickerContainer: styles.pickerContainer }}
        // errorText={
        //   formikData.touched.status?.value && formikData.errors.status?.value ? t('deal:errorMessage.status') : ''
        // }
        />
        <Text style={styles.subtitleText}>You can also describe your problem?</Text>
        <IMTextInput
          testId="ihbCustomerDetails-customerName"
          label=""
          placeholder='What do you need the maintenance for?'
          name="customerName"
          type="non-masked"
          value=""
          // onFocus={formikData.setFieldTouched}
          // onChange={formikData.setFieldValue}
          // errorText={formikData.touched.customerName ? formikData.errors.customerName : ''}
          style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
        />
      </ScrollView>
      <IMButton id="send-request" title='Send request' styles={{ container: styles.btnContainer }} />
    </SafeAreaView>
  );
};

export default MaintainanceListDetails;
