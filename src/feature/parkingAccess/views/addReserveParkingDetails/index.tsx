import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFormik } from 'formik';

import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMButton from '../../../../components/IMButton';
import IMTextInput from '../../../../components/IMInput/IMTextInput';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import { addReserveParkingDetailsSchema } from './helper';
import { ParkingAreaList } from '../../navigation';
import useStyles from './styles';

interface IAddReserveParkingDetails {
  navigation: StackNavigationProp<ParkingAreaList>;
  route: RouteProp<ParkingAreaList, MaintainanceAreasScreens.AddReserveParkingDetails>;
}

const AddReserveParkingDetails: React.FC<IAddReserveParkingDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const routeParams = props.route.params;
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const formikData = useFormik({
    validateOnMount: true,
    initialValues: {
      name: '',
      flatNumber: '',
      parkingSpot: '',
      vehicleNumber: '',
    },
    validationSchema: addReserveParkingDetailsSchema,
    onSubmit: (values) => { },
  });

  const handleSaveBtn = () => {
    defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
      screen: MaintainanceAreasScreens.ReservedConfirmation,
      params: {
        selectedSlot: routeParams.selectedSlot,
      },
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}>My Parking</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../../assets/png/parking.png')}
          style={styles.imageContainer}
        />
        <View style={styles.miniContainer}>

          <Text style={styles.textStyle}>Name</Text>
          <IMTextInput
            testId="name"
            label=""
            name="name"
            type="non-masked"
            value={formikData.values.name}
            onFocus={formikData.setFieldTouched}
            onChange={formikData.setFieldValue}
            errorText={formikData.touched.name ? formikData.errors.name : ''}
            style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
          />
          <Text style={styles.paddingTextStyle}>Flat number</Text>
          <IMTextInput
            testId="flat number"
            label=""
            name="flatNumber"
            type="non-masked"
            value={formikData.values.flatNumber}
            onFocus={formikData.setFieldTouched}
            onChange={formikData.setFieldValue}
            errorText={formikData.touched.flatNumber ? formikData.errors.flatNumber : ''}
            style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
          />
          <Text style={styles.paddingTextStyle}>Parking spot</Text>
          <IMTextInput
            testId="parking spot"
            label=""
            name="parkingSpot"
            type="non-masked"
            disabled
            value={routeParams.selectedSlot}
            onFocus={formikData.setFieldTouched}
            onChange={formikData.setFieldValue}
            errorText={formikData.touched.parkingSpot ? formikData.errors.parkingSpot : ''}
            style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
          />
          <Text style={styles.paddingTextStyle}>Vehicle number</Text>
          <IMTextInput
            testId="vehicle number"
            label=""
            name="vehicleNumber"
            type="non-masked"
            value={formikData.values.vehicleNumber}
            onFocus={formikData.setFieldTouched}
            onChange={formikData.setFieldValue}
            errorText={formikData.touched.vehicleNumber ? formikData.errors.vehicleNumber : ''}
            style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
          />
        </View>

      </ScrollView>
      <IMButton
        id="save"
        title='Save'
        disabled={!formikData.isValid}
        onClick={handleSaveBtn}
        styles={{ container: styles.btnContainer, title: styles.btnTitle }}
      />
    </SafeAreaView>
  );
};

export default AddReserveParkingDetails;
