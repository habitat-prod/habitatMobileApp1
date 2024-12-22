import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik';;
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../../components/IMIcon';
import ArrowBackFilled from '../../../../../assets/svgv1/ArrowBackFilled';
import { HBStackParamList } from '../../../../../navigation/rootNavigation';
import { MaintainaceAreaList } from '../../../navigation';
import { MaintainanceAreasScreens } from '../../../../../constants/screens';
import { IMSinglePicker, IPickerOption } from '../../../../../components/IMPicker';
import IMTextInput from '../../../../../components/IMInput/IMTextInput';
import IMButton from '../../../../../components/IMButton';
import MaintainanceListDetailsValidationSchema from './helper';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store/configureStore';
import { Toaster } from '../../../../../../src/utils/common';
import { maintenanceReport } from '../../../actions/maintenanceReportAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const locationDropdownList = [ // here i would need to replace it with dynamic locationList
  { label: 'Location', value: 'location1' },
  { label: 'Location 2', value: 'location2', },
  { label: 'Location 3', value: 'location3', },
  { label: 'Location 4', value: 'location4', },
  { label: 'Location 5', value: 'location5', },
  { label: 'Location 6', value: 'location6', },
  { label: 'Location 7', value: 'location7', },
  { label: 'Location 8', value: 'location8', },
];

const locationOfTowerDropdownList = [
  { label: 'Location of tower', value: 'location' },
  { label: 'Keshav Vyas', value: 'keshav' },
];

const locationOfFloorDropdownList = [
  { label: 'Location of floor', value: 'floor' },
  { label: 'Shreyas', value: 'location' },
];

// const problemDropdownList = [// here i need to replace it with dynamic problemList by amenityId.
//   { label: 'Problem', value: 'problem' },
//   { label: 'Vishwas', value: 'location' },
// ];
  

export interface IMaintainanceListDetails {
  navigation: StackNavigationProp<MaintainaceAreaList>;
  route: RouteProp<MaintainaceAreaList, MaintainanceAreasScreens.MaintainanceListDetails>;
}

const MaintainanceListDetails: React.FC<IMaintainanceListDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const routeParams = props.route.params.title;
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
  const response = useSelector((state:RootState)=>state.amenityProblemReducer);
  const dispatch = useDispatch();
  const [problemId,setProblemId] = useState<number>(0);
  const [societyId, setSocietyId] = useState<number>(0);
  const [staffId, setStaffId] = useState<number>(0);
  const [managerId, setManagerId] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [amenityId, setAmenityId] = useState<number>(0);

  // here i'm checking the valid list to map the data
  const problemDropdownList = response?.data?.data?.length? response.data.data.map((item:any) => ({
    label: item.problemName, 
    value: item.id,
  }))
  :
  [];

  useEffect(()=>{
    const fetchData = async()=>{
      const societyId = await AsyncStorage.getItem('societyId');
      const userId = await AsyncStorage.getItem('userId');
      setSocietyId(Number(societyId));
      setUserId(Number(userId));
      const firstElementAmenityId = await response?.data?.data?.[0]?.amenityId;
      console.log(`---------------------${firstElementAmenityId}-------------------------`);
      setAmenityId(firstElementAmenityId);
    }
    fetchData();
    console.log(`GETTING THE DATA FROM SCREEN =>  ${JSON.stringify(response.data.data)}`);
  }, [2000]);
  

  const formikData = useFormik({
    initialValues: {
      location: {} as IPickerOption,
      locationOfTower: {} as IPickerOption,
      locationOfFloor: {} as IPickerOption,
      problem: {} as IPickerOption,
      remarks: '',
    },
    validationSchema: MaintainanceListDetailsValidationSchema,
    validateOnMount: true,
    onSubmit: (values) => {()=>{
      //TODO: will do the api call here
      console.log('BTN PRESSED;;;;;');

      Toaster('Api needs to be called here..',5000);
    }
  },
  });
