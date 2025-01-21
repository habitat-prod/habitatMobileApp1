import React, { useEffect, useId, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from 'react-native';
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
import axios from '../../../../../utils/axios';
import { maintenanceReportService } from 'src/feature/maintaineceAreas/service/maintenanceReportService';

const locationOfTowerDropdownList = [
  { label: 'Location of tower', value: 'location' },
  { label: 'Keshav Vyas', value: 'keshav' },
];

const locationOfFloorDropdownList = [
  { label: 'Location of floor', value: 'floor' },
  { label: 'Shreyas', value: 'location' },
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
  const response = useSelector((state:RootState)=>state.amenityProblemReducer);
  const dispatch = useDispatch();
  const [societyId, setSocietyId] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [amenityId, setAmenityId] = useState<number>(props.route.params.amenityId);
  const locationList = useSelector((state:RootState)=> state.maintenanceReducer.data);
  const {error, isLoading, isSuccess} = useSelector((state:RootState)=> state.maintenanceReportReducer);

  // here i'm checking the valid list to map the data
  const problemDropdownList = response?.data?.data?.length? response.data.data.map((item:any) => ({
    label: item.problemName, 
    value: item.id,
  }))
  :
  [];

  const filteredLocations = locationList.filter((location)=>{
    return location.amenityId===amenityId;
  }); 
  
    // console.log(`FILTERED LOCATION LIST IS:=> ${JSON.stringify(filteredLocations)}`);
    const locationDropdownList = filteredLocations.map((location) => ({
      label: location.locationName, // Use locationName for the label
      value: location.id,          // Use id for the value
    }));

  useEffect(()=>{
    const fetchData = async()=>{
      const societyId = await AsyncStorage.getItem('societyId');
      const userId = await AsyncStorage.getItem('userId');
      setSocietyId(Number(societyId));
      setUserId(Number(userId));
    }
    fetchData();
    // console.log(`GETTING THE DATA FROM SCREEN =>  ${JSON.stringify(response.data.data)}`);
    // console.log(`GETTING THE LOCATION LIST FROM REDUCER:=> ${JSON.stringify(locationList)}`);
    // console.log(`props.route.params data is: => ${JSON.stringify(props.route.params.amenityId)}`);
  }, []);

  useEffect(()=>{
    if(isSuccess){
      console.log('Data posted successfully!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      Alert.alert('Succeed','Maintenance reported successfully.',
        [
          {
            text: 'OK',
            onPress: () => {
              props.navigation.goBack();
              dispatch({ type: 'RESET_SUCCESS' });
            },
          },
        ],
        {cancelable:false}
      );
    }
  },[isSuccess]);

  useEffect(()=>{
    if(error){
      Alert.alert('Error', 'Something went wrong!');
    }
  },[error]);
  

  const formikData = useFormik({
    initialValues: {
      location: {} as IPickerOption,
      problem: {} as IPickerOption,
      remarks: '',
    },
    validationSchema: MaintainanceListDetailsValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        societyId,
        description: values.remarks,
        societyAmenityId: amenityId,
        userId,
        problemId: values.problem.value,
      };
      // console.log(`data sending payLoad: ${JSON.stringify(payload)}`)
      // dispatch(maintenanceReport(payload)); // while calling this action apk is crashing.
    try {
      const response = await axios.post('/api/maintenance/register', payload);
      // console.log("API Response:", response);
      dispatch({ type: 'MAINTENANCE_REPORT_SUCCESS', payload: response.data });
   } catch (error) {
      console.error("API Error:", error.message);
      dispatch({ type: 'MAINTENANCE_REPORT_FAILURE', payload: { error: error.message } });
   }
    },
  });
  
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
      {isLoading && <ActivityIndicator size={'large'}/>}
      <IMButton
        id="send-request"
        title='Send request'
        disabled={!formikData.isValid}
        onClick={()=> formikData.handleSubmit()}
        styles={{ container: styles.btnContainer }}
      />
    </SafeAreaView>
  );
};

export default MaintainanceListDetails;
