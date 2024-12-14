import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMButton from '../../../../components/IMButton';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import CarOutlined from '../../../../assets/svg/CarOutline';
import IMPagedFlatList from '../../../../components/IMPagedFlatList';
import RightTick from '../../../../assets/svg/RightTick';
import useStyles from './styles';

interface ICarParking {
  slotName: string;
  status: 'available' | 'parked' | 'selected' | 'reserved';
}

const renderCarParking: Array<ICarParking> = [
  {
    slotName: 'A01',
    status: 'available',
  },
  {
    slotName: 'A02',
    status: 'parked'
  },
  {
    slotName: 'A03',
    status: 'reserved',
  },
  {
    slotName: 'A04',
    status: 'parked'
  },
  {
    slotName: 'A05',
    status: 'available',
  },
  {
    slotName: 'A06',
    status: 'reserved'
  },
  {
    slotName: 'A07',
    status: 'parked',
  },
  {
    slotName: 'A08',
    status: 'parked'
  },
  {
    slotName: 'A09',
    status: 'reserved',
  },
  {
    slotName: 'A10',
    status: 'parked'
  },
  {
    slotName: 'A11',
    status: 'parked',
  },
  {
    slotName: 'A12',
    status: 'reserved'
  },
  {
    slotName: 'A13',
    status: 'available',
  },
  {
    slotName: 'A14',
    status: 'parked'
  },
]

const ParkingAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleReserveParking = () => {
    defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
      screen: MaintainanceAreasScreens.AddReserveParkingDetails,
      params: {
        selectedSlot: selectedSlot
      },
    })
  };

  const renderItem = ({ item, index }: { item: ICarParking; index: number }) => {
    return (
      <View style={[styles.itemContainer, index % 2 === 0 ? styles.leftContainer : styles.rightContainer]}>
        {item.status === 'parked' ?
          (
            <CarOutlined />
          )
          : (
            <IMButton
              id="slotButton"
              variant='outlined'
              onClick={() => setSelectedSlot(item.slotName)}
              disabled={item.status === 'reserved'}
              rightIcon={selectedSlot === item.slotName ? <IMIcon testId='Correct' iconSvg={<RightTick />} color='white' iconStyle={styles.rightIcon} /> : <></>}
              title={`${item.slotName}`}
              styles={{
                container: [selectedSlot === item.slotName
                  ? styles.selectedSlot : item.status === 'reserved'
                    ? styles.reservedSlot : styles.availableSlot,
                ],
                title: styles.btnText,
              }}
            />
          )}
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconTitleContainer}>
          <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black',marginStart:1}}> Live guest parking</Text>
        </View>
        <IMButton
          id='reserve'
          variant='contained'
          title='Reserve parking'
          onClick={handleReserveParking}
          disabled={!selectedSlot}
          styles={{ container: styles.btnContainer, title: styles.btnTitle }}
        />
      </View>
      <IMPagedFlatList
        listData={renderCarParking}
        renderItem={renderItem}
        styles={{ contentContainerStyle: styles.flatListContainer }}
      />
    </SafeAreaView>
  );
};

export default ParkingAreaDetails;
