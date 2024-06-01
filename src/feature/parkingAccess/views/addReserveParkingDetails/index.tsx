import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMButton from '../../../../components/IMButton';
import IMTextInput from '../../../../components/IMInput/IMTextInput';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import useStyles from './styles';

const AddReserveParkingDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleSaveBtn = () => {
    defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
      screen: MaintainanceAreasScreens.ReservedConfirmation,
      params: {},
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}>My Parking</Text>
      </View>
      <Image
        source={require('../../../../assets/png/parking.png')}
        style={styles.imageContainer}
      />
      <ScrollView contentContainerStyle={{ display: 'flex', padding: 16, gap: 10 }}>
        <Text style={styles.textStyle}>Name</Text>
        <IMTextInput
          testId="name"
          label=""
          name="customerName"
          type="non-masked"
          value=""
          // onFocus={formikData.setFieldTouched}
          // onChange={formikData.setFieldValue}
          // errorText={formikData.touched.customerName ? formikData.errors.customerName : ''}
          style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
        />
        <Text style={styles.paddingTextStyle}>Flat number</Text>
        <IMTextInput
          testId="flat number"
          label=""
          name="customerName"
          type="non-masked"
          value=""
          // onFocus={formikData.setFieldTouched}
          // onChange={formikData.setFieldValue}
          // errorText={formikData.touched.customerName ? formikData.errors.customerName : ''}
          style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
        />
        <Text style={styles.paddingTextStyle}>Parking spot</Text>
        <IMTextInput
          testId="parking spot"
          label=""
          name="customerName"
          type="non-masked"
          value=""
          // onFocus={formikData.setFieldTouched}
          // onChange={formikData.setFieldValue}
          // errorText={formikData.touched.customerName ? formikData.errors.customerName : ''}
          style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
        />
        <Text style={styles.paddingTextStyle}>Vehicle number</Text>
        <IMTextInput
          testId="vehicle number"
          label=""
          name="customerName"
          type="non-masked"
          value=""
          // onFocus={formikData.setFieldTouched}
          // onChange={formikData.setFieldValue}
          // errorText={formikData.touched.customerName ? formikData.errors.customerName : ''}
          style={{ container: styles.inputStyle, labelContainer: styles.labelContainer }}
        />
      </ScrollView>
      <IMButton
        id="save"
        title='Save'
        onClick={handleSaveBtn}
        styles={{ container: styles.btnContainer, title: styles.btnTitle }}
      />
    </SafeAreaView>
  );
};

export default AddReserveParkingDetails;