//         status: status,
//         s3PathProblem :s3PathProblem,
//         societyId: societyId,
//         societyAmenityId: societyAmenityId,
//         problemId: problemId,
//         managerId: managerId,
//         staffId: staffId,
//         userId: userId,
  const handleSubmit = async() =>{
    const apiCall = await dispatch(
      maintenanceReport({
        status: true,
        s3PathProblem: 'https://newMaintenanceProblem.com',
        societyId: societyId,
        societyAmenityId: amenityId,
        problemId: problemId,
        managerId: managerId,
        staffId: staffId,
        userId: userId,
      })
    );
    console.log(`api calling in screen: ${JSON.stringify(apiCall)}`);
  }

  const showConditionalDropdownList = () => {
    if (routeParams === 'Stairs') return true;
    if (routeParams === 'Elevators') return true;
    if (routeParams === 'Waiting area') return true;
  }

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
        source={require('../../../../../assets/png/reserveCommonAreas.png')}
        style={styles.imageContainer}
      /> */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollviewContainer}>
        <IMIcon
          testId={''}
          disabled
          iconSvg={props.route.params.iconSvg}
          containerStyle={styles.imageContainer}
        />
        {!showConditionalDropdownList() && (
          <IMSinglePicker
            testId="singlePicker"
            name="location"
            label=""
            placeholder='Location'
            bottomSheetHeader={'Select Location'}
            pickerOptions={locationDropdownList}
            value={formikData.values.location}
            onChange={formikData.setFieldValue}
            onFocus={formikData.setFieldTouched}
            styles={{ pickerContainer: styles.pickerContainer }}
            errorText={
              formikData.touched.location?.value ? formikData.errors.location?.value : ''
            }
          />
        )}
        {showConditionalDropdownList() && (
          <IMSinglePicker
            testId="singlePicker"
            name="locationOfTower"
            label=""
            bottomSheetHeader={'Select Location of tower'}
            placeholder='Location of tower'
            pickerOptions={locationOfTowerDropdownList}
            value={formikData.values.locationOfTower}
            onChange={formikData.setFieldValue}
            onFocus={formikData.setFieldTouched}
            styles={{ pickerContainer: styles.pickerContainer }}
            errorText={
              formikData.touched.locationOfTower?.value ? formikData.errors.locationOfTower?.value : ''
            }
          />
        )}
        {showConditionalDropdownList() && (
          <IMSinglePicker
            testId="singlePicker"
            name="locationOfFloor"
            placeholder='Location of floor'
            label=""
            bottomSheetHeader='Select Location of floor'
            pickerOptions={locationOfFloorDropdownList}
            value={formikData.values.locationOfFloor}
            onChange={formikData.setFieldValue}
            onFocus={formikData.setFieldTouched}
            styles={{ pickerContainer: styles.pickerContainer }}
            errorText={
              formikData.touched.locationOfFloor?.value ? formikData.errors.locationOfFloor?.value : ''
            }
          />
        )}
        <IMSinglePicker
          testId="singlePicker"
          name="problem"
          bottomSheetHeader='Select Problem'
          placeholder='Problem'
          label=""
          pickerOptions={problemDropdownList}
          value={formikData.values.problem}
          onChange={formikData.setFieldValue}
          onFocus={formikData.setFieldTouched}
          styles={{ pickerContainer: styles.pickerContainer }}
          errorText={
            formikData.touched.problem?.value ? formikData.errors.problem?.value : ''
          }
        />
        <Text style={styles.subtitleText}>You can also describe your problem?</Text>
        <IMTextInput
          testId="ihbCustomerDetails-customerName"
          label="Remarks"
          placeholder='What do you need the maintenance for?'
          name="remarks"
          type="non-masked"
          multiline
          value={formikData.values.remarks}
          onFocus={formikData.setFieldTouched}
          onChange={formikData.setFieldValue}
          errorText={formikData.touched.remarks ? formikData.errors.remarks : ''}
          style={{ container: styles.inputStyle }}
        />
      </ScrollView>
      <IMButton
        id="send-request"
        title='Send request'
        disabled={!formikData.isValid}
        onClick={()=> handleSubmit()}
        styles={{ container: styles.btnContainer }}
      />
    </SafeAreaView>
  );
};

export default MaintainanceListDetails;
