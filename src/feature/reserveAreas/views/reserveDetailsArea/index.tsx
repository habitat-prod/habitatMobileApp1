import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs from 'dayjs';

import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { ReserveCommonAreaList } from '../../navigation';
import { MaintainanceAreasScreens } from '../../../../constants/screens';
import { Calendar } from 'react-native-calendars';
import AddFilled from '../../../../assets/svgv1/AddFilled';
import MinusFilled from '../../../../assets/svgv1/MinusFilled';
import useStyles from './styles';

export interface IMaintainanceCardDetails {
  navigation: StackNavigationProp<ReserveCommonAreaList>;
  route: RouteProp<ReserveCommonAreaList, MaintainanceAreasScreens.ReserveDetailsArea>;
}

const ReserveDetailsArea: React.FC<IMaintainanceCardDetails> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const initDate = dayjs().format('YYYY-MM-DD');
  const [selected, setSelected] = useState(initDate);
  const [time, setTime] = useState(30);

  const incrementTime = () => {
    if (time < 180) {
      setTime(time + 30);
    }
  };

  const decrementTime = () => {
    if (time > 30) {
      setTime(time - 30);
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    let formattedTime = '';

    if (hours > 0) {
      formattedTime += `${hours} hr${hours > 1 ? 's' : ''} `;
    }
    if (mins > 0) {
      formattedTime += `${mins} min`;
    }

    return formattedTime.trim();
  };

  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: '#73D7FF',
      selectedTextColor: 'black',
    }
  }), [selected]);

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
      <View style={styles.scrollviewContainer}>
        <Calendar
          initialDate={initDate}
          markedDates={marked}
          minDate={dayjs().format('YYYY-MM-DD')}
          maxDate={dayjs().day(15).format('YYYY-MM-DD')}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
        />
        <View style={styles.miniContainer}>
          <Text style={styles.durationText}>Time</Text>
          <View style={styles.durationContainer}>
            <Text style={styles.timeText}>{"06:00 AM"}</Text>
          </View>
        </View>
        <View style={styles.miniContainer}>
          <Text style={styles.durationText}>Duration</Text>
          <View style={styles.durationContainer}>
            <IMIcon
              testId={''}
              onClick={decrementTime}
              color={time === 30 ? "#D3D3D3" : "black"}
              iconSvg={<MinusFilled />}
              disabled={time === 30}
              iconStyle={styles.iconStyle}
              containerStyle={[styles.iconContainerStyle, time === 30 && styles.disabledIconContainerStyle]}
            />
            <Text style={styles.timeText}>{formatTime(time)}</Text>
            <IMIcon
              testId={''}
              onClick={incrementTime}
              color={time === 180 ? "#D3D3D3" : "black"}
              disabled={time === 180}
              iconSvg={<AddFilled />}
              containerStyle={[styles.iconContainerStyle, time === 180 && styles.disabledIconContainerStyle]}
              iconStyle={styles.iconStyle}

            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReserveDetailsArea;
